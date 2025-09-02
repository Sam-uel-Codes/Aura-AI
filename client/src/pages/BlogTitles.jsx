import React, { useState } from "react";
import { Sparkles, Hash } from "lucide-react";

const BlogTitles = () => {
  const categories = [
    { text: "General" },
    { text: "Technology" },
    { text: "Business" },
    { text: "Health" },
    { text: "Lifestyle" },
    { text: "Education" },
    { text: "Travel" },
    { text: "Food" },
  ];

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [input, setInput] = useState("");

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
          <h1 className="text-xl font-semibold">AI Title Generator</h1>
        </div>

        <p className="mt-6 text-sm font-medium">Keyword</p>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300 placeholder-gray-400"
          placeholder="The future of artificial intelligence is..."
          required
        />

        <p className="mt-3 text-sm font-medium">Category</p>
        <div className="mt-3 flex gap-3 flex-wrap sm:max-w-9/11">
          {categories.map((item, index) => (
            <span
              onClick={() => setSelectedCategory(item)}
              className={`text-xs px-4 py-1 border rounded-full cursor-pointer 
                ${
                  selectedCategory.text === item.text
                    ? "bg-blue-50 text-blue-700 border-blue-700"
                    : "text-gray-500 border-gray-300 hover:bg-gray-100"
                }`}
              key={index}
            >
              {item.text}
            </span>
          ))}
        </div>

        <button className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-[#8B5CF6] to-[#E549A3] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer">
          <Hash className="w-5" />
          Generate Titles
        </button>
      </form>

      {/*Right Col*/}

      <div className="w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200 min-h-96 max-h-[600px]">
        <div className="flex items-center gap-3">
          <Hash className="w-5 h-5 text-[#8B5CF6] cursor-pointer" />
          <h1 className="text-xl font-semibold">Generated titles</h1>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <div className="text-sm flex flex-col items-center gap-5 text-gray-400 text-center">
            <Hash className="w-9 h-9" />
            <p>Enter keywords and click “Generate Titles” to get started</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTitles;