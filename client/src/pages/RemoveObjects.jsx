import React, { useState } from "react";
import { Sparkles, Scissors, Wand } from "lucide-react";

const RemoveObject = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No file chosen");
  const [description, setDescription] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      setFileName(selectedFile.name);
    } else {
      setFileName("No file chosen");
    }
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700">
      {/*Left Col (Form)*/}
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200"
      >
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 text-gray-500" />
          <h1 className="text-xl font-semibold">Object Removal</h1>
        </div>

        <p className="mt-6 text-sm font-medium mb-2">Upload image</p>
        <div className="flex items-center gap-2">
          <label className="px-4 py-2 text-sm bg-gray-200 text-gray-700 rounded-md cursor-pointer hover:bg-gray-300 transition-colors duration-200">
            Choose File
            <input
              type="file"
              onChange={handleFileChange}
              className="hidden"
              accept=".jpg, .jpeg, .png, .webp"
              required
            />
          </label>
          <span className="text-sm text-gray-500">{fileName}</span>
        </div>

        <p className="mt-6 text-sm font-medium mb-2">Describe object to remove</p>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="e.g., car in background, tree from the image"
          rows="5"
          className="w-full resize-none p-2 px-3 outline-none text-sm rounded-md border border-gray-300 placeholder-gray-400"
        ></textarea>
        <p className="mt-2 text-xs text-gray-400">
          Be specific about what you want to remove
        </p>

        <button className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#5C6AF1] to-[#427DF5] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer">
          <Scissors className="w-5" />
          Remove object
        </button>
      </form>

      {/*Right Col (Processed Image)*/}
      <div className="w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200 min-h-96 max-h-[600px]">
        <div className="flex items-center gap-3">
          <Wand className="w-5 h-5 text-gray-400" />
          <h1 className="text-xl font-semibold">Processed Image</h1>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="text-sm flex flex-col items-center gap-5 text-gray-400 text-center">
            <Scissors className="w-9 h-9" />
            <p>Upload an image and describe what to remove</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoveObject;