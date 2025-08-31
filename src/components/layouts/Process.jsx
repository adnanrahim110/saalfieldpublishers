import React from "react";
import {
  banners_body_bg,
  banners_header_bg,
  banners_texture,
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
                    <h2 className="title">Our Book Writing Process</h2>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Labore atque ipsam, minus laborum culpa nesciunt accusamus
                      optio fuga similique. Expedita! Lorem ipsum, dolor sit
                      amet consectetur adipisicing elit. Cupiditate, dolorem!
                      Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {processItems.map((item, idx) => (
                    <div key={idx} className="h-full">
                      <div
                        key={idx}
                        className="flex flex-col h-full gap-5 lg:gap-3 p-14 lg:p-10 relative bg-center bg-no-repeat"
                        style={{
                          backgroundImage: `url(${frames_3})`,
                          backgroundSize: "100% 100%",
                        }}
                      >
                        <img src="" className="size-10" alt="" />
                        <h4 className="text-xl font-source font-bold">
                          {item.title}
                        </h4>
                        <p className="text-base">{item.text}</p>
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
