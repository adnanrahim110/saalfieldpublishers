import React from "react";
import { Link } from "react-router-dom";
import { banners_service_sec, srv_img } from "../../assets";
import { cn } from "../../utils/cn";

const ServiceDetailsSec = ({ detailedContents }) => {
  return (
    <>
      <section
        id="service-details"
        className="relative bg-center bg-no-repeat py-24"
        style={{
          backgroundImage: `url(${banners_service_sec})`,
          backgroundSize: "cover",
        }}
      >
        <div className="container relative">
          <div className="row gap-y-10">
            {detailedContents.map((detailedContent, idx) => (
              <div key={idx}>
                <div className="grid items-start gap-5 md:grid-cols-5">
                  <div className="text-center col-span-full bg-white/85 p-6 ring-1 ring-black/10 backdrop-blur rounded-2xl">
                    <h2 className="font-serif text-3xl md:text-3xl text-black/90 drop-shadow-sm">
                      {detailedContent.title}
                    </h2>
                    {detailedContent.text && (
                      <p className="mt-2 text-black/80">
                        {detailedContent.text}
                      </p>
                    )}
                  </div>
                  <div
                    className={cn(
                      "md:col-span-2 h-full",
                      idx % 2 === 0 ? "order-1" : "order-2"
                    )}
                  >
                    <div className="relative h-full overflow-hidden rounded-2xl ring-1 ring-black/10 shadow-xl">
                      <img
                        src={detailedContent.img}
                        alt="Service preview"
                        className="size-full object-cover object-center grayscale-[15%] sepia-[12%] contrast-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>
                  </div>

                  <div
                    className={cn(
                      "md:col-span-3",
                      idx % 2 === 0 ? "order-2" : "order-1"
                    )}
                  >
                    <div className="rounded-2xl bg-white/85 p-6 ring-1 ring-black/10 backdrop-blur">
                      <p
                        className="text-black/80"
                        dangerouslySetInnerHTML={{
                          __html: detailedContent.content,
                        }}
                      />
                      <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {detailedContent.points?.map((h, i) => (
                          <li
                            key={i}
                            className="grid grid-cols-[20px_1fr] gap-3"
                          >
                            <span className="mt-[3px] flex size-5 items-center justify-center rounded-full bg-red-900 text-white">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className="size-3 fill-current"
                              >
                                <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                              </svg>
                            </span>
                            <span
                              className="text-sm text-black/80"
                              dangerouslySetInnerHTML={{ __html: h }}
                            />
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex gap-3">
                          <Link
                            to="/contact-us"
                            className="rounded-full bg-red-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-900/30 transition-transform hover:-translate-y-0.5"
                          >
                            Contact Now
                          </Link>
                          <Link
                            to="/"
                            className="rounded-full border border-black/20 bg-white/90 px-6 py-3 text-sm font-semibold text-black/80 shadow-md backdrop-blur transition-transform hover:-translate-y-0.5"
                          >
                            Live Chat
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailsSec;
