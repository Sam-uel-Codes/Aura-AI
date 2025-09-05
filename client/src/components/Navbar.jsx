import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useClerk, useUser, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { openSignIn } = useClerk();

  return (
    <div className="fixed z-5 w-full bg-white/30 backdrop-blur-2xl flex justify-between items-center py-2 px-6 sm:px-12 xl:px-20">
      {/* Logo on left with padding */}
      <img
        src={assets.Aura_AI_photo}
        alt="logo"
        className="h-14 sm:h-16 w-auto cursor-pointer"
        onClick={() => navigate("/")}
        style={{ paddingLeft: "0.75rem", objectFit: "contain" }}
      />
      
      {/* Button or User on right */}
      {user ? (
        <UserButton />
      ) : (
        <button
          onClick={openSignIn}
          className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-purple-600 text-white px-6 py-3 hover:bg-purple-500 transition"
          style={{ minHeight: "3rem" }}
        >
          Get started <ArrowRight className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};

export default Navbar;
