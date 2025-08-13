import { motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoChevronDownSharp } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { banners_header, logo } from "../../assets";
import { navigation } from "../../constants";
import { cn } from "../../utils/cn";
import Button from "../ui/Button";

const Header = () => {
  const location = useLocation();
  const [isActiveDropdown, setIsActiveDropdown] = useState(null);
  const navRef = useRef(null);
  const path = location.pathname;

  const keyOf = (item, fallback) => item?.id ?? item?.title ?? fallback;

  const hasActiveChild = (item) =>
    Array.isArray(item?.dropdown) &&
    item.dropdown.some(
      (child) => typeof child?.url === "string" && child.url === path
    );

  const isSelf = (item) => typeof item?.url === "string" && item.url === path;

  const activeItem = (item, key) =>
    isSelf(item) || hasActiveChild(item) || isActiveDropdown === key;

  const toggleDropdown = (key) => {
    setIsActiveDropdown((prev) => (prev === key ? null : key));
  };

  useEffect(() => {
    setIsActiveDropdown(null);
  }, [path]);

  useEffect(() => {
    const handleOutside = (e) => {
      if (
        isActiveDropdown &&
        navRef.current &&
        !navRef.current.contains(e.target)
      ) {
        setIsActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
    };
  }, [isActiveDropdown]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsActiveDropdown(null);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute w-full top-0 left-0 py-1 bg-white z-[100]"
    >
      <div
        className="absolute top-0 -bottom-9 -left-10 -right-10 bg-cover bg-bottom"
        style={{ backgroundImage: `url(${banners_header})` }}
      />
      <div className="container">
        <div className="row">
          <nav ref={navRef} className="flex items-center justify-between">
            <div>
              <Link to="/">
                <img
                  src={logo}
                  alt="Saalfield Publishers"
                  className="lg:max-w-[100px] scale-125 translate-y-2"
                />
              </Link>
            </div>

            <ul className="hidden lg:flex flex-wrap gap-10 items-center justify-between">
              {navigation.map((item, idx) => {
                const key = keyOf(item, idx);
                const isOpen = isActiveDropdown === key;
                const isActive = activeItem(item, key);

                const Wrapper =
                  typeof item.url === "string"
                    ? Link
                    : Array.isArray(item.dropdown)
                    ? "button"
                    : "span";

                const wrapperProps =
                  typeof item.url === "string"
                    ? {
                        to: item.url,
                        onClick: () => setIsActiveDropdown(null),
                      }
                    : Array.isArray(item.dropdown)
                    ? {
                        type: "button",
                        onClick: () => toggleDropdown(key),
                        "aria-expanded": isOpen,
                      }
                    : {};

                return (
                  <li
                    key={key}
                    className="inline-flex items-center gap-1 relative"
                  >
                    <Wrapper
                      {...wrapperProps}
                      className={cn(
                        "flex font-source font-medium tracking-wide uppercase text-sm items-center gap-0.5 text-black cursor-pointer transition-all duration-300ease-in-out relative before:absolute before:w-0 before:left-0 before:top-full before:h-px before:transition-all before:duration-300 before:ease-linear",
                        isActive
                          ? "before:bg-primary-700 text-primary-700 before:w-full"
                          : "hover:before:w-full before:bg-black"
                      )}
                    >
                      <span>{item.title}</span>
                    </Wrapper>
                    {Array.isArray(item.dropdown) && (
                      <IoChevronDownSharp
                        className={cn(
                          "transition-transform duration-200",
                          isOpen ? "rotate-180 text-primary-700" : "text-black"
                        )}
                      />
                    )}

                    {Array.isArray(item.dropdown) && isOpen && (
                      <ul className="absolute top-full left-0 mt-2 min-w-3xs bg-white shadow-lg border border-black/10 divide-y divide-black/10 z-50">
                        {item.dropdown.map((child, cIdx) => {
                          const childActive =
                            typeof child?.url === "string" &&
                            child.url === path;
                          return (
                            <li key={cIdx}>
                              <Link
                                to={child.url || "#"}
                                onClick={() => setIsActiveDropdown(null)}
                                className={cn(
                                  "block px-4 py-2 text-sm tracking-wider transition-colors",
                                  childActive
                                    ? "text-white bg-primary"
                                    : "text-neutral-800 hover:text-black hover:bg-primary-100"
                                )}
                              >
                                {child.title}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
            <div className="inline-block">
              <Button to="/contact-us" icon={FaArrowRight}>
                Let's get started
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
