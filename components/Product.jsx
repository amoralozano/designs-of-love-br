import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";
import { FaPlusCircle } from "react-icons/fa";
import { useStateContext } from "../context/StateContext";

// figure out how to get buy now to work but also not get an error like this one.

// try to make products smaller for mobile.
// find out how to have 2 per row and if its only one at the end have it centered orrrr make a carusel kind senction for mobile.
// finish home screen layout fix, start working on product details mobile.

/// claimer: havig more than one or at least a <Link> inside another link creates a 'hydration error' and says the ui does not matcht the original rendered version....

const Product = ({
  product: { image, name, slug, price, smallDetails, materials, shipping },
}) => {
  return (
    // add this to the div below when done editing: transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300
    <div className="  bg-white shadow-lg shadow-black  rounded-lg w-[270px] md:w-[250px] lg:w-[300px] h-[350px] md:h-[400px] ml-[10px]  md:ml-[0px] md:mt-[20px] ">
      <Link href={`/product/${slug.current}`}>
        <div className="w-[270px] h-[200px] md:h-[55%] md:w-[200px] lg:w-[300px] ">
          <img
            src={urlFor(image && image[0])}
            className=" h-[90%] w-full md:h-full md:w-full  bg-gray-300 rounded-lg "
          />
        </div>
        <div className="md:h-[45%]">
          <p className="rowdies text-left text-[24px] md:text-[25px] font-bold mt-[-15px] md:mt-[10px] ml-[10px] text-black">
            {name}
          </p>
          {/* <p className=" text-[15px] md:text-[18px] text-left ml-[10px] mt-[5px] font-normal text-purple-400">
            {smallDetails}
          </p> */}
          <p className=" rowdies text-[18px] md:text-[20px] text-black text-left ml-[15px] md:ml-[10px] font-semibold mt-[0px] md:mt-[10px]">
            ${price}
          </p>

          <button className="bg-white border-2 border-pink-400 hover:bg-pink-400  text-black ml-[10px] h-[40px] w-[150px] md:w-[160px] flex items-center justify-center rounded-2xl text-[18px] lg:text-[18px] mt-[10px] font-bold">
            View Product
          </button>
          <button className=" w-[60px] h-[40px] md:w-[50px] md:h-[50px] bg-pink-400 ml-[210px] mt-[12px] md:ml-[250px] md:mt-[-7px] rounded-br-lg rounded-tl-lg flex items-center justify-center text-[20px] md:text-[20px] text-white">
            <FaPlusCircle />
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Product;
