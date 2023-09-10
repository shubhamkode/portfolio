import { GrAchievement } from "react-icons/gr";
import { IoPeople } from "react-icons/io5";

import { IMAGES } from "@/assets";

export default function AboutMeSection() {
  return (
    <section
      id="about"
      className="container  h-screen px-4 py-2 mx-auto pt-[150px]"
    >
      <div className="text-center">
        <p className=" text-gray-700 text-sm font-[400]">Get To Know More</p>
        <h3 className="leading-14  font-[600] text-4xl">About Me</h3>
      </div>
      <div className="flex flex-col items-center mt-10 md:mt-20">
        <img
          src={IMAGES.aboutPic}
          className="w-[220px] mt-4 rounded-3xl shadow-xl"
        />

        <div className="grid w-full max-w-3xl grid-rows-2 mt-10 md:grid-rows-1 md:grid-cols-2 gap-y-4 md:gap-y-0 md:gap-x-4">
          <div className="flex flex-col items-center justify-start py-4 border-[2px] rounded-2xl border-slate-900 max-w-lg mx-auto w-full p-1">
            <GrAchievement className="text-2xl" />
            <p className="mt-4 text-sm font-[400] text-center">
              <span className="text-base font-semibold tracking-wide text-slate-900">
                Experience
              </span>
              <br />
              <span className="opacity-80">2+ years</span>
              <br />
              <span className="opacity-80">FullStack Development</span>
            </p>
          </div>

          <div className="flex flex-col items-center justify-start py-4 border-[2px] rounded-2xl border-slate-900 max-w-lg mx-auto w-full p-1">
            <IoPeople className="text-2xl" />
            <p className="mt-4 text-sm font-[400] text-center">
              <span className="text-base font-semibold tracking-wide text-slate-900">
                Education
              </span>
              <br />
              <span className="opacity-80">B.Com (Hons.)</span>
            </p>
          </div>

          <p className="mt-4 text-sm leading-5 tracking-wide text-center text-gray-700 md:col-span-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
            accusamus perferendis quaerat at earum beatae adipisci odit!
            Perspiciatis, aliquam voluptates.
          </p>
        </div>
      </div>
    </section>
  );
}
