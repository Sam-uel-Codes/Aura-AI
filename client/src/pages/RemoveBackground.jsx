import React, { useState } from 'react';
import { Eraser, Wand, Sparkles } from 'lucide-react';

const RemoveBackground = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No file chosen");

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
      {/*Left Col*/}
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200"
      >
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 text-[#4A7AFF]" />
          <h1 className="text-xl font-semibold">Background Removal</h1>
        </div>

        <p className="mt-6 text-sm font-medium">Upload Image</p>
        <div className="mt-2 p-2 bg-gray-50 border border-gray-300 rounded-md">
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
        </div>
        <p className="mt-2 text-xs text-gray-400">
          Supports: JPG, PNG, and other image formats
        </p>

        <button className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#F76C1C] to-[#F04A3C] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer">
          <Eraser className="w-5" />
          Remove background
        </button>
      </form>

      {/*Right Col*/}
      <div className="w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200 min-h-96 max-h-[600px]">
        <div className="flex items-center gap-3">
          <Wand className="w-5 h-5 text-gray-400" />
          <h1 className="text-xl font-semibold">Processed Image</h1>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <div className="text-sm flex flex-col items-center gap-5 text-gray-400 text-center">
            <Wand className="w-9 h-9" />
            <p>Upload an image and click "Remove Background" to get started</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoveBackground;