import BasePage from "@/components/BasePage";
import ProjectsViewfinder from "./ProjectsViewfinder";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "_projects - Abhishek Sharma",
  description: "",
};

function Projects() {
  return (
    <BasePage active="_projects">
      <ProjectsViewfinder />
    </BasePage>
  );
}

export default Projects;
