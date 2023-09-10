import { AiFillHeart } from "react-icons/ai";
import { ImGithub } from "react-icons/im";

export default function Footer() {
  return (
    <footer className="sticky bottom-0 flex items-center justify-between w-full px-6 py-4 bg-white border-t-2">
      <div>
        <p className="flex place-items-center text-slate-900">
          <AiFillHeart className="mr-2 text-2xl " />
          Created by Shubham Agrawal
        </p>
        <p className="pl-10 text-xs text-gray-500">
          With thanks to the original{" "}
          <a
            className="text-blue-800"
            href="https://thriving-dragon-a3fcd9.netlify.app"
            target="_blank"
            rel="noreferrer noopener"
          >
            website
          </a>
        </p>
      </div>
      <a
        className="p-2 duration-200 text-slate-900 hover:opacity-70"
        href="https://github.com/shubhamkode"
        target="_blank"
        rel="noreferrer noopener"
      >
        <ImGithub className="text-2xl" />
      </a>
    </footer>
  );
}
