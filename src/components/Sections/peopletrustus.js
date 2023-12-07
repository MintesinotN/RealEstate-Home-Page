import { FaQuoteLeft } from "react-icons/fa";

export default function Peopletrustus({nameofworker, jobtitle, imageofworker}){
    return(
        <div className="bg-white w-[350px] h-[450px] rounded-sm px-8 py-8">
            <FaQuoteLeft className="text-orange-200 w-8 h-8 mb-6" />
            <p>Sed ut perspiciatis unde omnis iste
                natus error sit voluptatem accusantium
                doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo
                inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo.
                Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut
                fugit, sed quia consequuntur
                </p>
            <div className="flex mt-12">
                <div>{imageofworker}</div>
                <div className="pt-2 pl-4">
                    <h4 className="text-xl">{nameofworker}</h4>
                    <p>{jobtitle}</p>
                </div>
            </div>
        </div>
    );
}