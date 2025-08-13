import React from "react";
import { IoRocketSharp } from "react-icons/io5";
import { RiChatAiFill } from "react-icons/ri";
import { banners_cta, banners_texture } from "../../assets";
import Button from "../ui/Button";
import Subtitle from "../ui/Subtitle";

const Cta = () => {
  return (
    <section className="relative py-20">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center rotate-180"
        style={{ backgroundImage: `url(${banners_texture})` }}
      />
      <img
        src={banners_cta}
        className="absolute top-1/2 left-1/2 -translate-1/2 w-[94%] pb-5 size-full saturate-150"
        alt=""
      />
      <div className="absolute inset-0 bg-radial from-black/20 via-transparent to-transparent mix-blend-multiply" />
      <div className="container">
        <div className="row justify-center text-center">
          <div className="lg:w-8/12">
            <div className="space-y-5 pt-52 pb-20">
              <Subtitle
                frameClass="brightness-[200%]"
                className="font-bold text-primary-700"
              >
                Get Started Today
              </Subtitle>
              <h2 className="title">Lorem ipsum dolor sit amet consectetur</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
                harum quaerat odio molestias voluptas recusandae, non maxime quo
                error a, magnam veniam voluptates dolorem numquam mollitia sint.
                Numquam, facilis saepe!
              </p>
              <div className="flex mt-10! justify-center flex-wrap gap-5">
                <Button icon={IoRocketSharp}>Get Started</Button>
                <Button dark icon={RiChatAiFill}>
                  Live Chat
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
