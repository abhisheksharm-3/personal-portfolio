import BasePage from "@/components/BasePage"
import ComingSoon from "@/components/ComingSoon/ComingSoon";
import type { Metadata } from "next";
import GraveyardViewfinder from "./GraveyardViewfinder";

export const metadata: Metadata = {
  title: "_project-graveyard - Abhishek Sharma",
  description: "",
};

function AboutMe() {
  return (
    <BasePage active="_project-graveyard" className="bg-[#0a0e14]">
    <GraveyardViewfinder />
    </BasePage>
  )
}

export default AboutMe