"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  RiGithubFill,
  RiEmotionSadLine,
  RiLightbulbLine,
  RiHeartPulseLine,
  RiTimeLine,
} from "@remixicon/react";
import { Button, Link, Skeleton, Progress, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react";

interface GravestoneCardProps {
  title: string;
  showcaseImage: string;
  description: string;
  repoLink?: string;  // Optional
  techStack: string[];
  causeOfDeath: string;
  lifetime: string;
  lessonsLearned: string;
  resurrectionPotential: number; // 0-100
}

const GravestoneCard: React.FC<GravestoneCardProps> = ({
  title,
  showcaseImage,
  description,
  repoLink,
  techStack,
  causeOfDeath,
  lifetime,
  lessonsLearned,
  resurrectionPotential,
}) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isAutopsyOpen, setIsAutopsyOpen] = useState(false);

  const openAutopsy = () => setIsAutopsyOpen(true);
  const closeAutopsy = () => setIsAutopsyOpen(false);

  return (
    <>
      {/* Card Component */}
      <div 
        className="flex flex-col bg-[#0d1117] border-1 border-gray-700 rounded-3xl lg:rounded-lg w-[320px] 3xl:w-[370px] h-[350px] relative flex-shrink transition-all duration-300 hover:border-gray-600"
        style={{
          backgroundImage: "radial-gradient(circle at bottom, #141b27, #0d1117 60%)",
          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.6)"
        }}
      >
        <Skeleton
          isLoaded={isImageLoaded}
          className="rounded-t-3xl lg:rounded-t-lg h-1/3"
        >
          <div className="relative h-1/3 rounded-t-3xl lg:rounded-t-lg overflow-hidden" 
              style={{filter: "grayscale(80%) brightness(0.7)"}}>
            <Image
              src={showcaseImage}
              height={125}
              width={370}
              alt={title}
              className="rounded-t-3xl lg:rounded-t-lg object-cover opacity-70 h-full w-full"
              onLoad={() => setIsImageLoaded(true)}
              onError={() => setIsImageLoaded(true)}
              quality={100}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#0d1117]"></div>
          </div>
        </Skeleton>
        
        <div className="flex flex-col flex-grow p-4 justify-between">
          <Skeleton isLoaded={isImageLoaded} className="mb-2">
            <div className="text-center mb-1">
              <h3 className="text-xl font-semibold text-gray-300 tracking-tight">{title}</h3>
              <p className="text-gray-500 text-xs italic">{lifetime}</p>
            </div>
            
            <hr className="border-gray-700 opacity-50 my-2" />
            
            <p className="text-gray-400 text-sm mb-2 line-clamp-2">{description}</p>
            
            <div className="flex items-center gap-2 mb-1">
              <RiEmotionSadLine className="text-red-700 text-lg flex-shrink-0" />
              <span className="text-sm text-gray-400 truncate">
                <span className="text-gray-300">Cause: </span>
                {causeOfDeath}
              </span>
            </div>
          </Skeleton>
          
          <div className="flex gap-2 mt-auto">
            <Skeleton isLoaded={isImageLoaded} className="flex-1">
              <Button
                className="w-full z-40 rounded-md h-9 font-medium border-1 group transition-all"
                style={{
                  backgroundColor: "#1c1f26",
                  borderColor: "#2c3140",
                  background: "linear-gradient(135deg, #1c1f26, #232731)"
                }}
                onPress={openAutopsy}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400 group-hover:from-gray-100 group-hover:to-gray-300 transition-all">
                  view-autopsy
                </span>
              </Button>
            </Skeleton>
            
            {repoLink && (
              <Skeleton isLoaded={isImageLoaded} className="w-auto">
                <Button
                  as={Link}
                  href={repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  isIconOnly
                  className="rounded-md h-9 font-medium flex items-center border-1 transition-all hover:opacity-90"
                  style={{
                    backgroundColor: "#1c1f26",
                    borderColor: "#2c3140",
                    background: "linear-gradient(135deg, #1c1f26, #232731)"
                  }}
                >
                  <RiGithubFill className="text-xl text-gray-300" />
                </Button>
              </Skeleton>
            )}
          </div>
        </div>
      </div>

      {/* Autopsy Modal Dialog with Fixed Scrolling */}
      <Modal 
        isOpen={isAutopsyOpen} 
        onClose={closeAutopsy}
        size="md"
        classNames={{
          base: "bg-[#0d1117] border-gray-800 border shadow-xl",
          wrapper: "!max-h-[100vh] overflow-hidden",
          header: "border-b border-gray-800",
          body: "p-0 overflow-hidden",
          footer: "border-t border-gray-800",
          closeButton: "hidden",
        }}
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <>
              {/* Enhanced Header from newer design */}
              <ModalHeader className="flex flex-col gap-1 text-gray-300 bg-[#0d1117] py-4">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <span className="text-red-500 font-mono text-sm">R.I.P</span>
                    <h2 className="text-xl font-semibold">{title}</h2>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-xs">
                    <RiTimeLine className="text-gray-500" />
                    {lifetime}
                  </div>
                </div>
              </ModalHeader>
              
              {/* Modal Body with Fixed Height and Scrollable Content */}
              <ModalBody className="overflow-hidden p-0">
                {/* Hero Image from newer design */}
                <div className="relative w-full h-40">
                  <Image
                    src={showcaseImage}
                    fill
                    alt={title}
                    className="object-cover opacity-80"
                    style={{filter: "grayscale(70%) brightness(0.8)"}}
                    quality={100}
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#0d1117]"></div>
                  
                  <div className="absolute bottom-0 left-0 w-full p-4">
                    <h3 className="text-xl font-bold text-white mb-1 drop-shadow-lg">{title}</h3>
                    <p className="text-gray-300 text-sm max-w-md">{description}</p>
                  </div>
                </div>
                
                {/* Scrollable Content Area */}
                <div className="max-h-[50vh] overflow-y-auto custom-scrollbar">
                  <div className="p-4">
                    {/* Content from previous design */}
                    <div className="py-2">
                      {/* Cause of Death */}
                      <div className="flex items-start gap-2 mb-4 bg-[#1c1f26] p-3 rounded-lg border border-gray-800">
                        <RiEmotionSadLine className="text-red-700 text-xl mt-1 flex-shrink-0" />
                        <div>
                          <span className="text-sm text-gray-300 block">Cause of Death:</span>
                          <span className="text-sm text-gray-400">{causeOfDeath}</span>
                        </div>
                      </div>
                      
                      {/* Lessons Learned */}
                      <div className="flex items-start gap-2 mb-4 bg-[#1c1f26] p-3 rounded-lg border border-gray-800">
                        <RiLightbulbLine className="text-yellow-600 text-xl mt-1 flex-shrink-0" />
                        <div>
                          <span className="text-sm text-gray-300 block">Lessons Learned:</span>
                          <p className="text-sm text-gray-400">{lessonsLearned}</p>
                        </div>
                      </div>
                      
                      {/* Revival Potential */}
                      <div className="flex items-start gap-2 mb-4 bg-[#1c1f26] p-3 rounded-lg border border-gray-800">
                        <RiHeartPulseLine className="text-green-700 text-xl mt-1 flex-shrink-0" />
                        <div className="w-full">
                          <span className="text-sm text-gray-300 block">Revival Potential:</span>
                          <div className="flex items-center gap-2 mt-2 w-full">
                            <Progress 
                              aria-label="Resurrection Potential" 
                              value={resurrectionPotential} 
                              color={resurrectionPotential > 70 ? "success" : resurrectionPotential > 30 ? "warning" : "danger"}
                              size="sm"
                              className="h-2 flex-grow"
                              classNames={{
                                indicator: "bg-gradient-to-r from-pink-500 to-yellow-500",
                              }}
                              radius="sm"
                            />
                            <span className="text-xs text-gray-400 min-w-[40px] text-right">{resurrectionPotential}%</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Tech Stack */}
                      <div className="mt-4">
                        <span className="text-sm text-gray-300 block mb-2">Tech Stack:</span>
                        <div className="flex flex-wrap gap-2">
                          {techStack.map((tech, index) => (
                            <span 
                              key={index} 
                              className="text-xs bg-[#1c1f26] text-gray-400 px-2 py-1 rounded-md border border-gray-800"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ModalBody>
              
              <ModalFooter>
                {repoLink && (
                  <Button
                    as={Link}
                    href={repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md h-9 font-medium flex items-center border-1 transition-all gap-1"
                    style={{
                      backgroundColor: "#1c1f26",
                      borderColor: "#2c3140",
                    }}
                  >
                    <RiGithubFill className="text-lg text-gray-300" />
                    <span className="text-gray-300">View Repository</span>
                  </Button>
                )}
                <Button
                  className="rounded-md h-9 font-medium font-fira border-1 group transition-all"
                  style={{
                    backgroundColor: "#1c1f26",
                    borderColor: "#2c3140",
                    background: "linear-gradient(135deg, #1c1f26, #232731)"
                  }}
                  onPress={onClose}
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400 group-hover:from-gray-100 group-hover:to-gray-300 transition-all">
                    close-autopsy
                  </span>
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #0d1117;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #30363d;
          border-radius: 20px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #484f59;
        }
      `}</style>
    </>
  );
};

export default GravestoneCard;