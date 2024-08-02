"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
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
import { Skeleton, Tooltip } from "@nextui-org/react";

import Link from "next/link";
import { SiExpress, SiFlask, SiHiveBlockchain } from "react-icons/si";

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

  //TODO: fix the unwanted loading of the skeleton when the mouse hovers over clear filter or project tab changes state
  //TODO: Fix page wide skeleto issue on load

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
    };

    const Icon = iconMap[techStack] || RiReactjsFill;
    return <Icon className="text-2xl" />;
  };
  return (
    <>
      <div className="flex flex-col bg-[#011221] border-1 rounded-3xl lg:rounded-lg w-[320px] 3xl:w-[370px] h-[315px] relative flex-shrink">
        <Skeleton
          isLoaded={isImageLoaded}
          className="rounded-t-3xl lg:rounded-t-lg h-1/2"
        >
          {/* added showcase image to bg of upper div so as to avoid it overflowing to lower div and taking more space */}
          <div
            className="relative h-1/2 bg-cover rounded-t-3xl lg:rounded-t-lg"
          >
            {/* Showcase Image */}
            <Image
              src={showcaseImage}
              height={125}
              width={370}
              alt={title}
              className="rounded-t-3xl lg:rounded-t-lg"
              onLoad={() => setIsImageLoaded(true)}
              onError={() => setIsImageLoaded(true)}
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
                      <p className="text-xs">This project is actively being developed</p>
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
            <p className="text-fade-text text-sm">{description}</p>
          </Skeleton>
          <Skeleton isLoaded={isImageLoaded} className="w-full">
            <Button asChild variant="secondary" className="w-full">
              <Link href={link} target="_blank" rel="noopener noreferrer">
                view-project
              </Link>
            </Button>
          </Skeleton>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
