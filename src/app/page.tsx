import BasePage from "@/components/BasePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "_hello - Abhishek Sharma",
  description: "",
};

function LandingPage() {
  return (
    <BasePage className="" active="_hello">
      <div className="flex items-center justify-around">
        <div className="flex flex-col items-start justify-center gap-20">
          <div className="flex flex-col items-start justify-center gap-3">
            <span className="text-[16px]">&nbsp;Hi all. I am</span>
            <span className="text-6xl">Abhishek Sharma</span>
            <span className="text-4xl text-blue-text">&gt; Front-End Developer</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-fade-text">&#x2F;&#x2F; see the portfolio code on my github</span>
            <span>
              <span className="text-blue-text">const</span> <span className="text-green-text">githubLink</span> = <span className="text-skin-text">&quot;https://github.com/abhisheksharm-3&quot;</span>
            </span>
          </div>
        </div>
        <div></div>
      </div>
    </BasePage>
  );
}

export default LandingPage;
