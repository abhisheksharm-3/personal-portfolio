import BasePage from "@/components/BasePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "_hello - Abhishek Sharma",
  description: "",
};

function LandingPage() {
  return (
    <BasePage className="" active="_hello">
      Hi. I&apos; Abhishek Sharma &gt;Another Front-End Developer
    </BasePage>
  );
}

export default LandingPage;
