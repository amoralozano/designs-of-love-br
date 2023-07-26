import React from "react";
import mystoryimage from "../images/mystoryimage.png";
import { urlFor } from "../lib/client";
import Image from "next/image";

const FounderBanner = ({ founderbanner: { title, desc, image } }) => {
  return (
    <div className="ml-[0px] md:ml-[-100px] md:mt-[0px] w-full  md:w-full lg:flex lg:items-center lg:justify-center bg-white lg:h-[400px]">
      <div className=" overflow-auto md:overflow-auto rounded-3xl h-[250px] md:h-[320px] mt-[10px] md:mt-[100px] lg:mt-[30px] lg:w-[80%] lg:ml-[0px] lg:mr-[0px]  md:bg-white  no-scrollbar ">
        <h1 className="invisible md:visible lg:visible text-[30px] md:text-[70px] text-center mt-[10px] lobster text-pink-400">
          {title}
        </h1>
        <p className="text-[17px] md:text-[20px] ml-[15px] md:ml-[80px] lg:ml-[40px] xl:ml-[80px] mt-[-30px] lg:mt-0 text-black text-center rowdies w-[90%] md:w-[85%]">
          {" "}
          {desc}
        </p>
      </div>
    </div>
  );
};

export default FounderBanner;
