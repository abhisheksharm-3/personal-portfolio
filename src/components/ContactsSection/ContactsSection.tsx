"use client";
import { useState } from "react";
import { RiMailFill, RiPhoneFill, RiTriangleFill } from "@remixicon/react";

const ContactsSection = () => {
  const [showContacts, setShowContacts] = useState(true);

  const toggleContacts = () => setShowContacts(!showContacts);

  return (
    <div>
      <div
        className="flex items-center gap-2 pr-40 bg-[#1e2d3d] lg:bg-transparent lg:border-b-2 py-2 px-3 cursor-pointer"
        onClick={toggleContacts}
      >
        <RiTriangleFill
          className={`rotate-${showContacts ? "180" : "90"} w-[8.5px] h-[6px]`}
        />
        <span className="pr-0.5">contacts&nbsp;&nbsp;</span>
      </div>
      {showContacts && (
        <div className="flex flex-col py-4 px-3 text-fade-text lg:border-b-2">
          <span className="flex gap-2 items-center">
            <RiMailFill className="w-[16px]" /> Hidden
          </span>
          <span className="flex gap-2 items-center">
            <RiPhoneFill className="w-[16px]" /> Hidden
          </span>
        </div>
      )}
    </div>
  );
};

export default ContactsSection;
