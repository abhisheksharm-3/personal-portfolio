"use client";

//TODO: USE ZUSTAND
//FIX: EVENT BUBBLING IS STILL GIVING ISSUE
import React, {useState } from "react";
import {
  RiCloseLine,
  RiTerminalBoxFill,
  RiGamepadFill,
  RiUser4Fill,
  RiTriangleFill,
  RiArrowRightSLine,
  RiFolder3Fill,
  RiMarkdownFill,
  RiFilePdf2Fill,
} from "@remixicon/react";
import { Tooltip } from "@nextui-org/react";
import ContactsSection from "@/components/ContactsSection/ContactsSection";
import NothingOpen from "@/components/NothingOpen/NothingOpen";
import {
  high_school,
  university,
  summary,
  workExperience,
  techInterests,
  techStack,
  nerdy,
  nonNerdy,
} from "@/constants/about-me";
import SyntaxHighlighter from "react-syntax-highlighter";
import "@/constants/nightOwlContactMe.css";
import SnippetShowcase from "@/components/CodeSnippetShowcase/SnippetShowcase";
import PDFDisplayComponent from "@/components/PDFDisplayComponent/PDFDisplayComponent";

const AboutMeViewfinder = () => {
  const [selectedView, setSelectedView] = useState<string[]>([]);
  const [expandFolder, setExpandFolder] = useState<boolean>(true);
  const [selectedTab, setSelectedTab] = useState<string>("personal-info");
  const [selectedFolder, setSelectedFolder] = useState<number>(2);
  const [viewFinderActive, setViewFinderActive] = useState<boolean>(true);
  const [code, setCode] = useState<string>(summary.details);
  const [currentViewFinder, setcurrentViewFinder] = useState(true);
  const [selectedPdfUrl, setSelectedPdfUrl] = useState<string>("");

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleExpandFolder = () => setExpandFolder(!expandFolder);
  const updateViewfinderStatus = (viewfinder: boolean) => {
    setViewFinderActive(!viewfinder);
  };

  const PersonalInfo = () => {
    const [showBio, setShowBio] = useState<boolean>(true);
    const [showSummary, setShowSummary] = useState<boolean>(true);
    const [showTechInterests, setShowTechInterests] = useState<boolean>(false);
    const [showInterests, setShowInterests] = useState<boolean>(false);
    const [showEducation, setShowEducation] = useState<boolean>(false);
    const [showHighSchool, setShowHighSchool] = useState<boolean>(false);
    const [showUniversity, setShowUniversity] = useState<boolean>(false);
    const toggleShowBio = (event: React.MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();
      setShowBio(!showBio);
      setShowSummary(false);
    };
    const toggleShowEducation = (event: React.MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();
      setShowEducation(!showEducation);
      setShowHighSchool(false);
      setShowUniversity(false);
    };
    const toggleShowInterests = (event: React.MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();
      setShowInterests(!showInterests);
      setShowTechInterests(false);
    };
    const toggleShowSummary = (event: React.MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();
      setcurrentViewFinder(true);
      setShowSummary(!showSummary);
      setCode(summary.details);
      // if(viewFinderActive) updateViewfinderStatus(viewFinderActive);
      setShowHighSchool(false);
      setShowUniversity(false);
      setShowTechInterests(false);
    };
    const toggleShowTechInterests = (
      event: React.MouseEvent<HTMLDivElement>
    ) => {
      event.stopPropagation();
      setcurrentViewFinder(true);
      setShowTechInterests(!showTechInterests);
      setCode(techInterests.details);
      // updateViewfinderStatus(viewFinderActive);
      setShowSummary(false);
      setShowHighSchool(false);
      setShowUniversity(false);
    };
    const toggleShowHighSchool = (event: React.MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();
      setcurrentViewFinder(true);
      setShowHighSchool(!showHighSchool);
      setCode(high_school.details);
      // updateViewfinderStatus(viewFinderActive);
      setShowUniversity(false);
      setShowSummary(false);
      setShowTechInterests(false);
    };
    const toggleShowUniversity = (event: React.MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();
      setcurrentViewFinder(true);
      setShowUniversity(!showUniversity);
      setCode(university.details);
      // updateViewfinderStatus(viewFinderActive);
      setShowHighSchool(false);
      setShowSummary(false);
      setShowTechInterests(false);
    };
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
          <RiArrowRightSLine
            className={`rotate-${showInterests ? "90" : "0"}`}
          />
          <div className="">
            <div className="flex items-center gap-1">
              <RiFolder3Fill className="text-[#43D9AD] size-4" /> interests
            </div>
            {showInterests ? (
              <div
                className={`text-fade-text flex items-center gap-1  hover:text-white duration-400 ease-in-out ${
                  showTechInterests ? "text-white" : null
                }`}
                onClick={toggleShowTechInterests}
              >
                <RiMarkdownFill className="size-4" /> tech-interests
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
          <RiArrowRightSLine
            className={`rotate-${showEducation ? "90" : "0"}`}
          />
          <div className="">
            <div className="flex items-center gap-1">
              <RiFolder3Fill className="text-[#3A49A4] size-4" /> education
            </div>
            {showEducation ? (
              <div
                className={`text-fade-text flex flex-col items-center gap-1 pt-1`}
                onClick={toggleShowSummary}
              >
                <div
                  className={`flex gap-1 hover:text-white duration-400 ease-in-out items-center ${
                    showHighSchool ? "text-white" : null
                  }`}
                  onClick={toggleShowHighSchool}
                >
                  <RiMarkdownFill className="size-4" /> highschool
                </div>
                <div
                  className={`flex gap-1 hover:text-white duration-400 ease-in-out items-center ${
                    showUniversity ? "text-white" : null
                  }`}
                  onClick={toggleShowUniversity}
                >
                  <RiMarkdownFill className="size-4" /> university
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  };
  const ProfessionalInfo = () => {
    const [experience, setExperience] = useState(false);
    const [showExperienceSummary, setShowExperienceSummary] = useState(false);
    const [showTechStack, setShowTechStack] = useState(false);
    const [showTechStackDetails, setShowTechStackDetails] = useState(false);
    const [showCertificates, setShowCertificates] = useState(false);

    const toggleCertificateURL = (
      event: React.MouseEvent<HTMLDivElement>,
      pdfUrl: string
    ) => {
      event.stopPropagation();
      setcurrentViewFinder(false);
      setSelectedPdfUrl(pdfUrl);
    };
    const toggleExperience = (event: React.MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();
      setExperience(!experience);
      // setShowExperienceSummary(false);
    };
    const toggleShowExperienceSummary = (
      event: React.MouseEvent<HTMLDivElement>
    ) => {
      event.stopPropagation();
      setcurrentViewFinder(true);
      setShowExperienceSummary(!showExperienceSummary);
      setCode(workExperience.details);
      // updateViewfinderStatus(viewFinderActive)
      setShowTechStackDetails(false);
    };
    const toggleShowTechStackDetails = (
      event: React.MouseEvent<HTMLDivElement>
    ) => {
      event.stopPropagation();
      setcurrentViewFinder(true);
      setShowTechStackDetails(!showTechStackDetails);
      setCode(techStack.details);
      // updateViewfinderStatus(viewFinderActive)
      setShowExperienceSummary(false);
    };
    const toggleExpandFolder = (event: React.MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();
      setShowTechStack(!showTechStack);
      setShowTechStackDetails(false);
    };
    const toggleCertificate = (event: React.MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();
      setShowCertificates(!showCertificates);
    };
    return (
      <div className="flex flex-col">
        <div
          className={`flex cursor-pointer hover:text-white duration-400 ease-in-out ${
            experience ? "text-white" : null
          }`}
          onClick={toggleExperience}
        >
          <RiArrowRightSLine className={`rotate-${experience ? "90" : "0"}`} />
          <div className="">
            <div className="flex items-center gap-1">
              <RiFolder3Fill className="text-[#E99287] size-4" /> experience
            </div>
            {experience ? (
              <div
                className={`text-fade-text flex items-center gap-1  hover:text-white duration-400 ease-in-out ${
                  showExperienceSummary ? "text-white" : null
                }`}
                onClick={toggleShowExperienceSummary}
              >
                <RiMarkdownFill className="size-4" /> summary
              </div>
            ) : null}
          </div>
        </div>
        <div
          className={`flex cursor-pointer hover:text-white duration-400 ease-in-out ${
            showTechStack ? "text-white" : null
          }`}
          onClick={toggleExpandFolder}
        >
          <RiArrowRightSLine
            className={`rotate-${showTechStack ? "90" : "0"}`}
          />
          <div className="">
            <div className="flex items-center gap-1">
              <RiFolder3Fill className="text-[#43D9AD] size-4" /> tech stack
            </div>
            {showTechStack ? (
              <div
                className={`text-fade-text flex items-center gap-1  hover:text-white duration-400 ease-in-out ${
                  showTechStackDetails ? "text-white" : null
                }`}
                onClick={toggleShowTechStackDetails}
              >
                <RiMarkdownFill className="size-4" /> details
              </div>
            ) : null}
          </div>
        </div>
        <div
          className={`flex cursor-pointer hover:text-white duration-400 ease-in-out ${
            showCertificates ? "text-white" : null
          }`}
          onClick={toggleCertificate}
        >
          <RiArrowRightSLine
            className={`rotate-${showCertificates ? "90" : "0"}`}
          />
          <div className="">
            <div className="flex items-center gap-1">
              <RiFolder3Fill className="text-[#3A49A4] size-4" /> certificates
            </div>
            {showCertificates ? (
              <div>
                <div
                  className={`text-fade-text flex items-center gap-1  hover:text-white duration-400 ease-in-out`}
                  onClick={(e) =>
                    toggleCertificateURL(
                      e,
                      "/certificates/Java_Infosys.pdf"
                    )
                  }
                >
                  <RiFilePdf2Fill className="size-4" /> Core Java by Infosys
                </div>
                <div
                  className={`text-fade-text flex items-center gap-1  hover:text-white duration-400 ease-in-out`}
                  onClick={(e) =>
                    toggleCertificateURL(e, "/certificates/AbhishekSharma-NDG Linux Unhatc-certificate (2).pdf")
                  }
                >
                  <RiFilePdf2Fill className="size-4" /> Linux by Cisco
                </div>
                <div
                  className={`text-fade-text flex items-center gap-1  hover:text-white duration-400 ease-in-out`}
                  onClick={(e) =>
                    toggleCertificateURL(
                      e,
                      "/certificates/LA For ML Coursera.pdf"
                    )
                  }
                >
                  <RiFilePdf2Fill className="size-4" /> Linear Algebra for ML
                </div>
                <div
                  className={`text-fade-text flex items-center gap-1  hover:text-white duration-400 ease-in-out`}
                  onClick={(e) =>
                    toggleCertificateURL(e, "/certificates/Meta Front End Developer Certificate.pdf")
                  }
                >
                  <RiFilePdf2Fill className="size-4" /> FE Certificate by Meta
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  };
  const Hobbies = () => {
    const [showNerdy, setShowNerdy] = useState(false);
    const [showNerdyDetails, setShowNerdyDetails] = useState(false);
    const [showNonNerdy, setShowNonNerdy] = useState(false);
    const [showNonNerdyDetails, setShowNonNerdyDetails] = useState(false);

    const toggleShowNerdy = (event: React.MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();
      setShowNerdy(!showNerdy);
      setShowNerdyDetails(false);
    };

    const toggleShowNerdyDetails = (
      event: React.MouseEvent<HTMLDivElement>
    ) => {
      event.stopPropagation();
      setcurrentViewFinder(true);
      setShowNerdyDetails(!showNerdyDetails);
      setCode(nerdy.details);
      // updateViewfinderStatus(viewFinderActive)
      setShowNonNerdyDetails(false);
    };

    const toggleShowNonNerdy = (event: React.MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();
      setShowNonNerdy(!showNonNerdy);
      setShowNonNerdyDetails(false);
    };

    const toggleshowNonNerdyDetails = (
      event: React.MouseEvent<HTMLDivElement>
    ) => {
      event.stopPropagation();
      setcurrentViewFinder(true);
      setShowNonNerdyDetails(!showNonNerdyDetails);
      setCode(nonNerdy.details);
      // updateViewfinderStatus(viewFinderActive)
      setShowNerdyDetails(false);
    };
    return (
      <div className="flex flex-col">
        <div
          className={`flex cursor-pointer hover:text-white duration-400 ease-in-out ${
            showNerdy ? "text-white" : null
          }`}
          onClick={toggleShowNerdy}
        >
          <RiArrowRightSLine className={`rotate-${showNerdy ? "90" : "0"}`} />
          <div className="">
            <div className="flex items-center gap-1">
              <RiFolder3Fill className="text-[#E99287] size-4" /> nerdy
            </div>
            {showNerdy ? (
              <div
                className={`text-fade-text flex items-center gap-1  hover:text-white duration-400 ease-in-out ${
                  showNerdyDetails ? "text-white" : null
                }`}
                onClick={toggleShowNerdyDetails}
              >
                <RiMarkdownFill className="size-4" /> nerdy-hobbies
              </div>
            ) : null}
          </div>
        </div>
        <div
          className={`flex cursor-pointer hover:text-white duration-400 ease-in-out ${
            showNonNerdy ? "text-white" : null
          }`}
          onClick={toggleShowNonNerdy}
        >
          <RiArrowRightSLine
            className={`rotate-${showNonNerdy ? "90" : "0"}`}
          />
          <div className="">
            <div className="flex items-center gap-1">
              <RiFolder3Fill className="text-[#43D9AD] size-4" /> non-nerdy
            </div>
            {showNonNerdy ? (
              <div
                className={`text-fade-text flex items-center gap-1  hover:text-white duration-400 ease-in-out ${
                  showNonNerdyDetails ? "text-white" : null
                }`}
                onClick={toggleshowNonNerdyDetails}
              >
                <RiMarkdownFill className="size-4" /> non-nerdy-hobbies
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="overflow-y-hidden overflow-x-hidden">
      {/* Desktop Version */}
      <div className="hidden lg:flex flex-row h-screen">
        <div className="flex flex-col border-r-2 px-4 py-5 gap-8 text-fade-text">
          <Tooltip content="Professional Info" placement="right" delay={200}>
            <div>
              {" "}
              <RiTerminalBoxFill
                className={`cursor-pointer hover:text-white duration-400 ease-in-out ${
                  selectedFolder == 1 ? "text-white" : null
                }`}
                onClick={() => {
                  setSelectedTab("professional-info"), setSelectedFolder(1);
                }}
              />
            </div>
          </Tooltip>{" "}
          <Tooltip content="Personal Info" placement="right" delay={200}>
            <div>
              <RiUser4Fill
                className={`cursor-pointer hover:text-white duration-400 ease-in-out ${
                  selectedFolder == 2 ? "text-white" : null
                }`}
                onClick={() => {
                  setSelectedTab("personal-info");
                  setSelectedFolder(2);
                }}
              />{" "}
            </div>
          </Tooltip>
          <Tooltip content="Hobbies" placement="right" delay={200}>
            <div>
              <RiGamepadFill
                className={`cursor-pointer hover:text-white duration-400 ease-in-out ${
                  selectedFolder == 3 ? "text-white" : null
                }`}
                onClick={() => {
                  setSelectedTab("hobbies");
                  setSelectedFolder(3);
                }}
              />
            </div>
          </Tooltip>
        </div>
        <div className="flex flex-col border-r-2">
          <div
            className="flex items-center gap-2 pr-16 bg-[#1e2d3d] lg:bg-transparent lg:border-b-2 py-2 px-3 cursor-pointer"
            onClick={toggleExpandFolder}
          >
            <RiTriangleFill
              className={`rotate-${
                expandFolder ? "180" : "90"
              } w-[8.5px] h-[6px]`}
            />
            <span className="pr-3">{selectedTab.toLowerCase()}</span>
          </div>
          {expandFolder ? (
            <div className="border-b-2 text-fade-text p-3">
              {selectedFolder === 1 ? (
                <ProfessionalInfo />
              ) : selectedFolder === 2 ? (
                <PersonalInfo />
              ) : selectedFolder === 3 ? (
                <Hobbies />
              ) : (
                <PersonalInfo />
              )}
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
                        onClick={() => setSelectedView([])}
                      />
                    </div>
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row flex-grow h-full">
            <div className="flex flex-row  w-full">
              {/* Display filtered projects */}
              {/* TODO:ADD CERTIFICATIONS */}
              <div className=" border-r-2 w-1/2 overflow-y-scroll scrollbar-hide pb-36">
                {viewFinderActive ? (
                  currentViewFinder ? (
                    <div className="p-4">
                      <SyntaxHighlighter
                        language="js"
                        useInlineStyles={false}
                        className="nightOwlContactMe"
                        showLineNumbers={true}
                        wrapLongLines={true}
                      >
                        {code}
                      </SyntaxHighlighter>
                    </div>
                  ) : (
                    <PDFDisplayComponent key={selectedPdfUrl} url={selectedPdfUrl} />
                  )
                ) : (
                  <NothingOpen />
                )}
              </div>
              <div className=" w-1/2 overflow-y-scroll scrollbar-hide mt-10 mb-40">
                <span className="text-fade-text px-8 2xl:px-16">
                  &#x2F;&#x2F; Code Snippet Showcase:
                </span>
                <p className="text-gray-600 text-lg flex h-full">
                  <SnippetShowcase />
                </p>
              </div>
            </div>
            <div className="px-2 border-l-2 text-fade-text flex items-center">
              a<br />b<br />h<br />i<br />s<br />h<br />e<br />k<br />
              <br />s<br />h<br />a<br />r<br />m<br />a
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Version */}
      <div className="flex flex-col gap-4 h-screen py-4 lg:hidden overflow-y-scroll scrollbar-hide">
        <div className="flex px-4">_about-me</div>
        <div className="flex flex-col gap-1">
          <div className="flex flex-col border-r-2 gap-1">
            <div
              className="flex items-center gap-2 pr-40 bg-[#1e2d3d] lg:bg-transparent lg:border-b-2 py-2 px-3 cursor-pointer"
              onClick={() => {
                setSelectedTab("personal-info");
                setSelectedFolder(1);
              }}
            >
              <RiTriangleFill
                className={`rotate-${
                  selectedFolder === 1 ? "180" : "90"
                } w-[8.5px] h-[6px]`}
              />
              <span className="pr-0.5">personal-info&nbsp;&nbsp;</span>
            </div>
            {selectedFolder === 1 ? (
              <div className="py-3 ml-4">
                <PersonalInfo />
              </div>
            ) : null}
            <div
              className="flex items-center gap-2 pr-40 bg-[#1e2d3d] lg:bg-transparent lg:border-b-2 py-2 px-3 cursor-pointer"
              onClick={() => {
                setSelectedTab("professional-info");
                setSelectedFolder(2);
              }}
            >
              <RiTriangleFill
                className={`rotate-${
                  selectedFolder === 2 ? "180" : "90"
                } w-[8.5px] h-[6px]`}
              />
              <span className="pr-0.5">professional-info&nbsp;&nbsp;</span>
            </div>
            {selectedFolder === 2 ? (
              <div className="py-3 ml-4">
                <ProfessionalInfo />
              </div>
            ) : null}
            <div
              className="flex items-center gap-2 pr-40 bg-[#1e2d3d] lg:bg-transparent lg:border-b-2 py-2 px-3 cursor-pointer"
              onClick={() => {
                setSelectedTab("hobbies");
                setSelectedFolder(3);
              }}
            >
              <RiTriangleFill
                className={`rotate-${
                  selectedFolder === 3 ? "180" : "90"
                } w-[8.5px] h-[6px]`}
              />
              <span className="pr-0.5">hobbies&nbsp;&nbsp;</span>
            </div>
            {selectedFolder === 3 ? (
              <div className="py-3 ml-4">
                <Hobbies />
              </div>
            ) : null}
          </div>
          <ContactsSection />
        </div>
        <span className="px-6 pt-6 text-fade-text">
          <span className="text-white">&#x2F;&#x2F;&nbsp;</span>
          {selectedTab}
        </span>
        <div className="pb-12">
          {viewFinderActive ? (
            currentViewFinder ? (<div className="p-4">
            <SyntaxHighlighter
              language="js"
              useInlineStyles={false}
              className="nightOwlContactMe"
              showLineNumbers={true}
              wrapLongLines={true}
            >
              {code}
            </SyntaxHighlighter>
          </div>) : <PDFDisplayComponent url={selectedPdfUrl} />
          ) : (
            <NothingOpen />
          )}
        </div>
        <span className="px-6 pt-6">
          <span className="text-white">&#x2F;&#x2F;&nbsp;</span>
          Code snippet showcase:
        </span>
        <div className="pb-36">
          <SnippetShowcase />
        </div>
      </div>
    </div>
  );
};

export default AboutMeViewfinder;
