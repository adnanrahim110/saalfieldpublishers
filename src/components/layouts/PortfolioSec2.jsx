import React, { useMemo } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
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

// a small helper to add subtle variety to frames
const tiltBy = ["-rotate-1", "rotate-[0.5deg]", "-rotate-[0.5deg]", "rotate-1"]; // cycles

const Frame = ({ src, alt, i }) => {
  const tilt = useMemo(() => tiltBy[i % tiltBy.length], [i]);
  return (
    <div
      className={`group relative aspect-[3/4] w-full select-none ${tilt} transition-transform duration-500`}
    >
      <div className="absolute inset-0 rounded-xl bg-[#f6f0e8] shadow-[0_8px_30px_rgba(0,0,0,0.25)]" />

      <div className="absolute inset-2 rounded-lg bg-[#f6f0e8] ring-1 ring-black/10" />

      <img
        src={src}
        alt={alt}
        className="absolute inset-3 h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)] rounded-md object-cover object-center grayscale-[20%] sepia-[12%] contrast-110 brightness-[0.98] group-hover:grayscale-0 group-hover:sepia-0 transition-all duration-500"
        draggable={false}
      />

      <div className="absolute left-3 top-3 h-3 w-3 rounded-full bg-black/70 shadow" />
      <div className="absolute right-3 top-3 h-3 w-3 rounded-full bg-black/70 shadow" />
      <div className="absolute bottom-3 left-3 h-3 w-3 rounded-full bg-black/70 shadow" />
      <div className="absolute bottom-3 right-3 h-3 w-3 rounded-full bg-black/70 shadow" />

      <div className="absolute inset-0 rounded-xl transition-transform duration-300 group-hover:-translate-y-1" />
    </div>
  );
};

const PortfolioSec2 = () => {
  return (
    <section
      className="relative py-24 bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${banners_sec_bg})`,
        backgroundSize: "cover",
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[#f4eee5]/60 mix-blend-multiply" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.45)_100%)]" />

      <div className="container relative">
        <div className="row justify-center gap-y-8">
          <div className="lg:w-9/12 text-center">
            <div className="space-y-4">
              <Subtitle
                frameClass="brightness-[200%]"
                className="font-bold text-2xl text-primary-600 tracking-[0.08em] font-source"
              >
                Our Portfolio
              </Subtitle>

              <div className="mx-auto flex w-full max-w-3xl items-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-black/30 to-transparent" />
                <h2 className="title text-black/90 font-serif italic">
                  A Gallery of Works
                </h2>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-black/30 to-transparent" />
              </div>

              <p className="mx-auto max-w-2xl text-black/70 leading-relaxed">
                Browse a rotating wall of prints. We gave it a vintage studio
                feel so the art is the point.
              </p>
            </div>
          </div>

          <div className="-mb-3 flex items-center justify-center gap-4">
            <button
              className="port-prev rounded-full border border-black/20 bg-white/70 px-4 py-2 text-sm backdrop-blur hover:bg-white transition"
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              className="port-next rounded-full border border-black/20 bg-white/70 px-4 py-2 text-sm backdrop-blur hover:bg-white transition"
              aria-label="Next"
            >
              ›
            </button>
          </div>

          <div className="mb-14 w-full">
            <Swiper
              modules={[Autoplay, Pagination, EffectCoverflow, Navigation]}
              loop
              centeredSlides
              grabCursor
              effect="coverflow"
              coverflowEffect={{
                rotate: 8,
                stretch: 0,
                depth: 140,
                modifier: 1.2,
                slideShadows: false,
              }}
              autoplay={{ delay: 2400, disableOnInteraction: false }}
              speed={1000}
              slidesPerView={3}
              spaceBetween={24}
              navigation={{ prevEl: ".port-prev", nextEl: ".port-next" }}
              pagination={{
                clickable: true,
                bulletClass: "swiper-pagination-bullet !bg-black/30",
                bulletActiveClass: "!bg-black",
              }}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 16 },
                640: { slidesPerView: 2, spaceBetween: 18 },
                1024: { slidesPerView: 3, spaceBetween: 24 },
                1400: { slidesPerView: 4, spaceBetween: 28 },
              }}
              className="px-4"
            >
              {portfolioImages.map((image, idx) => (
                <SwiperSlide key={idx} className="!h-auto py-4">
                  <Frame src={image} alt={`Portfolio ${idx + 1}`} i={idx} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSec2;
