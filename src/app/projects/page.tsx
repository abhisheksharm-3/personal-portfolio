import BasePage from "@/components/BasePage"
import ComingSoon from "@/components/ComingSoon/ComingSoon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "_projects - Abhishek Sharma",
  description: "",
};

function Projects() {
  return (
    <BasePage active="_projects">
    <ComingSoon />
    </BasePage>
  )
}

export default Projects