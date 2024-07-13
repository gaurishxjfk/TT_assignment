import React from "react";

const HambergerMenu = ({ toggleOpen }: { toggleOpen: boolean }) => {
  return (
    <div className="flex flex-col gap-[7px] justify-center items-center">
      <div
        className={`border border-black w-[22px] ${
          toggleOpen && "rotate-45 absolute"
        } transition-all duration-200`}
      ></div>
      <div
        className={`border border-black w-[18px] ${
          toggleOpen && "hidden"
        } transition-all duration-200`}
      ></div>
      <div
        className={`border border-black w-[22px] ${
          toggleOpen && "-rotate-45 absolute"
        } transition-all duration-200`}
      ></div>
    </div>
  );
};

export default HambergerMenu;
