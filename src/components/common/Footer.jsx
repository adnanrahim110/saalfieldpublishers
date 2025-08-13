import React from "react";
import {
  IoChevronForward,
  IoChevronForwardSharp,
  IoLocationSharp,
  IoMailSharp,
} from "react-icons/io5";
import { RiPhoneFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { banners_texture, bg_stripe1, bg_stripe2, book } from "../../assets";
import { navigation } from "../../constants";

const Footer = () => {
  return (
    <footer className="relative">
      <div
        className="bg-cover bg-bottom bg-no-repeat py-16 relative overflow-hidden"
        style={{ backgroundImage: `url(${banners_texture})` }}
      >
        <img
          src={bg_stripe2}
          className="absolute -bottom-12 -left-8 w-full opacity-70"
          alt=""
        />
        <div className="container">
          <div className="row justify-between">
            <div className="lg:w-[23%]">
              <div className="flex flex-col gap-4">
                <img src="" className="max-w-[180px]" alt="" />
                <p className="text-sm font-medium">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Quaerat voluptatibus dicta voluptas dolorum nesciunt labore!
                </p>
              </div>
            </div>
            <div className="lg:w-[17%]">
              <div className="flex flex-col gap-4">
                <h5 className="text-primary-800 text-shdow text-2xl">
                  Quick Links
                </h5>
                <ul className="flex flex-col gap-2">
                  {navigation
                    .filter((itm) => itm.url !== false)
                    .map((item, idx) => (
                      <li key={idx}>
                        <Link
                          to={item.url || "#"}
                          className="group flex text-base font-semibold items-center text-neutral-800 transition-colors duration-300 hover:text-primary-700"
                        >
                          <span className="flex items-center">
                            <IoChevronForward className="transition-colors duration-300" />
                            <IoChevronForward className="opacity-0 -translate-x-3.5 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-x-2.5" />
                          </span>
                          <span className="-translate-x-2">{item.title}</span>
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="lg:w-[24%]">
              <div className="flex flex-col gap-4">
                <h5 className="text-primary-800 text-shdow text-2xl">
                  Our Services
                </h5>
                <ul className="flex flex-col gap-2">
                  {navigation[1].dropdown.map((item, idx) => (
                    <li key={idx}>
                      <Link
                        to={item.url || "#"}
                        className="group flex text-base font-semibold items-center text-neutral-800 transition-colors duration-300 hover:text-primary-700"
                      >
                        <span className="flex items-center">
                          <IoChevronForward className="transition-colors duration-300" />
                          <IoChevronForward className="opacity-0 -translate-x-3.5 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-x-2.5" />
                        </span>
                        <span className="-translate-x-2">{item.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:w-4/12">
              <div className="flex flex-col gap-4">
                <h5 className="text-primary-800 text-shdow text-2xl">
                  Contact Us
                </h5>
                <ul className="flex flex-col gap-4 text-base font-semibold">
                  <li className="inline-block leading-none">
                    <Link className="inline-flex items-center gap-3 group hover:text-primary-700 transition-colors duration-300 ease-in-out">
                      <span className="text-primary-700 text-xl">
                        <RiPhoneFill />
                      </span>
                      <span className="inline-block relative before:absolute before:-bottom-0.5 before:left-0 before:w-0 before:h-px before:bg-primary-700 group-hover:before:w-full before:transition-all before:duration-300 before:ease-linear">
                        (123) 456-7890
                      </span>
                    </Link>
                  </li>
                  <li className="inline-block leading-none">
                    <Link className="inline-flex items-center gap-3 group hover:text-primary-700 transition-colors duration-300 ease-in-out">
                      <span className="text-primary-700 text-xl">
                        <IoMailSharp />
                      </span>
                      <span className="inline-block relative before:absolute before:-bottom-0.5 before:left-0 before:w-0 before:h-px before:bg-primary-700 group-hover:before:w-full before:transition-all before:duration-300 before:ease-linear">
                        info@yourcompany.com
                      </span>
                    </Link>
                  </li>
                  <li className="inline-block leading-none">
                    <span className="flex items-center gap-3">
                      <span className="text-primary-700 text-xl">
                        <IoLocationSharp />
                      </span>
                      <span>123 Main St, Anytown, USA</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-2.5 bg-white relative">
        <div className="container">
          <div className="flex items-center gap-y-3 text-sm">
            <p className="flex items-center justify-start lg:mr-7 lg:pr-7 border-r border-neutral-400">
              &copy; {new Date().getFullYear()} Your Company{" "}
              <span className="h-px w-5 bg-neutral-400 mx-2" /> All rights
              reserved.
            </p>
            <ul className="flex items-center">
              <li className="inline-block leading-none">
                <Link>Privacy Policy</Link>
              </li>
              <li className="inline-block leading-none">
                <Link>Terms & Conditions</Link>
              </li>
            </ul>
          </div>
        </div>
        <img src={book} className="absolute right-5 bottom-1 w-36" alt="" />
      </div>
    </footer>
  );
};

export default Footer;
