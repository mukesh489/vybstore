// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      className="flex flex-row container justify-between w-[1200px] fixed text-body1
        backdrop-blur-md
        h-20
        my-[12px]
        p-[20px] 
        gap-[60px]
        bg-secondary
        font-primarytxt
        rounded-[35px]
        items-center"
    >
      <div className="flex flex-row items-center">
        <Link to="/" className="flex items-center">
          <img
            src="/Images/logo.svg"
            alt="YB Store Logo"
            className="h-12 w-auto"
          />
        </Link>
        <div>
          <input
            type="text"
            placeholder="Search Creators"
            className="rounded-full border border-gray-300 h-10 font-primarytxt px-4"
            aria-label="Search Creators"
          />
        </div>
      </div>
      <div className="flex flex-row gap-16">
        <Link to="/contact" className="cursor-pointer">
          Contact Us
        </Link>
        <Link to="/about" className="cursor-pointer">
          About Us
        </Link>
        <Link to="/policies" className="cursor-pointer">
          Policies
        </Link>
      </div>
      <div>
        <Link to="/login">
          <button className="rounded-xl bg-[#ffffff] px-8 py-2 border-2 border-[#a9a9a9] bg-white text-[#003c3c]">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
