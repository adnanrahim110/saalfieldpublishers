import React from "react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  banners_sec_bg,
  portfolio_1,
  portfolio_2,
  portfolio_3,
  portfolio_4,
  portfolio_5,
  portfolio_6,
  portfolio_7,
  portfolio_8,
} from "../../assets";
import Subtitle from "../ui/Subtitle";

const portfolioImages = [
  portfolio_1,
  portfolio_2,
  portfolio_3,
  portfolio_4,
  portfolio_5,
  portfolio_6,
  portfolio_7,
  portfolio_8,
];

const PortfolioSec = () => {
  return (
    <section
      className="py-20 bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${banners_sec_bg})`,
        backgroundSize: "100% 100%",
      }}
    >
      <div className="container">
        <div className="row justify-center gap-y-5">
          <div className="lg:w-10/12 text-center">
            <div className="space-y-4">
              <Subtitle
                frameClass="brightness-[200%]"
                className="font-bold text-2xl text-primary-600 font-source"
              >
                Our Portfolio
              </Subtitle>
              <h2 className="title text-black">
                Explore our diverse range of publications
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatum eum veniam quae optio consectetur corporis dolores
                nisi provident, distinctio nulla porro accusamus eius.
                Architecto, repellendus!
              </p>
            </div>
          </div>
          <div className="mb-20">
            <Swiper
              modules={[Autoplay]}
              loop
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              speed={1500}
              slidesPerView={5}
              spaceBetween={40}
              className="px-10"
            >
              {portfolioImages.map((image, idx) => (
                <SwiperSlide key={idx} className="my-5">
                  <img
                    src={image}
                    alt={`Portfolio ${idx + 1}`}
                    className="shadow-[0_0_20px] shadow-black/90"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSec;
