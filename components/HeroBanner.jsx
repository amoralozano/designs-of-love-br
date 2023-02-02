import Link from "next/link";
import React from "react";
import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="static mt-[-50px] w-full h-[600px] md:h-[700px] rounded-lg bg-transparent">
      <br />
      <img // change the height to 500px and fix all the pieces that moved around.
        className=" w-[95%] h-[300px] md:w-[80%] md:h-[450px] mt-[50px] ml-[10px] md:ml-[150px] rounded-lg  border-4 border-pink-400 shadow-lg shadow-pink-500 "
        src={urlFor(heroBanner.image)}
      />
      <div className=" relative w-[90%] md:w-[70%] h-[150px] md:h-[210px] ml-[20px] md:ml-[225px] mt-[-50px] text-center rounded-lg bg-gradient-to-r from-pink-300 to-pink-400 shadow-lg shadow-pink-500">
        <div className="mb-[10px]">
          <p className="text-[20px] md:text-[30px] rowdies text-black ">
            {heroBanner.smallText}
          </p>
          <h2 className="text-[35px] md:text-[75px] mt-[-10px] md:mt-[-10px] font-bold lobster text-black">
            {heroBanner.largeText1}
          </h2>
          <Link href="/collection">
            <button
              className="bg-black text-pink-400 font-bold px-[20px] rounded-lg py-[5px] text-[25px] rowdies mt-[10px] md:mt-[10px]"
              type="button"
            >
              {heroBanner.buttonText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
