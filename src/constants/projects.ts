/**
 * Array of project objects containing information about each project.
 * To add a new project, follow the structure below:
 * {
 *    title: "Project Title",
 *    showcaseImage: "/path/to/showcase/image.png",
 *    description: "Project description.",
 *    link: "https://example.com/project",
 *    techStack: ["Tech Stack"]
 * }
 */
export const projects = [
  {
    title: "Nostra",
    showcaseImage: "/images/test.png",
    description: "A restaurant website made with react and appwrite.",
    link: "https://nostrarestaurant.vercel.app/",
    techStack: ["React"],
  },
  {
    title: "TripTalkies",
    showcaseImage: "/images/test2.png",
    description: "A trip planning platform made with nextjs + typecript.",
    link: "https://triptalkies.vercel.app/",
    techStack: ["React"],
  },
  {
    title: "Overcastly",
    showcaseImage: "/images/test3.png",
    description: "A vanilla js API weather web-app.",
    link: "https://overcastly.netlify.app/",
    techStack: ["HTML"],
  },
];
