import React from "react";
import { BiSolidPaperPlane } from "react-icons/bi";
import { banners_hero_signup } from "../../assets";
import Button from "../ui/Button";

const Signup = () => {
  return (
    <div className="relative lg:p-5">
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-top"
        style={{ backgroundImage: `url(${banners_hero_signup})` }}
      />
      <div className="relative flex flex-col gap-3 lg:gap-5 max-lg:pb-20 pt-[74px] pr-8 pl-10">
        <h3 className="text-3xl lg:text-4xl text-center text-primary-900">
          Let's get started
        </h3>
        <form className="form_sm form_primary">
          <div className="container">
            <div className="row gap-y-2.5 justify-center items-center">
              <div className="w-full">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your Full Name"
                />
              </div>
              <div className="w-full">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="w-full">
                <input type="tel" name="phone" placeholder="Enter your phone" />
              </div>
              <div className="w-full">
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Write your message here"
                  className="max-lg:max-h-20"
                />
              </div>
              <div className="w-full lg:px-6 text-center">
                <Button
                  dark
                  className="inline-block w-full hover:rotate-none hover:scale-105 shadow-[0_0_20px] hover:shadow-[0_0_50px]"
                  icon={BiSolidPaperPlane}
                >
                  Send Message
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
