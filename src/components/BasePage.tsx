import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import {RiGithubLine, RiLinkedinFill} from "@remixicon/react"

const BasePage = ({
  className,
  children,
  active,
}: {
  className?: string;
  children: ReactNode;
  active: string;
}) => {
  return (
    <div
      className={cn("h-screen w-screen flex flex-col justify-between font-fira bg-blue-primary", className)}
    >
      <nav className="flex justify-between border-b-2 border-b-line text-[15px] text-fade-text">
        <div className="flex flex-grow">
          <div className="border-r-2 border-r-line px-3 py-4">
            <span className="pr-32 flex  items-center justify-center">abhishek_sharma</span>
          </div>
          <div
            className={cn("border-r-2 border-r-line px-3 py-4", {
              "text-white": active === "_hello",
              "border-b-3 border-b-[#FEA55F]": active === "_hello",
            })}
          >
            <span className="cursor-pointer px-6 flex  items-center justify-center">_hello</span>
          </div>
          <div
            className={cn("border-r-2 border-r-line px-3 py-4", {
              "text-white": active === "_about-me",
              "border-b-3 border-b-[#FEA55F]": active === "_about-me",
            })}
          >
            <span className="cursor-pointer px-6 flex  items-center justify-center">_about-me</span>
          </div>
          <div
            className={cn("border-r-2 border-r-line px-3 py-4", {
              "text-white": active === "_projects",
              "border-b-3 border-b-[#FEA55F]": active === "_projects",
            })}
          >
            <span className="cursor-pointer px-6 flex  items-center justify-center">_projects</span>
          </div>
        </div>
        <div
          className={cn("border-l-2 border-l-line px-3 py-4", {
            "text-white": active === "_contact-me",
            "border-b-3 border-b-[#FEA55F]": active === "_contact-me",
          })}
        >
          <span className="cursor-pointer px-6 flex  items-center justify-center">_contact-me</span>
        </div>
      </nav>
      {children}
      <footer className="flex justify-between border-t-2 border-t-line text-[15px] text-fade-text">
        <div className="flex flex-grow">
          <div className="border-r-2 border-r-line px-2 py-3 flex  items-center justify-center">
            <span>find me in:</span>
          </div>
          <div className="border-r-2 border-r-line px-2 py-3 flex  items-center justify-center">
            <RiLinkedinFill />
          </div>
        </div>
        <div className="border-l-2 border-l-line px-3 py-4 gap-2 flex  items-center justify-center">
        <span className="">@abhisheksharm-3</span><RiGithubLine />
        </div>
      </footer>
    </div>
  );
};

export default BasePage;
