"use client";
import React, { useState } from "react";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { projects } from "@/constants/projects";
import {
  RiCloseLine,
  RiHtml5Line,
  RiReactjsLine,
  RiTriangleFill,
} from "@remixicon/react";
import { Checkbox } from "@nextui-org/react";

const ProjectsViewfinder = () => {
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
  const techsWithIcons = [
    { name: "React", icon: <RiReactjsLine /> },
    { name: "HTML", icon: <RiHtml5Line /> },
  ];

  const toggleTech = (tech: string) => {
    if (selectedTechs.includes(tech)) {
      setSelectedTechs(selectedTechs.filter((t) => t !== tech));
    } else {
      setSelectedTechs([...selectedTechs, tech]);
    }
  };

  const filteredProjects = projects.filter(
    (project) =>
      selectedTechs.length === 0
        ? true
        : selectedTechs.some((tech) => project.techStack.includes(tech)) //some means if some of selected techs are there in techstack of project
  );

  return (
    <div className="overflow-y-hidden">
      {/* Desktop Version */}
      <div className="hidden lg:flex flex-row h-screen">
        <div className="flex flex-col border-r-2">
          <div className="flex items-center gap-2 pr-40 bg-[#1e2d3d] lg:bg-transparent lg:border-b-2 py-2 px-3 cursor-pointer">
            <RiTriangleFill className="w-[8.5px] h-[6px] rotate-90" />
            <span className="pr-0.5">projects&nbsp;&nbsp;</span>
          </div>
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
                  className={`flex gap-2 items-center hover:text-white duration-400 ease-in-out ${
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
                        : "projects" // Default to "projects" if no technology is selected
                    }
                  </span>
                  <RiCloseLine className="w-[18px] h-[18px] hover:text-white duration-400 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row flex-grow h-full">
            <div className="grid grid-cols-3 gap-4 pt-20 pb-60 w-full px-32 overflow-y-scroll scrollbar-hide">
              {/* Display filtered projects */}
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
                  />
                </div>
              ))}
            </div>
            <div className="px-2 border-l-2 text-fade-text flex items-center">
              a<br />b<br />h<br />i<br />s<br />h<br />e<br />k<br />
              <br />s<br />h<br />a<br />r<br />m<br />a
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsViewfinder;
