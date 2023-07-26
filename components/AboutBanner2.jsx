import React from "react";
import Image from "next/image";
import mystory2 from "../images/mystory2.png";
import { urlFor } from "../lib/client";
import Link from "next/link";

const AboutBanner2 = ({ aboutbanner2: { image, desc } }) => {
  return (
    <div className="w-full md:w-[90%] h-[600px] md:h-[800px] lg:ml-[70px]">
      {" "}
      <img
        src={urlFor(image && image[0])}
        className="w-[400px] h-[360px] ml-[15px] md:ml-[200px] lg:ml-[130px] xl:ml-[300px] md:w-[780px] md:h-[450px] bg-black rounded-xl"
      />
      <div className=" bg-pink-400 shadow-lg shadow-pink-400 md:shadow-none md:bg-transparent relative w-[390px] h-[270px] mr-[10px] md:w-[750px] md:h-[250px] ml-[20px] lg:ml-[145px]  xl:ml-[315px] mt-[-50px] md:mt-[50px] lg:mt-[0px] rounded-lg">
        <h1 className="text-[30px] lg:text-[45px] font-bold underline decoration-4 decoration-white md:decoration-pink-400 ml-[20px] md:ml-0 ">
          My Passion
        </h1>
        <h1 className="  mt-[10px] lg:mt-[0px] text-black text-[17px] md:text-[24px] text-left md:text-left md:font-normal w-[80%] md:w-[85%] ml-[40px] md:ml-[10px] md:mt-[20px] md:py-3">
          {desc}
        </h1>

        <Link href="/">
          <button
            className="rowdies ml-[40px] md:ml-[210px] lg:ml-[10px] bg-black text-white font-normal px-[10px] md:px-[20px] lg:px-[20px] rounded-2xl md:rounded-lg py-[5px] text-[20px] md:text-[27px] mt-[20px] md:mt-[10px] shadow-md md:shadow-lg shadow-black"
            type="button"
          >
            Check Our Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutBanner2;

//className="w-[400px] h-[360px] ml-[15px] md:ml-[50px] md:w-[780px] md:h-[450px] bg-green-200 rounded-xl"
