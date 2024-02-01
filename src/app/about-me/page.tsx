import BasePage from "@/components/BasePage"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "_about-me - Abhishek Sharma",
  description: "",
};

function AboutMe() {
  return (
    <BasePage active="_about-me">
    About Me
    </BasePage>
  )
}

export default AboutMe