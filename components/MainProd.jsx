import React from "react";

const MainProd = ({ mainprod: { title, smalltitle } }) => {
  return (
    <div className=" text-left ml-[20px] lg:ml-[200px] xl:ml-[0px] mt-[-20px] md:mt-[100px]">
      <h2 className=" text-[50px] md:text-[80px] lobster font-bold xl:ml-[50px] text-pink-500">
        {title}
      </h2>
      <p className="text-black font-bold mt-[-5px] rowdies text-[20px] xl:ml-[80px] md:text-[25px]">
        {smalltitle}
      </p>
    </div>
  );
};

export default MainProd;
