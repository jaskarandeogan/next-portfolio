import CircularProgressBar from "@/components/CircularProgressBar";
import { CircularProgressBarProps } from "@/types/components";
import React from "react";

const Demo = () => {
  return (
    <div>
      <CircularProgressBar>
        <div className="flex items-center justify-center text-lg font-bold text-gray-700 rounded-full bg-slate-400 h-20 w-20">
          75%
        </div>
      </CircularProgressBar>
    </div>
  );
};

export default Demo;
