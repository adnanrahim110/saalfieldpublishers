import React from "react";
import { Helmet } from "react-helmet-async";
import AuthorsSlider from "../components/layouts/AuthorsSlider";
import Awards from "../components/layouts/Awards";
import BrandsSlider from "../components/layouts/BrandsSlider";
import CtaSec from "../components/layouts/CtaSec";
import Faq from "../components/layouts/Faq";
import Form from "../components/layouts/Form";
import PortfolioSec2 from "../components/layouts/PortfolioSec2";
import Process from "../components/layouts/Process";
import ReviewSec from "../components/layouts/ReviewSec";
import CardSection from "../components/ui/CardSection";
import Hero from "../components/ui/Hero";
import { authors } from "../constants";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home - Saalfield Publishers</title>
      </Helmet>
      <Hero
        subtitle="Lorem ipsum dolor sit"
        title="Lorem ipsum dolor sit amet consec tetur adipi"
        text="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum"
      />
      <BrandsSlider />
      <CardSection
        title="Lorem ipsum dolor sit amet consec tetur adipi"
        subtitle="Lorem ipsum dolor sit"
        text="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum"
      />
      <AuthorsSlider data={authors} />
      <PortfolioSec2 />
      <Awards />
      <CtaSec />
      <Process />
      <ReviewSec />
      <Faq />
      <Form />
    </>
  );
};

export default Home;
