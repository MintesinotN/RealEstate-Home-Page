import { IoIosArrowDown } from "react-icons/io";

export default function Menucontent({value}){
    return(
        <>
        <div className="flex">{value.contentname}&nbsp;<IoIosArrowDown className="mt-2"/>
                            </div>

                                                        {/* <div>
                                <br />
                               { value.listofitems.map(
                                    (value) => {
                                        return(
                                            <div className="w-48 p-2 text-black bg-white">
                                                {value}
                                            </div>
                                        );
                                    }
                                )}
                            </div> */}

        </>
    );
}