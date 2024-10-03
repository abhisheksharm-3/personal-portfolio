"use client";
import React, { useState, useMemo } from "react";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import {
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiFlask,
  SiHiveBlockchain,
  SiFastapi,
} from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { projects } from "@/constants/projects";
import {
  RiCloseLine,
  RiHtml5Line,
  RiReactjsLine,
  RiTriangleFill,
  RiRobot3Fill,
  RiNextjsLine,
  RiSvelteLine,
} from "@remixicon/react";
import { Checkbox, Tooltip } from "@nextui-org/react";
import NoProjectsYet from "@/components/NoProjects/NoProjectsYet";

const ProjectsViewfinder = () => {
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
  const [showTechStack, setShowTechStack] = useState<boolean>(true);
  const [isTooltipOpen, setIsTooltipOpen] = useState<boolean>(false);
  const techsWithIcons = useMemo(
    () => [
      { name: "React", icon: <RiReactjsLine /> },
      { name: "HTML", icon: <RiHtml5Line /> },
      { name: "NextJs", icon: <RiNextjsLine /> },
      { name: "SvelteKit", icon: <RiSvelteLine /> },
      { name: "ExpressJs", icon: <SiExpress className="text-2xl pl-0.5" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-xl pl-0.5" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-xl pl-0.5" /> },
      { name: "GoLang", icon: <FaGolang className="text-2xl" /> },
      { name: "Machine Learning", icon: <RiRobot3Fill /> },
      { name: "Web3", icon: <SiHiveBlockchain className="text-2xl pl-1" /> },
      { name: "Flask", icon: <SiFlask className="text-2xl pl-1" /> },
      { name: "FastAPI", icon: <SiFastapi className="text-2xl pl-1" /> },
    ],
    []
  );
  const toggleTech = (tech: string) => {
    setSelectedTechs((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };
  const toggleShowTechStack = () => setShowTechStack(!showTechStack);

  //TODO:use alternate mathod to store projects independent of portfolio

  const filteredProjects = useMemo(
    () =>
      projects.filter(
        (project) =>
          selectedTechs.length === 0 ||
          selectedTechs.some((tech) => project.techStack.includes(tech))
      ),
    [selectedTechs]
  );
  const DesktopView = () => (
    <div className="hidden lg:flex flex-row h-screen">
      <div className="flex flex-col border-r-2">
        <div
          className="flex items-center gap-2 pr-40 bg-[#1e2d3d] lg:bg-transparent lg:border-b-2 py-2 px-3 cursor-pointer"
          onClick={toggleShowTechStack}
        >
          <RiTriangleFill
            className={`rotate-${
              showTechStack ? "180" : "90"
            } w-[8.5px] h-[6px] transition-transform`}
          />
          <span className="pr-0.5 pl-[0.5px]">projects&nbsp;&nbsp;</span>
        </div>
        {showTechStack ? (
          // added mb-32 to the div below to show all options in scroll on small screens
          <div className="mt-4 mb-32 ml-4 space-y-2 overflow-y-scroll scrollbar-hide"> 
            {techsWithIcons.map((tech, index) => (
              <Checkbox
                key={index}
                defaultSelected={false}
                className="flex items-center gap-2"
                onValueChange={() => toggleTech(tech.name)}
                isSelected={selectedTechs.includes(tech.name)}
                radius="none"
              >
                <span
                  className={`flex gap-2 items-center hover:text-white duration-400 transition-colors ease-in-out ${
                    selectedTechs.includes(tech.name)
                      ? "text-white"
                      : "text-fade-text"
                  }`}
                >
                  {tech.icon} {tech.name}
                </span>
              </Checkbox>
            ))}
          </div>
        ) : null}
      </div>
      <div className="flex-grow flex flex-col">
        {/* Projects list */}
        <div className="flex-grow">
          <div className="border-b-2">
            <div className=" border-r-2 max-w-max pr-2 h-fit">
              <div className="flex items-center gap-12 text-fade-text py-2 px-3">
                <span className="">
                  {
                    selectedTechs.length > 0
                      ? selectedTechs.join("; ") // Display selected technologies
                      : "all projects" // Default to "projects" if no technology is selected
                  }
                </span>
                <Tooltip
                  content="Clear Filters"
                  placement="top"
                >
                  <button
                    className="focus:outline-none"
                    onClick={() => setSelectedTechs([])}
                  >
                    <RiCloseLine className="w-[18px] h-[18px] text-fade-text hover:text-white transition-colors duration-300" />
                  </button>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-grow h-full">
          
            {/* Display filtered projects */}
            {filteredProjects.length > 0 ? (
  <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 pt-20 pb-60 w-full px-32 overflow-y-scroll scrollbar-hide">
    {filteredProjects.map((project, index) => (
      <div key={index}>
        <div className="flex gap-8 py-2">
          <p className="text-[#5565E8]">{`Project ${index + 1}`}</p>
          <p className="text-fade-text lowercase">{`// _${project.title}`}</p>
        </div>
        <ProjectCard
          key={index}
          title={project.title}
          showcaseImage={project.showcaseImage}
          description={project.description}
          link={project.link}
          techStack={project.techStack[0]}
          building={project.building}
        />
      </div>
    ))}
  </div>
) : (
  <NoProjectsYet />
)}
          
          <div className="px-2 border-l-2 text-fade-text flex items-center">
            a<br />b<br />h<br />i<br />s<br />h<br />e<br />k<br />
            <br />s<br />h<br />a<br />r<br />m<br />a
          </div>
        </div>
      </div>
    </div>
  );

  const MobileView = () => (
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
              } w-[8.5px] h-[6px] transition-transform`}
            />
            <span className="pr-0.5">projects&nbsp;&nbsp;</span>
          </div>
          {showTechStack ? (
            <div className="mt-4 ml-4 space-y-2">
              {techsWithIcons.map((tech, index) => (
                <Checkbox
                  key={index}
                  defaultSelected={false}
                  className="flex items-center gap-2"
                  onValueChange={() => toggleTech(tech.name)}
                  isSelected={selectedTechs.includes(tech.name)}
                  radius="none"
                >
                  <span
                    className={`flex gap-2 items-center hover:text-white duration-400 transition-colors ease-in-out ${
                      selectedTechs.includes(tech.name)
                        ? "text-white"
                        : "text-fade-text"
                    }`}
                  >
                    {tech.icon} {tech.name}
                  </span>
                </Checkbox>
              ))}
            </div>
          ) : null}
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
      
      {filteredProjects.length > 0 ? (
  <div className="w-full grid grid-cols-1 overflow-y-scroll scrollbar-hide place-items-center pb-60 gap-2">
    {filteredProjects.map((project, index) => (
      <div key={index}>
        <div className="flex gap-8 py-2">
          <p className="text-[#5565E8]">{`Project ${index + 1}`}</p>
          <p className="text-fade-text lowercase">{`// _${project.title}`}</p>
        </div>
        <ProjectCard
          key={index}
          title={project.title}
          showcaseImage={project.showcaseImage}
          description={project.description}
          link={project.link}
          techStack={project.techStack[0]}
          building={project.building}
        />
      </div>
    ))}
  </div>
) : (
 <NoProjectsYet />
)}
    </div>
  );
  return (
    <div className="overflow-y-hidden">
      <DesktopView />
      <MobileView />
    </div>
  );
};

export default ProjectsViewfinder;
