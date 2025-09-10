import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
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
import { services } from "../constants";

const Service = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.url.replace("/", "") === slug);

  return (
    <>
      <Helmet>
        <title>{service.title} - Saalfield Publishers</title>
      </Helmet>
      {service.hero && (
        <Hero
          subtitle={service.title}
          title={service.hero.title}
          text={service.hero.text}
        />
      )}
      <BrandsSlider />
      {service.sec1 && (
        <CardSection
          title={service.sec1.title}
          text={service.sec1.text}
          img={service.sec1.img}
        />
      )}
      {service.sec2 && <ServiceDetailsSec detailedContents={service.sec2} />}
      <Process />
      <PortfolioSec2 />
      {service.sec3 && (
        <CardSection
          title={service.sec3.title}
          text={service.sec3.text}
          img={service.sec3.img}
          reverse
        />
      )}
      <CtaSec
        title={service.cta && service.cta.title}
        text={service.cta && service.cta.text}
      />
      <ReviewSec reviews={service.reviews && service.reviews} />
      <Faq qouestionare={service.faq && service.faq} />
      <Form />
    </>
  );
};

export default Service;
