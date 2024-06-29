"use client";
import { TypewriterEffectSmooth } from "../Components/UI/TypewriterEffect";
import { Link } from "react-router-dom"
export function TypewriterEffectSmoothDemo() {
    const words = [
      {
        text: "Give",
      },
      {
        text: "a",
      },
      {
        text: "boost",
      },
      {
        text: "to",
      },
      {
        text: "your",
      },
      {
        text: "business",
      },
      {
        text: "with",
      },
      {
        text: "BizBuddy.",
        className: "text-blue-500 dark:text-blue-500",
      },
    ];
  
    return (
      <div className="flex flex-col items-center justify-center h-[59rem] bg-black">
        <p className="text-xs text-neutral-600 dark:text-neutral-200 sm:text-base">
        Unlocking growth and efficiency for small businesses with effortless invoicing, inventory management, and document storage.
        </p>
        <TypewriterEffectSmooth words={words} />
        <div className="flex flex-col space-x-0 space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          <button className="w-40 h-10 text-sm text-white bg-black border border-transparent rounded-xl dark:border-white">
            <Link className="p-18" to="/login">Login</Link>
          </button>
          <button className="w-40 h-10 text-sm text-black bg-white border border-black rounded-xl">
           <Link className="p-18" to='/register'>Sign Up</Link>
          </button>
        </div>
      </div>
    );
  }