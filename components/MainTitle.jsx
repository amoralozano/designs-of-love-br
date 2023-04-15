import React from "react";

const MainTitle = ({ maintitle: { title } }) => {
  return (
    <div className=" flex justify-center items-center md:mt-[30px] w-full h-[200px] bg-transparent">
      <h1 className="text-center lobster text-[60px] mt-0 md:mt-[-60px] md:text-[110px] lg:text-[100px] lg:mr-[0px] font-bold text-pink-400">
        {title}
      </h1>
    </div>
  );
};

export default MainTitle;
