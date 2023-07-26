import React from "react";
import { Product } from "../components";
import { client } from "../lib/client";
import {
  ColTitle,
  ColTitle2,
  ColTitle3,
  ColTitle4,
  ColTitle5,
  ColTitle6,
  ColTitle7,
  ColMainBanner,
} from "../components";

// figure out from why this is happening and if its unfixable find a better way to make it work,

// figure out how to make each title be changed with sanity

const collection = ({
  products,
  products2,
  products3,
  products4,
  products5,
  products6,
  colTitles,
  colTitles2,
  colTitles3,
  colTitles4,
  colTitles5,
  colTitles6,
  colTitles7,
  colMainBanners,
}) => {
  return (
    <div className="w-full bg-white mb-[200px]">
      <br />
      <ColMainBanner
        colmainbanner={colMainBanners.length && colMainBanners[0]}
      />
      <div className=" flex justify-center mt-[0px] w-full bg-gradient-to-r from-pink-600 to-black">
        <div className="w-full bg-gradient-to-b from-white to-pink-400">
          <br />
          <ColTitle coltitle={colTitles.length && colTitles[0]} />

          {/* grid grid-rows-3 md:grid-cols-3 */}
          <div className="flex items-center overflow-scroll overflow-y-hidden no-scrollbar  space-x-[60px] h-[400px] md:h-[500px]  ">
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
      <div className=" flex justify-center mt-[-30px] w-full bg-gradient-to-r from-pink-600 to-black">
        <div className="w-full bg-gradient-to-b from-pink-400 to-white">
          <br />
          <br />
          <ColTitle2 coltitle2={colTitles2.length && colTitles2[0]} />

          <div className="flex items-center overflow-scroll overflow-y-hidden no-scrollbar  space-x-[60px] h-[400px] md:h-[500px]">
            {products2?.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
          <br />
        </div>
      </div>
      <div className=" flex justify-center mt-[70px] w-full bg-gradient-to-r from-pink-600 to-black">
        <div className="w-full bg-gradient-to-b from-white to-pink-400">
          <br />
          <br />
          <ColTitle3 coltitle3={colTitles3.length && colTitles3[0]} />

          <div className="flex items-center overflow-scroll overflow-y-hidden no-scrollbar  space-x-[60px] h-[400px] md:h-[500px]">
            {products3?.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
          <br />
        </div>
      </div>
      <div className=" flex justify-center mt-[0px] w-full bg-gradient-to-r from-pink-600 to-black">
        <div className="w-full bg-gradient-to-b from-pink-400 to-white">
          <br />
          <br />
          <ColTitle4 coltitle4={colTitles4.length && colTitles4[0]} />

          <div className="flex items-center overflow-scroll overflow-y-hidden no-scrollbar  space-x-[60px] h-[400px] md:h-[500px]">
            {products4?.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
          <br />
        </div>
      </div>
      <div className=" flex justify-center mt-[0px] w-full bg-gradient-to-r from-pink-600 to-black">
        <div className="w-full bg-gradient-to-b from-white to-pink-400">
          <br />
          <br />
          <ColTitle5 coltitle5={colTitles5.length && colTitles5[0]} />

          <div className="flex items-center overflow-scroll overflow-y-hidden no-scrollbar  space-x-[60px] h-[400px] md:h-[500px]">
            {products5?.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
          <br />
        </div>
      </div>
      <div className=" flex justify-center mt-[0px] w-full bg-gradient-to-r from-pink-600 to-black">
        <div className="w-full bg-gradient-to-b from-pink-400 to-white">
          <br />
          <br />
          <ColTitle6 coltitle6={colTitles6.length && colTitles6[0]} />
          <div className="flex items-center overflow-scroll overflow-y-hidden no-scrollbar  space-x-[60px] h-[400px] md:h-[500px]">
            {products6?.map((product) => (
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

  const query3 = '*[collection == "original3"]';
  const products3 = await client.fetch(query3);

  const query4 = '*[collection == "original4"]';
  const products4 = await client.fetch(query4);

  const query5 = '*[collection == "original5"]';
  const products5 = await client.fetch(query5);

  const query6 = '*[collection == "original6"]';
  const products6 = await client.fetch(query6);

  const titleQuery = '*[_type == "coltitle"]'; // grab all products from
  const colTitles = await client.fetch(titleQuery);

  const title2Query = '*[_type == "coltitle2"]';
  const colTitles2 = await client.fetch(title2Query);

  const title3Query = '*[_type == "coltitle3"]';
  const colTitles3 = await client.fetch(title3Query);

  const title4Query = '*[_type == "coltitle4"]';
  const colTitles4 = await client.fetch(title4Query);

  const title5Query = '*[_type == "coltitle5"]';
  const colTitles5 = await client.fetch(title5Query);

  const title6Query = '*[_type == "coltitle6"]';
  const colTitles6 = await client.fetch(title6Query);

  const title7Query = '*[_type == "coltitle7"]';
  const colTitles7 = await client.fetch(title7Query);

  const titleTopQuery = '*[_type == "colmainbanner"]';
  const colMainBanners = await client.fetch(titleTopQuery);

  return {
    props: {
      products,
      products2,
      products3,
      products4,
      products5,
      products6,
      colTitles,
      colTitles2,
      colTitles3,
      colTitles4,
      colTitles5,
      colTitles6,
      colTitles7,
      colMainBanners,
    },
  };
};

export default collection;
