import Menucontent from "./menubar";
import contentofmenu from "../../data/data";
import { FaRegCalendarCheck } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function HomePage() {

  const [menu,setMenu] = useState(false);

  const menuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      <img
        src="images/backgroundmain.jpg"
        alt="container"
        className="w-full h-[450px] sm:h-screen"
      />
      <div className="absolute top-0 w-full text-white">
      <div className="flex sm:items-center max-sm:justify-between max-sm:px-4 justify-evenly pt-2 lg:pt-4">
        <p className="text-3xl whitespace-nowrap">
          A<span className="text-orange-400">b</span>olire
        </p>
        {
        <div className="sm:contents">
        <div ref={menuRef} className="hidden max-sm:flex justify-end items-center" onClick={()=>setMenu(menu=>!menu)}>
          <GiHamburgerMenu size={35} className="max-sm:cursor-pointer" />
        </div>
        <div className={`${menu ? "max-sm:flex max-sm:bg-slate-700 max-sm:z-10 max-sm:relative max-sm:border-2 max-sm:border-gray-500 max-sm:gap-4 max-sm:rounded-md max-sm:py-2 max-sm:flex-col max-sm:items-center" : "max-sm:hidden"} contents`}>
        {contentofmenu.map((value) => {
          return (
            <Menucontent value={value} />
          );
        })}
        </div>
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
