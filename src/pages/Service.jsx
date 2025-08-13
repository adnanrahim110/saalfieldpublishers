import React from "react";
import { Helmet } from "react-helmet-async";
import BrandsSlider from "../components/layouts/BrandsSlider";
import CtaSec from "../components/layouts/CtaSec";
import Faq from "../components/layouts/Faq";
import Form from "../components/layouts/Form";
import PortfolioSec2 from "../components/layouts/PortfolioSec2";
import Process from "../components/layouts/Process";
import ReviewSec from "../components/layouts/ReviewSec";
import ServiceDetailsSec from "../components/layouts/ServiceDetailsSec";
import CardSection from "../components/ui/CardSection";
import Hero from "../components/ui/Hero";

const Service = () => {
  return (
    <>
      <Helmet>
        <title>Service - Saalfield Publishers</title>
      </Helmet>
      <Hero
        subtitle="Our Services"
        title="Discover Our Range of Publishing Services"
        text="At Saalfield Publishers, we offer a comprehensive suite of services to support authors at every stage of the publishing process. From manuscript development to marketing strategy, our team of experts is dedicated to helping you succeed. Whether you're a first-time writer or a seasoned author, we provide personalized guidance and professional resources to bring your vision to life. Our commitment to quality and innovation ensures that your work receives the attention it deserves, from initial concept to final publication and beyond."
      />
      <BrandsSlider />
      <CardSection
        title="Our Services"
        text="Explore the various services we offer to authors, including editing, design, and marketing. Our experienced editors help refine your manuscript, while our creative designers craft visually appealing layouts and covers. We also offer strategic marketing solutions to maximize your book's reach and impact. With Saalfield Publishers, you gain access to a network of industry professionals dedicated to supporting your publishing journey every step of the way."
      />
      <ServiceDetailsSec />
      <Process />
      <PortfolioSec2 />
      <CtaSec />
      <ReviewSec />
      <Faq />
      <Form />
    </>
  );
};

export default Service;
