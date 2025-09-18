import React from "react";
import { Link } from "react-router-dom";
import { banners_ctaSec } from "../../assets";

const CtaSec = ({
  title = "Bring Your Story to Life With a Book Writer by Your Side!",
  text = "Hire a book writer now, and start working on your first book. Allow Us To Make You Realize Your Full Literary Potential and make you stand out in the crowd of millions with your bestseller book!",
}) => {
  return (
    <section className="py-10 shadow-[inset_0_0_10px] shadow-primary-800">
      <div
        className="relative py-16 md:py-28 bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${banners_ctaSec})`,
          backgroundSize: "100% 100%",
        }}
      >
        <div className="container relative z-10">
          <div className="mx-auto max-w-5xl text-center space-y-6">
            <h2 className="font-serif text-xl md:text-5xl text-black/90 max-lg:px-4 italic drop-shadow">
              {title}
            </h2>
            <p className="text-black/80 leading-relaxed max-lg:text-sm max-lg:px-5 max-w-5xl mx-auto font-medium">
              {text}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-4 pt-2">
              <Link
                to="/contact-us"
                className="inline-block rounded-full bg-primary-700 px-5 lg:px-10 py-3 text-sm lg:text-lg font-bold text-white shadow-lg shadow-primary-700/40 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-700/50"
              >
                Get Consultation
              </Link>
              <Link
                to="#portfolio"
                className="inline-block rounded-full border-2 border-black/30 bg-white/90 px-5 lg:px-10 py-3 text-sm lg:text-lg font-bold text-black/80 shadow-md backdrop-blur transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Live Chat
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSec;
