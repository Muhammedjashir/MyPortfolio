"use client";
import { useState } from "react";
import { MultiStepLoader as Loader } from "../Component/ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";


const loadingStates = [
  { text: "Bridgeon Solution LLP ",color:"text-2xl" },
  { text: "2024 - 2025", color: "text-yellow-500 " },
  { text: "Software Development in Mern Stack", color: "text-gray-400" },
  { text: "University of Calicut",color:"text-2xl" },
  { text: "2018-2021", color: "text-yellow-500" },
  { text: "Bachelor of Mass Communication and Journalism", color: "text-gray-400" },
  { text: "National Council of Educational Research and Training",color:"text-xl" },
  { text: "2016-2018", color: "text-yellow-500" },
  { text: "Kerala Higher Secondary (HSE)", color: "text-gray-400" },
];

export default function MultiStepLoaderDemo() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="w-full h-[150px] flex items-center justify-center ">
      {/* Core Loader Modal */}
      <Loader
        loadingStates={loadingStates.map((state) => ({
          ...state,
          text: <span className={state.color}>{state.text}</span>,
        }))}
        loading={loading}
        duration={2000}
      />

      {/* Demo buttons */}
      <button
        onClick={() => setLoading(true)}
        className= "cursor-pointer bg-[#39C3EF] hover:bg-[#39C3EF]/90 text-black mx-auto text-sm md:text-base transition font-medium duration-200 h-10 rounded-lg px-8 flex items-center justify-center"
        style={{
          boxShadow: "0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset",
        }}
      >
        Click to load My Education
      </button>

      {loading && (
        <button
          className="fixed top-4 right-4 text-black dark:text-white z-[120] cursor-pointer"
          onClick={() => setLoading(false)}
        >
          <IconSquareRoundedX className="h-10 w-10" />
        </button>
      )}
    </div>
  );
}
