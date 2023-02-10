import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Collapse } from "react-collapse";

const AccordionItem = ({ open, toggle, title, desc }) => {
  return (
    <div className="pt-[10px] w-full md:w-[410px] mr-[0px] md:mr-[55px]">
      <div
        className="bg-black border-2 text-pink-400 border-pink-400 rounded-lg py-[10px] md:py-[15px] px-[30px] flex justify-between items-center cursor-pointer"
        onClick={toggle}
      >
        <p className="text-[25px] text-white text-center font-bold lobster">
          {title}
        </p>
        <div className="text-[22px]">
          {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>

      <Collapse isOpened={open}>
        <div className="bg-pink-400 rounded-lg text-left text-black font-semibold px-[10px] pb-[10px] mt-[5px]">
          <p className="text-[15px] ml-[20px] pt-[10px] md:pt-[10px] w-[80%]">
            {desc}
          </p>
        </div>
      </Collapse>
    </div>
  );
};

export default AccordionItem;
