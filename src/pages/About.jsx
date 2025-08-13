import React from "react";
import { Helmet } from "react-helmet-async";
import BrandsSlider from "../components/layouts/BrandsSlider";
import CtaSec from "../components/layouts/CtaSec";
import Faq from "../components/layouts/Faq";
import Form from "../components/layouts/Form";
import PortfolioSec2 from "../components/layouts/PortfolioSec2";
import VisionSec from "../components/layouts/VisionSec";
import CardSection from "../components/ui/CardSection";
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
        text="Saalfield Publishers has been a leader in the publishing industry for over 100 years. Our commitment to excellence drives us to create innovative and engaging educational materials that support learners of all ages and backgrounds, helping them achieve their fullest potential."
      />
      <BrandsSlider />
      <CardSection
        title="Our Mission"
        text="To provide high-quality educational materials that inspire and engage learners. We strive to empower educators and students by offering resources that foster creativity, curiosity, and lifelong learning in a rapidly changing world. Our mission extends beyond publishing; we aim to build a supportive community where ideas are shared, and innovation is celebrated. Through our dedication to integrity, inclusivity, and excellence, Saalfield Publishers continues to make a positive difference in education, helping individuals unlock their potential and achieve success."
        subtitle="Empowering Education"
      />
      <VisionSec />
      <PortfolioSec2 />
      <CtaSec />
      <Faq />
      <Form />
    </>
  );
};

export default About;
