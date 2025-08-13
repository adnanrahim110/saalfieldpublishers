import { motion } from "motion/react";
import React from "react";
import { IoRocketSharp } from "react-icons/io5";
import { RiChatAiFill } from "react-icons/ri";
import { banners_hero_bg } from "../../assets";
import { fadeInUp } from "../../utils/animations";
import { cn } from "../../utils/cn";
import Signup from "../common/Signup";
import Button from "./Button";

const Hero = ({ title, subtitle, text, withoutSignup = false }) => {
  return (
    <div
      className="relative pt-48 pb-16 bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${banners_hero_bg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-black/40 to-black/20 mix-blend-multiply" />
      <div className="container">
        <div
          className={cn(
            "row items-center",
            withoutSignup ? "justify-center text-center" : "justify-between"
          )}
        >
          <div className={withoutSignup ? "lg:w-10/12" : "lg:w-[55%]"}>
            <div className="flex flex-col gap-6">
              <motion.h4
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp()}
                className="subtitle text-primary"
              >
                {subtitle}
              </motion.h4>
              <motion.h1
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp({ delay: 0.2 })}
                className="text-5xl text-white"
              >
                {title}
              </motion.h1>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp({ delay: 0.4 })}
                className="text-neutral-200"
              >
                {text}
              </motion.p>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp()}
                className="flex flex-wrap gap-5"
              >
                <Button icon={IoRocketSharp}>Start Project</Button>
                <Button dark icon={RiChatAiFill}>
                  Live Chat
                </Button>
              </motion.div>
            </div>
          </div>
          <div className="lg:w-[45%]">
            <Signup />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
