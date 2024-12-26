export default function Contentdetail({value,key}){
    return(
        <div className="max-sm:flex max-sm:flex-col max-sm:">
            <br className="max-sm:hidden" />
               { value.listofitems.map(
                    (value) => {
                        return(
                            <div className="whitespace-nowrap max-sm:px-8 sm:w-48 p-2 text-black bg-white cursor-pointer">
                                {value}
                            </div>
                        );
                    }
                )}
            </div>
    )

}