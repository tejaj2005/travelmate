import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const AuthCard = ({ activeWord }) => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [isLogin, setIsLogin] = useState(false);

  /* ---------------- HANDLERS ---------------- */

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔐 Fake login (replace with API later)
    login({
      id: 1,
      name: "TravelMate User",
      email: "user@travelmate.com",
    });

    // 🚀 Redirect to Feed
    navigate("/feed");
  };

  const handleGoogleLogin = () => {
    console.log("Initiating Google login...");
  };

  const handleFacebookLogin = () => {
    console.log("Initiating Facebook login...");
  };

  /* ---------------- STYLES ---------------- */

  const inputStyle =
    "w-full border-b bg-transparent p-2 transition-colors duration-300 font-sans text-sm focus:outline-none focus:border-[#1C769A]";

  const buttonText = isLogin ? "Login" : "Sign up";

  return (
    <div
      className="
        w-full max-w-md h-[580px] p-10 rounded-xl
        backdrop-blur-lg border shadow-2xl
        transition-colors duration-500
      "
      style={{
        backgroundColor: "var(--card-bg)",
        color: "var(--text)",
        borderColor: "var(--border)",
      }}
    >
      {/* ---------------- TITLE ---------------- */}
      <div className="mb-12">
        <h2 className="text-4xl font-logo tracking-widest mb-2">
          New
        </h2>

        <h2 className="text-4xl font-logo tracking-widest text-[#1C769A] h-10">
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

      {/* ---------------- FORM ---------------- */}
      <div className="flex flex-col h-[calc(100%-6rem)] -mt-6">
        <form className="space-y-6 grow" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            className={inputStyle}
            style={{
              color: "var(--text)",
              borderColor: "var(--border)",
            }}
          />

          {!isLogin && (
            <input
              type="email"
              placeholder="Email"
              className={inputStyle}
              style={{
                color: "var(--text)",
                borderColor: "var(--border)",
              }}
            />
          )}

          <input
            type="password"
            placeholder="Password"
            className={inputStyle}
            style={{
              color: "var(--text)",
              borderColor: "var(--border)",
            }}
          />

          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              className={inputStyle}
              style={{
                color: "var(--text)",
                borderColor: "var(--border)",
              }}
            />
          )}

          {/* SUBMIT */}
          <button
            type="submit"
            className="
              w-full h-12 bg-[#1C769A] text-white
              font-semibold rounded-lg
              hover:bg-opacity-90
              transition-all duration-300
              shadow-lg shadow-[#1C769A]/30
              mt-5
            "
          >
            {buttonText}
          </button>
        </form>

        {/* ---------------- FOOTER ---------------- */}
        <div className="shrink-0 text-center pt-4 mt-4">
          <p className="text-sm">
            {isLogin ? "New User? " : "Already exists? "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-[#1C769A] font-medium hover:underline ml-1"
            >
              {isLogin ? "Sign up" : "Login"}
            </button>
          </p>

          {/* SOCIAL LOGIN */}
          <div
            className={`mt-6 space-y-3 transition-opacity duration-300 ${
              isLogin ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <div className="relative flex items-center justify-center py-2">
              <div
                className="grow border-t"
                style={{ borderColor: "var(--border)" }}
              />
              <span className="mx-4 text-xs text-gray-400">OR</span>
              <div
                className="grow border-t"
                style={{ borderColor: "var(--border)" }}
              />
            </div>

            <div className="flex justify-center space-x-10 pb-2">
              <button
                onClick={handleGoogleLogin}
                className="
                  flex items-center justify-center
                  w-11 h-11 rounded-full
                  border transition hover:border-[#1C769A]
                "
                style={{ borderColor: "var(--border)" }}
              >
                <FcGoogle size={24} />
              </button>

              <button
                onClick={handleFacebookLogin}
                className="
                  flex items-center justify-center
                  w-11 h-11 rounded-full
                  border transition hover:border-[#1C769A]
                "
                style={{ borderColor: "var(--border)" }}
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
