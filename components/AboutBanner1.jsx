import React from "react";
import mystory3 from "../images/mystory3.png";
import { urlFor } from "../lib/client";

// go in and make the images changeable

const AboutBanner1 = ({ aboutbanner1: { image, desc } }) => {
  return (
    <div>
      <div className=" mt-[300px] ml-[0px] md:ml-0 md:mt-[70px] w-full bg-gradient-to-b from-white to-pink-500 md:bg-gradient-to-b md:from-white md:to-pink-500">
        <div className="md:flex rounded-xl md:justify-center md:items-center w-[85%] md:ml-[100px] h-[500px] bg-transparent">
          <div className=" md:flex md:items-center md:justify-center w-full md:w-[50%] h-full ">
            <img
              src={urlFor(image && image[0])}
              className="w-[350px] h-[300px] md:w-[90%] md:h-[90%] lg:h-[75%] xl:h-[80%] ml-[40px] md:ml-0 lg:ml-[-80px] xl:ml-0 bg-white rounded-lg shadow-lg shadow-black"
            />
          </div>
          <div className=" md:flex md:items-center md:justify-center w-full h-full md:w-[50%] md:h-full">
            <div className=" flex items-center justify-center ml-[-10px] md:ml-[10px] w-[400px] h-[170px] md:w-[95%] lg:w-[100%] xl:w-[95%] md:h-[60%] mt-[-200px] md:mt-0 lg:ml-[-50px] xl:ml-0 rounded-xl ">
              <div className="w-full h-[90%]">
                <h1 className="text-[35px] ml-[100px] md:ml-[0px] mt-[5px] md:mt-0 lg:text-[65px] font-bold underline decoration-4 decoration-white">
                  My Inspiration
                </h1>
                <p className=" text-[17px] md:text-[18px] lg:text-[20px] xl:text-[23px] text-black w-[90%] text-center ml-[45px] md:ml-0 md:text-left mt-[10px] lg:mt-[10px]">
                  {desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner1;
//className="w-[350px] h-[300px] md:w-[90%] md:h-[90%] ml-[10px] md:ml-0 bg-white rounded-lg md:shadow-lg md:shadow-pink-300 "
