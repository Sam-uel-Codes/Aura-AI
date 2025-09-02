import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full items-center justify-center bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat min-h-screen text-center">
      <div className="max-w-4xl mb-12">
        {" "}
        {/* Added max-width for better readability on large screens */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight mb-6 animate-fade-in-down">
          {" "}
          {/* Added animation */}
          Create amazing content with{" "}
          <span className="text-purple-600">Aura AI</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed animate-fade-in-up">
          {" "}
          {/* Added animation */}
          From a blank canvas to a finished product, our platform empowers you
          to generate new ideas and refine your visuals effortlessly. Create
          articles from a simple prompt, instantly remove unwanted objects from
          your photos, and generate unique images to bring your vision to
          life—all in one place.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-200">
          {" "}
          {/* Added animation and spacing */}
          <button
            onClick={() => navigate("/ai")}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
          >
            Start Creating Now
          </button>
          <button className="bg-white border-2 border-purple-600 text-purple-600 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
            Watch Demo
          </button>
        </div>
      </div>

        <div className="flex items-center justify-center text-center mt-8 space-x-2 text-gray-700 font-semibold animate-fade-in-up delay-400">
            <img src={assets.user_group} alt="User Group" className="h-8 text-gray-600"/>
            <span>Trusted by 10k+ users.</span>
        </div>      

    </div>
  );
};

export default Hero;
