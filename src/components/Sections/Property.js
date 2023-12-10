export default function Property({ nameofproperty, Icon }) {
  return (
    <div className="w-64 text-center m-4">
      <div className="px-24 text-6xl text-[#b39592] py-8">{Icon}</div>
      <h3 className="text-2xl pb-2">{nameofproperty}</h3>
      <p>Few word argue that, ad minim</p>
      <p>veniam, quis nostrud</p>
    </div>
  );
}
