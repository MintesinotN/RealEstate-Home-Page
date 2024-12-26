import peopletrustus from "../../data/peopletrustus";
import Peopletrustus from "./peopletrustus";

export default function Peopletrust() {
  return (
    <div className="bg-gray-100 py-8 sm:py-12 md:py-24 text-gray-600">
      <h2 className="text-5xl max-sm:text-4xl text-center max-sm:pb-6 pb-12">People Trust Us</h2>
      <div className="flex justify-center gap-12 flex-wrap max-sm:px-4 px-12">
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
