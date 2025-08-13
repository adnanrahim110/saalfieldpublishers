import React from "react";
import { banners_sec_bg1 } from "../../assets";

// Section background (Freepik parchment). Swap with your own if needed.
const BG_PARCHMENT =
  "https://img.freepik.com/free-photo/old-vintage-paper-background_118047-1097.jpg";

// Avatars (Freepik placeholders). Replace with your authors.
const AV1 =
  "https://img.freepik.com/free-photo/portrait-young-woman-vintage_23-2149645556.jpg";
const AV2 =
  "https://img.freepik.com/free-photo/portrait-handsome-man-vintage-style_23-2149645539.jpg";
const AV3 =
  "https://img.freepik.com/free-photo/portrait-smiling-african-woman_23-2148898827.jpg";
const AV4 =
  "https://img.freepik.com/free-photo/portrait-asian-man-wearing-glasses_23-2148889149.jpg";
const AV5 =
  "https://img.freepik.com/free-photo/portrait-elegant-senior-man_23-2148915017.jpg";
const AV6 =
  "https://img.freepik.com/free-photo/portrait-happy-young-woman_23-2148898933.jpg";

const REVIEWS = [
  {
    name: "Eleanor Hughes",
    role: "Author, Historical Fiction",
    avatar: AV1,
    quote:
      "They handled my manuscript like a rare first edition. The typography and paper choice feel museum-grade.",
  },
  {
    name: "Priya Raman",
    role: "Poet",
    avatar: AV3,
    quote:
      "Editing was precise, kind, and focused on my voice. I finally saw my poems the way I imagined them.",
  },
  {
    name: "Arthur Bell",
    role: "Memoirist",
    avatar: AV2,
    quote:
      "From cover concept to metadata, they knew exactly what mattered. Distribution was flawless.",
  },
  {
    name: "Kenji Sato",
    role: "Research Author",
    avatar: AV4,
    quote:
      "Clean layout, impeccable citations, and a cover that reads like a classic.",
  },
  {
    name: "Marian Cole",
    role: "Children’s Author",
    avatar: AV6,
    quote:
      "Illustration direction was thoughtful and the print finish feels premium in hand.",
  },
  {
    name: "Hector Alvarez",
    role: "Essayist",
    avatar: AV5,
    quote:
      "They cared about the small things. Kerning, margins, even the paper tone. It shows in the final book.",
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

const ReviewCard = ({ avatar, name, role, quote, idx }) => (
  <article className="group relative select-none h-full">
    <div className="relative h-full rounded-[28px] bg-[#f6efe4] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.18)] ring-1 ring-black/10 transition-transform duration-300 group-hover:-translate-y-1">
      <div className="pointer-events-none absolute inset-x-8 top-0 h-6 bg-[radial-gradient(circle,_#000_2px,_transparent_2px)] [background-size:16px_16px] [mask-image:linear-gradient(to_bottom,black,transparent)] opacity-15" />

      <div className="flex items-center gap-4">
        <img
          src={avatar}
          alt={name}
          className="h-14 w-14 rounded-full object-cover"
        />
        <div className="flex-1">
          <h3 className="font-serif text-xl text-black/90 italic">{name}</h3>
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
  </article>
);

const ReviewsGrid = () => {
  return (
    <section
      id="reviews-grid"
      className="relative bg-center bg-no-repeat py-20"
      style={{
        backgroundImage: `url(${banners_sec_bg1})`,
        backgroundSize: "cover",
      }}
    >
      <div className="container relative">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-black/90 italic drop-shadow-sm">
            Reviews
          </h2>
          <p className="mt-3 text-black/80">
            Real notes from authors who trusted us with their books.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <ReviewCard key={i} idx={i} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsGrid;
