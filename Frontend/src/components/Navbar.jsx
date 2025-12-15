import React, { useState } from "react";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true); // Default to dark

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <nav className="w-full fixed top-0 z-50 bg-[#00070C]/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="shrink-0 cursor-pointer">
            <h1 className="text-2xl font-logo tracking-wider text-white">
              Travel Mate
            </h1>
          </div>

          {/* Navigation & Actions */}
          <div className="flex items-center space-x-12">
            <div className="flex space-x-8">
              <a
                href="#contact"
                className="text-white text-sm font-medium transition-colors duration-200 hover:text-[#1C769A]"
              >
                Contact Us
              </a>
              <a
                href="#about"
                className="text-white text-sm font-medium transition-colors duration-200 hover:text-[#1C769A]"
              >
                About
              </a>
            </div>

            {/* Theme Toggle */}
            <button
  onClick={toggleTheme}
  className="
    relative
    p-2 rounded-full
    transition-all duration-300 ease-out
    hover:scale-110
    hover:shadow-lg
    hover:shadow-[#1C769A]/20
    active:scale-95
  "
>
              {darkMode ? (
                <Moon className="text-white" size={20} />
              ) : (
                <Sun className="text-white" size={20} />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
