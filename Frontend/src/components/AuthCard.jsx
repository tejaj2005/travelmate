import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

// Color Palette Reminder:
// Background: #00070C
// Border/Stroke: #212121
// Highlight: #1C769A

const AuthCard = ({ activeWord }) => {
  const [isLogin, setIsLogin] = useState(false);

  const handleGoogleLogin = () => {
    console.log("Initiating Google login...");
  };

  const handleFacebookLogin = () => {
    console.log("Initiating Facebook login...");
  };

  const inputStyle =
    "w-full border-b border-[#212121] bg-transparent text-white placeholder:text-gray-500 focus:outline-none focus:border-[#1C769A] p-2 transition-colors duration-300 font-sans text-sm";

  const buttonText = isLogin ? "Login" : "Sign up";

  return (
    <div className="w-full max-w-md h-[580px] p-10 rounded-xl bg-[#00070C]/60 backdrop-blur-lg border border-[#212121] shadow-2xl">
      {/*  Title */}
      <div className="mb-12">
        <h2 className="text-4xl font-logo tracking-widest text-white leading-none mb-2">
          New
        </h2>

        <h2 className="text-4xl font-logo tracking-widest text-[#1C769A] leading-none h-10">
          <Typewriter
            key={activeWord} 
            words={[activeWord]}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </h2>
      </div>

      {/*  Form */}
      <div className="flex flex-col h-[calc(100%-6rem)] -mt-6">
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

          <button
            type="submit"
            className="w-full h-12 bg-[#1C769A] text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg shadow-[#1C769A]/30 font-sans text-base mt-5"
          >
            {buttonText}
          </button>
        </form>

        {/*  Footer */}
        <div className="shrink-0 text-center font-sans pt-4 mt-4">
          <p className="text-sm text-white">
            {isLogin ? "New User? " : "Already exists? "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-[#1C769A] font-medium hover:underline ml-1 focus:outline-none"
            >
              {isLogin ? "Sign up" : "Login"}
            </button>
          </p>

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
                className="flex items-center justify-center w-11 h-11 rounded-full bg-transparent border border-gray-600/50 hover:border-[#1C769A] transition"
              >
                <FcGoogle size={24} />
              </button>

              <button
                onClick={handleFacebookLogin}
                className="flex items-center justify-center w-11 h-11 rounded-full bg-transparent border border-gray-600/50 hover:border-[#1C769A] transition"
              >
                <FaFacebook size={24} className="text-blue-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthCard;
