import React from "react";
import { Carousel } from "antd";
import "antd/dist/reset.css";
import Slide1 from "../assets/Slide1.png";
import Slide2 from "../assets/Slide2.png";
import Slide3 from '../assets/Slide3.png'
import Instructor from './Instructor'
import Banner from './Banner'
import Courses from './Courses'
import Footer from './Footer'

const Content = () => {
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
        {/* Slide 1 */}
        <div className="relative w-full h-[400px] md:min-h-screen ">
          <div
            className="absolute inset-0 bg-center bg-contain md:bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${Slide1})` }}
          />
          <div className="absolute inset-0 " />
          <div className="absolute inset-0 flex items-center justify-center">
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative w-full h-[400px] md:min-h-screen ">
          <div
            className="absolute inset-0 bg-center bg-contain md:bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${Slide2})` }}
          />
          <div className="absolute inset-0 " />
          <div className="absolute inset-0 flex items-center justify-center">
          </div>
        </div>

         {/* Slide 3 */}
        <div className="relative w-full h-[400px] md:min-h-screen ">
          <div
            className="absolute inset-0 bg-center bg-contain md:bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${Slide3})` }}
          />
          <div className="absolute inset-0 " />
          <div className="absolute inset-0 flex items-center justify-center">
          </div>
        </div>
      </Carousel>

      {/* Our Courses*/}
      <Courses/>

      {/*Banner */}
      <Banner/>

       {/*Instructor */}
      <Instructor/>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default Content;