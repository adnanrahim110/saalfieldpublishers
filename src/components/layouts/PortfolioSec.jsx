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
  portfolio_9,
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
  portfolio_9,
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
          <div className="lg:w-8/12 text-center">
            <div className="space-y-4">
              <Subtitle
                frameClass="brightness-[200%]"
                className="font-bold text-2xl text-primary-600 font-source"
              >
                Our Portfolio
              </Subtitle>
              <h2 className="title text-black">
                We Proudly Showcase Our Published Work
              </h2>
              <p>
                Want to catch a quick glimpse of our successfully published
                books? Go through them with ease and get a chance to decide for
                yourself.
              </p>
            </div>
          </div>
          <div className="mb-20">
            <Swiper
              modules={[Autoplay]}
              loop
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              speed={1500}
              slidesPerView={7}
              breakpoints={{
                0: { slidesPerView: 2, spaceBetween: 0, slidesPerGroup: 1 },
                480: { slidesPerView: 3, spaceBetween: 0, slidesPerGroup: 1 },
                640: { slidesPerView: 4, spaceBetween: 0, slidesPerGroup: 1 },
                768: { slidesPerView: 5, spaceBetween: 0, slidesPerGroup: 1 },
                1024: { slidesPerView: 6, spaceBetween: 0, slidesPerGroup: 1 },
                1280: { slidesPerView: 7, spaceBetween: 0, slidesPerGroup: 1 },
              }}
              spaceBetween={0}
              className="px-10 *:items-center"
            >
              {portfolioImages.map((image, idx) => (
                <SwiperSlide key={idx} className="my-5 px-4">
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
