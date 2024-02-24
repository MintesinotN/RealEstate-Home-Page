import peopletrustus from "../../data/peopletrustus";
import Peopletrustus from "./peopletrustus";

export default function Peopletrust() {
  return (
    <div className="bg-gray-100 py-24 text-gray-600">
      <h2 className="text-5xl text-center pb-12">People Trust Us</h2>
      <div className="flex justify-around flex-wrap mx-32">
        {peopletrustus.map((value) => {
          return (
            <Peopletrustus
              nameofworker={value.nameofworker}
              jobtitle={value.jobtitle}
              imageofworker={value.imageofworker}
            />
          );
        })}
      </div>
    </div>
  );
}
