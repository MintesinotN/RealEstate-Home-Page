import { IoMdFlame } from "react-icons/io";

export default function Header() {
  return (
    <p className=" sticky top-0 h-14 text-white bg-stone-800 pl-4 text-2xl py-3 z-20">
      <IoMdFlame className="text-orange-400 h-6 w-6 inline" />
      envato <span className="text-orange-400">market</span>{" "}
      <span className="bg-orange-400 text-base rounded-md px-4 py-1 float-right mr-4">
        Buy now
      </span>
    </p>
  );
}
