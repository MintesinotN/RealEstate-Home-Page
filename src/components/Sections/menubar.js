import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react';
import Contentdetail from "./contentdetails";

export default function Menucontent({ value }) {
const[isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <div className="flex">
          {value.contentname}&nbsp;
        <IoIosArrowDown className="mt-2" />
        </div>
        
        {isHovered && (
            <div>
              <Contentdetail value={value} key='{value.contentname}' />
            </div>
          )}
      </div>
    </>
  );
}
