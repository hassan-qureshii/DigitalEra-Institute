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

  // Detect screen width and set mobile or desktop mode
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth >= 380 && window.innerWidth <= 500);
    };
    handleResize(); // check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Choose images based on screen size
  const slides = isMobile
    ? [PhoneSlide1]
    : [Slide1, Slide2, Slide3];

  return (
    <div className="w-screen h-screen">
      <Carousel
        autoplay
        autoplaySpeed={3000}
        dotPosition="bottom"
        effect="fade"
        infinite
        className="w-full h-full"
      >
        {slides.map((img, index) => (
          <div
            key={index}
            className="relative w-full h-[400px] md:min-h-screen"
          >
            <div
              className="absolute inset-0 bg-center bg-contain md:bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${img})` }}
            />
            <div className="absolute inset-0 flex items-center justify-center" />
          </div>
        ))}
      </Carousel>

      {/* Our Courses*/}
      <Courses />

      {/* Banner */}
      <Banner />

      {/* Instructor */}
      <Instructor />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Content;
