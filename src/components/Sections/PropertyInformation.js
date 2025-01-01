export default function PropertyInformation() {
  return (
    <div className="bg-white">
      <div className="flex py-16 justify-center max-md:items-center max-md:flex-col md:max-xl:gap-16 xl:gap-24 px-8">
        <img
          src="images/image2.png"
          className="max-md:w-full md:max-h-full sm:pt-16 md:max-lg:max-w-[350px]"
          alt="image2"
        />
        <div className="md:w-[480px] mt-8 md:mt-20 text-gray-700">
          <h2 className="text-5xl max-sm:text-4xl mb-4 md:mb-12">Property Information</h2>
          <p>
            Few word argue that, ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum
          </p>
          <p className="pt-4 md:pt-8">Project Name : Abolire</p>
          <p className="pt-4">Total Area : 560 Square Feets</p>
          <p className="pt-4">Net Worth : $20,555,000</p>
          <p className="pt-4">Category : Modern House</p>
          <p className="pt-4 pb-8">Launch Time : 10 December, 2019</p>
          <div className="bg-orange-200 px-8 py-2 w-fit whitespace-nowrap">Get Details</div>
        </div>
      </div>
    </div>
  );
}
