import React from "react";
import { urlFor } from "../lib/client";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";

// change this to
//desk: box side to side with image for the first half top and text and button for the second half.

const Banner2 = ({ banner2 }) => {
  return (
    <div className=" flex justify-left bg-transparent w-full h-[600px] md:h-[800px] mt-[200px] md:mt-[200px] ">
      <div className="w-[45%] bg-black h-[400px]  md:h-[700px] lg:ml-[50px]">
        <img
          src={urlFor(banner2.image)}
          className="bg-gray-500 h-[200px] w-[220px] md:w-[525px] md:h-[450px] lg:w-[625px] lg:h-[550px] ml-[10px] md:ml-[30px] mt-[30px] md:mt-[80px] flex rounded-lg"
        />

        <div className="mt-[15px] ml-[60px] md:ml-[200px]  md:text-[30px] text-purple-500 flex content-center">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2 className="w-[90%] md:w-[60%] text-[12px] md:text-[17px] text-white text-center font-semibold ml-[20px] md:ml-[110px] mt-[10px] md:mt-[10px]">
          "This is a great customer review. This is a great customer review.
          This is a great customer review."
        </h2>
      </div>
      <div className=" bg-black w-[60%] h-[400px] md:h-[700px]">
        <div className="w-[80%] md:w-[90%] bg-black border-2 border-pink-500 mt-[-100px] ml-[30px] md:ml-[-40px] rounded-lg">
          <h1 className="text-center ml-[10px] md:ml-[-90px] lg:ml-[-50px] text-pink-500 mt-[30px] lg:mt-[20px] w-[90%] md:w-full md:mt-[120px] text-[20px] md:text-[30px] lg:text-[40px] font-bold">
            {banner2.largeText2}
          </h1>
          <h1 className=" text-center text-pink-500 md:ml-[-30px] lg:ml-[-10px] mt-[15px] md:mt-[40px] text-[20px] w-[100%] md:w-full md:text-[35px]">
            {banner2.largeText1}
          </h1>
          <h1 className="text-center ml-[20px] md:ml-[0px] text-pink-500 w-[90%] md:w-full md:mr-[30px] font-bold text-[20px] md:text-[35px] mt-[15px] md:mt-[40px]">
            {banner2.midText}
          </h1>
          <Link href="/collection">
            <button
              className=" bg-black text-pink-300 font-bold px-[10px] md:px-[20px] rounded-lg py-[6px] md:py-[10px] text-[15px] md:text-[25px] mt-[5px] md:mt-[25px] ml-[50px] md:ml-[250px] mb-[5px] md:mb-[10px] border-[1px] border-pink-300"
              type="button"
              href="/collection"
            >
              {banner2.buttonText}
            </button>
          </Link>
        </div>

        <div className="w-[80%] bg-black border-2 border-purple-500 mt-[20px] lg:mt-[50px] ml-[30px] md:ml-[110px] rounded-lg">
          <h1 className=" text-center text-purple-400 mt-[15px] md:mt-[40px] lg:mt-[20px] text-[20px] w-[105%] md:w-full md:text-[35px]">
            Shop Unique
          </h1>
          <h1 className="text-center ml-[20px] md:ml-[0px] text-purple-400 w-[90%] md:w-full md:mr-[30px] font-bold text-[20px] md:text-[35px] mt-[15px] md:mt-[40px]">
            {banner2.midText}
          </h1>
          <Link href="./collection">
            <button
              className=" bg-black text-purple-300 border-[1px] border-purple-300 font-bold px-[10px] md:px-[20px] rounded-lg py-[5px] md:py-[10px] text-[15px] md:text-[25px] mt-[10px] md:mt-[25px] ml-[20px] mb-[5px] md:ml-[200px] md:mb-[10px]"
              type="button"
            >
              Explore Collections
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
// mt-[-400px] ml-[180px]

export default Banner2;

{
  /* <div className="bg-black w-[80%] ml-[170px] flex mt-[200px] ">
  <h1 className="text-[50px] text-white font-bold mt-[150px] ml-[80px]">
    Exlore My Collection
  </h1>
  <img
    src={urlFor(banner2.image)}
    className="bg-gray-500 w-[650px] over h-[450px] mr-[50px] rounded-lg"
  />
  <h1 className="text-[50px] text-white font-bold mt-[150px]">
    Explore Outside the Box
  </h1>
</div>
<div className="w-[60%] h-[220px] ml-[330px] mt-[-30px] bg-gradient-to-r from-pink-400 to-pink-300 rounded-lg">
  <div className=" flex items-center justify-center  w-[700px] h-[100px] bg-gradient-to-r from-pink-400 to-pink-300 ml-[120px] mt-[10px]">
    <p className="text-[27px] mt-[35px] text-center font-bold text-black">
      {banner2.desc}
    </p>
  </div>
  <button
    className=" bg-black text-white font-bold px-[20px] rounded-full py-[10px] text-[28px] mt-[25px] ml-[370px]"
    type="button"
  >
    {banner2.buttonText}
  </button>
</div> */
}
