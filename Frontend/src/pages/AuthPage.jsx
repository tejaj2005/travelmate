import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import AuthCard from "../components/AuthCard";
import { useTheme } from "../context/ThemeContext";

// DARK BACKGROUNDS
import dark1 from "../assets/dark/bg1.jpg";
import dark2 from "../assets/dark/bg2.png";
import dark3 from "../assets/dark/bg3.png";
import dark4 from "../assets/dark/bg4.png";
import dark5 from "../assets/dark/bg5.png";

// LIGHT BACKGROUNDS
import light1 from "../assets/light/bg1.png";
import light2 from "../assets/light/bg2.png";
import light3 from "../assets/light/bg3.png";
import light4 from "../assets/light/bg4.png";
import light5 from "../assets/light/bg5.png";

const WORDS = [
  "Destination",
  "Adventure",
  "Exploration",
  "Footprints",
  "Dreamscapes",
];

const DARK_BACKGROUNDS = [dark1, dark2, dark3, dark4, dark5];
const LIGHT_BACKGROUNDS = [light1, light2, light3, light4, light5];

const AuthPage = () => {
  const { theme } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  const BACKGROUNDS =
    theme === "dark" ? DARK_BACKGROUNDS : LIGHT_BACKGROUNDS;

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(activeIndex);
      setActiveIndex((prev) => (prev + 1) % BACKGROUNDS.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex, BACKGROUNDS.length]);

  return (
    <div
      className="relative min-h-screen overflow-hidden transition-colors duration-500"
      style={{
        backgroundColor: "var(--bg)",
        color: "var(--text)",
      }}
    >
      <Navbar />

      {/* BACKGROUND SLIDER */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Previous image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-8000 ease-in-out"
          style={{
            backgroundImage: `url(${BACKGROUNDS[prevIndex]})`,
            transform: "translateX(100%)",
            filter:
              theme === "dark"
                ? "brightness(50%)"
                : "brightness(85%)",
          }}
        />

        {/* Current image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-8000 ease-in-out"
          style={{
            backgroundImage: `url(${BACKGROUNDS[activeIndex]})`,
            transform: "translateX(0%) scale(1.05)",
            filter:
              theme === "dark"
                ? "brightness(50%)"
                : "brightness(85%)",
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mt-20 h-[calc(100vh-5rem)] flex justify-end items-center px-4 lg:px-16">
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end pr-20">
          <AuthCard activeWord={WORDS[activeIndex]} />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
