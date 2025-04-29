import BasePage from "@/components/BasePage"
import ComingSoon from "@/components/ComingSoon/ComingSoon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "_project-graveyard - Abhishek Sharma",
  description: "",
};

function AboutMe() {
  return (
    <BasePage active="_project-graveyard">
    <ComingSoon />
    </BasePage>
  )
}

export default AboutMe