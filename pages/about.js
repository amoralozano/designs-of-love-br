import React from "react";
// continue on this for the mobile version
// fix slug page, since it fucked up somehow
// figure out a better way to make this page look better when it comes to the boxes with text and the images on the side or the top
import Image from "next/image";
import Link from "next/link";
import mystoryimage from "../images/mystoryimage.png";
import mystory2 from "../images/mystory2.png";
import mystory3 from "../images/mystory3.png";

// thinking about making it to where image is on top and text at thew bottom when it comes to mobile, figure out to change it also to desktop

import {
  FaFire,
  FaRegGrinHearts,
  FaHourglassHalf,
  FaHeadset,
  FaCcApplePay,
  FaCreativeCommonsShare,
} from "react-icons/fa";

// bg-gradient-to-r from-pink-600 to-black

const about = () => {
  return (
    <div className="w-full bg-black mb-[200px] md:mb-[600px]">
      <br />
      <div className="mt-[50px] w-full md:w-full md:ml-[100px] lg:ml-[]">
        <div className=" rounded-xl ml-[0px] md:ml-[-30px] w-full  md:w-[90%]  bg-black">
          <div className="md:w-[80%] md:ml-[130px] h-full bg-black rounded-xl ">
            <Image
              className="w-full md:w-full lg:w-[80%] lg:ml-[150px] md:h-[550px] bg-green-200 rounded-tr-xl rounded-br-xl"
              src={mystoryimage}
            />
          </div>
          <div className="relative overflow-auto md:overflow-auto rounded-xl h-[250px] md:h-[320px] md:mt-[-20px] lg:w-[80%] lg:ml-[150px]  bg-black border-2 shadow-lg shadow-pink-500 ">
            <h1 className=" text-[25px] md:text-[55px] text-center mt-[10px] lobster text-white">
              Founders Story
            </h1>
            <p className="text-[15px] md:text-[20px] ml-[10px] md:ml-[80px] text-white text-center rowdies w-[90%] md:w-[85%]">
              {" "}
              This is test 123 ofthe test code for the site. this is random text
              dont read it. i told you not to read it. This is test 123 ofthe
              test code for the site. this is random text dont read it. i told
              you not to read it. This is test 123 ofthe test code for the site.
              this is random text dont read it. i told you not to read it. This
              is test 123 ofthe test code for the site. this is random text dont
              read it. i told you not to read it. This is test 123 ofthe test
              code for the site. this is random text dont read it. i told you
              not to read it. This is test 123 ofthe test code for the site.
              this is random text dont read it. i told you not to read it. This
              is test 123 ofthe test code for the site. this is random text dont
              read it. i told you not to read it. This is test 123 ofthe test
              code for the site. this is random text dont read it. i told you
              not to read it. i told you not to read it. i told you not to read
              it. i told you not to read it.i told you not to read it.i told you
              not to read it.
            </p>
          </div>
        </div>
        <br />
        <div className="w-[85%] h-[250px] bg-transparent mt-[50px] lg:ml-[0px] rounded-xl">
          <h1 className=" text-center md:text-left text-[40px] md:text-[55px] ml-[40px] md:ml-[30px] text-white lobster">
            {" "}
            Our Commitment
          </h1>
          <div className="grid grid-cols-2 md:flex md:flex-col-4 mt-[25px] w-full ml-[30px] md:ml-0 h-[500px] md:h-[160px] bg-transparent">
            <div className="w-[150px] ml-[20px] ">
              <div className="w-[60%] ml-[30px] text-white text-[80px]">
                <FaFire />
              </div>
              <h1 className="text-center text-white mt-[10px] font-bold  text-[20px]">
                High Quality Products
              </h1>
            </div>
            <div className="w-[150px] md:ml-[80px] ">
              <div className="w-[60%] ml-[30px] text-white text-[80px]">
                <FaRegGrinHearts />
              </div>
              <h1 className="text-center mt-[10px] text-white font-bold  text-[20px]">
                Satisfaction Garanteed
              </h1>
            </div>
            <div className="w-[150px] ml-[20px] mt-[20px] md:mt-0 md:ml-[80px]">
              <div className="w-[60%] ml-[30px] text-white text-[80px]">
                <FaHourglassHalf />
              </div>
              <h1 className="text-center md:mt-[10px] text-white font-bold  text-[20px]">
                On Time Delivery
              </h1>
            </div>
            <div className="w-[150px] md:ml-[80px] mt-[20px] md:mt-0">
              <div className="w-[60%] ml-[30px] text-white text-[80px]">
                <FaHeadset />
              </div>
              <h1 className="text-center mt-[10px] text-white font-bold  text-[20px]">
                Great Customer Service
              </h1>
            </div>
            <div className="w-[150px] ml-[20px] md:ml-[80px] mt-[20px] md:mt-0">
              <div
                className="w-[60%] ml-[30px] text-white
               text-[80px]"
              >
                <FaCcApplePay />
              </div>
              <h1 className="text-center mt-[10px] text-white font-bold  text-[20px]">
                Easy to Order & Pay
              </h1>
            </div>
            <div className="w-[150px] md:ml-[70px] mt-[20px] md:mt-0">
              <div className="w-[60%] ml-[30px] text-white text-[80px]">
                <FaCreativeCommonsShare />
              </div>
              <h1 className="text-center mt-[10px] text-white font-bold  text-[20px]">
                Easy Web Interface
              </h1>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className=" mt-[450px] ml-[25px] md:ml-0 md:mt-[70px] w-full bg-black">
        <div className="md:flex rounded-xl md:justify-center md:items-center w-[85%] md:ml-[100px] h-[500px] bg-transparent">
          <div className=" md:flex md:items-center md:justify-center w-full md:w-[50%] h-full ">
            <Image
              src={mystory3}
              className="w-[350px] h-[300px] md:w-[90%] md:h-[90%] ml-[10px] md:ml-0 bg-white rounded-lg md:shadow-lg md:shadow-pink-300 "
            />
          </div>
          <div className=" md:flex md:items-center md:justify-center w-full h-full md:w-[50%] md:h-full">
            <div className=" flex items-center justify-center ml-[-10px] md:ml-[10px] w-[400px] h-[170px] md:w-[95%] md:h-[60%] mt-[-200px] md:mt-0 rounded-xl bg-black border-2 shadow-lg shadow-pink-500">
              <div className="w-full flex items-center justify-center h-[70%] ">
                <h1 className=" text-[15px] md:text-[18px] lg:text-[22px] text-white w-[90%] text-center md:text-left font-bold">
                  Our products are more than more than. this is filler text dont
                  read like i said before. Our products are more than more than.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="w-full bg-black h-[300px] mt-[30px] md:mt-[50px]">
        <div className="md:w-[50%] flex items-center justify-center md:ml-[350px] rounded-full bg-purple-400 h-[150px] border-2 shadow-lg shadow-purple-500">
          <h1 className=" rowdies text-[30px] text-white text-center w-[80%]">
            "Only you can make the change, be the change!"
          </h1>
        </div>
      </div>
      <br />
      <div className="w-full h-[1200px] bg-transparent mt-[-20px] md:mt-0 mb-[50px]">
        <div className="w-full h-[600px] md:h-[800px] lg:ml-[120px] bg-transparent">
          {" "}
          <Image
            className="w-[400px] h-[360px] ml-[15px] md:ml-[300px] md:w-[850px] md:h-[450px] lg:w-[950px] lg:h-[550px] bg-green-200 rounded-xl"
            src={mystory2}
          />
          <div className=" relative w-[390px] h-[150px] mr-[10px] md:w-[700px] md:h-[220px] lg:w-[800px] lg:h-[220px] ml-[20px] md:ml-[370px] mt-[-50px] md:mt-[-50px] rounded-lg bg-white border-2 shadow-lg shadow-white">
            <h1 className=" mt-[40px] text-gray-900 text-[13px] md:text-[20px] text-center md:text-center font-bold w-[95%] md:w-[85%] ml-[10px] md:ml-[50px] md:mt-[20px] lg:mt-[5px] md:py-3">
              This is test text. do not read you fool. i told you not to.This is
              test text. do not read you fool. i told you not to.This is test
              text. do not read you fool. i told you not to. This is test text.
              do not read you fool. i told you not to.
            </h1>

            <Link href="/about">
              <button
                className="rowdies ml-[125px] md:ml-[270px] lg:ml-[280px] bg-white text-black border-[2px] border-black font-normal px-[15px] md:px-[20px] lg:px-[50px] rounded-lg py-[5px] text-[20px] md:text-[23px] mt-[10px] md:mt-[10px] lg:mt-[0px]"
                type="button"
              >
                Check it Out
              </button>
            </Link>
          </div>
        </div>
        <br />
        <br />
        <div className="w-full h-[600px] md:h-[800px] lg:ml-[120px] bg-transparent">
          {" "}
          <Image
            className="w-[400px] h-[360px] ml-[15px] md:ml-[300px] md:w-[850px] md:h-[450px] lg:w-[950px] lg:h-[550px] bg-green-200 rounded-xl"
            src={mystory3}
          />
          <div className=" relative w-[390px] h-[150px] mr-[10px] md:w-[700px] md:h-[220px]  lg:w-[800px] lg:h-[220px] ml-[20px] md:ml-[370px] mt-[-50px] md:mt-[-50px] rounded-lg bg-purple-300 border-2 shadow-lg shadow-purple-300">
            <h1 className=" mt-[40px] text-gray-900 text-[13px] md:text-[20px] text-center md:text-center font-bold w-[95%] md:w-[85%] ml-[10px] md:ml-[50px] md:mt-[20px] lg:mt-[5px] md:py-3">
              This is test text. do not read you fool. i told you not to.This is
              test text. do not read you fool. i told you not to.This is test
              text. do not read you fool. i told you not to. This is test text.
              do not read you fool. i told you not to.
            </h1>

            <Link href="/about">
              <button
                className="rowdies ml-[125px] md:ml-[270px] lg:ml-[280px] bg-purple-300 text-black border-[2px] border-black font-normal px-[15px] md:px-[20px] lg:px-[50px] rounded-lg py-[5px] text-[20px] md:text-[23px] mt-[10px] md:mt-[10px] lg:mt-[0px]"
                type="button"
              >
                Check it Out
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
  // image with div box for collection and button to it
  // same thing as previous line but for main products and discounted products.
};

export default about;
