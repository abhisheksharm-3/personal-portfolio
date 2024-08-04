import { SiTruenas } from "react-icons/si";

/**
 * Array of project objects containing information about each project.
 * To add a new project, follow the structure below:
 * {
 *    title: "Project Title",
 *    showcaseImage: "/path/to/showcase/image.png",
 *    description: "Project description.",
 *    link: "https://example.com/project",
 *    techStack: ["Tech Stack"]
 *    building: true;
 * }
 */
export const projects = [
  {
    title: "GetResume",
    showcaseImage: "/images/projects/getresume.png",
    description: "A resume parsing platform with nextjs + Gemini API.",
    link: "https://getresumes.vercel.app/",
    techStack: ["NextJs", "React", "TailwindCSS", "TypeScript"],
    building: true,
  },
  {
    title: "Votegrity",
    showcaseImage: "/images/projects/votegrity.png",
    description: "A dApp voting platform made with nextjs + solidity.",
    link: "https://votegrity.vercel.app/",
    techStack: ["Web3", "Solidity", "NextJs", "React", "TailwindCSS", "TypeScript"],
    building: true,
  }, 
  {
    title: "Kalendar",
    showcaseImage: "/images/projects/kalendar.png",
    description: "An AI scheduling webapp made with Nextjs + Gemini API.",
    link: "https://kalendarapp.vercel.app/",
    techStack: ["NextJs", "React", "TailwindCSS", "TypeScript"],
    building: true,
  },
  // {
  //   title: "QuickGist",
  //   showcaseImage: "/images/projects/quickgist.png",
  //   description: "A GitHub Gist like website with React + GoLang.",
  //   link: "https://quickgist.vercel.app/",
  //   techStack: ["GoLang", "React", "TailwindCSS", "TypeScript"],
  //   building: true,
  // },
  {
    title: "Nostra",
    showcaseImage: "/images/projects/nostra.png",
    description: "A restaurant website made with react and appwrite.",
    link: "https://nostrarestaurant.vercel.app/",
    techStack: ["React", "TailwindCSS", "JavaScript"],
    building: false,
  },
  {
    title: "TripTalkies",
    showcaseImage: "/images/projects/triptalkies.png",
    description: "A trip planning platform made with nextjs + typecript.",
    link: "https://triptalkies.vercel.app/",
    techStack: ["NextJs", "React", "TailwindCSS", "TypeScript"],
    building: false,
  },
  {
    title: "Foodix",
    showcaseImage: "/images/projects/foodix.png",
    description: "A MERN Stack Food Delivery Website with Live Status.",
    link: "https://foodixdelivery.vercel.app/",
    techStack: ["ExpressJs", "React", "TailwindCSS", "TypeScript"],
    building: false,
  },
  {
    title: "LiveHealthy",
    showcaseImage: "/images/projects/livehealthy.png",
    description: "A React + Flask ML project to predict your health.",
    link: "https://livehealthy.vercel.app/",
    techStack: ["Flask", "React", "Machine Learning"],
    building: false,
  },
  {
    title: "Aestoti",
    showcaseImage: "/images/projects/aestoti.png",
    description: "A Pomodoro timer built with SvelteKit.",
    link: "https://aestoti.vercel.app/",
    techStack: ["SvelteKit", "TailwindCSS"],
    building: true,
  },
  {
    title: "Sanklp-Hotel",
    showcaseImage: "/images/projects/sanklp.png",
    description: "A frontend UI project based on design from figma community.",
    link: "https://sanklphotel.netlify.app/",
    techStack: ["React", "TailwindCSS", "JavaScript"],
    building: false,
  },
  // {
  //   title: "ML-Olympiad",
  //   showcaseImage: "/images/projects/ml-olympiad.png",
  //   description: "Top 10 in detecting smokers with 99.274% accuracy",
  //   link: "https://www.kaggle.com/competitions/ml-olympiad-smoking/",
  //   techStack: ["Machine Learning", "XGBoost", "GridSearchCV"],
  // },
  // removed as causes overflow in image

  {
    title: "TokyoTaste",
    showcaseImage: "/images/projects/tokyotaste.png",
    description: "A HTML + CSS frontend UI project.",
    link: "https://tokyotaste.netlify.app/",
    techStack: ["HTML"],
    building: false,
  },
  {
    title: "VisualAlg",
    showcaseImage: "/images/projects/visualalg.png",
    description: "A Website to Visualize BFS and DFS Algorithms.",
    link: "https://visualalg.vercel.app/",
    techStack: ["React", "TailwindCSS", "JavaScript"],
    building: false,
  },
  {
    title: "Overcastly",
    showcaseImage: "/images/projects/overcastly.png",
    description: "A vanilla js API weather web-app.",
    link: "https://overcastly.netlify.app/",
    techStack: ["HTML", "JavaScript"],
    building: false,
  },
  {
    title: "REST-Countries",
    showcaseImage: "/images/projects/restcountries.png",
    description: "SvelteKit REST Countries API challenge implementation.",
    link: "https://restcountriesvelte.vercel.app/",
    techStack: ["SvelteKit", "TailwindCSS"],
    building: false,
  },
  {
    title: "TacTicPlay",
    showcaseImage: "/images/projects/tacticplay.png",
    description: "A MiniMax Algorithm Based Tic Tac Toe Game.",
    link: "https://tacticplay.netlify.app/",
    techStack: ["React", "TailwindCSS", "JavaScript"],
    building: false,
  },
];
