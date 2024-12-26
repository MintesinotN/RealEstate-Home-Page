import { FaCirclePlay } from "react-icons/fa6";

export default function PleasantSurroundings() {
  return (
    <div className="py-12 md:py-24 w-full text-white flex flex-col items-center px-2 sm:px-12">
      <h2 className="text-center max-sm:text-4xl text-5xl pb-8 md:pb-2 max-w-[630px]">The Pleasant Surroundings of Nature Will Impress You</h2>
      <p className="max-w-3xl text-center mb-16">
        Sleek and sophisticated, Costix offers qualities always coveted, but
        rarely obtained in the finest New York rental residences a unique blend of generously proportioned
        interiors and the enjoyment of Nassau</p>
      <div className="relative flex items-center justify-center">
      <div className="h-12 w-12 border-4 border-black bg-transparent absolute delay-50 rounded-full animate-ping"></div>
      <FaCirclePlay className="relative z-10 h-16 w-16 text-orange-200" />
      </div>
    </div>
  );
}
