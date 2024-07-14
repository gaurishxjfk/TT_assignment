"use client";
import React, { useState } from "react";
import { menuItems } from "@/store/constants";
import LeftArrow from "../../../../public/leftArrow.svg";
import Image from "next/image";
import HambergerMenu from "./HambergerMenu";

const Navbar = () => {
  const [toggleOpen, setToggleOpen] = useState(false);
  return (
    <nav className="fixed z-50 inset-x-0  flex flex-row-reverse md:flex-row items-center justify-between bg-white text-black py-6 px-6 lg:px-12 md:m-6 text-[14px]">
      <>
        <ul
          className={`absolute md:relative flex-col md:flex-row justify-between md:w-2/3 lg:w-1/3 top-[5rem] md:top-0 right-0 bg-white px-6 md:p-0 transition-all duration-100 ${
            toggleOpen ? "flex reveal-animation" : "hidden md:flex"
          }`}
        >
          {menuItems.map((i) => (
            <li
              key={i.id}
              className="hover:underline cursor-pointer py-2 md:py-0"
            >
              {i.title}
            </li>
          ))}
        </ul>
        <button
          className="bg-[#F9F4EE] p-2 md:hidden"
          onClick={() => setToggleOpen(!toggleOpen)}
        >
          <HambergerMenu toggleOpen={toggleOpen} />
        </button>
      </>
      <button className="flex items-center gap-4 border border-black px-3 py-2 text-[16px]">
        Contact us <Image src={LeftArrow} height={20} alt="Left Arrow Icon" />
      </button>
    </nav>
  );
};

export default Navbar;
