"use client";
import React, { useState } from "react";
import {
  RiCloseLine,
  RiTerminalBoxFill,
  RiGamepadFill,
  RiUser4Fill,
  RiTriangleFill,
  RiArrowRightSLine,
  RiFolder3Fill,
  RiMarkdownFill,
} from "@remixicon/react";
import { Tooltip } from "@nextui-org/react";
import ContactsSection from "@/components/ContactsSection/ContactsSection";

const AboutMeViewfinder = () => {
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
  const [showTechStack, setShowTechStack] = useState<boolean>(true);
  const [selectedTab, setSelectedTab] = useState<string>("personal-info");
  const [selectedFolder, setSelectedFolder] = useState<number>(2);
  const [showBio, setShowBio] = useState<boolean>(false);
  const [showSummary, setShowSummary] = useState<boolean>(false);
  const [showInterests, setShowInterests] = useState<boolean>(false);
  const [showEducation, setShowEducation] = useState<boolean>(false);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleShowTechStack = () => setShowTechStack(!showTechStack);
  const toggleShowBio = () => setShowBio(!showBio);
  const toggleShowEducation = () => setShowEducation(!showEducation);
  const toggleShowInterests = () => setShowInterests(!showInterests);
  const toggleShowSummary = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    setShowSummary(!showSummary);
  };

  const PersonalInfo = () => {
    return (
      <div className="flex flex-col">
        <div
          className={`flex cursor-pointer hover:text-white duration-400 ease-in-out ${
            showBio ? "text-white" : null
          }`}
          onClick={toggleShowBio}
        >
          <RiArrowRightSLine className={`rotate-${showBio ? "90" : "0"}`} />
          <div className="">
            <div className="flex items-center gap-1">
              <RiFolder3Fill className="text-[#E99287] size-4" /> bio
            </div>
            {showBio ? (
              <div
                className={`text-fade-text flex items-center gap-1  hover:text-white duration-400 ease-in-out ${
                  showSummary ? "text-white" : null
                }`}
                onClick={toggleShowSummary}
              >
                <RiMarkdownFill className="size-4" /> summary
              </div>
            ) : null}
          </div>
        </div>
        <div
          className={`flex cursor-pointer hover:text-white duration-400 ease-in-out ${
            showInterests ? "text-white" : null
          }`}
          onClick={toggleShowInterests}
        >
          <RiArrowRightSLine className={`rotate-${showBio ? "90" : "0"}`} />
          <div className="">
            <div className="flex items-center gap-1">
              <RiFolder3Fill className="text-[#43D9AD] size-4" /> interests
            </div>
            {showInterests ? (
              <div
                className={`text-fade-text flex items-center gap-1  hover:text-white duration-400 ease-in-out ${
                  showSummary ? "text-white" : null
                }`}
                onClick={toggleShowSummary}
              >
                <RiMarkdownFill className="size-4" /> summary
              </div>
            ) : null}
          </div>
        </div>
        <div
          className={`flex cursor-pointer hover:text-white duration-400 ease-in-out ${
            showEducation ? "text-white" : null
          }`}
          onClick={toggleShowEducation}
        >
          <RiArrowRightSLine className={`rotate-${showBio ? "90" : "0"}`} />
          <div className="">
            <div className="flex items-center gap-1">
              <RiFolder3Fill className="text-[#3A49A4] size-4" /> education
            </div>
            {showEducation ? (
              <div
                className={`text-fade-text flex items-center gap-1  hover:text-white duration-400 ease-in-out ${
                  showSummary ? "text-white" : null
                }`}
                onClick={toggleShowSummary}
              >
                <RiMarkdownFill className="size-4" /> summary
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="overflow-y-hidden">
      {/* Desktop Version */}
      <div className="hidden lg:flex flex-row h-screen">
        <div className="flex flex-col border-r-2 px-4 py-5 gap-8 text-fade-text">
          <Tooltip content="Professional Info" placement="right" delay={200}>
            <div>
              {" "}
              <RiTerminalBoxFill
                className="cursor-pointer hover:text-white duration-400 ease-in-out"
                onClick={() => setSelectedTab("professional-info")}
              />
            </div>
          </Tooltip>{" "}
          <Tooltip content="Personal Info" placement="right" delay={200}>
            <div>
              <RiUser4Fill
                className="cursor-pointer hover:text-white duration-400 ease-in-out"
                onClick={() => setSelectedTab("personal-info")}
              />{" "}
            </div>
          </Tooltip>
          <Tooltip content="Hobbies" placement="right" delay={200}>
            <div>
              <RiGamepadFill
                className="cursor-pointer hover:text-white duration-400 ease-in-out"
                onClick={() => setSelectedTab("hobbies")}
              />
            </div>
          </Tooltip>
        </div>
        <div className="flex flex-col border-r-2">
          <div
            className="flex items-center gap-2 pr-16 bg-[#1e2d3d] lg:bg-transparent lg:border-b-2 py-2 px-3 cursor-pointer"
            onClick={toggleShowTechStack}
          >
            <RiTriangleFill
              className={`rotate-${
                showTechStack ? "180" : "90"
              } w-[8.5px] h-[6px]`}
            />
            <span className="pr-3">{selectedTab.toLowerCase()}</span>
          </div>
          {showTechStack ? (
            <div className="border-b-2 text-fade-text p-3">
              <PersonalInfo />
            </div>
          ) : null}
          <ContactsSection />
        </div>
        <div className="flex-grow flex flex-col">
          {/* Projects list */}
          <div className="flex-grow">
            <div className="border-b-2">
              <div className=" border-r-2 max-w-max pr-2 h-fit">
                <div className="flex items-center gap-12 text-fade-text py-2 px-3">
                  <span className="">{selectedTab}</span>
                  <Tooltip
                    content="Clear Filters"
                    placement="top"
                    isOpen={isOpen}
                    onOpenChange={(open) => setIsOpen(open)}
                    delay={200}
                  >
                    <div>
                      <RiCloseLine
                        className="w-[18px] h-[18px] hover:text-white duration-400 cursor-pointer"
                        onClick={() => setSelectedTechs([])}
                      />
                    </div>
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row flex-grow h-full">
            <div className="flex flex-row  w-full overflow-y-scroll scrollbar-hide">
              {/* Display filtered projects */}
              <div className=" border-r-2 w-1/2"></div>
              <div className="w-1/2"></div>
            </div>
            <div className="px-2 border-l-2 text-fade-text flex items-center">
              a<br />b<br />h<br />i<br />s<br />h<br />e<br />k<br />
              <br />s<br />h<br />a<br />r<br />m<br />a
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Version */}
      <div className="flex flex-col gap-4 h-screen py-4 lg:hidden overflow-hidden">
        <div className="flex px-4">_projects</div>
        <div className="flex flex-col gap-1">
          <div className="flex flex-col border-r-2">
            <div
              className="flex items-center gap-2 pr-40 bg-[#1e2d3d] lg:bg-transparent lg:border-b-2 py-2 px-3 cursor-pointer"
              onClick={toggleShowTechStack}
            >
              <RiTriangleFill
                className={`rotate-${
                  showTechStack ? "180" : "90"
                } w-[8.5px] h-[6px]`}
              />
              <span className="pr-0.5">projects&nbsp;&nbsp;</span>
            </div>
            {showTechStack ? <div className="mt-4 ml-4 space-y-2"></div> : null}
          </div>
        </div>
        <span className="px-6 pt-6 text-fade-text">
          <span className="text-white">&#x2F;&#x2F; projects&nbsp;</span>
          {
            selectedTechs.length > 0
              ? "/ " + selectedTechs.join("; ") // Display selected technologies
              : "/ all" // Default to "projects" if no technology is selected
          }
        </span>
        <div className="w-full grid grid-cols-1 overflow-y-scroll scrollbar-hide place-items-center pb-60 gap-2"></div>
      </div>
    </div>
  );
};

export default AboutMeViewfinder;
