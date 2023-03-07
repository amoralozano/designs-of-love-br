import React from "react";

const PurpBanner = ({ purpbanner: { title } }) => {
  return (
    <div className="w-full bg-black h-[300px] mt-[30px] md:mt-[50px]">
      <div className="md:w-full flex items-center justify-center md:ml-[0px] mt-[100px] bg-gradient-to-r from-purple-500 to-purple-700 h-[150px]">
        <h1 className=" rowdies text-[30px] text-white text-center w-[80%]">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default PurpBanner;
