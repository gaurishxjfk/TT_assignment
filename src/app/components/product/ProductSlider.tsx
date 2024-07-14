"use client";
import { productSliderItems } from "@/store/constants";
import { ProductSliderItems } from "@/Types/type";
import Image from "next/image";
import React, { useRef, useState } from "react";

const totalItems = productSliderItems.length;

// calculate positions for transition animation of slides
const calculatePosition = (
  index: number,
  currentIndex: number,
  isDragging: boolean
) => {
  if (index === currentIndex) {
    return isDragging
      ? {
          transform: "translate(-50vh, 0) rotate(-10deg)",
          // if (divRef.current) {
          //   divRef.current.style.transform = `translateX(${newPosX}px)  ${ newPosX > 0 ? 'rotate(10deg)' : 'rotate(-10deg)'}`;
          // }
        }
      : {
          transform: "translate(0, 0)",
        };
  } else if (
    index !== (currentIndex + 1) % totalItems &&
    index !== (currentIndex - 1 + totalItems) % totalItems
  ) {
    return { transform: "scale(0)", zIndex: 0 };
  }
};

const ProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const slideRef = useRef(null);

  // move current index to next
  const shiftNumbers = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  // mouseDown and dragging starts
  const handleDragStart = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    console.log(clientX)
    setDragStart(clientX);
    setIsDragging(true);
  };

  // tracking the dragging movement
  const handleDragMove = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    if (!isDragging) return;
    if (dragStart === 0 || dragStart === undefined) return;

    const dragCurrent = "touches" in e ? e.touches[0].clientX : e.clientX;
    setDragOffset(dragCurrent - dragStart);
    const dragDistance = dragStart - (dragStart + dragOffset);

    if (Math.abs(dragDistance) > 40) {
      setIsDragging(false);
      shiftNumbers();
      setDragOffset(0);
    }
  };

  return (
    <>
      <div
        className="flex justify-center h-screen relative w-full mt-[10vh]"
        style={{
          transition: "transform 0.3s ease",
        }}
      >
        {productSliderItems.map((i, index) => (
          <div
            key={i.id}
            ref={slideRef}
            className={`absolute cursor-grab z-10 ${
              index === (currentIndex + 1) % totalItems
                ? "translate-x-[28vh] sm:translate-x-[35vh] md:translate-x-[60vh] lg:translate-x-[80vh] rotate-[10deg] duration-500"
                : index === (currentIndex - 1 + totalItems) % totalItems
                ? "-translate-x-[28vh] sm:-translate-x-[35vh] md:-translate-x-[60vh] lg:-translate-x-[80vh] -rotate-[10deg] duration-700"
                : "-mt-12 duration-500 z-20 transition-all"
            }`}
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            style={calculatePosition(index, currentIndex, isDragging)}
          >
            <ProductSliderCard
              id={i.id}
              title={i.title}
              description={i.description}
              isCurrentIndex={index === currentIndex}
            />
          </div>
        ))}
      </div>
    </>
  );
};

const ProductSliderCard: React.FC<ProductSliderItems> = ({
  id,
  title,
  description,
  isCurrentIndex,
}) => {
  return (
    <div className="text-center flex flex-col items-center">
      <Image
        src={`/product_${id}.png`}
        alt={title}
        width={230}
        height={330}
        className="object-cover w-[180px] h-[290px] sm:w-[220px] sm:h-[330px] md:w-[330px] md:h-[520px] lg:w-[430px] lg:h-[620px] "
      />
      <div
        className={`mt-12 ${
          isCurrentIndex ? "block reveal-animation" : "hidden"
        }`}
      >
        <h3 className="text-[24px] md:text-[36px]">{title}</h3>
        <p className="text-[16px] md:text-[24px]">{description}</p>
      </div>
    </div>
  );
};

export default ProductSlider;
