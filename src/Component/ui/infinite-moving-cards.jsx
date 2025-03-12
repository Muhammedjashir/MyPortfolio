"use client";

import { cn } from "../../lib/utils";
import React, { useEffect, useState, useRef } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  className,
}) => {
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
      containerRef.current.style.setProperty(
        "--animation-duration",
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s"
      );
    }
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden",
        className
      )}
    >
      <ul
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          !isPaused && "animate-scroll"
        )}
      >
        {[...items, ...items].map((item, idx) => (
          <li
            key={idx}
            className="w-[350px] max-w-full relative rounded-2xl border border-b-0 shrink-0 border-slate-700 px-8 py-6 md:w-[450px]"
            style={{
              background:
                "linear-gradient(180deg, var(--slate-800), var(--slate-900))",
            }}
            onMouseEnter={() => setIsPaused(true)} // Stop all cards when hovering any one
            onMouseLeave={() => setIsPaused(false)} // Resume on leaving
          >
            <blockquote>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10  object-cover mb-4"
                  />
                  <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                    {item.title}
                  </span>
                  <span className="relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
                    {item.quote}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>

      {/* CSS for Infinite Animation */}
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          animation: scroll var(--animation-duration) linear infinite;
          animation-direction: var(--animation-direction);
        }
      `}</style>
    </div>
  );
};
