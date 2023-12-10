import Menucontent from "./menubar";
import contentofmenu from "../../data/data";
import { FaRegCalendarCheck } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

export default function HomePage() {
  return (
    <div className="relative">
      <img
        src="images/backgroundmain.jpg"
        alt="container"
        className="w-full absolute z-0"
      />
      <div className="flex absolute p-8">
        <p className="text-3xl text-white px-16">
          A<span className="text-orange-400">b</span>olire
        </p>
        {contentofmenu.map((value) => {
          return (
            <div>
              <div className="py-2 text-white w-32 ">
                <Menucontent value={value} />
              </div>
            </div>
          );
        })}
        <p className="py-2 text-white">Contact</p>
        <div className="py-2 text-white flex ml-48">
          <FaRegCalendarCheck className="h-6 w-6" />
          <IoSearch className="h-6 w-6 ml-8" />
          <p className="ml-8 text-xl">(+844) 1900 444 336</p>
        </div>
      </div>
      <div className="absolute pl-[500px] pt-56 text-white text-5xl">
        <h2>Modern House Make</h2>
        <h2 className="pl-28 pt-2">Better Life</h2>
        <p className="text-sm pt-4 pl-16">
          1105 Madison Plaza Suite 120 Chesapeake, VA 23320
        </p>
        <p className="bg-orange-400 absolute text-base py-2 px-8 ml-36 mt-6">
          Take a Tour
        </p>
      </div>
    </div>
  );
}
