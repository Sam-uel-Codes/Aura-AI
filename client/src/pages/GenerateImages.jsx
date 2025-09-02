import React, { useState } from "react";
import { Sparkles, Image, SquarePen, Wand, Eraser } from "lucide-react";

const GenerateImages = () => {
  const [input, setInput] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("Realistic");
  const [publish, setPublish] = useState(false);

  const styles = ["Realistic", "Ghibli Style", "Anime", "Fantasy", "Abstract"];

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700">
      {/* Left-column */}
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200"
      >
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 text-[#11B97E]" />
          <h1 className="text-xl font-semibold">AI Image Generator</h1>
        </div>

        <p className="mt-6 text-sm font-medium">Describe Your Image</p>
        <textarea
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder="Describe what you want to see in the image..."
          rows="5"
          className="w-full resize-none p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 placeholder-gray-400"
          required
        ></textarea>

        <p className="mt-3 text-sm font-medium">Style</p>
        <div className="mt-3 flex gap-3 flex-wrap">
          {styles.map((style) => (
            <span
              onClick={() => setSelectedStyle(style)}
              className={`text-xs px-4 py-1 border rounded-full cursor-pointer
                ${
                  selectedStyle === style
                    ? "bg-blue-50 text-blue-700 border-blue-700"
                    : "text-gray-500 border-gray-300 hover:bg-gray-100"
                }`}
              key={style}
            >
              {style}
            </span>
          ))}
        </div>

        <div className="my-6 flex items-center gap-2">
          <label className="relative cursor-pointer">
            <input
              type="checkbox"
              onChange={(e) => setPublish(e.target.checked)}
              checked={publish}
              className="sr-only peer"
            />
            <div className="w-9 h-5 bg-slate-300 rounded-full peer-checked:bg-green-500 transition"></div>
            <span className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition peer-checked:translate-x-4"></span>
          </label>
          <p className="text-sm">Make this image Public</p>
        </div>

        <button className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#20C363] to-[#11B97E] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer">
          <Wand className="w-5" />
          Generate Image
        </button>
      </form>

      {/* Right-column */}
      <div className="w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200 min-h-96 max-h-[600px] flex flex-col">
        <div className="flex items-center gap-3">
          <Image className="w-5 h-5 text-gray-400 cursor-pointer" />
          <h1 className="text-xl font-semibold">Generated image</h1>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="text-sm flex flex-col items-center gap-5 text-gray-400 text-center">
            <Image className="w-9 h-9" />
            <p>Describe an image and click "Generate Image" to get started</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenerateImages;
