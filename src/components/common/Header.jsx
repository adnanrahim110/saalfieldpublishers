import { AnimatePresence, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoChevronDownSharp, IoClose, IoMenu } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { banners_header, logo } from "../../assets";
import { navigation } from "../../constants";
import { cn } from "../../utils/cn";
import Button from "../ui/Button";

const Header = () => {
  const location = useLocation();
  const [isActiveDropdown, setIsActiveDropdown] = useState(null); // desktop dropdown
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null); // key of open parent in mobile
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

  // close menus on route change
  useEffect(() => {
    setIsActiveDropdown(null);
    setMobileOpen(false);
    setMobileDropdown(null);
  }, [path]);

  // close desktop dropdowns on outside click
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

  // global Escape to close any open menu
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsActiveDropdown(null);
        setMobileOpen(false);
        setMobileDropdown(null);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  // lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [mobileOpen]);

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
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" aria-label="Go to home">
                <img
                  src={logo}
                  alt="Saalfield Publishers"
                  className="max-w-20 lg:max-w-[100px] scale-125 translate-y-2"
                />
              </Link>
            </div>

            {/* Desktop nav */}
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
                    ? { to: item.url, onClick: () => setIsActiveDropdown(null) }
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
                        "flex font-source font-medium tracking-wide uppercase text-sm items-center gap-0.5 text-black cursor-pointer transition-all duration-300 ease-in-out relative before:absolute before:w-0 before:left-0 before:top-full before:h-px before:transition-all before:duration-300 before:ease-linear",
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

            {/* Desktop CTA */}
            <div className="hidden lg:inline-block">
              <Button to="/contact-us" icon={FaArrowRight}>
                Let's get started
              </Button>
            </div>

            {/* Mobile hamburger */}
            <div className="lg:hidden">
              <button
                type="button"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-controls="mobile-menu"
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((v) => !v)}
                className="p-2 rounded-xl border border-black/10 bg-white/70 backdrop-blur-sm active:scale-95"
              >
                {mobileOpen ? <IoClose size={22} /> : <IoMenu size={22} />}
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile overlay + panel */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Dim background */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black z-[110]"
              onClick={() => setMobileOpen(false)}
            />

            {/* Slide-in menu */}
            <motion.aside
              key="panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
              id="mobile-menu"
              className="fixed top-0 right-0 h-screen w-full sm:w-[84%] sm:max-w-sm bg-white z-[120] shadow-2xl flex flex-col"
              role="dialog"
              aria-modal="true"
            >
              <div className="px-4 pt-3 pb-2 border-b border-black/10 flex items-center justify-between">
                <Link
                  to="/"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center gap-2"
                >
                  <img
                    src={logo}
                    alt="Saalfield Publishers"
                    className="h-20 w-auto"
                  />
                </Link>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg border border-black/10 active:scale-95 cursor-pointer"
                >
                  <IoClose size={20} />
                </button>
              </div>

              <nav className="overflow-y-auto">
                <ul className="py-2">
                  {navigation.map((item, idx) => {
                    const key = keyOf(item, idx);
                    const isParent = Array.isArray(item.dropdown);
                    const open = mobileDropdown === key;

                    if (!isParent) {
                      return (
                        <li key={key}>
                          <Link
                            to={item.url || "#"}
                            onClick={() => setMobileOpen(false)}
                            className={cn(
                              "flex items-center justify-between px-4 py-3 text-base font-medium tracking-wide",
                              path === item.url
                                ? "text-primary"
                                : "text-neutral-800"
                            )}
                          >
                            <span>{item.title}</span>
                          </Link>
                        </li>
                      );
                    }

                    return (
                      <li
                        key={key}
                        className="border-t border-black/5 first:border-t-0"
                      >
                        <button
                          type="button"
                          onClick={() =>
                            setMobileDropdown((p) => (p === key ? null : key))
                          }
                          aria-expanded={open}
                          className={cn(
                            "w-full flex items-center justify-between px-4 py-3 text-base font-medium tracking-wide",
                            open ? "text-primary" : "text-neutral-800"
                          )}
                        >
                          <span>{item.title}</span>
                          <IoChevronDownSharp
                            className={cn(
                              "transition-transform duration-200",
                              open ? "rotate-180 text-primary" : "text-black"
                            )}
                          />
                        </button>

                        <AnimatePresence initial={false}>
                          {open && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="pl-2"
                            >
                              {item.dropdown.map((child, cIdx) => {
                                const active =
                                  typeof child?.url === "string" &&
                                  child.url === path;
                                return (
                                  <li key={cIdx}>
                                    <Link
                                      to={child.url || "#"}
                                      onClick={() => setMobileOpen(false)}
                                      className={cn(
                                        "block px-4 py-2.5 text-sm tracking-wide",
                                        active
                                          ? "text-primary"
                                          : "text-neutral-700 hover:text-black"
                                      )}
                                    >
                                      {child.title}
                                    </Link>
                                  </li>
                                );
                              })}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="mt-auto p-4 border-t border-black/10">
                <Button
                  to="/contact-us"
                  icon={FaArrowRight}
                  className="w-full justify-center"
                >
                  Let's get started
                </Button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
