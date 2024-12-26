export default function PropertyGallery() {
  return (
    <div className="bg-white py-12 md:py-32">
      <h2 className="text-4xl text-gray-600 text-center pb-6 md:pb-12">Property Gallery</h2>
      <div className="flex justify-center flex-wrap sm:px-4">
        <img src="images/first.jpg" alt="first" className="w-80 h-96" />
        <img src="images/second.jpg" alt="second" className="w-80 h-96" />
        <img src="images/third.jpg" alt="third" className="w-80 h-96" />
        <img src="images/forth.jpg" alt="forth" className="w-80 h-96" />
      </div>
    </div>
  );
}
