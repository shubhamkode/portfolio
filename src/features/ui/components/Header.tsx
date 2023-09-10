import { Menu } from "@headlessui/react";

import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const NAV_LINKS = ["about", "experiences", "projects", "contact"];

  const MobileMenu = () => {
    return (
      <>
        <Menu as="div" className="relative flex items-center md:hidden">
          <Menu.Button as="button" className="px-2 py-1 rounded">
            {({ open }) => {
              document.body.classList.toggle("overflow-y-hidden", open);
              return open ? (
                <AiOutlineClose className="text-2xl" />
              ) : (
                <FiMenu className="text-2xl" />
              );
            }}
          </Menu.Button>
          <Menu.Items as="div">
            <div className="flex flex-col items-end bg-slate-50 fixed top-[75px] right-0  px-8 h-screen rounded w-full py-6 shadow gap-y-4">
              {NAV_LINKS.map((navLink, index) => (
                <Menu.Item key={index}>
                  <a
                    key={index}
                    href={`#${navLink}`}
                    className="py-2.5 px-2  duration-200 ease-in-out capitalize text-slate-800 text-3xl border-r-4 border-transparent hover:border-slate-800"
                  >
                    {navLink}
                  </a>
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Menu>
      </>
    );
  };

  const DesktopMenu = () => {
    return (
      <div className="items-center hidden md:flex lg:gap-x-4 gap-x-2">
        {NAV_LINKS.map((navLink, index) => (
          <a
            key={index}
            href={`#${navLink}`}
            className="py-1.5 px-2 hover:opacity-60 duration-200 ease-in-out capitalize border-b-2 border-transparent hover:border-slate-900"
          >
            {navLink}
          </a>
        ))}
      </div>
    );
  };

  return (
    <nav className="container fixed top-0 left-0 right-0 z-20 flex items-center justify-between w-screen px-8 py-5 mx-auto border-b-2 backdrop-blur-sm bg-white/80 border-b-slate-900">
      <a href="#" className="text-2xl leading-8 px-1 font-[500]">
        Shubham
      </a>
      <DesktopMenu />
      <div className="md:hidden">
        <MobileMenu />
      </div>
    </nav>
  );
}
