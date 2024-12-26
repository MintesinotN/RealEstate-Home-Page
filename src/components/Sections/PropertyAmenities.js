import property from "../../data/propertydata";
import Property from "./Property";

export default function PropertyAmenities() {
  return (
    <div className="bg-gray-100 text-gray-700 py-12 md:py-32">
      <h2 className="text-center text-5xl max-sm:text-4xl max-md:pb-12">Property Amenities</h2>
      <div className="flex justify-center w-full flex-wrap md:px-12">
        {property.map((value) => {
          return (
            <Property nameofproperty={value.nameofproperty} Icon={value.Icon} />
          );
        })}
      </div>
    </div>
  );
}
