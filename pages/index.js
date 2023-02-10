import React from "react";
import Link from "next/link";
import { client } from "../lib/client";
import { Product, DiscProduct, HeroBanner, Banner2 } from "../components"; // if app crashes look into making .babelrc file.

// to add any pages add to this directore of pages and when you do the link do <Link href="/about" >Button or whatever</Link>

// try to move the tittles to the left and right side and see if they look better that way!
// continue styling the products page for the desktop view and see if any changes need to be made for mobile.
// continue finishing off by finishing styling both mobile and desktop for the about page and collections page.
// try changing banner2 to something that fits the site better both mobile and desktop.

const Home = ({ products, discProducts, bannerData1, bannerData2 }) => {
  return (
    <div className=" bg-black mb-[100px]">
      <br />
      <div className=" flex justify-center items-center md:mt-[30px] w-full h-[200px]bg-transparent">
        <h1 className="text-center lobster text-[60px] mt-0 md:mt-[-60px] md:text-[110px] font-bold text-pink-300">
          Welcome To My Craft
        </h1>
      </div>
      <HeroBanner heroBanner={bannerData1.length && bannerData1[0]} />
      {console.log(bannerData1)}
      <div className="bg-transparent text-left ml-[20px] md:ml-[200px] mt-[-50px] md:mt-[100px]">
        <h2 className=" text-[50px] md:text-[80px] lobster font-bold text-pink-600">
          Top Picks
        </h2>
        <p className="text-white font-bold mt-[-5px] rowdies text-[20px] md:text-[25px]">
          Prices may vary
        </p>
      </div>
      <div className="grid grid-cols-2 md:flex flex-wrap justify-center w-full mt-[20px] bg-transparent">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <Banner2 banner2={bannerData2.length && bannerData2[0]} />
      <br />
      {/* <div className="mt-[-120px] md:mt-0 md:ml-[100px] text-center w-full px-2 md:px-0 md:w-[90%] rounded-lg md:rounded-full h-[130px] md:h-[150px] bg-purple-400 shadow-lg shadow-purple-300">
        <h1 className=" rowdies mt-[5px] md:mt-[15px] text-[20px] text-center md:text-[40px] text-purple-700 font-bold">
          From Original Ideas to anything you can Imagine
        </h1>
        <Link href="/about">
          <button
            className="rowdies bg-black text-purple-400 font-bold px-[15px] md:px-[20px] rounded-lg py-[5px] text-[17px] md:text-[25px] mt-[15px]"
            type="button"
          >
            Read Our Story
          </button>
        </Link>
      </div> */}

      <div className="bg-transparent text-left ml-[20px] md:ml-[200px] mt-[-50px] md:mt-[100px]">
        <h2 className=" text-[55px] md:text-[65px] font-bold lobster text-purple-600">
          On Sale
        </h2>
        <p className="text-white font-bold mt-[-5px] rowdies text-[20px] md:text-[25px]">
          Deals you can't miss!
        </p>
      </div>
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

  return {
    props: {
      products,
      discProducts,
      bannerData1,
      bannerData2,
    },
  };
};

export default Home;
