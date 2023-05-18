import React from "react";
import mystoryimage from "../images/mystoryimage.png";
import Image from "next/image";
import { urlFor } from "../lib/client";

const FounderBanner = ({ founderbanner: { title, desc, image } }) => {
  return (
    <div className="ml-[0px] md:ml-[-100px] md:mt-[00px] w-full  md:w-full lg:flex bg-black md:bg-black lg:bg-pink-300">
      <div className="md:w-[80%] md:ml-[20px] h-[600px] bg-pink-300 rounded-xl ">
        <Image
          src={urlFor(image && image[0])} // changed to image for it to change dynamically
          className="w-full md:w-full lg:w-[80%] lg:h-[80%] lg:ml-[50px] lg:mt-[50px] md:h-[550px]  rounded-lg"
        />
      </div>
      <div className=" overflow-auto md:overflow-auto rounded-xl h-[250px] md:h-[320px] mt-[-180px] md:mt-[100px] lg:w-[80%] lg:ml-[-50px] lg:mr-[20px]  bg-pink-500 shadow-lg shadow-pink-500 ">
        <h1 className=" text-[30px] md:text-[55px] text-center mt-[10px] lobster text-black">
          {title}
        </h1>
        <p className="text-[17px] md:text-[20px] ml-[15px] md:ml-[80px] lg:ml-[40px] xl:ml-[80px] text-black text-center rowdies w-[90%] md:w-[85%]">
          {" "}
          {desc}
        </p>
      </div>
    </div>
  );
};

export default FounderBanner;
