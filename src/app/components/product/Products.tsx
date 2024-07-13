import React from "react";
import ProductSlider from "./ProductSlider";

const Products = () => {
  return (
    <section>
      <div className="text-center w-[70%] md:w-[65%] lg:w-[50%] mx-auto">
        <h1 className="text-[30px] md:text-[58px] text-[#000000]">
          Quality Products
        </h1>
        <p className="text-[16px] md:text-[24px] text-[#7A7777]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="w-full overflow-hidden">
        <ProductSlider />
      </div>
    </section>
  );
};

export default Products;
