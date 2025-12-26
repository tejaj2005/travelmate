import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav
      className="
        sticky top-0 z-50 h-20 w-full
        backdrop-blur-md
        transition-colors duration-300
      "
      style={{
        backgroundColor: "var(--glass-bg)", 
        color: "var(--text)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <div className="cursor-pointer shrink-0">
            <h1 className="text-2xl font-logo tracking-wider text-[#1C769A]">
              Travel Mate
            </h1>
          </div>

          {/* Navigation + Actions */}
          <div className="flex items-center space-x-12">

            {/* Links */}
            <div className="flex space-x-8">
              <a
                href="#contact"
                className="text-sm font-medium transition-colors duration-200 hover:text-[#1C769A]"
              >
                Contact Us
              </a>

              <a
                href="#about"
                className="text-sm font-medium transition-colors duration-200 hover:text-[#1C769A]"
              >
                About
              </a>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="
                p-2 rounded-full
                transition-all duration-300 ease-out
                hover:scale-110
                hover:shadow-lg
                hover:shadow-[#1C769A]/20
                active:scale-95
              "
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Moon size={20} />
              ) : (
                <Sun size={20} />
              )}
            </button>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
