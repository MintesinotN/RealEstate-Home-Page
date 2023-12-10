import { IoIosArrowDown } from "react-icons/io";

export default function Menucontent({ value }) {
  return (
    <>
      <div className="flex">
        {value.contentname}&nbsp;
        <IoIosArrowDown className="mt-2" />
      </div>
    </>
  );
}
