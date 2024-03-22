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
} from "@remixicon/react";
import { Skeleton } from "@nextui-org/react";

import Link from "next/link";

interface ProjectCardProps {
  title: string;
  showcaseImage: string;
  description: string;
  link: string;
  techStack: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  showcaseImage,
  description,
  link,
  techStack,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 700);

    return () => clearTimeout(timeout);
  }, []);
  let TechIcon;

  // Dynamically select the appropriate icon based on the techStack value
  switch (techStack) {
    case "React":
      TechIcon = RiReactjsFill;
      break;
    case "Angular":
      TechIcon = RiAngularjsFill;
      break;
    case "Vue":
      TechIcon = RiVuejsFill;
      break;
    case "HTML":
      TechIcon = RiHtml5Line;
      break;
    case "NextJs":
      TechIcon = RiNextjsLine;
      break;
    default:
      TechIcon = RiReactjsFill; // Default to React icon if tech stack is not recognized
  }

  return (
    <>
      <div className="flex flex-col bg-[#011221] border-1 rounded-3xl lg:rounded-lg w-[320px] 3xl:w-[370px] h-[315px] relative flex-shrink">
        <Skeleton
          isLoaded={isLoaded}
          className="rounded-t-3xl lg:rounded-t-lg h-1/2"
        >
          {/* added showcase image to bg of upper div so as to avoid it overflowing to lower div and taking more space */}
          <div
            className="relative h-1/2 bg-cover rounded-t-3xl lg:rounded-t-lg"
            // style={{ backgroundImage: `url(${showcaseImage})` }}
          >
            {/* Showcase Image */}
            <Image
              src={showcaseImage}
              height={125}
              width={370}
              alt={title}
              className="rounded-t-3xl lg:rounded-t-lg"
            />
            {/* Tech Stack Icon */}
            <TechIcon className="absolute top-0 right-0 transform -translate-x-1/2 translate-y-1/2 text-2xl" />
          </div>
        </Skeleton>
        <div className="flex flex-col w-full items-start gap-4 px-8 justify-center h-1/2 border-t-1">
          <Skeleton isLoaded={isLoaded} className="rounded-lg">
            <p className="text-fade-text">{description}</p>
          </Skeleton>
          <Skeleton isLoaded={isLoaded} className="rounded-lg">
            <Button asChild variant={"secondary"}>
              <Link href={link} target="_blank">
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
