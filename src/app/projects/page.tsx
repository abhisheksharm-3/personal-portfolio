import BasePage from "@/components/BasePage"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "_projects - Abhishek Sharma",
  description: "",
};

function Projects() {
  return (
    <BasePage active="_projects">
    Projects
    </BasePage>
  )
}

export default Projects