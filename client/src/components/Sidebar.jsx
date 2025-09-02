import React from "react";
import { Protect, useClerk, useUser } from "@clerk/clerk-react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Eraser,
  FileText,
  Hash,
  House,
  Scissors,
  SquarePen,
  User,
  Wand,
  LogOut,
} from "lucide-react";

const navItems = [
  { to: "/ai", label: "Dashboard", Icon: House },
  { to: "/ai/write-article", label: "Write Article", Icon: SquarePen },
  { to: "/ai/blog-titles", label: "Blog Titles", Icon: Hash },
  { to: "/ai/generate-image", label: "Generate Images", Icon: Wand },  
  { to: "/ai/remove-background", label: "Remove Background", Icon: Eraser },
  { to: "/ai/remove-objects", label: "Remove Objects", Icon: Scissors },  
  { to: "/ai/review-resume", label: "Review Resume", Icon: FileText },
  { to: "/ai/community", label: "Community", Icon: User },
];

const Sidebar = ({ sidebar, setSidebar }) => {
  const { user } = useUser();
  const { signOut, openUserProfile } = useClerk();
  const navigate = useNavigate();

  return (
    <div
      className={`w-60 bg-white border-r border-gray-200 flex flex-col justify-between items-center max-sm:absolute top-14 bottom-0 ${
        sidebar ? "translate-x-0" : "max-sm:-translate-x-full"
      } transition-all duration-300 ease-in-out h-[calc(100vh-56px)]`}
    >
      <div className="my-7 w-full">
        {user && (
          <img
            src={user.imageUrl}
            alt="User Avatar"
            className="w-14 h-14 object-cover rounded-full mx-auto cursor-pointer"
            onClick={() => openUserProfile()} // Used here
          />
        )}
        <h1
          className="mt-3 text-center text-lg font-semibold cursor-pointer"
          onClick={() => openUserProfile()} // Used here
        >
          {user?.fullName}
        </h1>

        <div className="px-6 mt-5 text-sm text-gray-600 font-medium">
          {navItems.map(({ to, label, Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/ai"}
              onClick={() => setSidebar(false)}
              className={({ isActive }) =>
                `flex items-center gap-4 py-3 px-4 rounded-xl text-gray-600 transition-colors duration-200
                ${
                  isActive
                    ? "bg-gradient-to-r from-[#3C81F6] to-[#9234EA] text-white font-semibold"
                    : "hover:bg-gray-100"
                }`
              }
            >
              <Icon className="w-5 h-5" />
              <span>{label}</span>
            </NavLink>
          ))}
        </div>
      </div>

      <div className="p-4 w-full border-t border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {user && (
            <img
              src={user.imageUrl}
              alt="User Avatar"
              className="w-10 h-10 object-cover rounded-full cursor-pointer"
              onClick={() => openUserProfile()}
            />
          )}
          <div className="text-sm">
            <h3 className="font-semibold text-gray-800">{user?.fullName}</h3>
            {/* The user plan is not available in useUser hook, so this is a placeholder */}
                    <Protect plan = 'premium' fallback = 'Free'>Premium</Protect>
          </div>
        </div>
        
        <button
          onClick={() => signOut(() => navigate("/"))}
          className="p-2 rounded-full text-gray-600 hover:bg-gray-100 transition-colors duration-200"
        >
          <LogOut className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;