import Link from "next/link";
import React from "react";
import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="static mt-[-50px] w-full h-[600px] md:h-[700px]  rounded-lg">
      <br />
      <img // change the height to 500px and fix all the pieces that moved around.
        className=" brightness-75 w-[95%] h-[350px] md:w-[80%] lg:w-[90%] md:h-[500px] mt-[50px] ml-[10px] md:ml-[70px] rounded-lg "
        src={urlFor(heroBanner.image)}
      />
      <div className=" relative w-[90%] md:w-[70%] h-[150px] md:h-[210px] ml-[20px] md:ml-[225px]  mt-[-150px] md:mt-[-230px] text-center rounded-lg bg-transparent">
        <div className="mb-[10px]">
          <p className="text-[23px] md:text-[30px] lg:text-[34px] rowdies text-black ">
            {heroBanner.smallText}
          </p>
          <h2 className="text-[37px] md:text-[75px] lg:text-[75px] mt-[-10px] md:mt-[-10px] font-bold lobster text-black">
            {heroBanner.largeText1}
          </h2>
          <Link href="/collection">
            <button
              className="bg-black text-white font-normal px-[40px] md:px-[60px] rounded-lg py-[5px] text-[22px] md:text-[25px]  mt-[10px] md:mt-[10px] lg:mt-[5px]"
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
