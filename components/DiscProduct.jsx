import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

// image error showing up here. figure out why its  doing that and finish this page to start working on implementing it also to the checkout.
// try to start working on the collection page and see if we can find a way to filter by collection.
// you got this;)

const DiscProduct = ({
  discproduct: { image, name, slug, price, smallDetails }, // image is not being read
}) => {
  return (
    <div className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 hover:bg-purple-500  bg-black rounded-lg w-[200px] md:w-[350px] ml-[10px]  md:ml-[50px] mt-[20px]">
      <Link href={`/discProduct/${slug.current}`}>
        <div>
          <img
            src={urlFor(image && image[0])}
            className="w-[200px] h-[200px] md:h-[300px] md:w-[350px] bg-gray-300 rounded-lg border-2 border-purple-400 shadow-md shadow-purple-500"
          />
          <p className=" rowdies text-left text-[22px] md:text-[25px] font-bold mt-[10px] ml-[10px] text-white">
            {name}
          </p>
          <p className="text-[15px] md:text-[18px] text-left ml-[10px] mt-[5px] font-bold text-pink-400">
            {smallDetails}
          </p>
          <p className="rowdies text-[18px] md:text-[20px] text-white text-left ml-[10px] font-semibold mt-[10px]">
            ${price}
          </p>
          <button className="bg-black border-2 border-purple-400  text-white ml-[10px] h-[40px] w-[150px] md:w-[200px] flex items-center justify-center rounded-lg text-[20px] mt-[10px] mb-[10px]">
            Add To Cart
          </button>
        </div>
      </Link>
    </div>
  );
};

export default DiscProduct;
