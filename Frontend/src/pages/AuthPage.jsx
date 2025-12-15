import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import AuthCard from "../components/AuthCard";

import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.png";
import bg3 from "../assets/bg3.png";
import bg4 from "../assets/bg4.png";
import bg5 from "../assets/bg5.png";

const WORDS = [
  "Destination",
  "Adventure",
  "Exploration",
  "Footprints",
  "Dreamscapes",
];

const BACKGROUNDS = [bg1, bg2, bg3, bg4, bg5];

const AuthPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(activeIndex);
      setActiveIndex((prev) => (prev + 1) % BACKGROUNDS.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="relative min-h-screen bg-[#00070C] overflow-hidden text-white">
      <Navbar />

      <div className="absolute inset-0 overflow-hidden">
        {/* Previous image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-8000 ease-in-out"
          style={{
            backgroundImage: `url(${BACKGROUNDS[prevIndex]})`,
            transform: "translateX(100%)",
            filter: "brightness(50%)",
          }}
        />

        {/* Current image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-8000 ease-in-out"
          style={{
            backgroundImage: `url(${BACKGROUNDS[activeIndex]})`,
            transform: "translateX(0%) scale(1.05)",
            filter: "brightness(50%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mt-20 h-[calc(100vh-5rem)] flex justify-end items-center px-4 lg:px-16">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end pr-20">
          <AuthCard activeWord={WORDS[activeIndex]} />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
