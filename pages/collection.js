import React from "react";
import { Product } from "../components";
import { client } from "../lib/client";

const collection = ({ products, products2 }) => {
  return (
    <div className="w-full bg-black mb-[200px]">
      <br />
      <div className="flex justify-center items-center w-full h-[200px] bg-black">
        <h1 className="text-center text-[55px] md:text-[110px] font-bold lobster text-white">
          My Collections
        </h1>
        <p className="rowdies ml-[30px] mt-[10px] text-pink-300 text-[18px] md:text-[25px] font-bold">
          Something for everyones style
        </p>
      </div>
      <div className=" flex justify-center mt-[70px] w-full bg-gradient-to-r from-pink-600 to-black">
        <div className="w-full bg-black">
          <br />
          <h1 className="rowdies text-left md:text-left text-[30px] ml-[20px] md:ml-[40px] md:text-[45px] text-white font-bold mb-[20px]">
            Original Collection
          </h1>

          <div className="grid grid-rows-3 md:grid-rows-2 grid-flow-col gap-1">
            {products?.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
          <br />
        </div>
      </div>
      <br />
      {/* <div className="w-full mt-[50px] flex items-center justify-center h-[200px] bg-gradient-to-l from-purple-700 to-black">
        <h1 className="text-[60px] lobster text-white font-bold">
          Keep Scrolling... There is More
        </h1>
      </div> */}
      <div className=" flex justify-center mt-[70px] w-full bg-gradient-to-r from-pink-600 to-black">
        <div className="w-full bg-black">
          <br />
          <h1 className="rowdies text-left md:text-right text-[30px] ml-[20px] md:ml-0 md:text-[45px] md:mr-[110px] text-white font-bold mb-[20px]">
            Summer Collection
          </h1>

          <div className="grid grid-rows-3 md:grid-rows-2 grid-flow-col gap-1">
            {products?.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
          <br />
        </div>
      </div>
      <div className=" flex justify-center mt-[70px] w-full bg-gradient-to-r from-pink-600 to-black">
        <div className="w-full bg-black">
          <br />
          <h1 className="rowdies text-left md:text-left text-[30px] ml-[20px] md:ml-[40px] md:text-[45px] text-white font-bold mb-[20px]">
            Old Skool Collection
          </h1>

          <div className="grid grid-rows-3 md:grid-rows-2 grid-flow-col gap-1">
            {products?.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
          <br />
        </div>
      </div>
    </div>
  );
};

// have around 5 collections.

export const getServerSideProps = async () => {
  const query = '*[collection == "original"]';
  // this is the way to filter by the collections
  const products = await client.fetch(query);

  const query2 = '*[collection == "original2"]';
  const products2 = await client.fetch(query2);

  return {
    props: {
      products,
      products2,
    },
  };
};

export default collection;
