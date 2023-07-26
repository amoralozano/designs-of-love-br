import React from "react";
import Link from "next/link";
import { client } from "../lib/client";
import {
  Product,
  DiscProduct,
  HeroBanner,
  Banner2,
  MainProd,
  DiscProd,
  MainTitle,
  NavBar,
} from "../components";

const Home = ({
  products,
  discProducts,
  bannerData1,
  bannerData2,
  mainProd,
  discProd,
  mainTitle,
}) => {
  // chnage the background to black if needed
  return (
    <div className="bg-white mb-[-200px] md:mb-[100px]">
      {/* <div className="w-full h-[60px] flex items-center justify-center bg-pink-200">
        <h1 className="text-[18px] font-bold textv-white">
          This is Version 1.0 more updates & features will roll troughout.
        </h1>
      </div> */}
      <br />
      <MainTitle maintitle={mainTitle.length && mainTitle[0]} />
      <div className="">
        <HeroBanner heroBanner={bannerData1.length && bannerData1[0]} />
      </div>

      <MainProd mainprod={mainProd.length && mainProd[0]} />
      {/*  <div className="md:grid md:grid-cols-1 lg:space-x-[60px] md:flex flex-wrap justify-center w-full mt-[20px] bg-green-300">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>  */}
      <div className="flex items-center h-[420px] md:h-full overflow overflow-y-hidden overflow-x-auto no-scrollbar space-x-[30px] md:space-x-[50px] md:space-y-[25px] lg:grid lg:grid-cols-4 w-full md:w-[95%] lg:w-[95%] mt-[20px] md:ml-[50px] mb-[100px]">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <DiscProd discprod={discProd.length && discProd[0]} />
      <div className="flex items-center h-[420px] md:h-full overflow overflow-y-hidden overflow-x-auto no-scrollbar space-x-[30px] md:space-x-[20px] md:space-y-[25px] md:grid md:grid-cols-4 w-full md:w-[95%] mt-[20px] md:ml-[50px] mb-[100px] ">
        {discProducts?.map((discproduct) => (
          <DiscProduct key={discproduct._id} discproduct={discproduct} />
        ))}
      </div>

      <br />
      <Banner2 banner2={bannerData2.length && bannerData2[0]} />
      <br />
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]'; // grab all products from sanity dashboard
  const products = await client.fetch(query);

  const discQuery = '*[_type == "discproduct"]';
  const discProducts = await client.fetch(discQuery);

  const bannerQuery = '*[_type == "banner1"]';
  const bannerData1 = await client.fetch(bannerQuery);

  const bannerQuery2 = '*[_type == "banner2"]';
  const bannerData2 = await client.fetch(bannerQuery2);

  const query2 = '*[_type == "aboutbanner1"]'; // grab all products from sanity
  const aboutbanner1 = await client.fetch(query2);

  const query3 = '*[_type == "mainprod"]'; // grab all products from sanity
  const mainProd = await client.fetch(query3);

  const query4 = '*[_type == "discprod"]'; // grab all products from sanity
  const discProd = await client.fetch(query4);

  const query5 = '*[_type == "maintitle"]'; // grab all products from sanity
  const mainTitle = await client.fetch(query5);

  return {
    props: {
      products,
      discProducts,
      bannerData1,
      bannerData2,
      aboutbanner1,
      mainProd,
      discProd,
      mainTitle,
    },
  };
};

export default Home;
