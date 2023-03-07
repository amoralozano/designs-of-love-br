import React from "react";
import mystory3 from "../images/mystory3.png";
import { urlFor } from "../lib/client";

// go in and make the images changeable

const AboutBanner1 = ({ aboutbanner1: { image, desc } }) => {
  return (
    <div>
      <div className=" mt-[450px] ml-[0px] md:ml-0 md:mt-[70px] w-full bg-black">
        <div className="md:flex rounded-xl md:justify-center md:items-center w-[85%] md:ml-[100px] h-[500px] bg-transparent">
          <div className=" md:flex md:items-center md:justify-center w-full md:w-[50%] h-full ">
            <img
              src={urlFor(image && image[0])}
              className="w-[350px] h-[300px] md:w-[90%] md:h-[90%] ml-[10px] md:ml-0 bg-white rounded-lg md:shadow-lg md:shadow-pink-300 "
            />
          </div>
          <div className=" md:flex md:items-center md:justify-center w-full h-full md:w-[50%] md:h-full">
            <div className=" flex items-center justify-center ml-[-10px] md:ml-[10px] w-[400px] h-[170px] md:w-[95%] md:h-[60%] mt-[-200px] md:mt-0 rounded-xl bg-pink-500 shadow-lg shadow-pink-500">
              <div className="w-full flex items-center justify-center h-[70%] ">
                <h1 className=" text-[18px] md:text-[18px] lg:text-[25px] text-white w-[90%] text-center md:text-left font-bold">
                  {desc}
                </h1>
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
