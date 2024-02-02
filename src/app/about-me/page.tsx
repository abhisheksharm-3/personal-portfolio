import BasePage from "@/components/BasePage"
import ComingSoon from "@/components/ComingSoon/ComingSoon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "_about-me - Abhishek Sharma",
  description: "",
};

function AboutMe() {
  return (
    <BasePage active="_about-me">
    <ComingSoon />
    </BasePage>
  )
}

export default AboutMe