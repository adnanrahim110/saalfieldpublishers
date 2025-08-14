import React from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-cards";
import { EffectCreative, Keyboard, Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { banners_reviews_sec } from "../../assets";

const AV1 =
  "https://img.freepik.com/free-photo/portrait-young-woman-vintage_23-2149645556.jpg";
const AV2 =
  "https://img.freepik.com/free-photo/portrait-handsome-man-vintage-style_23-2149645539.jpg";
const AV3 =
  "https://img.freepik.com/free-photo/portrait-smiling-african-woman_23-2148898827.jpg";
const AV4 =
  "https://img.freepik.com/free-photo/portrait-asian-man-wearing-glasses_23-2148889149.jpg";

const reviews = [
  {
    name: "Eleanor Hughes",
    role: "Author, Historical Fiction",
    avatar: AV1,
    quote:
      "They handled my manuscript like a rare first edition. The typography and paper choice feel museum-grade.",
    stars: 5,
  },
  {
    name: "Priya Raman",
    role: "Poet",
    avatar: AV3,
    quote:
      "Editing was precise, kind, and focused on my voice. I finally saw my poems the way I imagined them.",
    stars: 5,
  },
  {
    name: "Arthur Bell",
    role: "Memoirist",
    avatar: AV2,
    quote:
      "From cover concept to metadata, they knew exactly what mattered. Distribution was flawless.",
    stars: 5,
  },
  {
    name: "Kenji Sato",
    role: "Research Author",
    avatar: AV4,
    quote:
      "Clean layout, impeccable citations, and a cover that reads like a classic. Couldn’t ask for more.",
    stars: 5,
  },
  {
    name: "Kenji Sato",
    role: "Research Author",
    avatar: AV4,
    quote:
      "Clean layout, impeccable citations, and a cover that reads like a classic. Couldn’t ask for more.",
    stars: 5,
  },
];

const Stars = ({ n = 5 }) => (
  <div className="flex gap-1" aria-label={`${n} out of 5 stars`}>
    {Array.from({ length: n }).map((_, i) => (
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-4 w-4 fill-yellow-500/90 drop-shadow"
      >
        <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ))}
  </div>
);

const TicketCard = ({ quote, name, role, avatar }) => (
  <div className="relative mx-auto w-[92%] max-w-[520px] select-none">
    <div className="relative rounded-[28px] bg-[#f6efe4] p-5 ring-1 ring-black/10 shadow-sm transition-all duration-300 will-change-transform group-[.swiper-slide-active]:shadow-[0_0_15px_rgba(0,0,0,0.25)] group-[.swiper-slide-active]:ring-black/20 group-[.swiper-slide-active]:scale-[1.02] group-[.swiper-slide-active]:-translate-y-0.5">
      <div className="pointer-events-none absolute inset-x-8 top-0 h-6 bg-[radial-gradient(circle,_#000_2px,_transparent_2px)] [background-size:16px_16px] [mask-image:linear-gradient(to_bottom,black,transparent)] opacity-15" />
      <div className="flex items-center gap-4">
        <img
          src={avatar}
          alt={name}
          className="h-14 w-14 rounded-full object-cover"
        />
        <div className="flex-1">
          <p className="font-serif text-xl text-black/90 italic">{name}</p>
          <p className="text-xs text-black/60">{role}</p>
        </div>
      </div>
      <blockquote className="mt-4 border-l-4 border-black/20 pl-4 text-[15px] leading-relaxed text-black/80">
        {quote}
      </blockquote>

      <div className="mt-4 flex items-center justify-between">
        <Stars n={5} />
        <div className="text-[11px] uppercase tracking-wider text-black/50">
          Filed review
        </div>
      </div>
      <div className="absolute -left-3 top-8 h-6 w-6 rounded-full bg-[#e7dccb] ring-1 ring-black/10" />
      <div className="absolute -right-3 bottom-8 h-6 w-6 rounded-full bg-[#e7dccb] ring-1 ring-black/10" />
    </div>
  </div>
);

const ReviewSec = () => {
  return (
    <section
      id="reviews"
      className="relative bg-center bg-no-repeat py-24"
      style={{
        backgroundImage: `url(${banners_reviews_sec})`,
        backgroundSize: "cover",
      }}
    >
      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-black/90 italic drop-shadow-sm">
            What Authors Say
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-black/80">
            Not a carousel of covers. A stack of vintage review tickets you can
            flip through.
          </p>
        </div>

        <div className="mt-8 mb-6 mx-auto flex w-full max-w-sm items-center justify-center">
          <div className="rev-progress h-1 w-full overflow-hidden rounded bg-black/10">
            <div className="rev-progress-bar h-full w-0 bg-red-900 transition-[width] duration-300" />
          </div>
        </div>

        <div className="mx-auto max-w-5xl">
          <Swiper
            modules={[EffectCreative, Mousewheel, Keyboard]}
            effect="creative"
            centeredSlides
            loop
            initialSlide={3}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 12 },
              480: { slidesPerView: 1.1, spaceBetween: 14 },
              640: { slidesPerView: 1.25, spaceBetween: 16 },
              768: { slidesPerView: 1.45, spaceBetween: 18 },
              1024: { slidesPerView: 1.6, spaceBetween: 20 },
              1280: { slidesPerView: 1.75, spaceBetween: 22 },
            }}
            slidesPerView={1.753}
            spaceBetween={0}
            keyboard={{ enabled: true }}
            mousewheel={{ forceToAxis: true, releaseOnEdges: true }}
            creativeEffect={{
              limitProgress: 2,
              prev: {
                translate: ["-56%", 0, -120],
                rotate: [0, 0, -7],
                scale: 0.9,
                opacity: 0.7,
              },
              next: {
                translate: ["56%", 0, -120],
                rotate: [0, 0, 7],
                scale: 0.9,
                opacity: 0.7,
              },
            }}
            onInit={(swiper) => {
              const bar = document.querySelector(".rev-progress-bar");
              if (!bar) return;
              const total = swiper.slides.length - swiper.loopedSlides * 2;
              const idx = swiper.realIndex + 1;
              bar.style.width = Math.round((idx / total) * 100) + "%";
            }}
            onSlideChange={(swiper) => {
              const bar = document.querySelector(".rev-progress-bar");
              if (!bar) return;
              const total = swiper.slides.length - swiper.loopedSlides * 2;
              const idx = swiper.realIndex + 1;
              bar.style.width = Math.round((idx / total) * 100) + "%";
            }}
            className="rev-deck"
          >
            {reviews.map((r, i) => (
              <SwiperSlide
                key={i}
                className="rounded-[28px] bg-transparent p-4 group"
              >
                <TicketCard {...r} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ReviewSec;
