import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { Menu, X } from "lucide-react";
import Sidebar from "../components/Sidebar";
import { SignIn, useUser } from "@clerk/clerk-react";

const Layout = () => {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);
  const { user } = useUser();

  return user ? (
    <div className="relative min-h-screen">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-4 sm:px-20 xl:px-32 py-2 bg-white shadow-sm sticky top-0 z-50">
        <img
          src={assets.Aura_AI_photo}
          alt="Aura AI Logo"
          onClick={() => navigate("/")}
          className="h-8 sm:h-12 cursor-pointer"
          style={{ objectFit: "contain", paddingLeft: "0.5rem" }}
        />
        {/* Mobile Menu Icon */}
        <div
          onClick={() => setSidebar(!sidebar)}
          className="block md:hidden cursor-pointer"
        >
          {sidebar ? (
            <X className="w-8 h-8 text-gray-700" />
          ) : (
            <Menu className="w-8 h-8 text-gray-700" />
          )}
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="flex-1 flex w-full">
        <div className="hidden md:block">
          <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
        </div>
        <div className="flex-1 bg-[#F4f7FB]">
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center h-screen">
      <SignIn />
    </div>
  );
};

export default Layout;
