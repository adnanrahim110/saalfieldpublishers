import React from "react";
import { Helmet } from "react-helmet-async";
import BrandsSlider from "../components/layouts/BrandsSlider";
import CtaSec from "../components/layouts/CtaSec";
import Faq from "../components/layouts/Faq";
import Form from "../components/layouts/Form";
import PortfolioSec2 from "../components/layouts/PortfolioSec2";
import ServicesSec from "../components/layouts/ServicesSec";
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
        title="Ever Wondered Who’s Really Behind The Books You Love?"
        text="Saalfield Ghostwriting Services isn’t new to the book world, we’re just newly awakened. Decades ago, Saalfield Publishing was a household name, filling bookshelves across America with joyful, imaginative children’s books. From the 1990s to 1970s, we helped kids dream bigger. Then like a favorite storybook gently placed back on the shelf… things went all quiet. <br/>BUT NOW WE’RE BACK… <br/> This time we’re helping you tell your story. We are now offering professional ghostwriting, editing, book publishing and much more to the aspiring authors out there. Each of our services is revamped for today’s digital-first world, but grounded in the same storytelling magic that built our legacy."
      />
      <BrandsSlider />
      <CardSection
        title="Our Mission"
        text="To help everyday people become published authors by providing expert ghostwriting, editing, publishing, book back cover, book illustration and much more. Cherry on top? You can get it all affordably and with confidentiality."
        subtitle="Mission"
      />
      <VisionSec />
      <ServicesSec />
      <PortfolioSec2 />
      <CtaSec />
      <Faq />
      <Form />
    </>
  );
};

export default About;
