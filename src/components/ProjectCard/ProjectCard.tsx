"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  RiReactjsFill,
  RiAngularjsFill,
  RiVuejsFill,
  RiHtml5Line,
  RiNextjsLine,
  RiRobot3Fill,
  RiSvelteFill,
  RiToolsFill,
} from "@remixicon/react";
import { Button, Link, Skeleton, Tooltip } from "@nextui-org/react";
import { SiExpress, SiFlask, SiHiveBlockchain, SiJetpackcompose } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";

interface ProjectCardProps {
  title: string;
  showcaseImage: string;
  description: string;
  link: string;
  techStack: string;
  building: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  showcaseImage,
  description,
  link,
  techStack,
  building,
}) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Dynamically select the appropriate icon based on the techStack value
  const getTechIcon = (techStack: string) => {
    const iconMap: { [key: string]: React.ElementType } = {
      React: RiReactjsFill,
      Angular: RiAngularjsFill,
      Vue: RiVuejsFill,
      HTML: RiHtml5Line,
      NextJs: RiNextjsLine,
      "Machine Learning": RiRobot3Fill,
      ExpressJs: SiExpress,
      Flask: SiFlask,
      SvelteKit: RiSvelteFill,
      Web3: SiHiveBlockchain,
      GoLang: FaGolang,
      "Jetpack Compose": SiJetpackcompose,
    };

    const Icon = iconMap[techStack] || RiReactjsFill;
    return <Icon className="text-2xl" />;
  };

  return (
    <div className="flex flex-col bg-[#011221] border-1 rounded-3xl lg:rounded-lg w-[320px] 3xl:w-[370px] h-[315px] relative flex-shrink">
      <Skeleton
        isLoaded={isImageLoaded}
        className="rounded-t-3xl lg:rounded-t-lg h-1/2"
      >
        {/* Added White bg for better readability */}
        <div className="relative h-1/2 bg-cover rounded-t-3xl lg:rounded-t-lg bg-white"> 
          {/* Subtle overlay gradient for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#011221] z-10 opacity-60"></div>
          
          {/* Showcase Image */}
          <Image
            src={showcaseImage}
            height={125}
            width={370}
            alt={title}
            className="rounded-t-3xl lg:rounded-t-lg h-full w-full object-cover"
            onLoad={() => setIsImageLoaded(true)}
            onError={() => setIsImageLoaded(true)}
            quality={100}
          />
          
          {/* Tech Stack Icon */}
          <div className="absolute top-2 right-2 flex items-center gap-2 z-40">
            {building && (
              <Tooltip
                showArrow={true}
                placement="top"
                content={
                  <div className="p-2">
                    <p className="font-semibold">Work in Progress</p>
                    <p className="text-xs">
                      This project is actively being developed
                    </p>
                  </div>
                }
              >
                <div className="bg-[#011221] rounded-full p-2 transition-all hover:bg-[#022442]">
                  <RiToolsFill className="text-white text-lg" />
                </div>
              </Tooltip>
            )}
            <Tooltip
              showArrow={true}
              placement="top"
              content={
                <div className="p-2">
                  <p className="font-semibold">Tech Stack</p>
                  <p className="text-xs">{techStack}</p>
                </div>
              }
            >
              <div className="bg-[#011221] rounded-full p-2 transition-all hover:bg-[#022442]">
                {getTechIcon(techStack)}
              </div>
            </Tooltip>
          </div>
        </div>
      </Skeleton>
      
      <div className="flex flex-col flex-grow p-4 justify-between">
        <Skeleton isLoaded={isImageLoaded} className="mb-4">
          <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
          <p className="text-fade-text text-sm line-clamp-3">{description}</p>
        </Skeleton>
        
        <Skeleton isLoaded={isImageLoaded} className="w-full">
          <Button
            as={Link}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full z-40 rounded-md bg-[#1f2937] h-9 font-medium transition-opacity hover:opacity-90"
          >
            view-project
          </Button>
        </Skeleton>
      </div>
    </div>
  );
};

export default ProjectCard;