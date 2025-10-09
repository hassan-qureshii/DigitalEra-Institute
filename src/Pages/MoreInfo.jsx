import React from "react";
import { motion } from "framer-motion";
import Graphic_designing from "../assets/Graphic_designing.png";
import Web_development from "../assets/Web_development.png";
import Digital_marketing from "../assets/Digital_marketing.png";
import Video_editing from "../assets/Video_editing.png";
import Ecommerce from "../assets/Ecommerce.png";
import Freelancing from "../assets/Freelancing.png";
import CopyRight from "./../Components/CopyRight";
import { FaArrowUp } from "react-icons/fa";

const MoreInfo = () => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // WhatsApp function
  const openWhatsApp = (courseTitle) => {
    const phoneNumber = "+923701393075";
    const message = `Hello! 👋 I am interested in enrolling in the "${courseTitle}" course. Could you please provide more details?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const courses = [
    {
      title: "Graphic Designing",
      image: Graphic_designing,
      desc: "This course helps you master creative visual design. Learn how to create stunning logos, posters, social media content, and brand identities using tools like Adobe Photoshop, Illustrator, and Canva. You’ll complete hands-on projects to build a professional design portfolio.",
      duration: "2 Months",
      fees: "PKR 15,000",
    },
    {
      title: "Web Development",
      image: Web_development,
      desc: "Learn how to build modern, responsive  web applications using HTML, CSS, JavaScript & Python . This course prepares you for both freelancing and professional developer roles.",
      duration: "2 Months",
      fees: "PKR 20,000",
    },
    {
      title: "Digital Marketing",
      image: Digital_marketing,
      desc: "Master the techniques of online business growth through SEO, Google Ads, Meta Ads , Social Media Marketing, and Email Marketing. Learn how to plan and execute real marketing campaigns that generate measurable results.",
      duration: "2 Months",
      fees: "PKR 15,000",
    },
    {
      title: "Video Editing",
      image: Video_editing,
      desc: "Develop professional editing skills using Adobe Premiere Pro, After Effects, Capcut , CGI video's, & video editing with AI. You’ll learn storytelling, transitions, and sound design to create engaging videos for YouTube, social media, and businesses.",
      duration: "2 Months",
      fees: "PKR 16,000",
    },
    {
      title: "E-Commerce Management",
      image: Ecommerce,
      desc: "Understand how to start, manage, and scale online stores using platforms like Shopify, Amazon, and Daraz. You’ll learn product research, order management, and marketing strategies for successful e-commerce businesses.",
      duration: "2 Months",
      fees: "PKR 20,000",
    },
    {
      title: "Freelancing Mastery",
      image: Freelancing,
      desc: "Learn how to build a successful freelance career using your skills. Create professional profiles, write winning proposals, find clients, and deliver projects effectively on Fiverr, Upwork, and Freelancer.",
      duration: "2 Months",
      fees: "PKR 10,000",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0C0E15] text-white py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl !font-serif !font-bold text-center text-[#0F75B9] mb-6"
        >
          Explore Our Professional Courses
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-300 max-w-2xl mx-auto text-center mb-16 text-xl md:text-sm"
        >
          Gain in-demand skills through our career-focused training programs — designed to help you
          become job-ready, start freelancing, or launch your own business.
        </motion.p>

        {/* Courses List */}
        <div className="space-y-24 my-12">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="md:w-1/2 relative group">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  src={course.image}
                  alt={course.title}
                  className="w-full rounded-2xl shadow-lg border border-[#1E2A3A] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0F75B9]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Text Content */}
              <div className="md:w-1/2 space-y-4">
                <h3 className="text-3xl !font-bold text-[#0F75B9]">{course.title}</h3>
                <p className="text-gray-300 text-xl md:text-sm leading-relaxed">
                  {course.desc}
                </p>

                {/* Fees + Button Section */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6">
                  <span className="text-[#0F75B9] font-semibold text-lg bg-[#112032] px-4 py-2 rounded-lg shadow-md w-fit">
                    {course.duration} / {course.fees}
                  </span>
                  <button
                    onClick={() => openWhatsApp(course.title)}
                    className="bg-[#21C063] hover:bg-[#1ebe5d] text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition transform hover:scale-105 w-full sm:w-auto"
                  >
                    Take Admission Today
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CopyRight */}
      <CopyRight />

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed right-6 bottom-6 bg-[#1378BB] hover:bg-[#084282] text-white p-3 rounded-full shadow-lg transition transform hover:scale-110 z-50"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default MoreInfo;
  