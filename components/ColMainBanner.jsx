import React from "react";

const ColMainBanner = ({ colmainbanner: { title, smalltitle } }) => {
  return (
    <div className="flex justify-center items-center w-full h-[200px] bg-white">
      <h1 className="text-center text-[55px] sm:text-[35px] md:text-[90px] font-bold lobster text-black">
        {title}
      </h1>
      <p className="rowdies ml-[30px] mt-[10px] text-pink-400 text-[18px] md:text-[25px] font-bold">
        {smalltitle}
      </p>
    </div>
  );
};

export default ColMainBanner;

// My Collection
// something for everyones style
