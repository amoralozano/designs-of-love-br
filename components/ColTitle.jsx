import React from "react";

// might have to make individual pages, schemas for each if there is no fix.

const ColTitle = ({ coltitle: { title } }) => {
  return (
    <h1 className="rowdies text-left md:text-left text-[30px] ml-[20px] md:ml-[40px] md:text-[45px] lg:text-[55px] text-black font-bold mb-[20px]">
      {title}
    </h1>
  );
};

export default ColTitle;

// decided after long debugging that only way the tittles are going to be dinamic will be making them individually.
