import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from 'react';
import Contentdetail from "./contentdetails";

export default function Menucontent({ value }) {
const[isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="sm:relative max-sm:w-full" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <div className="flex items-center max-sm:px-8 max-sm:block max-sm:text-center cursor-pointer">
        {value.contentname}&nbsp;
        { isHovered ?
          <IoIosArrowUp className="max-sm:hidden" color="orange" /> :
          <IoIosArrowDown className="mt-1 max-sm:hidden" />
        }
        </div>
        {isHovered && (
            <div className="max-sm:min-h-full absolute z-10 max-sm:top-0 max-sm:right-36">
              <Contentdetail value={value} />
            </div>
          )}
      </div>
    </>
  );
}
