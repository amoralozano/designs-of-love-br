import React from "react";

const MainProd = ({ mainprod: { title, smalltitle } }) => {
  return (
    <div className="bg-transparent text-left ml-[20px] md:ml-[200px] mt-[-50px] md:mt-[100px]">
      <h2 className=" text-[50px] md:text-[80px] lobster font-bold text-pink-600">
        {title}
      </h2>
      <p className="text-white font-bold mt-[-5px] rowdies text-[20px] md:text-[25px]">
        {smalltitle}
      </p>
    </div>
  );
};

export default MainProd;
