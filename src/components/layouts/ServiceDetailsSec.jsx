import React from "react";
import { banners_service_sec, srv_img } from "../../assets";

// Parchment background + service image (swap URLs with your own or Freepik assets)
const BG_PARCHMENT =
  "https://img.freepik.com/free-photo/old-vintage-paper-background_118047-1097.jpg";
const IMG_SERVICE = srv_img;

const defaultService = {
  title: "Complete Book Publishing",
  tagline: "Editing, design, production, and distribution — done with care.",
  blurb: [
    "From first draft to bookstore-ready, we start with a short consultation to understand your goals, audience, and must-haves. We review the manuscript and agree on scope so expectations are clear.",
    "Editing comes first. Developmental and copy edits refine structure, clarity, and voice. Then we design the book: cover concepts that fit your genre, thoughtful typography, and interior typesetting that reads well in print and digital.",
  ],
  highlights: [
    "Developmental and copy editing",
    "Custom cover design with 2–3 concepts",
    "Interior typesetting for print and eBook",
    "ISBN, metadata, and distribution setup",
    "Proof rounds and preflight checks",
    "Guided launch checklist",
  ],
  deliverables: [
    { label: "Formats", value: "Paperback, Hardcover, eBook (EPUB/PDF)" },
    { label: "Files", value: "Print-ready PDF, EPUB, source files on request" },
    { label: "Ownership", value: "You keep all rights" },
    { label: "Timeline", value: "6–12 weeks depending on edits" },
    { label: "Support", value: "Email + scheduled calls" },
  ],
  priceNote:
    "Projects start at $XXXX. Exact pricing depends on length and scope.",
  ctaPrimary: { label: "Start Your Project", href: "#contact" },
  ctaSecondary: { label: "See Portfolio", href: "#portfolio" },
};

const Row = ({ label, value }) => (
  <div className="flex items-start justify-between gap-4 py-2">
    <span className="text-sm font-semibold text-black/80">{label}</span>
    <span className="text-sm text-black/70">{value}</span>
  </div>
);

const ServiceDetailsSec = ({ service = defaultService }) => {
  const {
    title,
    tagline,
    blurb,
    highlights = [],
    ctaPrimary,
    ctaSecondary,
  } = service;

  return (
    <section
      id="service-details"
      className="relative bg-center bg-no-repeat py-20"
      style={{
        backgroundImage: `url(${banners_service_sec})`,
        backgroundSize: "cover",
      }}
    >
      <div className="container relative">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-black/90 italic drop-shadow-sm">
            {title}
          </h2>
          <p className="mt-2 text-black/80">{tagline}</p>
        </div>

        <div className="grid items-start gap-8 md:grid-cols-5">
          <div className="md:col-span-2 h-full">
            <div className="relative h-full overflow-hidden rounded-2xl ring-1 ring-black/10 shadow-xl">
              <img
                src={IMG_SERVICE}
                alt="Service preview"
                className="size-full object-cover object-center grayscale-[15%] sepia-[12%] contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="rounded-2xl bg-white/85 p-6 ring-1 ring-black/10 backdrop-blur">
              {Array.isArray(blurb) ? (
                <div className="space-y-3">
                  {blurb.map((p, i) => (
                    <p key={i} className="text-black/80">
                      {p}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="text-black/80">{blurb}</p>
              )}
              <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-[3px] inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-900 text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="h-3 w-3 fill-current"
                      >
                        <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                    </span>
                    <span className="text-sm text-black/80">{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <div className="flex gap-3">
                  {ctaPrimary && (
                    <a
                      href={ctaPrimary.href}
                      className="rounded-full bg-red-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-900/30 transition-transform hover:-translate-y-0.5"
                    >
                      {ctaPrimary.label}
                    </a>
                  )}
                  {ctaSecondary && (
                    <a
                      href={ctaSecondary.href}
                      className="rounded-full border border-black/20 bg-white/90 px-6 py-3 text-sm font-semibold text-black/80 shadow-md backdrop-blur transition-transform hover:-translate-y-0.5"
                    >
                      {ctaSecondary.label}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsSec;
