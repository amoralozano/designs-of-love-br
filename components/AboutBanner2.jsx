import React from "react";
import Image from "next/image";
import mystory2 from "../images/mystory2.png";
import { urlFor } from "../lib/client";
import Link from "next/link";

const AboutBanner2 = ({ aboutbanner2: { image, desc } }) => {
  return (
    <div className="w-full h-[600px] md:h-[800px] lg:ml-[0px] bg-black">
      {" "}
      <img
        src={urlFor(image && image[0])}
        className="w-[400px] h-[360px] ml-[15px] md:ml-[50px] md:w-[780px] md:h-[450px] bg-green-200 rounded-xl"
      />
      <div className=" relative w-[390px] h-[340px] mr-[10px] md:w-[750px] md:h-[250px] ml-[20px] md:ml-[670px] mt-[-50px] md:mt-[50px] rounded-lg bg-purple-500 border-2 border-purple-500 shadow-lg shadow-purple-500">
        <h1 className=" mt-[20px] text-white text-[22px] md:text-[24px] text-center md:text-left md:font-normal w-[80%] md:w-[85%] ml-[40px] md:ml-[50px] md:mt-[20px] md:py-3">
          {desc}
        </h1>

        <Link href="/">
          <button
            className="rowdies ml-[80px] md:ml-[50px] bg-black text-purple-500 border-[2px] border-black font-normal px-[15px] md:px-[20px] lg:px-[50px] rounded-lg py-[5px] text-[23px] md:text-[23px] mt-[20px] md:mt-[10px]"
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
