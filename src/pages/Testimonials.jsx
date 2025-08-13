import React from "react";
import { Helmet } from "react-helmet-async";
import BrandsSlider from "../components/layouts/BrandsSlider";
import ReviewsGrid from "../components/layouts/ReviewsGrid";
import Hero from "../components/ui/Hero";

const Testimonials = () => {
  return (
    <>
      <Helmet>
        <title>Testimonials - Saalfield Publishers</title>
      </Helmet>
      <Hero
        withoutSignup
        subtitle="Testimonials"
        title="What Our Clients Say"
        text="Saalfield Publishers has been a leader in the publishing industry for over 100 years."
      />
      <BrandsSlider />
      <ReviewsGrid />
    </>
  );
};

export default Testimonials;
