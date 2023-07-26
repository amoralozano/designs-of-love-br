import React from "react";

const PurpBanner = ({ purpbanner: { title } }) => {
  return (
    <div className="w-full bg-white h-[270px] md:h-[300px] mt-[-50px] md:mt-[50px]">
      <div className="md:w-full flex items-center justify-center md:ml-[0px] mt-[100px] bg-black h-[100px]">
        <h1 className=" rowdies text-[25px] md:text-[30px] text-pink-400 text-center w-[80%]">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default PurpBanner;
