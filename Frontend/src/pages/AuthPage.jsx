import React from 'react';
import Navbar from '../components/Navbar';
import backgroundImage from '../assets/bg.jpg';
import AuthCard from '../components/AuthCard'; // <-- Using the new component name

const AuthPage = () => {
  return (
    <div className="relative min-h-screen bg-[#00070C] text-white overflow-hidden">
      
      {/* Glassy Navbar is at the top */}
      <Navbar />

      {/* Background Image Container */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${backgroundImage})`, // Ensure this path is correct
          filter: 'brightness(50%)',
          zIndex: 0
        }}
      />A

      {/* Main Content: Centers the AuthCard on the right half of the screen */}
      <div className="relative z-10 mt-14 h-[calc(100vh-5rem)] flex justify-end items-center px-4 lg:px-16">
        
        {/* Right Section (Auth Form) */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end pr-20">
          <AuthCard />
        </div>
      </div>
    </div>
  );
};

export default AuthPage;