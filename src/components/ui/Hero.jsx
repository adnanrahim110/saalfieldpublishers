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
      className={cn(
        "relative pt-48 bg-no-repeat bg-center bg-cover",
        withoutSignup ? "pb-24" : "pb-16"
      )}
      style={{ backgroundImage: `url(${banners_hero_bg})` }}
    >
      <div
        className={cn(
          "absolute inset-0 mix-blend-multiply",
          withoutSignup
            ? "bg-gradient-to-t from-black/90 from-0% via-40% to-90% via-black/40 to-black/40"
            : "bg-gradient-to-r from-primary-900 via-black/40 to-black/40 lg:to-black/20"
        )}
      />
      <div className="container">
        <div
          className={cn(
            "row items-center gap-y-20",
            withoutSignup ? "justify-center text-center" : "justify-between"
          )}
        >
          <div className={withoutSignup ? "lg:w-full" : "lg:w-[55%]"}>
            <div className="flex flex-col gap-6">
              <motion.h4
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp()}
                className={cn(
                  "text-xl md:text-[26px]",
                  withoutSignup ? "text-primary-300 font-black" : "text-primary"
                )}
                dangerouslySetInnerHTML={{ __html: subtitle }}
              />
              <motion.h1
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp({ delay: 0.2 })}
                className="text-[34px] lg:text-4xl text-white"
              >
                {title}
              </motion.h1>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp({ delay: 0.4 })}
                className="text-neutral-200"
                dangerouslySetInnerHTML={{ __html: text }}
              />
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp()}
                className={cn(
                  "flex flex-wrap gap-5",
                  withoutSignup ? "justify-center" : "justify-start"
                )}
              >
                <Button icon={IoRocketSharp}>Start Project</Button>
                <Button dark icon={RiChatAiFill}>
                  Live Chat
                </Button>
              </motion.div>
            </div>
          </div>
          {!withoutSignup && (
            <div className="lg:w-[45%]">
              <Signup />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
