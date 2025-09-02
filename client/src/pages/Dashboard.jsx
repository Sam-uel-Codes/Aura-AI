import React, { useEffect, useState } from "react";
import { dummyCreationData } from "../assets/assets";
import { Gem, Sparkles } from "lucide-react";
import { Protect } from "@clerk/clerk-react";
import CreationItems from "../components/CreationItems";

const Dashboard = () => {
  const [creations, setCreations] = useState([]);
  const getDashboardData = async () => {
    setCreations(dummyCreationData);
  };

  useEffect(() => {
    getDashboardData();
  }, []);

  return (
    <div className="h-full overflow-y-scroll p-6">
      {/* Containing Both Cards */}
      <div className="flex flex-col md:flex-row p-4 gap-6">
        {/* Total Creation Card */}
        <div className="flex justify-between items-center w-72 p-4 px-6 bg-white rounded-xl border border-gray-200 shadow-md">
          <div>
            <p className="text-gray-500 text-sm font-medium">Total Creations</p>
            <h2 className="text-3xl font-extrabold text-slate-700 mt-1">
              {creations.length}
            </h2>
          </div>
          <div className="w-12 h-12 p-3 bg-blue-500 flex items-center justify-center rounded-xl text-white">
            <Sparkles className="w-6 h-6" />
          </div>
        </div>

        {/* Active Plan Card */}
        <div className="flex justify-between items-center w-72 p-4 px-6 bg-white rounded-xl border border-gray-200 shadow-md">
          <div>
            <p className="text-gray-500 text-sm font-medium">Active Plan</p>
            <h2 className="text-3xl font-extrabold text-slate-700 mt-1">
              <Protect plan="premium" fallback="free">
                Premium
              </Protect>
            </h2>
          </div>
          <div className="w-12 h-12 p-3 bg-blue-500 flex items-center justify-center rounded-xl text-white">
            <Gem className="w-6 h-6" />
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <p className="mt-6 mb-4">List of Creations</p>
        {creations.map((item) => (
          <CreationItems key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;