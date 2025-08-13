import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../components/ui/Hero";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About - Saalfield Publishers</title>
      </Helmet>
      <Hero
        withoutSignup
        subtitle="About Us"
        title="Learn more about our company"
        text="Saalfield Publishers has been a leader in the publishing industry for over 100 years."
      />
    </>
  );
};

export default About;
