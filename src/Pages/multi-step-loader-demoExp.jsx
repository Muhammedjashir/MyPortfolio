"use client";
import { useState } from "react";
import { MultiStepLoader as Loader } from "../Component/ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";


const loadingStates = [
  { text: "Mern Full Stack Developer",color:"text-2xl" },
  { text: "2025 - Present", color: "text-yellow-500 " },
  { text: "Imit Park Ltd", color: "text-gray-400" },
  { text: "Mern Full Stack Developer",color:"text-2xl" },
  { text: "2024-2025", color: "text-yellow-500" },
  { text: "Bridgeon Solution LLP", color: "text-gray-400" },
 
];

export default function MultiStepLoaderDemoExp() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="w-full h-[150px] flex items-center justify-center">
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
        className="cursor-pointer bg-[#39C3EF] hover:bg-[#39C3EF]/90 text-black mx-auto text-sm md:text-base transition font-medium duration-200 h-10 rounded-lg px-8 flex items-center justify-center"
        style={{
          boxShadow: "0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset",
        }}
      >
        Click to load My Experience
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
