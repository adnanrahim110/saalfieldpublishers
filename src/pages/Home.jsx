import React from "react";
import { Helmet } from "react-helmet-async";
import AuthorsSlider from "../components/layouts/AuthorsSlider";
import Awards from "../components/layouts/Awards";
import BrandsSlider from "../components/layouts/BrandsSlider";
import CtaSec from "../components/layouts/CtaSec";
import Faq from "../components/layouts/Faq";
import Form from "../components/layouts/Form";
import PortfolioSec from "../components/layouts/PortfolioSec";
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
        subtitle="We've written the stories you love, <br/> without ever taking the spotlight"
        title="Saalfield Publishing – The Legacy Is Back With The Best Ghostwriting Services in USA"
        text={`For nearly 8 decades, the name Saalfield Publishing Services, by providing the most fun-filled children’s book, conjured the magic in the minds of children and adults alike. From the dusty shelves of 1900s America to the brightly lit playrooms of the 1970s, we were surely one of the largest creators of children’s books and learning materials in the world. Then, as quickly as a page turned, it all went QUITE.. <br/><br/> UNTIL NOW.. <br/><br/> Saalfield is back with some top-notch book ghostwriting and publishing service to offer across the US. Bigger, bolder and beautifully reimagined for a new generation, while honoring the rich writing, editing and publishing tradition that made us a legend back in the days.`}
      />
      <BrandsSlider />
      <CardSection
        subtitle="You’re New To Writing. We Are Not"
        title="Top-Rated Ghostwriters For Hire Perfect For Newly Budding Writers"
        text="Struggling to write? We’re here to guide you through every stage, writing, editing and preparing your book for publication. Starting your journey as a writer can be tough, especially when your ideas are vivid, the words just won’t come. As a trusted ghostwriting company with deep publishing roots, we offer more than just words on a page. We guide you through every step, beginning from ideation to editing, making the process smooth, professional and most importantly confidential. So, if you’re searching for ghostwriters for hire who truly understand the challenges of first-time authors, you’re just in the right place. Let our book writing professionals handle the structure, language, and storytelling finesse."
      />
      <AuthorsSlider data={authors} />
      <PortfolioSec />
      <Awards />
      <CtaSec
        title="Get Top Ghostwriters For Budget-Friendly Book Writing Services Now!"
        text="We turn your big ideas into bestselling books. Whether you’re a first-time writer or stuck mid-manuscript, Saalfield pairs you with expert storytellers, editors, and publishing consultants to craft, polish and publish your masterpiece. Let’s bring your vision to life professionally and affordably. "
      />
      <Process />
      <ReviewSec />
      <Faq />
      <Form />
    </>
  );
};

export default Home;
