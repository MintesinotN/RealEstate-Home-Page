import latestnewsupdate from "../../data/latestnewsupdatedata";
import Latestnewsupdate from "./latestnewsupdate";

export default function Latestupdate() {
  return (
    <div className="bg-white py-12 md:py-24 text-gray-600">
      <h2 className="text-5xl max-sm:text-4xl text-center pb-12">Latest News Update</h2>
      <div className="flex justify-center gap-16 flex-wrap">
        {latestnewsupdate.map((value) => {
          return (
            <Latestnewsupdate
              updatestatement={value.updatestatement}
              updateimage={value.updateimage}
            />
          );
        })}
      </div>
    </div>
  );
}
