import Menucontent from "./menubar";
import contentofmenu from "../../data/data";
import { FaRegCalendarCheck } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function HomePage() {

  const [menu,setMenu] = useState(true);

  const isSmallScreen =window.matchMedia('(max-width: 639px)').matches;

  return (
    <div className="relative">
      <img
        src="images/backgroundmain.jpg"
        alt="container"
        className="w-full h-[450px] sm:h-screen"
      />
      <div className="absolute top-0 w-full text-white">
      <div className="flex sm:items-center max-sm:justify-between max-sm:px-4 justify-evenly pt-8">
        <p className="text-3xl whitespace-nowrap">
          A<span className="text-orange-400">b</span>olire
        </p>
        {
        (menu && isSmallScreen) ? 
        <div className="hidden max-sm:cursor-pointer max-sm:flex items-center" onMouseEnter={()=>setMenu(false)}>
        Menu&nbsp;
        <IoIosArrowDown className="mt-1" />
        </div> :
        <div className="max-sm:relative max-sm:border-2 max-sm:border-gray-500 max-sm:gap-4 max-sm:rounded-md max-sm:py-2 max-sm:flex max-sm:flex-col max-sm:items-center contents" onMouseLeave={()=>setMenu(true)}>
        {contentofmenu.map((value) => {
          return (
            <Menucontent value={value} />
          );
        })}
        </div>
        }
        <p className="py-2 max-sm:hidden">Contact</p>
        <FaRegCalendarCheck className="h-6 w-6 max-sm:hidden" />
        <IoSearch className="h-6 w-6 max-sm:hidden" />
        <p className="text-xl whitespace-nowrap max-lg:hidden">(+844) 1900 444 336</p>
      </div>
      <div className="flex flex-col items-center gap-2 absolute max-sm:top-40 top-64 left-1/2 transform -translate-x-1/2 text-5xl max-sm:text-3xl">
        <h2 className="sm:w-[450px] text-center max-sm:min-w-[240px]">Modern House Make Better Life</h2>
        <p className="text-sm text-center">
          1105 Madison Plaza Suite 120 Chesapeake, VA 23320
        </p>
        <p className="bg-orange-400 text-base w-fit py-2 px-8">
          Take a Tour
        </p>
      </div>
      </div>
    </div>
  );
}
