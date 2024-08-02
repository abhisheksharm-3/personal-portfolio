"use client";
import { useState } from "react";
import Link from "next/link";
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
          className={`rotate-${showContacts ? "180" : "90"} w-[8.5px] h-[6px] transition-transform`}
        />
        <span className="pr-0.5">contacts&nbsp;&nbsp;</span>
      </div>
      {showContacts && (
        //TODO: Figure out how to avoid data harvesting then only display info
        <div className="flex flex-col py-4 px-3 text-fade-text lg:border-b-2">
            <Link className="flex gap-2 items-center hover:text-white duration-400 ease-in-out" href="mai&#108;t&#111;&#58;a%&#54;2%68i&#115;%68ek&#46;r%65%6C&#37;&#54;1y&#101;r%2E&#97;%7&#50;d%65ntl%&#55;9&#51;%344&#64;a&#108;&#37;65ea%73&#46;&#99;&#111;&#109;">
            <RiMailFill className="w-[16px]" /> E-Mail Me
            </Link>
          <span className="flex gap-2 items-center">
            <RiPhoneFill className="w-[16px]" /> Hidden
          </span>
        </div>
      )}
    </div>
  );
};

export default ContactsSection;
