"use client";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { projects } from "@/constants/projects";
import { RiCloseLine, RiTrainFill, RiTriangleFill } from "@remixicon/react";

const ProjectsViewfinder = () => {
  return (
    <div className="overflow-y-scroll">
      {/* Desktop Version */}
      <div className="hidden lg:flex flex-row h-screen">
        {" "}
        {/*remove h-screen in case of overflow */}
        <div className="flex flex-col border-r-2">
          <div className="flex items-center gap-2 pr-40 bg-[#1e2d3d] lg:bg-transparent lg:border-b-2 py-2 px-3 cursor-pointer">
            {" "}
            <RiTriangleFill className="w-[8.5px] h-[6px] rotate-90" />{" "}
            <span className="pr-0.5">projects&nbsp;&nbsp;</span>
          </div>
        </div>
        <div className="flex-grow flex flex-col">
          <div className="flex-grow">
            <div className="border-b-2">
              <div className=" border-r-2 max-w-max pr-2 h-fit">
                <div className="flex items-center gap-12 text-fade-text py-2 px-3">
                  <span className="">react</span>
                  <RiCloseLine className="w-[18px] h-[18px] hover:text-white duration-400 cursor-pointer" />{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row flex-grow h-full">
            <div className="grid grid-cols-3 gap-4 pt-20 w-full px-32">
              {projects.map((project, index) => (
                <div key={index}>
                  <div className="flex gap-8 py-2">
                    <p className="text-[#5565E8]">{`Project ${index + 1}`}</p>
                    <p className="text-fade-text lowercase">{`// _${project.title}`}</p>
                  </div>
                  <ProjectCard
                    key={index} // Ensure each card has a unique key
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
      {/* Mobile Version */}
      <div className="flex flex-col gap-4 h-screen py-4 lg:hidden overflow-hidden">
        <div className="flex px-4">_contact-me</div>
        <div className="flex flex-col gap-1 overflow-auto"></div>
        <div className="w-full flex items-center justify-center"></div>
      </div>
    </div>
  );
};

export default ProjectsViewfinder;
