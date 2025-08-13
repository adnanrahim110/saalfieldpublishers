import { motion } from "motion/react";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { banners_faq_bg, banners_sec_bg2, bstack, el_ink } from "../../assets";
import { faqsQuestions } from "../../constants";
import { fadeInUp } from "../../utils/animations";

const Faq = ({ qouestionare = faqsQuestions }) => {
  const [openId, setOpenId] = useState(0);
  return (
    <section
      className="py-20 relative bg-cover bg-top bg-no-repeat shadow-[inset_0_0_40px_50px] shadow-white"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(255,255,255, 0.55), rgba(255,255,255, 0.55)), url(${banners_sec_bg2})`,
      }}
    >
      <div className="container">
        <div className="row items-center justify-between">
          <div className="lg:w-[41%]">
            <img src={bstack} alt="" className="scale-110" />
          </div>
          <div className="lg:w-[58%]">
            <div
              className="relative bg-no-repeat bg-center py-20 px-24"
              style={{
                backgroundImage: `url(${banners_faq_bg})`,
                backgroundSize: "100% 100%",
              }}
            >
              <h4 className="title mb-5 text-shdow">
                Frequently Asked Questions
              </h4>
              <ul className="space-y-0.5 relative">
                {qouestionare.map((faq, idx) => {
                  const isOpen = openId === idx;
                  return (
                    <li key={idx} className="overflow-hidden group">
                      <button
                        onClick={() => setOpenId(idx)}
                        className={`w-full transition-all duration-300 py-3 px-2.5 cursor-pointer flex items-center justify-between border ${
                          openId === idx
                            ? "bg-primary border-primary text-white"
                            : "bg-primary-50 text-primary-600 border-primary-50"
                        } ${openId !== idx ? "" : ""}`}
                      >
                        <span className="text-base font-roundkey text-left">
                          {faq.title}
                        </span>
                        <span>
                          <FaAngleDown
                            className={`transition-all duration-300 ease-linear ${
                              openId === idx ? "rotate-180" : ""
                            }`}
                          />
                        </span>
                      </button>
                      {isOpen && (
                        <motion.div
                          initial={{ maxHeight: 0, opacity: 0 }}
                          animate={{ maxHeight: "160px", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5 }}
                          className="overflow-hidden relative"
                        >
                          <img
                            src={el_ink}
                            className="absolute -bottom-6 opacity-50 -left-5 w-40 rotate-180 z-0"
                            alt=""
                          />
                          <div className="bg-white/25 border border-t-0 border-white/50 backdrop-blur-[2px] text-black py-4 px-3 relative z-[1] ">
                            <motion.div
                              initial="hidden"
                              whileInView="visible"
                              viewport={{ once: true }}
                              variants={fadeInUp()}
                              className="flex flex-col"
                            >
                              <div className="relative text-sm mb-2 w-full z-[2]">
                                {faq.ans}
                              </div>
                            </motion.div>
                          </div>
                        </motion.div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
