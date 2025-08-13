import React from "react";
import { banners_ctaSec } from "../../assets";

const CtaSec = () => {
  return (
    <section className="py-10 shadow-[inset_0_0_10px] shadow-primary-800">
      <div
        className="relative py-28 bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${banners_ctaSec})`,
          backgroundSize: "100% 100%",
        }}
      >
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <h2 className="font-serif text-4xl md:text-5xl text-black/90 italic drop-shadow">
              Craft Your Legacy With Us
            </h2>
            <p className="text-black/80 leading-relaxed max-w-2xl mx-auto font-medium">
              From timeless tales to treasured collections, our craft transforms
              your vision into a piece of history. Let’s begin your journey.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
              <a
                href="#contact"
                className="inline-block rounded-full bg-primary-700 px-10 py-3 text-lg font-bold text-white shadow-lg shadow-primary-700/40 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-700/50"
              >
                Start Your Project
              </a>
              <a
                href="#portfolio"
                className="inline-block rounded-full border-2 border-black/30 bg-white/90 px-10 py-3 text-lg font-bold text-black/80 shadow-md backdrop-blur transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSec;
