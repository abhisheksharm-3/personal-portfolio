import { RiGithubFill, RiLinkedinFill } from "@remixicon/react";

function Footer() {
  return (
    <>
      {/* Desktop Footer */}
      <footer className="hidden lg:flex justify-between border-t-2 border-t-line text-[15px] text-fade-text">
        <div className="flex flex-grow">
          <div className="border-r-2 border-r-line px-3 py-3 flex  items-center justify-center">
            <span>find me on:</span>
          </div>
          <div className="border-r-2 border-r-line px-3 py-3 flex  items-center justify-center cursor-pointer hover:text-[#C4C4C4] duration-400">
            <a
              href="https://www.linkedin.com/in/abhisheksharma20212025/"
              target="_blank"
            >
              <RiLinkedinFill />
            </a>
          </div>
        </div>
        <div className="border-l-2 border-l-line px-3 py-3 cursor-pointer hover:text-[#C4C4C4] duration-400">
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
      {/* Mobile Footer */}
      <footer className="flex lg:hidden justify-between border-t-2 border-t-line text-[15px] text-fade-text">
        <div className="flex flex-grow">
          <div className=" px-3 py-3 flex  items-center justify-center">
            <span>find me on:</span>
          </div>
        </div>
        <div className="flex">
          <div className="border-l-2 border-l-line px-3 py-3 flex  items-center justify-center cursor-pointer hover:text-[#C4C4C4] duration-400">
            <a
              href="https://www.linkedin.com/in/abhisheksharma20212025/"
              target="_blank"
            >
              <RiLinkedinFill />
            </a>
          </div>
          <div className="border-l-2 border-l-line px-3 py-3 cursor-pointer hover:text-[#C4C4C4] duration-400">
            <a
              className="gap-2 flex  items-center justify-center"
              href="https://github.com/abhisheksharm-3"
              target="_blank"
            >
              <RiGithubFill />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
