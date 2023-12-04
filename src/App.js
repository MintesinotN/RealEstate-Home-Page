import "./file.css";
import { IoMdFlame } from "react-icons/io";
import Menucontent from "./components/menubar";
import contentofmenu from "./components/data/data";
import { FaRegCalendarCheck } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import property from "./components/data/propertydata";
import Property from "./components/Property";
import { FaCirclePlay } from "react-icons/fa6";
import peopletrustus from "./components/data/peopletrustus";
import Peopletrustus from "./components/peopletrustus";
import latestnewsupdate from "./components/data/latestnewsupdate";
import Latestnewsupdate from "./components/latestnewsupdate";
import { TfiEmail } from "react-icons/tfi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


function App() {
  return (
    <>
      <body className="font-serif">
        <p className=" sticky top-0 h-14 text-white bg-stone-800 pl-4 text-2xl py-3 z-20">
          <IoMdFlame className="text-orange-400 h-6 w-6 inline" />
          envato <span className="text-orange-400">market</span>{" "}
          <span className="bg-orange-400 text-base rounded-md px-4 py-1 float-right mr-4">
            Buy now
          </span>
        </p>
        <div className="relative">
          <img
            src="images/backgroundmain.jpg"
            alt="container"
            className="w-full absolute z-0"
          />
          <div className="flex absolute p-8">
            <p className="text-3xl text-white px-16">
              A<span className="text-orange-400">b</span>olire
            </p>


            {
            contentofmenu.map(
                (value) => {
                    return(
                        <div>
                            
                            <div className="py-2 text-white w-32 "><Menucontent value={value} />




                            </div>
                        </div>                                                
                    );
                }
            )
        }

            
            <p className="py-2 text-white">Contact</p>
            <div className="py-2 text-white flex ml-48">
              <FaRegCalendarCheck className="h-6 w-6" />
              <IoSearch className="h-6 w-6 ml-8" />
              <p className="ml-8 text-xl">(+844) 1900 444 336</p>
            </div>
          </div>
          <div className="absolute pl-[500px] pt-56 text-white text-5xl">
            <h2>Modern House Make</h2>
            <h2 className="pl-28 pt-2">Better Life</h2>
            <p className="text-sm pt-4 pl-16">
              1105 Madison Plaza Suite 120 Chesapeake, VA 23320
            </p>
            <p className="bg-orange-400 absolute text-base py-2 px-8 ml-36 mt-6">
              Take a Tour
            </p>
          </div>
        </div>
        <div className="bg-white">
          <div className="flex mt-[860px] py-16">
            <img
              src="images/image2.png"
              className="w-[660px] h-[620px] pt-16 pl-52"
              alt=""
            />
            <div className="ml-24 mt-20 text-gray-700 mr-64">
              <h2 className="text-5xl mb-12">Property Information</h2>
              <p>
                Few word argue that, ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
              </p>
              <p className="pt-8">Project Name : Abolire</p>
              <p className="pt-4">Total Area : 560 Square Feets</p>
              <p className="pt-4">Net Worth : $20,555,000</p>
              <p className="pt-4">Category : Modern House</p>
              <p className="pt-4 pb-8">Launch Time : 10 December, 2019</p>
              <div className="bg-orange-200 px-8 py-2 mr-[23rem]">
                Get Details
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 text-gray-700 py-32">
          <h2 className="text-center text-5xl">Property Amenities</h2>
          <div className="flex justify-around mx-40 flex-wrap">
          { property.map(
            (value)=>{return(
              <Property nameofproperty = {value.nameofproperty} Icon = {value.Icon} />
            );}
        )}
          </div>
        </div>
        <div className="bg-white py-32">
              <h2 className="text-4xl text-gray-600 pl-48 pb-12">Property Gallery</h2>
              <div className="flex justify-center">
                <img src="images/first.jpg" alt="" className="w-80 h-96"/>
                <img src="images/second.jpg" alt="" className="w-80 h-96"/>
                <img src="images/third.jpg" alt="" className="w-80 h-96"/>
                <img src="images/forth.jpg" alt="" className="w-80 h-96"/>
              </div>
        </div>
        <div className="text-center py-24 text-white">
          <h2 className="text-5xl pb-2">The Pleasant Surroundings of</h2>
          <h2 className="text-5xl pb-8">Nature Will Impress You</h2>
          <p>Sleek and sophisticated, Costix offers qualities always coveted, but rarely obtained in the finest New</p>
          <p>York rental residences a unique blend of generously proportioned interiors and the enjoyment of</p>
          <p>Nassau</p>
          <FaCirclePlay className="h-16 w-16 text-orange-200 mx-[735px] mt-16"/>
        </div>
        <div className="bg-gray-100 py-24 text-gray-600">
              <h2 className="text-5xl text-center pb-12">People Trust Us</h2>
              <div className="flex justify-around flex-wrap mx-48">
                {peopletrustus.map(
                  (value)=>{return(
                    <Peopletrustus nameofworker = {value.nameofworker} 
                    jobtitle = {value.jobtitle} 
                    imageofworker = {value.imageofworker} />
                  );

                  }
                )}
              </div>
        </div>
        <div className="bg-white py-24 text-gray-600">
              <h2 className="text-5xl text-center pb-12">Latest News Update</h2>
              <div className="flex justify-around flex-wrap mx-48">
                {latestnewsupdate.map(
                  (value)=>{return(
                    <Latestnewsupdate updatestatement = {value.updatestatement} 
                    updateimage = {value.updateimage} />
                  );

                  }
                )}
              </div>
        </div>
        <div className="py-24 text-white bg-neutral-700 flex justify-around flex-wrap px-48">
                  <div className="w-[350px] pr-24">
                  <h2 className="text-4xl">A<span className="text-orange-400">b</span>olire</h2>
                  <p className="pt-4">Address: <span className="text-neutral-400">6500 International Pkwy Suite 1100, Plano, TX 75093</span></p>
                  <p className="pt-4">Email: <span className="text-neutral-400">abolireoffice@domain.com</span></p>
                  <p className="pt-4">Phone: <span className="text-neutral-400">(+844) 1900 444 336</span></p>
                  </div>
                  <div className="w-[350px]">
                    <h3 className="text-3xl">Opening Hours</h3>
                    <p className="pt-8">Monday – Thursday : <span className="text-neutral-400">10AM to 6PM</span></p>
                    <p className="pt-4">Friday – Saturday : <span className="text-neutral-400">11AM to 4PM</span></p>
                    <p className="pt-4">Sunday: <span className="text-orange-400">Close</span></p>
                  </div>
                  <div className="w-[350px]">
                    <h3 className="text-3xl pb-8">Subscribe Newsletter</h3>
                    <p className="text-neutral-400 pr-8">Subscribe to our newsletter & always be aware of all the latest updates</p>
                    <div className="flex justify-between pt-10 pb-3">
                      <p className="text-neutral-500">Your email address</p>
                      <TfiEmail />
                    </div>
                    <hr />
                    
                  </div>
        </div>
        <hr className="text-black" />
        <div className="py-10 bg-neutral-700 text-neutral-400">
                  <p className="text-center">Copyrights © 2019 <span className="text-white">Abolire.</span> All rights reserved.</p>
                  <div className="text-white flex justify-around px-[680px] pt-4">
                  <FaFacebookF />
                  <FaTwitter />
                  <FaPinterestP />
                  <FaLinkedinIn />
                  <FaYoutube />
                  </div>
        </div>
      </body>
    </>
  );
}

export default App;
