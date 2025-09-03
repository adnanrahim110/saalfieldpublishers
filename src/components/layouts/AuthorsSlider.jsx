import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { A11y, Autoplay, Keyboard, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/keyboard";
import "swiper/css/pagination";

const placeholder =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='640' height='360' viewBox='0 0 640 360'>
      <rect width='100%' height='100%' fill='#f4f0cd'/>
      <circle cx='320' cy='140' r='80' fill='#dfc865'/>
      <rect x='210' y='280' width='220' height='18' rx='9' fill='#c59b2d'/>
    </svg>`
  );

function clampWords(str = "", max = 40) {
  const words = str.split(/\s+/);
  return words.length <= max ? str : words.slice(0, max).join(" ") + "…";
}

function AuthorCard({ author, onReadMore }) {
  const firstPara = useMemo(
    () => clampWords(author.bio?.[0] || "", 38),
    [author]
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="h-full"
    >
      <div className="group h-full rounded-xl bg-white border border-primary-200/50 shadow-sm hover:shadow-md transition-shadow">
        <div className="relative aspect-[16/17] overflow-hidden rounded-t-xl">
          <img
            src={author.img || placeholder}
            alt={author.name}
            className="size-full object-cover object-center transform group-hover:scale-[1.02] transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent pointer-events-none" />
        </div>

        <div className="p-4 lg:p-5 space-y-2.5">
          <h3 className="title text-[20px] lg:text-[22px] font-noto text-black">
            {author.name}
          </h3>

          <p className="text-neutral-700 leading-relaxed text-[15px] line-clamp-2">
            {firstPara}
          </p>

          <div className="pt-1 flex items-center justify-between">
            <button
              type="button"
              className="text-sm cursor-pointer font-semibold text-primary-700 hover:text-primary-800 underline underline-offset-4"
              onClick={() => onReadMore(author)}
            >
              Read more
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function useBodyScrollLock(isLocked) {
  useEffect(() => {
    if (!isLocked) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isLocked]);
}

function Modal({ open, author, onClose }) {
  useBodyScrollLock(open);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const panelRef = useRef(null);
  const onBackdrop = (e) => {
    if (panelRef.current && !panelRef.current.contains(e.target)) onClose();
  };

  const topBio = Array.isArray(author?.bio) ? author.bio.slice(0, 2) : [];
  const bottomBio = Array.isArray(author?.bio) ? author.bio.slice(2) : [];

  return (
    <AnimatePresence>
      {open && author && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="author-modal-title"
          className="fixed inset-0 z-[999] grid place-items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={onBackdrop}
        >
          <motion.div className="absolute inset-0 bg-black/50" />

          <motion.div
            ref={panelRef}
            className="relative w-[94vw] max-w-3xl lg:max-w-5xl max-h-[90vh] rounded-2xl bg-white border border-primary-200/60 shadow-xl overflow-hidden flex flex-col"
            initial={{ y: 20, scale: 0.98 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 16, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between gap-3 p-3 lg:p-4 bg-white/85 backdrop-blur border-b border-neutral-200">
              <h3
                id="author-modal-title"
                className="truncate text-[16px] lg:text-[18px] font-noto font-extrabold text-black"
                title={author.name}
              >
                {author.name}
              </h3>
              <button
                aria-label="Close"
                onClick={onClose}
                className="inline-flex items-center justify-center size-10 rounded-full bg-white border border-neutral-200 shadow hover:bg-neutral-50 shrink-0"
              >
                <FaTimes />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto scroll-thin">
              <div className="p-5 lg:p-7 grid gap-5 md:grid-cols-[auto_1fr]">
                <div className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-80 rounded-xl overflow-hidden border border-neutral-200">
                  <img
                    src={author.img || placeholder}
                    alt={author.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div className="space-y-3 self-start">
                  <h4 className="title text-[22px] lg:text-[26px] text-black">
                    {author.name}
                  </h4>
                  {topBio.length ? (
                    <div className="space-y-3 text-neutral-800 leading-relaxed">
                      {topBio.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-neutral-700">No bio available.</p>
                  )}
                </div>

                {bottomBio.length > 0 && (
                  <div className="md:col-span-2 pt-2 space-y-3 text-neutral-800 leading-relaxed">
                    {bottomBio.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function AuthorsSlider({ data }) {
  const [activeAuthor, setActiveAuthor] = useState(null);
  const open = useCallback((author) => setActiveAuthor(author), []);
  const close = useCallback(() => setActiveAuthor(null), []);
  const items = data || [];

  return (
    <section className="py-12 lg:py-16">
      <div className="container">
        <div className="row mb-6 lg:mb-8 items-end">
          <div className="w-full">
            <h2 className="title text-[32px] lg:text-[40px] text-black">
              Featured Authors
            </h2>
            <p className="text-neutral-700">Voices that shaped generations</p>
          </div>
        </div>

        <Swiper
          modules={[Pagination, Autoplay, A11y, Keyboard]}
          autoplay={{ delay: 4200, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          keyboard={{ enabled: true }}
          spaceBetween={16}
          breakpoints={{
            0: { slidesPerView: 1.05, spaceBetween: 10 },
            480: { slidesPerView: 1.2, spaceBetween: 12 },
            640: { slidesPerView: 1.5, spaceBetween: 14 },
            768: { slidesPerView: 1.75, spaceBetween: 16 },
            1024: { slidesPerView: 3, spaceBetween: 18 },
            1280: { slidesPerView: 3, spaceBetween: 20 },
            1536: { slidesPerView: 3, spaceBetween: 22 },
          }}
          className="!pb-10"
        >
          {items.map((author, idx) => (
            <SwiperSlide key={`${author.name}-${idx}`} className="!h-auto">
              <AuthorCard author={author} onReadMore={open} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Modal open={!!activeAuthor} author={activeAuthor} onClose={close} />
    </section>
  );
}
