import React from "react";
import { motion } from "framer-motion";
import Mission from "../assets/Mission.png";
import Vision from "../assets/Vision.png";
import CopyRight from "./../Components/CopyRight";
import { FaEye, FaBullseye, FaArrowUp } from "react-icons/fa"; // ✅ Added FaArrowUp here

const About = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const coreValues = [
    {
      letter: "E",
      title: "Excellence Without Compromise",
      desc: "We uphold the highest standards in education, delivery, and outcomes.",
    },
    {
      letter: "L",
      title: "Leadership Through Learning",
      desc: "We cultivate future leaders by inspiring bold thinking and action.",
    },
    {
      letter: "I",
      title: "Integrity in Every Action",
      desc: "We lead with honesty, ethics, and unwavering responsibility.",
    },
    {
      letter: "T",
      title: "Teamwork & Respect",
      desc: "We grow together through unity, collaboration, and mutual respect.",
    },
    {
      letter: "E",
      title: "Empowerment Through Knowledge",
      desc: "We enable individuals to unlock their potential and create real-world impact.",
    },
  ];

  return (
    <div className="w-full bg-[#0C0E15] min-h-screen text-white py-16 px-6 flex flex-col items-center justify-center">
      <div className="max-w-[1240px] w-full text-center flex flex-col items-center relative">
        {/* --- Title --- */}
        <h1 className="text-3xl md:text-4xl font-bold border-b-4 border-[#1075BA] inline-block mb-12">
          Core Values ( ELITE )
        </h1>

        {/* --- First Grid (3 items) --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 justify-center">
          {coreValues.slice(0, 3).map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                rotate: 1,
                boxShadow: "0px 0px 25px 2px rgba(17, 116, 182, 0.6)",
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="bg-[#FFFFFF] min-h-[150px] flex flex-col justify-center items-center p-6 
                         rounded-2xl shadow-md transition-all duration-500 text-center w-full max-w-[340px] "
            >
              <h2 className="text-2xl font-bold text-[#1174B6] mb-3">
                {item.letter} – {item.title}
              </h2>
              <p className="text-[#0C0E15] text-xl md:text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* --- Second Grid (Last 2 items) --- */}
        <div className="grid md:grid-cols-2 gap-8 mt-8 justify-center">
          {coreValues.slice(3).map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                rotate: 1,
                boxShadow: "0px 0px 25px 2px rgba(17, 116, 182, 0.6)",
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="bg-[#FFFFFF] min-h-[190px] flex flex-col justify-center items-center p-6 
                         rounded-2xl shadow-md transition-all duration-500 text-center w-full max-w-[340px]"
            >
              <h2 className="text-2xl font-bold text-[#1174B6] mb-3">
                {item.letter} – {item.title}
              </h2>
              <p className="text-[#0C0E15] text-xl md:text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* --- Vision & Mission Section --- */}
        <div className="mt-20 flex flex-col gap-16 w-full max-w-[1150px] mx-auto px-4">
          {/* Vision Section */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex flex-col md:flex-row items-center justify-between bg-[#FFFFFF] 
                       rounded-3xl p-8 shadow-lg hover:shadow-[#1174B6]/50 transition-all duration-400"
          >
            {/* Image Left */}
            <motion.div
              whileHover={{ rotate: 1 }}
              className="md:w-1/2 flex justify-center mb-6 md:mb-0"
            >
              <img
                src={Vision}
                alt="Vision"
                className="w-[85%] rounded-2xl shadow-lg shadow-[#1174B6]/30 
                           transition-transform duration-400 hover:scale-105"
              />
            </motion.div>

            {/* Content Right */}
            <div className="md:w-1/2 text-center md:text-left px-4">
              <h2 className="flex items-center justify-center md:justify-start gap-3 text-4xl font-semibold text-[#1075BA] mb-4">
                <FaEye className="text-[#1174B6] text-5xl" /> Vision
              </h2>
              <p className="text-[#0C0E15] text-lg leading-relaxed">
                To lead a digital revolution by creating elite IT leaders —
                empowered by knowledge, driven by integrity, and united for
                national and global impact.
              </p>
            </div>
          </motion.div>

          {/* Mission Section */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex flex-col md:flex-row-reverse items-center justify-between bg-[#FFFFFF] 
                       rounded-3xl p-8 shadow-lg hover:shadow-[#1075BA]/60 transition-all duration-400"
          >
            {/* Image Right */}
            <motion.div
              whileHover={{ rotate: -1 }}
              className="md:w-1/2 flex justify-center mb-6 md:mb-0"
            >
              <img
                src={Mission}
                alt="Mission"
                className="w-[85%] rounded-2xl shadow-lg shadow-[#1075BA]/30 
                           transition-transform duration-400 hover:scale-105"
              />
            </motion.div>

            {/* Content Left */}
            <div className="md:w-1/2 text-center md:text-left px-4">
              <h2 className="flex items-center justify-center md:justify-start gap-3 text-4xl font-semibold text-[#1075BA] mb-4">
                <FaBullseye className="text-[#1174B6] text-5xl" /> Mission
              </h2>
              <p className="text-[#0C0E15] text-lg leading-relaxed">
                To transform jobseekers into job creators and empower the youth
                of Pakistan with IT skills that create independence, ignite
                innovation, and spread digital knowledge to every corner of the
                nation.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="absolute right-6 bottom-0 bg-[#1378BB] hover:bg-[#084282] text-white p-3 rounded-full shadow-lg transition transform hover:scale-110"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>

        {/* --- CopyRight --- */}
        <CopyRight />
      </div>
    </div>
  );
};

export default About;
