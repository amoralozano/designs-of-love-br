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
  return (
    <div className=" bg-black mb-[100px]">
      <br />
      <MainTitle maintitle={mainTitle.length && mainTitle[0]} />
      <div className="">
        <HeroBanner heroBanner={bannerData1.length && bannerData1[0]} />
      </div>
      {console.log(bannerData1)}
      <MainProd mainprod={mainProd.length && mainProd[0]} />
      <div className="grid grid-cols-2 md:flex flex-wrap justify-center w-full mt-[20px] bg-transparent">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <Banner2 banner2={bannerData2.length && bannerData2[0]} />
      <br />
      <DiscProd discprod={discProd.length && discProd[0]} />
      <div className="grid grid-cols-2 md:flex flex-wrap justify-center w-full mt-[20px] bg-transparent">
        {discProducts?.map((discproduct) => (
          <DiscProduct key={discproduct._id} discproduct={discproduct} />
        ))}
      </div>
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
