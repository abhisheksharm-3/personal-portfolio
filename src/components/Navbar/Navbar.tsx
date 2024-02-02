import Link from "next/link";
import { cn } from "@/lib/utils";

function Navbar({ active }: { active: string }) {
  return (
    <nav className="flex justify-between border-b-2 border-b-line text-[15px] text-fade-text">
      <div className="flex flex-grow">
        <div className="border-r-2 border-r-line px-3 py-4">
          <span className="pr-32 flex  items-center justify-center">
            abhishek_sharma
          </span>
        </div>
        <Link href={"/"}>
          <div
            className={cn("border-r-2 border-r-line px-3 py-4 hover:text-[#C4C4C4] duration-400", {
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
            className={cn("border-r-2 border-r-line px-3 py-4 hover:text-[#C4C4C4] duration-400", {
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
            className={cn("border-r-2 border-r-line px-3 py-4 hover:text-[#C4C4C4] duration-400", {
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
          className={cn("border-l-2 border-l-line px-3 py-4 hover:text-[#C4C4C4] duration-400", {
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
  );
}

export default Navbar;
