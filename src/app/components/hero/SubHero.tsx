"use client";
import Image from "next/image";
import React from "react";
import { heroImages } from "./Hero";

const SubHero = ({
  isTransitioning,
  currentIndex,
  nextSlide,
}: {
  isTransitioning: boolean;
  currentIndex: number;
  nextSlide: () => void;
}) => {
  return (
    <div className="absolute z-20 bottom-0 flex items-center justify-center mb-14 gap-8 md:gap-10">
      <div
        className={`border relative border-white h-120 w-120  p-4 md:p-6 ml-6 md:ml-24 lg:ml-32 ${
          isTransitioning ? "border-none" : "timer-border"
        }`}
      >
        <div className=" absolute inset-0 border boder-2 border-white "></div>
        <span className="right"></span>
        <span className="left"></span>
        <Image
          src={heroImages[(currentIndex + 1) % heroImages.length]}
          alt="hero image"
          className={`w-[78px] md:w-[93px] h-[78px] md:h-[93px]  ${
            isTransitioning ? "image-enter animate-split" : "image-enter-active"
          }`}
        />
        <p
          onClick={nextSlide}
          className="absolute inset-0 flex justify-center items-center cursor-pointer text-[16px] text-white"
        >
          Next
        </p>
      </div>
      <div className="flex items-center gap-4 text-white text-[14px] md:text-[16px]">
        <p className={`${isTransitioning ? "" : "reveal-animation"}`}>
          {currentIndex + 1}
        </p>
        <span className="h-[1px] w-[103px] bg-white"></span>
        <p>{heroImages.length}</p>
      </div>
    </div>
  );
};

export default SubHero;
