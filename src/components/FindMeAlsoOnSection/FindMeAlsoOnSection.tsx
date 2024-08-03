"use client";
import { useState } from "react";
import { RiExternalLinkLine, RiTriangleFill } from "@remixicon/react";
import { motion, AnimatePresence } from "framer-motion";

const FindMeAlsoOnSection = () => {
  const [showFindMeAlsoOn, setShowFindMeAlsoOn] = useState(true);

  const toggleFindMeAlsoOn = () => setShowFindMeAlsoOn(!showFindMeAlsoOn);

  return (
    <div>
      <motion.div
        className="flex items-center gap-2 bg-[#1e2d3d] lg:bg-transparent lg:border-b-2 py-2 px-3 cursor-pointer"
        onClick={toggleFindMeAlsoOn}
        whileHover={{ backgroundColor: "rgba(30, 45, 61, 0.5)" }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.div
          animate={{ rotate: showFindMeAlsoOn ? 180 : 90 }}
          transition={{ duration: 0.3 }}
        >
          <RiTriangleFill className="w-[8.5px] h-[6px]" />
        </motion.div>
        <span className="pr-0.5">find-me-also-on</span>
      </motion.div>
      <AnimatePresence>
        {showFindMeAlsoOn && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="flex flex-col py-4 px-3 text-fade-text">
              <motion.span
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="flex gap-2 items-center text-sm cursor-pointer"
              >
                <RiExternalLinkLine className="w-[16px]" />{" "}
                <span className="hover:text-white duration-400">
                  <a href="https://www.instagram.com/abhishekxsharmaa/" target="_blank">Instagram Account</a>
                </span>
              </motion.span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FindMeAlsoOnSection;