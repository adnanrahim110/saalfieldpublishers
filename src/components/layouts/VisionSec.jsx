import React from "react";
import { banners_sec_bg1, bg_stripe2 } from "../../assets";

const BG_PARCHMENT =
  "https://img.freepik.com/free-photo/old-vintage-paper-background_118047-1097.jpg"; // example
const IMG_QUILL =
  "https://img.freepik.com/free-photo/antique-quill-inkwell-old-book_1150-18263.jpg"; // example
const IMG_PRESS =
  "https://img.freepik.com/free-photo/vintage-printing-press-workshop_155003-34263.jpg"; // example
const IMG_LIBRARY =
  "https://img.freepik.com/free-photo/old-library-with-bookshelves_23-2148898748.jpg"; // example

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
            Honor the craft. Champion authors. Keep the soul of classic
            publishing alive for a new generation of readers.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
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
        </div>
        <div
          className="mt-16 rounded-2xl bg-white/80 p-6 ring-1 ring-black/10 backdrop-blur bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${banners_sec_bg1})` }}
        >
          <div className="mx-auto max-w-4xl">
            <ol className="relative border-l-2 border-black/20 pl-6">
              {[
                {
                  year: "Manuscript",
                  text: "We listen, refine aims, and create a plan that respects your voice.",
                },
                {
                  year: "Design",
                  text: "Typography, layout, and cover come together with care and intent.",
                },
                {
                  year: "Publish",
                  text: "We prepare print and digital editions with distribution and metadata done right.",
                },
                {
                  year: "Legacy",
                  text: "We keep titles discoverable with updates, reprints, and new formats as needed.",
                },
              ].map((step, i) => (
                <li key={i} className="mb-8 last:mb-0">
                  <span className="absolute -left-[10px] mt-1 h-4 w-4 rounded-full bg-black" />
                  <h4 className="font-serif text-xl text-black/90 italic">
                    {step.year}
                  </h4>
                  <p className="text-black/70">{step.text}</p>
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
