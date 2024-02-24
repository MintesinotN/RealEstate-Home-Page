export default function Contentdetail({value,key}){
    return(
        <div>
            <br />
               { value.listofitems.map(
                    (value) => {
                        return(
                            <div className="w-48 p-2 text-black bg-white ">
                                {value}
                            </div>
                        );
                    }
                )}
            </div>
    )

}