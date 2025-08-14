import React from "react";
import { banners_texture } from "../../assets";

const HomeProcess = () => {
  return (
    <section
      className="relative py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${banners_texture})` }}
    ></section>
  );
};

export default HomeProcess;
