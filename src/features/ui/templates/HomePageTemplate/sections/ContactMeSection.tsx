import { MdOutlineMail } from "react-icons/md";

export default function ContactMeSection() {
  return (
    <section
      id="contact"
      className="container flex flex-col items-center justify-start h-screen px-4 py-2 mx-auto pt-[80px]"
    >
      <div className="mt-8 text-center">
        <p className=" text-gray-700 text-sm font-[400]">Get In Touch</p>
        <h3 className="leading-14  font-[600] text-4xl">Contact Me</h3>
      </div>

      <div className="mt-8 border-[1px] bg-slate-100/30 backdrop-blur rounded-full max-w-lg w-full px-4 py-5 flex items-center justify-around flex-col">
        <p className="font-[500] leading-loose text-lg flex items-center cursor-pointer">
          <MdOutlineMail className="mr-4 text-2xl" /> shubhamagarwll@gmail.com
        </p>
        <p className="flex items-center mt-1 text-sm text-slate-700">
          +91 6201813660
        </p>
      </div>

      <form
        action=""
        className="flex flex-col w-full max-w-xl px-6 py-10  mt-10  ring-[2px] rounded-xl ring-slate-900 gap-y-4 bg-[#FEFEFE] shadow-2xl"
      >
        <input
          type="email"
          required
          placeholder="Email"
          className="px-4 py-3 mt-3 rounded-lg font-[500]"
        />
        <textarea
          placeholder="Subject"
          className="px-4 py-3 text-gray-700 rounded-lg"
        />
        <button
          type="submit"
          className="w-full py-2.5 mt-8 rounded-full shadow ring-2 ring-slate-900 text-slate-100 bg-slate-900 "
        >
          Submit
        </button>
      </form>
    </section>
  );
}
