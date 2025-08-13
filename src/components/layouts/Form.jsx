import React from "react";
import { IoIosPaperPlane } from "react-icons/io";
import { banners_contact_bg } from "../../assets";
import Button from "../ui/Button";
import Subtitle from "../ui/Subtitle";

const Form = () => {
  return (
    <div className="bg-white py-10">
      <div className="py-20 relative">
        <img
          src={banners_contact_bg}
          className="absolute top-1/2 left-1/2 -translate-1/2 w-full drop-shadow-xl drop-shadow-black/30"
          alt=""
        />
        <div className="container">
          <div className="row justify-center gap-y-10">
            <div className="lg:w-8/12">
              <div className="flex flex-col items-center gap-3">
                <h2 className="title">Get in Touch</h2>
                <p>
                  If you have any questions or inquiries, feel free to reach out
                  to us through the form below.
                </p>
              </div>
            </div>
            <div className="lg:w-8/12">
              <form className="form_primary border border-primary-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.3)] mb-10 p-5">
                <div className="container">
                  <div className="row gap-y-3">
                    <div className="lg:w-1/2">
                      <label htmlFor="name">Name:</label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="lg:w-1/2">
                      <label htmlFor="email">Email:</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="w-full">
                      <label htmlFor="phone">Phone:</label>
                      <input
                        type="tel"
                        id="phone"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div className="w-full">
                      <label htmlFor="message">Message:</label>
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
