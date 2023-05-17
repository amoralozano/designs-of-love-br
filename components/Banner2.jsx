import React from "react";
import { urlFor } from "../lib/client";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";

const Banner2 = ({ banner2 }) => {
  return (
    // only do flex w non mobile screens
    <div className="md:flex md:items-center md:justify-center bg-white lg:bg-black xl:bg-black w-full h-[900px] md:h-[700px] mt-[200px] md:mt-[200px] mb-[50px] ">
      <div className="w-[70%] md:w-[45%] bg-green-200 md:bg-white h-[300px]  md:h-[570px] ml-[65px] lg:ml-[0px]">
        <img
          src={urlFor(banner2.image)}
          className="bg-gray-500 h-[300px] w-[420px] md:w-[525px] md:h-[450px] lg:w-[525px] lg:h-full xl:h-[450px] md:ml-[0px] xl:ml-[60px] mt-[50px] lg:mt-[0px] xl:mt-[60px] flex rounded-lg"
        />
      </div>
      <div className="lg:flex lg:items-center lg:justify-center bg-white w-full md:w-[60%] h-[500px] mt-[-30px] md:mt-[0px] md:h-[570px]">
        <div className=" w-[92%] lg:w-[90%] h-[450px] lg:h-[470px] bg-white ml-[18px] lg:mr-[80px] rounded-lg">
          <h1 className=" ml-[10px] rowdies mt-[60px] lg:mt-[0px] text-left text-[48px] md:text-[45px] lg:text-[25px] font-semibold text-black">
            {" "}
            {banner2.largeText2}
          </h1>
          <h1 className=" ml-[10px] rowdies text-left text-[38px] md:text-[55px] font-semibold text-pink-400">
            {banner2.midText}{" "}
          </h1>

          <p className=" ml-[10px] mt-[10px] text-left text-[20px] md:text-[23px] font-light text-black">
            Explore collections for you, and for what defines you!
          </p>

          <Link href="/collection">
            <button
              className=" bg-white text-pink-500 font-bold px-[10px] md:px-[20px] rounded-lg py-[6px] md:py-[10px] text-[25px] md:text-[25px] mt-[25px] md:mt-[15px] ml-[10px] md:ml-[10px] mb-[5px] md:mb-[10px] border-[2px] border-pink-400"
              type="button"
              href="/collection"
            >
              {banner2.buttonText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
