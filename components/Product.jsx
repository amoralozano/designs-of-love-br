import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

// figure out how to get buy now to work but also not get an error like this one.

// try to make products smaller for mobile.
// find out how to have 2 per row and if its only one at the end have it centered orrrr make a carusel kind senction for mobile.
// finish home screen layout fix, start working on product details mobile.

/// claimer: havig more than one or at least a <Link> inside another link creates a 'hydration error' and says the ui does not matcht the original rendered version....

const Product = ({
  product: { image, name, slug, price, smallDetails, materials, shipping },
}) => {
  return (
    <div className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 hover:bg-pink-500 bg-black rounded-lg w-[200px] md:w-[350px] ml-[10px]  md:ml-[50px] mt-[40px] ">
      <Link href={`/product/${slug.current}`}>
        <div className="mb-[10px]">
          <img
            src={urlFor(image && image[0])}
            className=" w-[200px] h-[200px] md:h-[300px] md:w-[350px] bg-gray-300 rounded-lg border-2 border-pink-400 shadow-md shadow-pink-500 "
          />
          <p className="rowdies text-left text-[22px] md:text-[25px] font-bold mt-[10px] ml-[10px] text-white">
            {name}
          </p>
          <p className=" text-[15px] md:text-[18px] text-left ml-[10px] mt-[5px] font-bold text-purple-400">
            {smallDetails}
          </p>
          <p className=" rowdies text-[18px] md:text-[20px] text-white text-left ml-[10px] font-semibold mt-[10px]">
            ${price}
          </p>

          <button className="bg-black border-2 border-pink-400  text-white ml-[10px] h-[40px] w-[150px] md:w-[200px] flex items-center justify-center rounded-lg text-[20px] mt-[10px]">
            View Product
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Product;
