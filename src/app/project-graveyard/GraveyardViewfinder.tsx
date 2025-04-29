"use client";
import React, { useState, useMemo } from "react";
import { FaSkull } from "react-icons/fa6";
import {
  RiCloseLine,
  RiTriangleFill,
  RiGhostLine,
  RiCodeLine,
  RiMoneyDollarCircleLine,
  RiTimeLine,
  RiUser3Line,
} from "@remixicon/react";
import { Checkbox, Tooltip } from "@nextui-org/react";
import GravestoneCard from "@/components/ProjectGraveyard/GravestoneCard";
import { deadProjects } from "@/constants/deadProjects";
import NoDeadProjects from "@/components/ProjectGraveyard/NoDeadProjects";
import dynamic from "next/dynamic";

const GraveyardEntrance = dynamic(
  () => import("@/components/ProjectGraveyard/GraveyardEntrance"),
  { ssr: false }
);

const GraveyardViewfinder = () => {
  const [selectedCauses, setSelectedCauses] = useState<string[]>([]);
  const [showCauses, setShowCauses] = useState<boolean>(true);
  const [showEntrance, setShowEntrance] = useState<boolean>(true);

  const causesWithIcons = useMemo(
    () => [
      { name: "Time", icon: <RiTimeLine /> },
      { name: "Scope", icon: <RiCodeLine /> },
      { name: "Budget", icon: <RiMoneyDollarCircleLine /> },
      { name: "Technical", icon: <RiGhostLine /> },
      { name: "Interest", icon: <RiUser3Line /> },
      { name: "Market", icon: <FaSkull className="text-xl pl-0.5" /> },
    ],
    []
  );
  
  const toggleCause = (cause: string) => {
    setSelectedCauses((prev) =>
      prev.includes(cause) ? prev.filter((c) => c !== cause) : [...prev, cause]
    );
  };
  
  const toggleShowCauses = () => setShowCauses(!showCauses);
  
  const handleEntranceComplete = () => {
    setShowEntrance(false);
  };

const filteredDeadProjects = useMemo(
    () => {
        if (selectedCauses.length === 0) {
            return deadProjects;
        }
        
        return deadProjects.filter((project) => {
            return selectedCauses.some(cause => {
                const causeOfDeathLower = project.causeOfDeath.toLowerCase();
                const causeLower = cause.toLowerCase();
                
                const causeKeywords = {
                    'time': ['time', 'schedule', 'deadline', 'priorities'],
                    'budget': ['budget', 'financial', 'money', 'cost', 'expensive'],
                    'technical': ['technical', 'tech', 'complexity', 'difficult', 'challenging'],
                    'interest': ['interest', 'motivation', 'passion', 'enthusiasm', 'boredom'],
                    'market': ['market', 'demand', 'competition', 'users', 'audience'],
                    'scope': ['scope', 'too large', 'feature creep', 'overambitious']
                };
                
                return causeKeywords[causeLower as keyof typeof causeKeywords]?.some(keyword => 
                    causeOfDeathLower.includes(keyword)
                ) || causeOfDeathLower.includes(causeLower);
            });
        });
    },
    [selectedCauses]
);
  
  const DesktopView = () => (
    <div className="hidden lg:flex flex-row h-screen">
      <div className="flex flex-col border-r-2 border-gray-700">
        <div
          className="flex items-center gap-2 pr-40 bg-[#111827] lg:bg-transparent lg:border-b-2 border-gray-700 py-2 px-3 cursor-pointer"
          onClick={toggleShowCauses}
        >
          <RiTriangleFill
            className={`rotate-${
              showCauses ? "180" : "90"
            } w-[8.5px] h-[6px] transition-transform text-gray-400`}
          />
          <span className="pr-0.5 pl-[0.5px] text-gray-300">obituaries</span>
        </div>
        {showCauses ? (
          <div className="mt-4 mb-32 ml-4 space-y-2 overflow-y-scroll scrollbar-hide">
            {causesWithIcons.map((cause, index) => (
              <Checkbox
                key={index}
                defaultSelected={false}
                className="flex items-center gap-2"
                onValueChange={() => toggleCause(cause.name)}
                isSelected={selectedCauses.includes(cause.name)}
                radius="none"
                color="danger"
              >
                <span
                  className={`flex gap-2 items-center hover:text-gray-200 duration-400 transition-colors ease-in-out ${
                    selectedCauses.includes(cause.name)
                      ? "text-gray-200"
                      : "text-gray-500"
                  }`}
                >
                  {cause.icon} {cause.name}
                </span>
              </Checkbox>
            ))}
          </div>
        ) : null}
      </div>
      <div className="flex-grow flex flex-col">
        <div className="flex-grow">
          <div className="border-b-2 border-gray-700">
            <div className="border-r-2 border-gray-700 max-w-max pr-2 h-fit">
              <div className="flex items-center gap-12 text-gray-500 py-2 px-3">
                <span className="">
                  {
                    selectedCauses.length > 0
                      ? selectedCauses.join("; ")
                      : "all deceased projects"
                  }
                </span>
                <Tooltip content="Clear Filters" placement="top">
                  <button
                    className="focus:outline-none"
                    onClick={() => setSelectedCauses([])}
                  >
                    <RiCloseLine className="w-[18px] h-[18px] text-gray-500 hover:text-gray-300 transition-colors duration-300" />
                  </button>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-grow h-full">
          {filteredDeadProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 pt-20 pb-60 w-full px-32 overflow-y-scroll scrollbar-hide">
              {filteredDeadProjects.map((project, index) => (
                <div key={index}>
                  <div className="flex gap-8 py-2">
                    <p className="text-red-700">{`R.I.P ${index + 1}`}</p>
                    <p className="text-gray-500 lowercase">{`// _${project.title}`}</p>
                  </div>
                  <GravestoneCard
                    key={index}
                    title={project.title}
                    showcaseImage={project.showcaseImage}
                    description={project.description}
                    techStack={project.techStack}
                    causeOfDeath={project.causeOfDeath}
                    lifetime={project.lifetime}
                    lessonsLearned={project.lessonsLearned}
                    resurrectionPotential={project.resurrectionPotential}
                  />
                </div>
              ))}
            </div>
          ) : (
            <NoDeadProjects />
          )}

          <div className="px-2 border-l-2 border-gray-700 text-gray-500 flex items-center">
            r<br />e<br />q<br />u<br />i<br />e<br />s<br />c<br />a<br />t<br /><br />
            i<br />n<br /><br />p<br />a<br />c<br />e<br />
          </div>
        </div>
      </div>
    </div>
  );

  const MobileView = () => (
    <div className="flex flex-col gap-4 h-screen py-4 lg:hidden overflow-hidden">
      <div className="flex px-4 text-gray-300">_project_graveyard</div>
      <div className="flex flex-col gap-1">
        <div className="flex flex-col border-r-2 border-gray-700">
          <div
            className="flex items-center gap-2 pr-40 bg-[#111827] lg:bg-transparent lg:border-b-2 border-gray-700 py-2 px-3 cursor-pointer"
            onClick={toggleShowCauses}
          >
            <RiTriangleFill
              className={`rotate-${
                showCauses ? "180" : "90"
              } w-[8.5px] h-[6px] transition-transform text-gray-400`}
            />
            <span className="pr-0.5 text-gray-300">obituaries&nbsp;&nbsp;</span>
          </div>
          {showCauses ? (
            <div className="mt-4 ml-4 space-y-2">
              {causesWithIcons.map((cause, index) => (
                <Checkbox
                  key={index}
                  defaultSelected={false}
                  className="flex items-center gap-2"
                  onValueChange={() => toggleCause(cause.name)}
                  isSelected={selectedCauses.includes(cause.name)}
                  radius="none"
                  color="danger"
                >
                  <span
                    className={`flex gap-2 items-center hover:text-gray-200 duration-400 transition-colors ease-in-out ${
                      selectedCauses.includes(cause.name)
                        ? "text-gray-200"
                        : "text-gray-500"
                    }`}
                  >
                    {cause.icon} {cause.name}
                  </span>
                </Checkbox>
              ))}
            </div>
          ) : null}
        </div>
      </div>
      <span className="px-6 pt-6 text-gray-500">
        <span className="text-gray-300">&#x2F;&#x2F; deceased&nbsp;</span>
        {
          selectedCauses.length > 0
            ? "/ " + selectedCauses.join("; ")
            : "/ all"
        }
      </span>

      {filteredDeadProjects.length > 0 ? (
        <div className="w-full grid grid-cols-1 overflow-y-scroll scrollbar-hide place-items-center pb-60 gap-2">
          {filteredDeadProjects.map((project, index) => (
            <div key={index}>
              <div className="flex gap-8 py-2">
                <p className="text-red-700">{`R.I.P ${index + 1}`}</p>
                <p className="text-gray-500 lowercase">{`// _${project.title}`}</p>
              </div>
              <GravestoneCard
                key={index}
                title={project.title}
                showcaseImage={project.showcaseImage}
                description={project.description}
                techStack={project.techStack}
                causeOfDeath={project.causeOfDeath}
                lifetime={project.lifetime}
                lessonsLearned={project.lessonsLearned}
                resurrectionPotential={project.resurrectionPotential}
              />
            </div>
          ))}
        </div>
      ) : (
        <NoDeadProjects />
      )}
    </div>
  );
  
  return (
    <div className="overflow-y-hidden">
      {showEntrance ? (
        <GraveyardEntrance onAnimationComplete={handleEntranceComplete} />
      ) : (
        <>
          <DesktopView />
          <MobileView />
        </>
      )}
    </div>
  );
};

export default GraveyardViewfinder;