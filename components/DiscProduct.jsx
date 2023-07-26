import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";
import { FaPlusCircle } from "react-icons/fa";

// image error showing up here. figure out why its  doing that and finish this page to start working on implementing it also to the checkout.
// try to start working on the collection page and see if we can find a way to filter by collection.
// you got this;)

const DiscProduct = ({
  discproduct: { image, name, slug, price, smallDetails }, // image is not being read
}) => {
  return (
    <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300  bg-white shadow-lg shadow-black  rounded-lg w-[260px] md:w-[300px] h-[350px] md:h-[400px] ml-[10px]  md:ml-[0px] md:mt-[20px] ">
      <Link href={`/discProduct/${slug.current}`}>
        <div className="w-[260px] h-[200px] md:h-[55%] md:w-[300px] ">
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
          <div className=" w-[60px] h-[40px] md:w-[50px] md:h-[50px] bg-pink-400 ml-[200px] mt-[12px] md:ml-[250px] md:mt-[-7px] rounded-br-lg rounded-tl-lg flex items-center justify-center text-[20px] md:text-[20px] text-white">
            <FaPlusCircle />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DiscProduct;
