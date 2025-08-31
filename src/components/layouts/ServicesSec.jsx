import React from "react";
import { CgChevronDoubleRight } from "react-icons/cg";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { banners_service_sec, banners_texture, home_sec1 } from "../../assets";
import { servicesSec } from "../../constants";
import Subtitle from "../ui/Subtitle";

const ServicesSec = () => {
  return (
    <section
      className="relative py-24 bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${banners_texture})` }}
    >
      <div className="container">
        <div className="row justify-center gap-14">
          <div className="lg:w-10/12 text-center">
            <Subtitle>Our Services</Subtitle>
            <h2 className="title my-5 text-black">
              We Write What You Want – Any Genre, Any Style
            </h2>
            <p>
              At Saalfield, we get it that everyone’s story is different. That’s
              why we just don’t stick to one type of writing. Each of our
              writers is pro when it comes to jumping into whatever genre you
              need help with. Here are some services that we tend to offer:
            </p>
          </div>
          <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
              {servicesSec.map((srv, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <div className="size-full flex flex-col justify-between">
                    <img
                      src={home_sec1}
                      alt={srv.title}
                      className="size-full object-cover rounded-t-xl max-h-56"
                    />
                    <div className="flex px-5 py-3 flex-col gap-2">
                      <h4 className="text-xl font-serif tracking-wider font-bold">
                        {srv.title}
                      </h4>
                      <p className="text-base">{srv.text}</p>
                    </div>
                    <div className="px-5 py-3 bg-primary-100">
                      <Link
                        to={srv.url}
                        className="inline-flex items-center font-medium underline decoration-transparent hover:decoration-primary-600 hover:text-primary-600 group transition-all duration-300 ease-in-out"
                      >
                        <span className="text-base">Learn more</span>
                        <span>
                          <CgChevronDoubleRight className="text-xl -mb-0.5 transition-all duration-300 ease-linear group-hover:translate-x-1" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSec;
