import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Home from "./Pages/Home";
import About from "./Pages/About";
import MoreInfo from "./Pages/MoreInfo";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";

const App = () => {
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/more-info" element={<MoreInfo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path='/more-info' element={<MoreInfo/>}/>
        </Routes>
      </div>
    </>
  );
};

export default App;
