import React from "react";
import { cn } from "../../utils/cn";

const Image = ({ src, frame, className, alt }) => {
  return (
    <div className={cn("relative py-5 px-7", className)}>
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${frame})` }}
      />
      <img src={src} alt={alt || ""} className="relative z-[2]" />
    </div>
  );
};

export default Image;
