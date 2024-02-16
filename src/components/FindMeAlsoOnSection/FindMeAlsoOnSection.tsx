"use client";
import { useState } from "react";
import { RiExternalLinkLine, RiTriangleFill } from "@remixicon/react";

const FindMeAlsoOnSection = () => {
  const [showFindMeAlsoOn, setShowFindMeAlsoOn] = useState(true);

  const toggleFindMeAlsoOn = () => setShowFindMeAlsoOn(!showFindMeAlsoOn);

  return (
    <div>
      <div
        className="flex items-center gap-2 bg-[#1e2d3d] lg:bg-transparent lg:border-b-2 py-2 px-3 cursor-pointer"
        onClick={toggleFindMeAlsoOn}
      >
        <RiTriangleFill
          className={`rotate-${
            showFindMeAlsoOn ? "180" : "90"
          } w-[8.5px] h-[6px]`}
        />
        <span className="pr-0.5">find-me-also-on</span>
      </div>
      {showFindMeAlsoOn && (
        <div className="flex flex-col py-4 px-3 text-fade-text">
          <span className="flex gap-2 items-center text-sm cursor-pointer">
            <RiExternalLinkLine className="w-[16px]" />{" "}
            <span className="hover:text-white duration-400">
              <a href="https://www.instagram.com/abhishekxsharmaa/" target="_blank">Instagram Account</a>
            </span>
          </span>
        </div>
      )}
    </div>
  );
};

export default FindMeAlsoOnSection;
