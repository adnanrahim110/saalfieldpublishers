import React from "react";
import { IoIosPaperPlane } from "react-icons/io";
import { banners_contact_bg } from "../../assets";
import Button from "../ui/Button";
import Subtitle from "../ui/Subtitle";

const Form = () => {
  return (
    <div className="bg-white py-16 lg:py-10">
      <div className="py-20 relative">
        <img
          src={banners_contact_bg}
          className="absolute max-lg:rotate-90 max-lg:w-[175%] max-lg:max-w-[unset] top-1/2 left-1/2 -translate-1/2 w-full drop-shadow-xl drop-shadow-black/30"
          alt=""
        />
        <div className="container">
          <div className="row justify-center gap-y-5 lg:gap-y-10">
            <div className="lg:w-8/12 max-lg:text-center">
              <div className="flex flex-col items-center gap-3">
                <h2 className="title">Get in Touch</h2>
                <p className="max-lg:text-sm">
                  If you have any questions or inquiries, feel free to reach out
                  to us through the form below.
                </p>
              </div>
            </div>
            <div className="lg:w-8/12">
              <form className="form_primary lg:border border-primary-600 lg:shadow-[inset_0_0_10px_rgba(0,0,0,0.3)] lg:mb-10 p-5 max-lg:pb-0">
                <div className="container">
                  <div className="row gap-y-3">
                    <div className="lg:w-1/2">
                      <label className="max-lg:hidden" htmlFor="name">
                        Name:
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="lg:w-1/2">
                      <label className="max-lg:hidden" htmlFor="email">
                        Email:
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="w-full">
                      <label className="max-lg:hidden" htmlFor="phone">
                        Phone:
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div className="w-full">
                      <label className="max-lg:hidden" htmlFor="message">
                        Message:
                      </label>
                      <textarea
                        id="message"
                        rows="4"
                        placeholder="Enter your message"
                      ></textarea>
                    </div>
                    <div className="w-full text-center *:inline-block">
                      <Button
                        className="rounded-none"
                        iconClass="rounded-none"
                        icon={IoIosPaperPlane}
                      >
                        Send Message
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
