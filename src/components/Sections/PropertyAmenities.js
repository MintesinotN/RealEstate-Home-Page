import property from "../../data/propertydata";
import Property from "./Property";

export default function PropertyAmenities() {
  return (
    <div className="bg-gray-100 text-gray-700 py-32">
      <h2 className="text-center text-5xl">Property Amenities</h2>
      <div className="flex justify-around mx-24 flex-wrap">
        {property.map((value) => {
          return (
            <Property nameofproperty={value.nameofproperty} Icon={value.Icon} />
          );
        })}
      </div>
    </div>
  );
}
