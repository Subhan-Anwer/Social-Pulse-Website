"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const navlinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "/" },
  { title: "Services", path: "/" },
  { title: "Portfolio", path: "/" },
  { title: "Contact", path: "/" },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };
  return (
    <div className="w-full h-auto bg-[var(--primary-yellow)] flex items-center justify-between lg:px-[110px] px-[20px] py-4">
      {/* Nav Logo */}
      <div className=" flex items-center ">
        <Image
          src="/social-pulse-official-logo.png"
          alt="social-pulse-official-logo"
          className="md:w-[75px] sm:w-[60px] w-[50px] h-auto object-cover object-center"
          width={110}
          height={145}
        />
      </div>

      {/* Nav Links */}
      <div>
        <ul className="w-[440px] md:gap-5 gap-3 hidden sm:flex items-center justify-center">
          {navlinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.path}
                className="text-black md:text-lg text-[16px] transition-all duration-300 cursor-pointer"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="hidden sm:block md:w-[150px] w-[110px] md:text-[16px] text-[14px] h-[40px] bg-black leading-[40px] text-center text-white rounded-xl transition-all duration-300 cursor-pointer hover:scale-105 hover:drop-shadow-[0px_11px_22px_rgba(0,0,0,0.22)] ">
        Book A Call
      </div>

      {/* Hamburger Menu */}
      <div
        onClick={toggleNav}
        className="sm:hidden block z-50 border-[2px] rounded p-2 text-[var(--primary-brown)] border-[var(--primary-brown)]"
      >
        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>
      {/* Mobile links */}
      <div
        className={`fixed left-0 top-0 w-full h-full bg-[var(--primary-orange)] transform transition-transform duration-300 ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center justify-center space-y-8 h-full">
          {navlinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.path}
                onClick={closeNav}
                className="transform hover:text-white/50 leading-[125%] transition-all duration-300 ease-in-out"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>



      
    </div>
  );
};

export default Navbar;
