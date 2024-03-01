import BasePage from "@/components/BasePage"
import AboutMeViewfinder from "./AboutMeViewfinder";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "_about-me - Abhishek Sharma",
  description: "",
};

function AboutMe() {
  return (
    <BasePage active="_about-me">
    <AboutMeViewfinder />
    </BasePage>
  )
}

export default AboutMe