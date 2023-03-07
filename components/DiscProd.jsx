import React from "react";

const DiscProd = ({ discprod: { title, smalltitle } }) => {
  return (
    <div className="bg-transparent text-left ml-[20px] md:ml-[200px] mt-[-50px] md:mt-[100px]">
      <h2 className=" text-[55px] md:text-[65px] font-bold lobster text-purple-600">
        {title}
      </h2>
      <p className="text-white font-bold mt-[-5px] rowdies text-[20px] md:text-[25px]">
        {smalltitle}
      </p>
    </div>
  );
};

export default DiscProd;
