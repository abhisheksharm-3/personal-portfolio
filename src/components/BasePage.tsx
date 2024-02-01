import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { RiGithubFill, RiLinkedinFill } from "@remixicon/react";
import Link from "next/link";

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
      className={cn(
        "h-screen w-screen flex flex-col justify-between font-fira bg-blue-primary",
        className
      )}
    >
      <nav className="flex justify-between border-b-2 border-b-line text-[15px] text-fade-text">
        <div className="flex flex-grow">
          <div className="border-r-2 border-r-line px-3 py-4">
            <span className="pr-32 flex  items-center justify-center">
              abhishek_sharma
            </span>
          </div>
          <Link href={"/"}>
            <div
              className={cn("border-r-2 border-r-line px-3 py-4", {
                "text-white": active === "_hello",
                "border-b-3 border-b-[#FEA55F]": active === "_hello",
              })}
            >
              <span className="cursor-pointer px-6 flex  items-center justify-center">
                _hello
              </span>
            </div>
          </Link>
          <Link href={"/about-me"}>
            <div
              className={cn("border-r-2 border-r-line px-3 py-4", {
                "text-white": active === "_about-me",
                "border-b-3 border-b-[#FEA55F]": active === "_about-me",
              })}
            >
              <span className="cursor-pointer px-6 flex  items-center justify-center">
                _about-me
              </span>
            </div>
          </Link>
          <Link href={"/projects"}>
            <div
              className={cn("border-r-2 border-r-line px-3 py-4", {
                "text-white": active === "_projects",
                "border-b-3 border-b-[#FEA55F]": active === "_projects",
              })}
            >
              <span className="cursor-pointer px-6 flex  items-center justify-center">
                _projects
              </span>
            </div>
          </Link>
        </div>
        <Link href={"/contact-me"}>
          <div
            className={cn("border-l-2 border-l-line px-3 py-4", {
              "text-white": active === "_contact-me",
              "border-b-3 border-b-[#FEA55F]": active === "_contact-me",
            })}
          >
            <span className="cursor-pointer px-6 flex  items-center justify-center">
              _contact-me
            </span>
          </div>
        </Link>
      </nav>
      {children}
      <footer className="flex justify-between border-t-2 border-t-line text-[15px] text-fade-text">
        <div className="flex flex-grow">
          <div className="border-r-2 border-r-line px-3 py-3 flex  items-center justify-center">
            <span>find me on:</span>
          </div>
          <div className="border-r-2 border-r-line px-3 py-3 flex  items-center justify-center cursor-pointer">
            <a
              href="https://www.linkedin.com/in/abhisheksharma20212025/"
              target="_blank"
            >
              <RiLinkedinFill />
            </a>
          </div>
        </div>
        <div className="border-l-2 border-l-line px-3 py-3 cursor-pointer">
          <a
            className="gap-2 flex  items-center justify-center"
            href="https://github.com/abhisheksharm-3"
            target="_blank"
          >
            <span className="">@abhisheksharm-3</span>
            <RiGithubFill />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default BasePage;
