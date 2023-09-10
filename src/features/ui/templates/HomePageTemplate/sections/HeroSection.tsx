import { IMAGES } from "@/assets";

export default function HeroSection() {
  return (
    <div className="container flex flex-col items-center justify-around h-screen mx-auto md:flex-row md:gap-x-5">
      <img
        src={IMAGES.profilePic}
        className="w-[300px] md:w-[400px] lg:w-[500px] h-auto  rounded-full shadow-xl grayscale-[50%] duration-400 hover:grayscale-0 transition-colors"
      />
      <div className="w-full mt-8 font-bold text-center text-slate-900 md:mt-0 md:w-fit">
        <p className="text-sm opacity-60">Hello I&apos;m</p>
        <p className="text-3xl font-semibold leading-10 whitespace-nowrap">
          Shubham Agrawal
        </p>
        <p className="text-2xl font-semibold leading-8 opacity-60">
          Fullstack Developer
        </p>

        <div className="grid w-full max-w-lg px-5 py-2 mx-auto mt-8 md:w-fit md:justify-end md:items-center md:flex gap-y-4 md:gap-y-0 md:gap-x-4">
          <button className="ring-2 text-sm ring-slate-900 text-slate-900 rounded-full px-8 py-2.5 duration-300 ease-in-out hover:bg-slate-900 hover:text-white w-full md:w-min md:whitespace-nowrap font-[500]">
            Download CV
          </button>
          <button className="bg-slate-900 text-sm ring-2 ring-slate-900 text-white rounded-full px-8 py-2.5 w-full md:w-min md:whitespace-nowrap font-[500]">
            Contact Info
          </button>
        </div>
      </div>
    </div>
  );
}
