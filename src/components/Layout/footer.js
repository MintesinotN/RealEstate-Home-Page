import { TfiEmail } from "react-icons/tfi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <div className="max-sm:py-12 py-16 md:py-24 text-white bg-neutral-700 flex max-lg:flex-col justify-center gap-8 md:gap-20 xl:gap-28 lg:flex-wrap px-8">
        <div className="lg:w-[245px]">
          <h2 className="text-3xl sm:text-4xl whitespace-nowrap">
            A<span className="text-orange-400">b</span>olire
          </h2>
          <p className="pt-2 sm:pt-4">
            Address: <span className="text-neutral-400">6500 International Pkwy Suite 1100, Plano, TX 75093</span>
          </p>
          <p className="pt-2 sm:pt-4">
            Email: <span className="text-neutral-400">abolireoffice@domain.com</span>
          </p>
          <p className="pt-2 sm:pt-4">
            Phone: <span className="text-neutral-400">(+844) 1900 444 336</span>
          </p>
        </div>
        <div className="lg:w-[250px]">
          <h3 className="text-2xl sm:text-3xl">Opening Hours</h3>
          <p className="pt-2 sm:pt-4">
            Monday – Thursday: <span className="text-neutral-400">10AM to 6PM</span>
          </p>
          <p className="pt-2 sm:pt-4">
            Friday – Saturday: <span className="text-neutral-400">11AM to 4PM</span>
          </p>
          <p className="pt-2 sm:pt-4">
            Sunday: <span className="text-orange-400">Close</span>
          </p>
        </div>
        <div className="max-w-[500px] lg:w-[285px]">
          <h3 className="text-2xl sm:text-3xl pb-2 sm:pb-4">Subscribe Newsletter</h3>
          <p className="text-neutral-400">
            Subscribe to our newsletter & always be aware of all the latest
            updates
          </p>
          <div className="flex justify-between pt-2 sm:pt-10 pb-3">
            <p className="text-neutral-500">Your email address</p>
            <TfiEmail />
          </div>
          <hr />
        </div>
      </div>
      <hr className="text-black" />
      <div className="py-10 bg-neutral-700 text-neutral-400">
        <p className="text-center">
          Copyrights © 2019 <span className="text-white">Abolire.</span> All
          rights reserved.
        </p>
        <div className="text-white flex justify-center gap-4 pt-4">
          <FaFacebookF />
          <FaTwitter />
          <FaPinterestP />
          <FaLinkedinIn />
          <FaYoutube />
        </div>
      </div>
    </div>
  );
}
