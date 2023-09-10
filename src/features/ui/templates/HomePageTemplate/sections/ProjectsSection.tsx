import { PROJECTS } from "@/features/constants";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="container flex flex-col items-center justify-start  h-fit mb-20 md:mb-10 lg:mb-0 lg:h-screen px-4 py-2 mx-auto pt-[80px]"
    >
      <div className="mt-8 text-center">
        <p className=" text-gray-700 text-sm font-[400]">Browse My Recent</p>
        <h3 className="leading-14  font-[600] text-4xl">Projects</h3>
      </div>
      <div className="container flex flex-wrap items-center justify-center px-4 py-2 mt-8 gap-x-4 gap-y-5 no-scrollbar">
        {PROJECTS.map((project, index) => (
          <ProjectCard {...project} key={index} />
        ))}
      </div>
    </section>
  );
}

import { FC } from "react";

interface IProjectCardProps {
  title: string;
  githubLink: string;
  liveDemoLink: string;
  projectImg: string;
}

const ProjectCard: FC<IProjectCardProps> = ({
  title,
  githubLink,
  liveDemoLink,
  projectImg,
}) => {
  return (
    <div className="ring-2 ring-slate-900 py-4 px-6 rounded-xl shadow-lg w-full sm:max-w-[320px] pb-6">
      <img
        src={projectImg}
        className="duration-200 shadow-lg rounded-xl hover:scale-105"
      />
      <div className="mt-4">
        <p className="text-xl font-[600] leading-relaxed text-center">
          {title}
        </p>
        <div className="flex items-center justify-center mt-3 gap-x-4">
          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer noopener"
            className="px-6 py-2 text-sm duration-200 rounded-full ring-2 ring-slate-900 hover:text-slate-100 hover:bg-slate-900"
          >
            Github
          </a>
          <a
            href={liveDemoLink}
            className="px-6 py-2 text-sm duration-200 rounded-full ring-2 ring-slate-900 whitespace-nowrap hover:text-slate-100 hover:bg-slate-900"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};
