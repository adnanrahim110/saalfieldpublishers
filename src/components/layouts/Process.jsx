import React from "react";
import {
  banners_body_bg,
  banners_header_bg,
  banners_service_sec,
  banners_texture,
  el_circle_stroke,
  frames_3,
} from "../../assets";
import { processItems } from "../../constants";
import Subtitle from "../ui/Subtitle";

const Process = () => {
  return (
    <section
      className="relative py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${banners_texture})` }}
    >
      <div className="container">
        <div className="row">
          <div>
            <div className="container">
              <div className="row justify-between gap-y-10">
                <div className="text-center">
                  <div className="lg:pr-5 space-y-3">
                    <Subtitle>Our Process</Subtitle>
                    <h2 className="title">
                      Bring Your Story To Life in 4 Simple Steps
                    </h2>
                    <p>
                      We believe in transparency, and ensure that our entire
                      process is easy and hassle-free for you. Each step of our
                      process is dealt with utmost professionalism. The best
                      part? No hidden cost or sudden charges for sure. The steps
                      are as follows:
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 max-md:px-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {processItems.map((item, idx) => (
                    <div key={idx} className="h-full">
                      <div
                        key={idx}
                        className="flex flex-col h-full gap-5 lg:gap-3 p-14 lg:p-10 relative bg-center bg-no-repeat aspect-[1290/1877]"
                        style={{
                          backgroundImage: `url(${frames_3})`,
                          backgroundSize: "100% 100%",
                        }}
                      >
                        <span className="size-10 relative lg:mb-5 xl:mb-1 flex items-center justify-center text-2xl font-semibold rounded-full text-white bg-radial from-primary-700 to-pri">
                          {idx + 1}
                          <img
                            src={el_circle_stroke}
                            className="absolute size-[60px] max-w-[60px] object-contain top-1/2 left-1/2 -translate-1/2 "
                            alt=""
                          />
                        </span>
                        <h4 className="text-xl font-source font-bold">
                          {item.title}
                        </h4>
                        <p className="text-sm">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
