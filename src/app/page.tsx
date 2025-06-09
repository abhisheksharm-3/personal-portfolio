import BasePage from "@/components/BasePage";
import type { Metadata } from "next";
import TypewriterEffect from "@/components/TypeWriterEffect/TypeWriterEffect";
import "@/constants/nightOwl.css";
import dynamic from "next/dynamic";

const SnakeGame = dynamic(() => import("@/components/Game/SnakeGame"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "_hello - Abhishek Sharma",
  description: "Full-Stack Developer",
};

function LandingPage() {
  return (
    <BasePage className="" active="_hello">
      <div className="hidden lg:flex items-center justify-around bg-[url('/images/temp-bg-blur.svg')] bg-contain bg-no-repeat bg-right h-screen">
        <div className="flex flex-col items-start justify-center gap-20">
          <div className="flex flex-col items-start justify-center gap-3">
            <span className="text-[16px]">&nbsp;Hi all. I am</span>
            <span className="text-6xl leading-tight">Abhishek Sharma</span>
            <span className="text-4xl text-blue-text flex gap-5">
              &gt; <TypewriterEffect />
            </span>
          </div>
          <div className="flex flex-col gap-1 group">
            <span className="text-fade-text">
              &#x2F;&#x2F; check out my new portfolio in the works
            </span>
            <span className="transition-colors duration-300 hover:text-blue-text">
              <span className="text-blue-text">const</span>{" "}
              <span className="text-green-text">portfolioLink</span> ={" "}
              <span className="text-skin-text">
                &quot;new.abhisheksharma.tech&quot;
              </span>
            </span>
            <span className="text-fade-text text-sm pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              &#x2F;&#x2F; last updated: 2025-06-09
            </span>
          </div>
        </div>
        <div className="transform transition-transform">
        <div className="flex flex-col gap-1">
            <span className="text-fade-text">
              &#x2F;&#x2F; fancy a game of snake while you&apos;re here?
            </span>
          </div>
          <SnakeGame />
        </div>
      </div>
      <div className="flex lg:hidden bg-[url('/images/temp-bg-blur-mobile.svg')] bg-no-repeat bg-cover h-screen">
        <div className="flex flex-col items-start justify-around px-4 w-screen py-10">
          <div className="flex flex-col gap-4 text-[#E5E9F0]">
            <span className="text-[16px]">&nbsp;Hi all. I am</span>
            <span className="text-6xl leading-tight">Abhishek Sharma</span>
            <span className="text-2xl text-green-text flex gap-4">
              &gt; <TypewriterEffect />
            </span>
          </div>

          <div className="pt-6 flex flex-col gap-3">
            <span className="text-fade-text">
              &#x2F;&#x2F; check out my new portfolio in the works
            </span>
            <span>
              <span className="text-blue-text">const</span>{" "}
              <span className="text-green-text">portfolioLink</span> ={" "}
              <span className="text-skin-text">
                &quot;new.abhisheksharma.tech&quot;
              </span>
            </span>
            <span className="text-fade-text text-xs pt-1">
              &#x2F;&#x2F; last updated: 2025-06-09
            </span>
          </div>
        </div>
      </div>
    </BasePage>
  );
}

export default LandingPage;