import React, { useState } from "react";
import { Mail, Lock, User } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

// Color Palette Reminder:
// Background: #00070C
// Border/Stroke: #212121
// Highlight: #1C769A

const AuthCard = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handleGoogleLogin = () => {
    // Replace the console.log with your actual Google OAuth implementation later
    console.log("Initiating Google login...");
  };

  const handleFacebookLogin = () => {
    // Replace the console.log with your actual Facebook OAuth implementation later
    console.log("Initiating Facebook login...");
  };

  const inputStyle =
    "w-full border-b border-[#212121] bg-transparent text-white placeholder:text-gray-500 focus:outline-none focus:border-[#1C769A] p-2 transition-colors duration-300 font-sans text-sm";

  const buttonText = isLogin ? "Login" : "Sign up";

  return (
    // Outer Container with Fixed Height
    <div className="w-full max-w-md h-[580px] p-10 rounded-xl bg-[#00070C]/60 backdrop-blur-lg border border-[#212121] shadow-2xl">
      {/* Title Section (Fixed Header) */}
      <div className="mb-15">
        <h2 className="text-4xl font-logo tracking-widest text-white leading-none mb-2">
          New
        </h2>

        <h2 className="text-4xl font-logo tracking-widest text-[#1C769A] leading-none h-10 animate-pulse">
          <Typewriter
            words={[
              "Destination",
              "Adventure",
              "Exploration",
              "Footprints",
              "Dreamscapes",
            ]}
            loop={0} // infinite loop
            cursor
            cursorStyle="|"
            typeSpeed={90}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>
      </div>

      {/* --- FLEX CONTAINER FOR CONTENT (FORM + FOOTER) --- */}
      {/* This container ensures the form fields grow and the footer stays at the bottom */}
      <div className="flex flex-col h-[calc(100%-6rem)] -mt-8">
        {" "}
        {/* Adjusted height to account for mb-8 + pb-10 and title */}
        {/* --- FORM FIELDS AND PRIMARY BUTTON (Flex Grow) --- */}
        <form className="space-y-6 grow">
          <input type="text" placeholder="Username" className={inputStyle} />

          {!isLogin && (
            <input type="email" placeholder="Email" className={inputStyle} />
          )}

          <input
            type="password"
            placeholder="Password"
            className={inputStyle}
          />

          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              className={inputStyle}
            />
          )}

          {isLogin && (
            <div className="flex justify-between items-center text-xs pt-2">
              <label className="flex items-center space-x-2 text-gray-400 cursor-pointer">
                <input
                  type="checkbox"
                  className="h-4 w-4 border-[#212121] bg-gray-400 text-[#1C769A] rounded focus:ring-[#1C769A]"
                />
                <span>Remember me</span>
              </label>
              <a
                href="#"
                className="text-gray-400 hover:text-[#1C769A] transition-colors duration-300"
              >
                Forgot Password?
              </a>
            </div>
          )}

          {/* Primary Action Button - Moved inside form for semantic correctness, but flex-grow manages space */}
          <button
            type="submit"
            className="w-full h-12 bg-[#1C769A] text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg shadow-[#1C769A]/30 font-sans text-base mt-5"
          >
            {buttonText}
          </button>
        </form>
        {/* --- TOGGLE LINKS AND SOCIAL LOGIN (Flex Shrink - anchored to bottom) --- */}
        <div className="shrink-0 text-center font-sans pt-4 mt-4">
          {/* Switch Link */}
          <p className="text-sm text-white">
            {isLogin ? "New User? " : "Already exists? "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-[#1C769A] font-medium hover:underline ml-1 focus:outline-none"
            >
              {isLogin ? "Sign up" : "Login"}
            </button>
          </p>

          {/* Social Login - Conditional Visibility */}
          <div
            className={`mt-6 space-y-3 transition-opacity duration-300 ${
              isLogin ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <div className="relative flex items-center justify-center py-2">
              <div className="grow border-t border-[#212121]"></div>
              <span className="shrink mx-4 text-gray-500 text-xs px-2">OR</span>
              <div className="grow border-t border-[#212121]"></div>
            </div>

            <div className="flex justify-center space-x-10 pb-2">
              <button
                onClick={handleGoogleLogin}
                className="flex items-center justify-center w-11 h-11 rounded-full bg-transparent border border-gray-600/50 text-white hover:border-[#1C769A] transition duration-150 ease-in-out"
                aria-label="Login with Google"
              >
                <FcGoogle size={24} />
              </button>

              <button
                onClick={handleFacebookLogin}
                className="flex items-center justify-center w-11 h-11 rounded-full bg-transparent border border-gray-600/50 text-white hover:border-[#1C769A] transition duration-150 ease-in-out"
                aria-label="Login with Facebook"
              >
                <FaFacebook size={24} className="text-blue-500" />
              </button>
            </div>
          </div>
        </div>
        {/* --- END: TOGGLE LINKS AND SOCIAL LOGIN --- */}
      </div>
      {/* --- END: FLEX CONTAINER FOR CONTENT --- */}
    </div>
  );
};

export default AuthCard;
