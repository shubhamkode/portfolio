import { MdVerified } from "react-icons/md";

import { ACHIEVEMENTS } from "@/features/constants";

export default function ExperiencesSection() {
  return (
    <section
      id="experiences"
      className="container flex flex-col items-center justify-start h-screen px-4 py-2 mx-auto pt-[120px]"
    >
      <div className="mt-8 text-center">
        <p className=" text-gray-700 text-sm font-[400]">Explore My</p>
        <h3 className="leading-14  font-[600] text-4xl">Experiences</h3>
      </div>

      <div className="grid w-full max-w-2xl grid-rows-2 mx-auto mt-8 md:grid-rows-1 md:grid-cols-2 md:gap-x-4 gap-y-4 md:gap-y-0">
        <div className="px-10 py-8 border-[1px] shadow-lg border-slate-900 rounded-2xl">
          <p className="text-2xl font-[500] leading-[1.25] text-gray-700">
            FrontEnd Technologies
          </p>
          <div className="grid w-full grid-cols-2 gap-4 py-4 mt-2 md:grid-cols-1">
            {ACHIEVEMENTS.frontEnd.map((task, index) => (
              <AchieveMentCard {...task} key={index} />
            ))}
          </div>
        </div>

        <div className="px-10 py-8 border-[1px] shadow-lg border-slate-900 rounded-2xl">
          <p className="text-2xl font-[500] leading-[1.25] text-gray-700">
            Backend Technologies{" "}
          </p>
          <div className="grid w-full grid-cols-2 gap-4 py-4 mt-2 md:grid-cols-1">
            {ACHIEVEMENTS.backend.map((task, index) => (
              <AchieveMentCard {...task} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { FC } from "react";

interface IAchieveMentCardProps {
  course: string;
  status: string;
}

const AchieveMentCard: FC<IAchieveMentCardProps> = ({ course, status }) => {
  return (
    <div className="flex group">
      <MdVerified className="mt-1 text-xl text-slate-900" />
      <div className="ml-2">
        <p className="text-sm font-[600] tracking-wide text-slate-900 group-hover:underline underline-offset-2 cursor-pointer duration-200 ease-in-out">
          {course}
        </p>
        <p className="text-xs tracking-wider font-[400] text-gray-700">
          {status}
        </p>
      </div>
    </div>
  );
};
