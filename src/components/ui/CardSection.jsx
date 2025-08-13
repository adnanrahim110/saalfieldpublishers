import React from "react";
import {
  banners_ink_splash,
  banners_sec_bg,
  banners_texture,
  el_ink,
  frames_2,
  home_sec1,
} from "../../assets";
import Image from "./Image";
import Subtitle from "./Subtitle";

const CardSection = ({ title, text, img, subtitle, white = false }) => {
  return (
    <section
      className="relative py-20 bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${banners_texture})` }}
    >
      <img src={el_ink} className="absolute -top-14 -right-14 w-96" alt="" />
      <div className="container">
        <div className="row items-center justify-between">
          <div className="lg:w-5/12">
            <Image src={home_sec1} frame={frames_2} />
          </div>
          <div className="lg:w-[54%]">
            <div className="flex flex-col gap-3">
              <Subtitle>{subtitle}</Subtitle>
              <h2 className="title text-black">{title}</h2>
              <p className="text-neutral-900">{text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
