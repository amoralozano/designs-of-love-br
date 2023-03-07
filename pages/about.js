import React from "react";
// continue on this for the mobile version
// fix slug page, since it fucked up somehow
// figure out a better way to make this page look better when it comes to the boxes with text and the images on the side or the top
import Image from "next/image";
import Link from "next/link";
import mystoryimage from "../images/mystoryimage.png";
import mystory2 from "../images/mystory2.png";
import mystory3 from "../images/mystory3.png";
import { client } from "../lib/client";

// thinking about making it to where image is on top and text at thew bottom when it comes to mobile, figure out to change it also to desktop

import {
  FaFire,
  FaRegGrinHearts,
  FaHourglassHalf,
  FaHeadset,
  FaCcApplePay,
  FaCreativeCommonsShare,
} from "react-icons/fa";
import AboutBanner1 from "../components/AboutBanner1";
import AboutBanner2 from "../components/AboutBanner2";
import AboutBanner3 from "../components/AboutBanner3";
import PurpBanner from "../components/PurpBanner";
import FounderBanner from "../components/FounderBanner";

// bg-gradient-to-r from-pink-600 to-black

const about = ({
  aboutbanners1,
  aboutbanners2,
  aboutbanners3,
  purpbanner1,
  foundersbanner,
}) => {
  return (
    <div className="w-full bg-black mb-[200px] md:mb-[800px]">
      <br />
      <div className="mt-[50px] w-full md:w-full md:ml-[100px] lg:ml-[]">
        <FounderBanner
          founderbanner={foundersbanner.length && foundersbanner[0]}
        />
        <br />
        {/* <div className="w-[85%] h-[250px] bg-transparent mt-[50px] lg:ml-[0px] rounded-xl">
          <h1 className=" text-center md:text-center text-[40px] md:text-[55px] ml-[40px] md:ml-[30px] text-white lobster">
            {" "}
            Our Commitment
          </h1>
          <div className="grid grid-cols-2 md:flex md:flex-col-4 mt-[35px] w-full ml-[30px] md:ml-0 h-[500px] md:h-[160px] bg-transparent">
            <div className="w-[150px] ml-[20px] ">
              <div className="w-[60%] ml-[30px] text-white text-[80px]">
                <FaFire />
              </div>
              <h1 className="text-center text-white mt-[10px] font-bold  text-[17px]">
                High Quality Products
              </h1>
            </div>
            <div className="w-[150px] md:ml-[80px] ">
              <div className="w-[60%] ml-[30px] text-white text-[80px]">
                <FaRegGrinHearts />
              </div>
              <h1 className="text-center mt-[10px] text-white font-bold  text-[17px]">
                Satisfaction Garanteed
              </h1>
            </div>
            <div className="w-[150px] ml-[20px] mt-[20px] md:mt-0 md:ml-[80px]">
              <div className="w-[60%] ml-[30px] text-white text-[80px]">
                <FaHourglassHalf />
              </div>
              <h1 className="text-center md:mt-[10px] text-white font-bold  text-[17px]">
                On Time Delivery
              </h1>
            </div>
            <div className="w-[150px] md:ml-[80px] mt-[20px] md:mt-0">
              <div className="w-[60%] ml-[30px] text-white text-[80px]">
                <FaHeadset />
              </div>
              <h1 className="text-center mt-[10px] text-white font-bold  text-[17px]">
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
              <h1 className="text-center mt-[10px] text-white font-bold  text-[17px]">
                Easy to Order & Pay
              </h1>
            </div>
            <div className="w-[150px] md:ml-[70px] mt-[20px] md:mt-0">
              <div className="w-[60%] ml-[30px] text-white text-[80px]">
                <FaCreativeCommonsShare />
              </div>
              <h1 className="text-center mt-[10px] text-white font-bold  text-[17px]">
                Easy Web Interface
              </h1>
            </div>
          </div> 
        </div> */}
      </div>
      <br />
      <div className=" mt-[-250px] ml-[25px] md:ml-0 md:mt-[70px] w-full bg-black">
        <AboutBanner1 aboutbanner1={aboutbanners1.length && aboutbanners1[0]} />
      </div>
      <br />
      <br />
      <PurpBanner purpbanner={purpbanner1.length && purpbanner1[0]} />
      <br />
      <div className="w-full h-[1200px] bg-transparent mt-[-20px] md:mt-0 mb-[50px]">
        <AboutBanner2 aboutbanner2={aboutbanners2.length && aboutbanners2[0]} />

        <br />
        <br />
        <AboutBanner3 aboutbanner3={aboutbanners3.length && aboutbanners3[0]} />
      </div>
    </div>
  );
  // image with div box for collection and button to it
  // same thing as previous line but for main products and discounted products.
};

export const getServerSideProps = async () => {
  const query2 = '*[_type == "aboutbanner1"]'; // rab all products from
  const aboutbanners1 = await client.fetch(query2);

  const query3 = '*[_type == "aboutbanner2"]'; // grab all products from
  const aboutbanners2 = await client.fetch(query3);

  const query4 = '*[_type == "purpbanner"]'; // grab all products from
  const purpbanner1 = await client.fetch(query4);

  const query5 = '*[_type == "aboutbanner3"]'; // grab all products from
  const aboutbanners3 = await client.fetch(query5);

  const query6 = '*[_type == "founderbanner"]'; // grab all products from
  const foundersbanner = await client.fetch(query6);

  return {
    props: {
      aboutbanners1,
      aboutbanners2,
      purpbanner1,
      aboutbanners3,
      foundersbanner,
    },
  };
};

export default about;
