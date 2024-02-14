import BasePage from "@/components/BasePage";
import type { Metadata } from "next";
import { Code } from "bright";
import { CodeSnippets } from "@/constants/CodeSnippets";
import highlighterTheme from "../constants/highlighterTheme.json";
import TypewriterEffect from "@/components/TypeWriterEffect/TypeWriterEffect";

export const metadata: Metadata = {
  title: "_hello - Abhishek Sharma",
  description: "",
};

Code.theme = highlighterTheme;
function LandingPage() {
  return (
    <BasePage className="" active="_hello">
      <div className="hidden lg:flex items-center justify-around bg-[url('/images/temp-bg-blur.svg')] bg-contain bg-no-repeat bg-right h-screen">
        <div className="flex flex-col items-start justify-center gap-20">
          <div className="flex flex-col items-start justify-center gap-3">
            <span className="text-[16px]">&nbsp;Hi all. I am</span>
            <span className="text-6xl">Abhishek Sharma</span>
            <span className="text-4xl text-blue-text flex gap-5">
              &gt; <TypewriterEffect />
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-fade-text">
              &#x2F;&#x2F; see the portfolio code on my github
            </span>
            <span className="">
              <span className="text-blue-text">const</span>{" "}
              <span className="text-green-text">githubLink</span> ={" "}
              <span className="text-skin-text">
                &quot;https://github.com/abhisheksharm-3/personal-portfolio&quot;
              </span>
            </span>
          </div>
        </div>
        <div className=" ">
          {/*TODO: Inbuilt tailwind classes not working for rounded corners */}
          {CodeSnippets.map((snippet, index) => (
            <Code className="" style={{ borderRadius: '8px' }} lang="js" key={index}>
              {snippet.Code}
            </Code>
          ))}
        </div>
      </div>
      <div className="flex lg:hidden bg-[url('/images/temp-bg-blur-mobile.svg')] bg-no-repeat bg-cover h-screen">
        <div className="flex flex-col items-start justify-around px-4 w-screen py-10">
          <div className="flex flex-col gap-4 text-[#E5E9F0]">
            <span className="text-[16px]">&nbsp;Hi all. I am</span>
            <span className="text-6xl">Abhishek Sharma</span>
            <span className="text-2xl text-green-text flex gap-4">
              &gt; <TypewriterEffect />
            </span>
          </div>

          <div className="pt-6 flex flex-col gap-3">
            <span className="text-fade-text">
              &#x2F;&#x2F; see the portfolio code on my github
            </span>
            <span>
              <span className="text-blue-text">const</span>{" "}
              <span className="text-green-text">githubLink</span> ={" "}
              <span className="text-skin-text">
                &quot;https://github.com/abhisheksharm-3/personal-portfolio&quot;
              </span>
            </span>
          </div>
        </div>
      </div>
    </BasePage>
  );
}

export default LandingPage;
