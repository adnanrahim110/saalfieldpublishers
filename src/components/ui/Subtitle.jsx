import React from "react";
import { frames_subtitle } from "../../assets";
import { cn } from "../../utils/cn";

const Subtitle = ({ children, className, frameClass }) => {
  return (
    <div className={`subtitle relative inline-block w-fit pt-1.5 pb-2.5 px-6`}>
      <div
        className={cn("absolute inset-0 bg-center bg-no-repeat", frameClass)}
        style={{
          backgroundImage: `url(${frames_subtitle})`,
          backgroundSize: "100% 100%",
        }}
      />
      <h4
        className={cn(
          "text-xl font-semibold text-black relative z-[1] inline-block w-auto",
          className
        )}
      >
        {children}
      </h4>
    </div>
  );
};

export default Subtitle;
