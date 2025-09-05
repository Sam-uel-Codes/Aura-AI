import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { Heart } from "lucide-react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useAuth } from "@clerk/clerk-react";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const Community = () => {
  const [creations, setCreations] = useState([]);
  const { user } = useUser();
  const [loading, setLoading] = useState(false);

  const { getToken } = useAuth();

  const fetchCreations = async () => {
    try {
      const { data } = await axios.get("/api/user/get-published-creations", {
        headers: { Authorization: `Bearer ${await getToken()}` },
      });
      if (data.success) {
        setCreations(data.creations);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
    setLoading(false);
  };

  const imageLikeToggle = async (id) => {
    try {
      const { data } = await axios.post(
        "/api/user/toggle-like-creation",
        { id },
        {
          headers: { Authorization: `Bearer ${await getToken()}` },
        }
      );
      if (data.success) {
        toast.success(data.message);
        await fetchCreations();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
     toast.error(error.message);
    }
  };

  useEffect(() => {
    if (user) {
      fetchCreations();
    }
  }, [user]);

  const isLikedByUser = (likes) => {
    return likes.includes(user.id);
  };

  return !loading ? (
    <div className="flex-1 h-full flex flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold text-slate-700">
        Community Creations
      </h1>
      <div className="bg-white h-full w-full rounded-xl p-4 overflow-y-scroll">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {creations.map((creation) => (
            <div
              key={creation.id}
              className="relative group inline-block w-full"
            >
              <img
                src={creation.content}
                alt={creation.prompt}
                className="w-full h-full object-cover rounded-lg"
              />

              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-sm">{creation.prompt}</p>
                <div className="flex gap-2 items-center text-white mt-2">
                  <p>{creation.likes.length}</p>
                  <Heart onClick={() => imageLikeToggle(creation.id)}
                    className={`w-5 h-5 hover:scale-110 cursor-pointer ${
                      isLikedByUser(creation.likes)
                        ? "fill-red-500 text-red-600"
                        : "text-white"
                    }`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div className="flex justify-centre items-centre h-full">
      <span className=" w-10 h-10 my-1 rounded-full border-3 border-primary border-t-transparent animate-spin"></span>
    </div>
  )
};

export default Community;
