import React from "react";
import { Helmet } from "react-helmet-async";
import Cta from "../components/layouts/Cta";
import Faq from "../components/layouts/Faq";
import Form from "../components/layouts/Form";
import PortfolioSec from "../components/layouts/PortfolioSec";
import Process from "../components/layouts/Process";
import CardSection from "../components/ui/CardSection";
import Hero from "../components/ui/Hero";

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
      <CardSection
        title="Lorem ipsum dolor sit amet consec tetur adipi"
        subtitle="Lorem ipsum dolor sit"
        text="Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum"
      />
      <PortfolioSec />
      <Process />
      <Cta />
      <Faq />
      <Form />
    </>
  );
};

export default Home;
