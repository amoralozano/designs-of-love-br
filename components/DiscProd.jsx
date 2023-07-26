import React from "react";

const DiscProd = ({ discprod: { title, smalltitle } }) => {
  return (
    <div className=" text-right ml-[20px] md:ml-[0px] mt-[-30px] md:mt-[120px]">
      <h2 className=" text-[55px] md:text-[85px] font-bold lobster text-pink-500 mr-[20px] md:mr-[70px]">
        {title}
      </h2>
      <p className="text-black font-bold mt-[-5px] rowdies text-[20px] md:text-[25px] mr-[20px] md:mr-[70px]">
        {smalltitle}
      </p>
    </div>
  );
};

export default DiscProd;
