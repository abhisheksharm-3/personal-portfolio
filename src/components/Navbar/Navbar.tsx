"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { RiMenuLine, RiCloseLine } from "@remixicon/react";
import { useState } from "react";
import Footer from "../Footer/Footer";

function Navbar({ active }: { active: string }) {
  const [isMobileNavbarOpen, setMobileNavbarOpen] = useState<boolean>(false);

  const toggleMobileNavbar = () => {
    setMobileNavbarOpen((currentState: boolean) => {
      return !currentState;
    });
  };
  return (
    <>
      <nav className="hidden lg:flex justify-between border-b-2 border-b-line text-[15px] text-fade-text">
        <div className="flex flex-grow">
          <div className="border-r-2 border-r-line px-3 py-4">
            <span className="pr-32 flex  items-center justify-center">
              abhishek_sharma
            </span>
          </div>
          <Link href={"/"}>
            <div
              className={cn(
                "border-r-2 border-r-line px-3 py-4 hover:text-[#C4C4C4] duration-400",
                {
                  "text-white": active === "_hello",
                  "border-b-3 border-b-[#FEA55F]": active === "_hello",
                }
              )}
            >
              <span className="cursor-pointer px-6 flex  items-center justify-center">
                _hello
              </span>
            </div>
          </Link>
          <Link href={"/about-me"}>
            <div
              className={cn(
                "border-r-2 border-r-line px-3 py-4 hover:text-[#C4C4C4] duration-400",
                {
                  "text-white": active === "_about-me",
                  "border-b-3 border-b-[#FEA55F]": active === "_about-me",
                }
              )}
            >
              <span className="cursor-pointer px-6 flex  items-center justify-center">
                _about-me
              </span>
            </div>
          </Link>
          <Link href={"/projects"}>
            <div
              className={cn(
                "border-r-2 border-r-line px-3 py-4 hover:text-[#C4C4C4] duration-400",
                {
                  "text-white": active === "_projects",
                  "border-b-3 border-b-[#FEA55F]": active === "_projects",
                }
              )}
            >
              <span className="cursor-pointer px-6 flex  items-center justify-center">
                _projects
              </span>
            </div>
          </Link>
        </div>
        <Link href={"/contact-me"}>
          <div
            className={cn(
              "border-l-2 border-l-line px-3 py-4 hover:text-[#C4C4C4] duration-400",
              {
                "text-white": active === "_contact-me",
                "border-b-3 border-b-[#FEA55F]": active === "_contact-me",
              }
            )}
          >
            <span className="cursor-pointer px-6 flex  items-center justify-center">
              _contact-me
            </span>
          </div>
        </Link>
      </nav>
      <nav className="lg:hidden flex border-b-2 border-b-line text-[15px] text-fade-text">
        {!isMobileNavbarOpen && (
          <div className=" flex items-center justify-between px-4 w-screen">
            <span className="flex items-center justify-center py-5">
              abhishek_sharma
            </span>

            <RiMenuLine
              className="hover:text-[#C4C4C4] duration-400 cursor-pointer"
              onClick={toggleMobileNavbar}
            />
          </div>
        )}
        {isMobileNavbarOpen && (
          <div className="grid grid-rows-[auto,1fr,auto] gap-y-4 h-screen bg-blue-primary w-screen fixed">
            <div className="flex items-center justify-between px-4 border-b-2 border-b-line">
              <span className="flex items-center justify-center py-5">
                abhishek_sharma
              </span>
              <RiCloseLine
                className="hover:text-[#C4C4C4] duration-400 cursor-pointer"
                onClick={toggleMobileNavbar}
              />
            </div>
            <div className="flex flex-col gap-4 text-lg font-light w-screen">
              <Link href={"/"} onClick={toggleMobileNavbar}>
                <div className="text-white border-b-2 border-b-line px-4 pb-4">
                  <span>_hello</span>
                </div>
              </Link>
              <Link href={"/about-me"} onClick={toggleMobileNavbar}>
                <div className="text-white border-b-2 border-b-line px-4 pb-4">
                  <span>_about-me</span>
                </div>
              </Link>
              <Link href={"/projects"} onClick={toggleMobileNavbar}>
                <div className="text-white border-b-2 border-b-line px-4 pb-4">
                  <span>_projects</span>
                </div>
              </Link>
              <Link href={"/contact-me"} onClick={toggleMobileNavbar}>
                <div className="text-white border-b-2 border-b-line px-4 pb-4">
                  <span>_contact-me</span>
                </div>
              </Link>
            </div>
            <Footer />
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
