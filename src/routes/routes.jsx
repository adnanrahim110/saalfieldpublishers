import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Service from "../pages/Service";
import Testimonials from "../pages/Testimonials";

const AppRoutes = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/:slug" element={<Service />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
