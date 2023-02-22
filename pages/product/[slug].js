import React, { useState } from "react";
import { client, urlFor } from "../../lib/client";
import { Product } from "../../components/";
import { useStateContext } from "../../context/StateContext";

// start adding fuctionality to buy now button... look back at example eccomerce website.
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import {
  FaCcApplePay,
  FaGooglePay,
  FaCcPaypal,
  FaCcMastercard,
} from "react-icons/fa";

import AccordionItem from "../../components/AccordionItem";

// figure out a way to get different products in this page for the recommended section for better feel of the site!
//make it to where the details box is underneath the image for the mobile version of the page.
// leaving both in the middle makes it impossible for the image to show properly.
const ProductDetails = ({ product, products }) => {
  const [open, setOpen] = useState(false);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };

  const handleBuyNow = () => {
    onAdd(product, qty);

    setShowCart(true);
  };

  const { image, name, details, price, materials, shipping } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();
  const accordionData = [
    {
      title: "Details",
      desc: [details], // passing details for each page to get a unique set and not the same!
    },
    {
      title: "Materials",
      desc: [materials],
    },
    {
      title: "Shipping",
      desc: [shipping],
    },
  ];
  return (
    <div className="w-full mb-[200px] md:mb-[100px]">
      <br />
      <div className=" md:flex w-full h-[1200px] md:h-[800px]  md:ml-[-100px] bg-black">
        <h1 className="visible md:invisible text-center w-full text-[50px] md:text-[60px] mt-[-30px] rowdies font-bold text-white ">
          {name}
        </h1>
        <div className="bg-black md:bg-black ml-[60px] md:ml-[-30px] mt-[30px] md:mt-[50px] h-[300px] w-[300px] md:w-[500px] md:h-[400px] ">
          <img
            className="bg-white rounded-lg md:ml-[15px] mt-[15px] w-[300px] h-[300px] md:w-[500px] md:h-[400px]  duration-3000"
            src={urlFor(image && image[index])}
          />
          <div className=" md:ml-[25px] mt-[150px] md:mt-[30px] w-full h-[160px] md:bg-black">
            <h1 className=" lobster text-center text-[25px] md:text-[30px] font-bold text-white">
              Pay With
            </h1>
            <div className="flex flex-col-4 items-center justify-center w-full text-[70px] md:mt-[10px]">
              <div className="w-[50px] h-[40px] md:w-[70px] md:h-[60px] mr-[10px] text-white">
                <FaCcApplePay />
              </div>
              <div className="w-[50px] h-[40px] md:w-[70px] md:h-[60px] ml-[40px] text-white">
                <FaGooglePay />
              </div>
              <div className="w-[50px] h-[40px] md:w-[70px] md:h-[60px] ml-[50px] text-white">
                <FaCcPaypal />
              </div>
              <div className="w-[50px] h-[40px] md:w-[70px] md:h-[60px] ml-[50px] text-white">
                <FaCcMastercard />
              </div>
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-3 md:grid-cols-1 md:flex-row-1 md:align-middle bg-transparent md:bg-black w-[80%]  md:w-[30%] h-[100px] md:h-[350px] md:gap-[10px] mt-[20px] md:mt-[70px] ml-[40px] md:ml-[50px] ">
          {image?.map((item, i) => (
            <img
              key={i}
              src={urlFor(item)}
              className={
                i === index
                  ? "w-[120px] h-[100px] md:w-[120px] md:h-[120px] cursor-pointer bg-pink-400 rounded-lg"
                  : "rounded-lg w-[100px] h-[100px] cursor-pointer"
              }
              onMouseEnter={() => setIndex(i)}
            />
          ))}
        </div>

        <div className="content-center w-[380px] md:w-[500px] mt-[20px] md:mt-[80px] ml-[25px] md:ml-[30px] h-[500px] bg-black rounded-lg ">
          <h1 className="invisible md:visible ml-[20px] w-full text-[50px] md:text-[60px] rowdies font-bold text-white ">
            {name}
          </h1>
          <div className="mt-[60px] md:mt-[5px] text-pink-500 flex content-center ml-[20px]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <p className="rowdies ml-[3px] mt-[-4px] text-[18px] md:text-[20px] text-pink-400 font-bold">
              Reviews(10)
            </p>
          </div>
          <h1 className="lobster text-[35px] md:text-[30px] font-bold text-pink-500 md:mt-[10px] ml-[20px]">
            ${price}
          </h1>
          {/* <div className="mt-[10px] flex content-center ml-[20px]">
            <p className="md:text-[20px] text-white w-[90%] font-normal">
              {details}
            </p>
          </div> */}
          <div className="flex gap-[20px] mt-[10px] content-center  ">
            <h3 className=" ml-[20px] md:ml-[20px] text-white font-bold">
              Quantity
            </h3>
            <div className="border-solid p-[12px] mr-[20px] ml-[-100px] md:ml-[-100px] flex cursor-pointer mt-[30px] ">
              <button
                className=" bg-black border-2 text-white border-purple-400 mr-[10px] rounded-full px-[12px] py-[8px]"
                onClick={decQty}
              >
                <AiOutlineMinus />
              </button>
              <span className=" bg-black border-2 text-white border-purple-500 rounded-full text-[15px] px-[15px] py-[8px]">
                {qty}
              </span>
              <button
                className=" bg-black border-2 text-white border-purple-400 ml-[10px] rounded-full px-[12px] py-[8px]"
                onClick={incQty}
              >
                <AiOutlinePlus />
              </button>
            </div>
          </div>
          <div className="bg-transparent grid grid-row-2 w-full h-[150px] mt-[10px] ">
            <button
              className="rowdies w-[300px] md:w-[400px] h-[50px] bg-black text-pink-300 px-[30px] ml-[20px] rounded-lg py-[5px] text-[22px] border-2 border-pink-400 mt-[10px]"
              type="button"
              onClick={() => onAdd(product, qty)}
            >
              Add to Cart
            </button>
            <button
              className="rowdies w-[300px] md:w-[400px] h-[50px] bg-black text-purple-300 px-[30px] ml-[20px] md:ml-[20px] rounded-lg py-[5px] text-[22px] border-2 border-purple-400 mt-[0px]"
              type="button"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
          </div>

          <div className="grid place-items-center bg-transparent mt-[30px] md:mt-[30px] ml-0 md:ml-[20px] text-black">
            {accordionData.map((data, index) => {
              return (
                <AccordionItem
                  key={index}
                  open={index === open}
                  title={data.title}
                  desc={data.desc}
                  toggle={() => toggle(index)}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-900 h-[1200px] md:h-[700px] text-center md:text-left lg:text-center mt-[220px] md:mt-[200px]">
        <h1 className="lobster text-[55px] md:text-[70px] md:mr-[50px] font-bold text-pink-500">
          What Others Love
        </h1>
        <p className=" rowdies font-bold md:ml-[20px] text-white text-[20px]">
          and you might as well
        </p>

        <div className="bg-transparent md:mt-[50px] w-[80%] md:ml-[90px] lg:ml-[250px] px-2 rounded-lg">
          <div className="h-[500px] relative mr-[40px]">
            <div className="grid grid-cols-1 ml-[100px] md:ml-[-120px] md:flex hover md:justify-center md:absolute mt-[5px]">
              {products.map(
                (item, index) =>
                  index < 3 && <Product key={item._id} product={item} /> // I made it to where only 3 show instead of the scrolling.
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

//---------------------------------------------------------

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
          slug {
              current
          }
      }`;

  const products = await client.fetch(query);
  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`; // grab all products from sanity dashboard
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: {
      products,
      product,
    },
  };
};

export default ProductDetails;
