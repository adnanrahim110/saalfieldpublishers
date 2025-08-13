import React from "react";
import { Helmet } from "react-helmet-async";
import Form from "../components/layouts/Form";
import Hero from "../components/ui/Hero";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact - Saalfield Publishers</title>
      </Helmet>
      <Hero
        withoutSignup
        subtitle="Contact Us"
        title="Get in Touch with Our Team"
        text="Saalfield Publishers is here to assist you with any inquiries you may have."
      />
      <Form />
    </>
  );
};

export default Contact;
