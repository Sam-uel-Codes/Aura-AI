import React, { useState } from "react";
import { Sparkles, FileText } from "lucide-react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useAuth } from "@clerk/clerk-react";
import ReactMarkdown from "react-markdown";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const ReviewResume = () => {
  const [input, setInput] = useState(null);
  const [fileName, setFileName] = useState("No file chosen");
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");

  const { getToken } = useAuth();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setInput(selectedFile);
    if (selectedFile) {
      setFileName(selectedFile.name);
    } else {
      setFileName("No file chosen");
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!input) {
      toast.error("Please select a resume file first");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("resume", input);

      const { data } = await axios.post("/api/ai/review-resume", formData, {
        headers: {
          Authorization: `Bearer ${await getToken()}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (data.success) {
        setContent(data.content);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message || "An error occurred during review");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700">
      {/* Left Col (Form) */}
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200"
      >
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 text-green-700" />
          <h1 className="text-xl font-semibold">Resume Review</h1>
        </div>

        <p className="mt-6 text-sm font-medium mb-2">Upload Resume</p>
        <div className="flex items-center gap-2">
          <label className="px-4 py-2 text-sm bg-gray-200 text-gray-700 rounded-md cursor-pointer hover:bg-gray-300 transition-colors duration-200">
            Choose File
            <input
              type="file"
              onChange={handleFileChange}
              className="hidden"
              accept=".pdf, .png, .jpg, .jpeg"
              required
            />
          </label>
          <span className="text-sm text-gray-500">{fileName}</span>
        </div>

        <p className="mt-2 text-xs text-gray-400">
          Supports PDF, PNG, JPG formats
        </p>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#12B7AC] to-[#08B6CE] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer disabled:opacity-50"
        >
          <FileText className="w-5" />
          {loading ? "Reviewing..." : "Review Resume"}
        </button>
      </form>

      {/* Right Col (Analysis Results) */}
      <div className="w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200 min-h-96 max-h-[600px] flex flex-col">
        <div className="flex items-center gap-3">
          <FileText className="w-5 h-5 text-green-700" />
          <h1 className="text-xl font-semibold">Analysis Results</h1>
        </div>

        <div className="flex-1 overflow-auto mt-4">
          {content ? (
            <div className="whitespace-pre-wrap text-gray-800">
              <div className="reset-tw">
                <ReactMarkdown>{content}</ReactMarkdown>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-5 text-gray-400 text-center">
              <FileText className="w-9 h-9" />

              <p>Upload your resume and click "Review Resume" to get started</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewResume;
