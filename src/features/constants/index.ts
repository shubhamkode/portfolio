import { IMAGES } from "@/assets";

export const ACHIEVEMENTS = {
  frontEnd: [
    { course: "HTML", status: "Experienced" },
    { course: "CSS", status: "Experienced" },
    { course: "JavaScript", status: "Intermediate" },
    { course: "TypeScript", status: "Intermediate" },
    { course: "React", status: "Intermediate" },
    { course: "NextJs", status: "Intermediate" },
    { course: "React Native", status: "Intermediate" },
    { course: "Flutter", status: "Intermediate" },
  ],
  backend: [
    { course: "NodeJS", status: "Intermediate" },
    { course: "Python", status: "Intermediate" },
    { course: "Go", status: "Beginner" },
    { course: "ExpressJS", status: "Intermediate" },
    { course: "Git", status: "Intermediate" },
  ],
};

export const PROJECTS = [
  {
    id: 1,
    title: "Project One",
    githubLink: "https://github.com/shubhamkode",
    liveDemoLink: "/",
    projectImg: IMAGES.projectThree,
  },
  {
    id: 2,
    title: "Project Two",
    githubLink: "https://github.com/shubhamkode",
    liveDemoLink: "/",
    projectImg: IMAGES.projectTwo,
  },
  {
    id: 3,
    title: "Project Three",
    githubLink: "https://github.com/shubhamkode",
    liveDemoLink: "/",
    projectImg: IMAGES.projectOne,
  },
];
