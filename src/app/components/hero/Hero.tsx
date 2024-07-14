"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import HERO1 from "../../../../public/hero_screen_1.png";
import HERO2 from "../../../../public/hero_screen_2.png";
import HERO3 from "../../../../public/hero_screen_3.png";
import HERO4 from "../../../../public/hero_screen_4.png";
import SubHero from "./SubHero";

export const heroImages = [HERO1, HERO2, HERO3, HERO4];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
      setIsTransitioning(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <div
        className={`image-container ${
          isTransitioning ? "image-enter animate-split" : "image-enter-active"
        }`}
      >
        <Image
          src={heroImages[currentIndex]}
          alt="hero image"
          className="object-cover w-full h-[110vh] md:h-[115vh]"
        />
      </div>
      <div className="absolute z-10 inset-y-0 flex flex-col justify-center ml-6 md:ml-24 lg:ml-32 w-[80%] md:w-[60%] lg:w-[50%] leading-tight reveal-animation">
        <p className="text-[14px] md:text-[16px] text-white">
          Welcome To TenTwenty Farms
        </p>
        <h1 className="text-[46px] md:text-[64px] text-white">
          From Our Farms To Your Hands
        </h1>
      </div>
      <SubHero
        isTransitioning={isTransitioning}
        currentIndex={currentIndex}
        nextSlide={nextSlide}
      />
    </div>
  );
};

export default Hero;
