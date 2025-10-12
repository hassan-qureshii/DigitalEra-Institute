import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import "antd/dist/reset.css";

// Desktop images
import Slide1 from "../assets/Slide1.png";
import Slide2 from "../assets/Slide2.png";
import Slide3 from "../assets/Slide3.png";

// Mobile images
import PhoneSlide1 from "../assets/PhoneSlide1.png";

import Instructor from "./Instructor";
import Banner from "./Banner";
import Courses from "./Courses";
import Footer from "./Footer";

const Content = () => {
  const [isMobile, setIsMobile] = useState(false);

  // 🧠 Detect screen width and set mobile or desktop mode
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 500);
    };
    handleResize(); // Check once on component mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🖼️ Choose images based on screen size
  const slides = isMobile ? [PhoneSlide1] : [Slide1, Slide2, Slide3];

  return (
    <div className="w-screen bg-white">
      {/* 🏞️ Hero Carousel */}
      <Carousel
        autoplay
        autoplaySpeed={3000}
        dotPosition="bottom"
        effect="fade"
        infinite
        className="w-full"
      >
        {slides.map((img, index) => (
          <div
            key={index}
            className="
              relative w-full
              h-[350px]       /* Very small screens */
              sm:h-[400px]    /* Slightly larger phones (≥640px) */
              md:h-[600px]    /* Tablets and small laptops */
              lg:min-h-screen /* Desktop screens */
            "
          >
            {/* Background Image */}
            <div
              className="absolute inset-0  bg-cover bg-white/50 sm:bg-contain sm:bg-center md:bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${img})` }}
            />
          </div>
        ))}
      </Carousel>

      {/* 📚 Courses Section */}
      <div className="mt-10 md:mt-16">
        <Courses />
      </div>

      {/* 🪧 Banner Section */}
      <div className="mt-10 md:mt-20">
        <Banner />
      </div>

      {/* 👨‍🏫 Instructor Section */}
      <div className="mt-10 md:mt-20">
        <Instructor />
      </div>

      {/* 🦶 Footer */}
      <Footer />
    </div>
  );
};

export default Content;
