import latestnewsupdate from "../../data/latestnewsupdatedata";
import Latestnewsupdate from "./latestnewsupdate";

export default function Latestupdate() {
  return (
    <div className="bg-white py-24 text-gray-600">
      <h2 className="text-5xl text-center pb-12">Latest News Update</h2>
      <div className="flex justify-around flex-wrap mx-32">
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
