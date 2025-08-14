import React from "react";
import {
  awards_axiom,
  awards_finalist,
  awards_global,
  awards_gold,
  awards_illum,
  awards_moon,
  el_circle_stroke,
} from "../../assets";

const Awards = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row items-center gap-y-5">
          <div className="lg:w-4/12">
            <h4 className="title capitalize font-source max-lg:text-center">
              AWARD-WINNING BOOK CREATION IS OUR FORTE
            </h4>
          </div>
          <div className="lg:w-8/12">
            <div className="flex items-center">
              {[
                awards_axiom,
                awards_gold,
                awards_global,
                awards_finalist,
                awards_moon,
                awards_illum,
              ].map((award, index) => (
                <div className="lg:p-5 relative" key={index}>
                  <img
                    src={award}
                    className="drop-shadow-[0_2px_20px] drop-shadow-white"
                    alt={`Award ${index + 1}`}
                  />
                  <img
                    src={el_circle_stroke}
                    className="absolute -top-0.5 left-2 opacity-70 w-[87.5%]"
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
