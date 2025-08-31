import React from "react";
import {
  banners_ink_splash,
  banners_sec_bg,
  banners_texture,
  el_ink,
  frames_2,
  home_sec1,
} from "../../assets";
import { cn } from "../../utils/cn";
import Image from "./Image";
import Subtitle from "./Subtitle";

const CardSection = ({
  title,
  text,
  img,
  subtitle,
  white = false,
  reverse = false,
}) => {
  return (
    <section
      className="relative py-20 bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${banners_texture})` }}
    >
      <img
        src={el_ink}
        className="absolute -bottom-36 max-lg:rotate-180 lg:-top-14 -right-14 w-80"
        alt=""
      />
      <div className="container">
        <div
          className={cn(
            "row gap-y-10 items-center justify-between",
            reverse && "lg:flex-row-reverse"
          )}
        >
          <div className="lg:w-5/12">
            <Image src={img || home_sec1} frame={frames_2} />
          </div>
          <div className="lg:w-[54%]">
            <div className="flex flex-col gap-3">
              {subtitle && <Subtitle>{subtitle}</Subtitle>}
              <h3 className="title text-black">{title}</h3>
              <p className="text-neutral-900">{text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardSection;
