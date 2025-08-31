import React from "react";
import { banners_sec_bg1, bg_stripe2 } from "../../assets";

const VisionSec = () => {
  return (
    <section
      id="our-vision"
      className="relative bg-center bg-no-repeat bg-fixed py-24 bg-white overflow-hidden"
    >
      <img
        src={bg_stripe2}
        className="absolute -top-10 left-0 w-full rotate-180"
        alt=""
      />
      <div className="container relative">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-black/90 italic drop-shadow-sm">
            Our Vision
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-black/80">
            To become the go-to book creation company in the US where your voice
            is honored, your style is safe and your dreams of becoming an author
            becomes a reality.
          </p>
        </div>
        {/* <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Craftsmanship",
              copy: "Every project gets careful editing, thoughtful design, and archival production choices.",
              img: IMG_QUILL,
            },
            {
              title: "Heritage",
              copy: "We draw on centuries of bookmaking traditions to shape work that feels timeless.",
              img: IMG_PRESS,
            },
            {
              title: "Discovery",
              copy: "We help readers find voices that matter, pairing stories with the right audience.",
              img: IMG_LIBRARY,
            },
          ].map((card, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl bg-white/85 shadow-xl ring-1 ring-black/10 backdrop-blur transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 w-full">
                <img
                  src={card.img}
                  alt={card.title}
                  className="h-full w-full object-cover object-center grayscale-[20%] sepia-[12%] contrast-110 brightness-[0.98] group-hover:grayscale-0 group-hover:sepia-0 transition-all duration-500"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl text-black/90 italic">
                  {card.title}
                </h3>
                <p className="mt-2 text-black/70">{card.copy}</p>
              </div>
            </div>
          ))}
        </div> */}
        <div
          className="mt-16 rounded-2xl bg-white/80 p-6 ring-1 ring-black/10 backdrop-blur bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${banners_sec_bg1})` }}
        >
          <div className="ml-auto max-w-[980px]">
            <h2 className="text-[34px] font-bold font-serif italic text-black">
              Why Saafield? We’re Not Just Good, We’re Legendary
            </h2>
            <p className="my-4 font-medium">
              Let’s be honest, you’ve got different options when it comes to
              book writing services. But here’s what makes us different from
              all:
            </p>
            <ol className="relative border-l-2 border-black/20 pl-6">
              {[
                {
                  text: "We’re not a pop-up agency. Saalfield was once one of the biggest names in US publishing. That reputation? We’re honoring it.",
                },
                {
                  text: "We just don’t write for you, we write with you. Your tone, your message, your vision",
                },
                {
                  text: "We offer everything under one roof. Writers, editors, illustrators, designers, formatters, marketers, you name it, we’ve got it.",
                },
                {
                  text: "We believe great storytelling should be accessible. So we keep our services high-quality and budget-friendly.",
                },
                {
                  text: "You’re working with native english-speaking experts who understand the US publishing market very well.",
                },
              ].map((step, i) => (
                <li key={i} className="mb-4 last:mb-0">
                  <span className="absolute -left-[10px] mt-1 h-4 w-4 rounded-full bg-black" />
                  <p className="text-black/90">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSec;
