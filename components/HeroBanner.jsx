import Link from "next/link";
import React from "react";
import { urlFor } from "../lib/client";
import herobimg from "../images/herobimg.png";
import Image from "next/image";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="mt-[-50px] w-full h-[600px]  md:h-[700px] rounded-lg lg:flex lg:items-center lg:justify-center ">
      <div className="lg:w-[50%]">
        <img // change the height to 500px and fix all the pieces that moved around.
          className="flex brightness-75 w-[90%] h-[380px] md:w-[80%] lg:w-[90%]  lg:h-[600px] mt-[50px] ml-[20px] md:ml-[70px] rounded-xl md:rounded-lg "
          src={urlFor(heroBanner.image)}
        />
      </div>
      <div className=" w-[90%] md:w-[50%] md:heroimage lg:heroimage  h-[150px] md:h-[210px] lg:h-[520px] ml-[0px]  lg:ml-[100px]  mt-[-250px] md:mt-[-230px] rounded-lg bg-transparent">
        <div className="mb-[10px] mt-[250px] ml-[80px] lg:ml-[0px] lg:w-[90%]">
          <p className="text-[23px] md:text-[30px] lg:text-[34px] rowdies text-black ">
            {heroBanner.smallText}
          </p>
          <h2 className="text-[45px] md:text-[75px] lg:text-[85px] mt-[-10px] md:mt-[-10px] font-bold lobster text-pink-500">
            {heroBanner.largeText1}
          </h2>
          <Link href="/collection">
            <button
              className="bg-black text-pink-300 font-normal px-[40px] md:px-[60px] rounded-lg py-[5px] text-[22px] md:text-[25px]  mt-[10px] md:mt-[10px] lg:mt-[5px]"
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
