import React from "react";
import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";

const Button = ({
  type = "button",
  to,
  children,
  className,
  onClick,
  disabled = false,
  icon,
  iconClass,
  small = false,
  dark = false,
}) => {
  const Tag = to ? Link : "button";
  const Icon = icon;
  return (
    <Tag
      {...(to
        ? { to: to }
        : { onClick: onClick, type: type, disabled: disabled })}
      className={cn(
        "relative group text-white font-medium flex items-center justify-center whitespace-nowrap rounded-lg hover:rotate-[2deg] will-change-transform hover:shadow-primary-500/40 cursor-pointer",
        small
          ? "h-9 pr-3 pl-10 text-sm shadow-md hover:shadow-lg"
          : "h-12 pl-14 pr-5 text-base shadow-lg hover:shadow-xl",
        !dark
          ? "bg-primary-400 shadow-primary-400/30"
          : "bg-primary-800 shadow-primary-800/30",
        "transition-all duration-300 ease-in-out",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center justify-center absolute left-0 top-0 mt-1 ml-1 bg-white group-hover:w-[calc(100%-0.5rem)] transition-all rounded-md duration-300",
          small
            ? "size-7 p-[0.2rem] bottom-0.5 text-base"
            : "size-10 p-[0.35rem] bottom-1 text-2xl",
          !dark ? "text-primary-600" : "text-primary-800",
          iconClass
        )}
      >
        {icon && <Icon />}
      </div>
      <div>{children}</div>
    </Tag>
  );
};

export default Button;
