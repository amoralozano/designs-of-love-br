import React, { useState } from "react";
import { client, urlFor } from "../../lib/client";
import { DiscProduct } from "../../components";
import { useStateContext } from "../../context/StateContext";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";

// finish changing the font, work on making the images show up in the cart for stripe.

// start looking at adding into about, contact page and 404 page.

const DiscProductDetails = ({ discproduct, discproducts }) => {
  const { image, name, details, price } = discproduct;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd } = useStateContext();

  return (
    <div className="w-full bg-black">
      <br />
      <div className=" flex w-full h-[700px] bg-black">
        <div className="bg-black mt-[50px] h-[500px] ">
          <img
            className="bg-white rounded-lg ml-[25px] mt-[15px] w-[600px] h-[500px] border-2 border-pink-300 shadow-xl shadow-pink-400 duration-3000"
            src={urlFor(image && image[index])}
          />
        </div>
        <div className="flex-row-1 align-middle h-[350px] gap-[10px] mt-[70px] ml-[50px] ">
          {image?.map((item, i) => (
            <img
              key={i}
              src={urlFor(item)}
              className={
                i === index
                  ? "w-[120px] h-[120px] cursor-pointer bg-purple-400 rounded-lg"
                  : "rounded-lg w-[100px] h-[100px] cursor-pointer"
              }
              onMouseEnter={() => setIndex(i)}
            />
          ))}
        </div>

        <div className="content-center w-[600px] mt-[50px] ml-[200px] h-[500px] bg-black">
          <h1 className="ml-[150px] w-full text-[60px] font-bold text-white underline underline-offset-8 decoration-[4px] decoration-purple-500">
            {name}
          </h1>
          <h1 className=" text-[25px] font-bold text-pink-500 ml-[150px]">
            ${price}
          </h1>
          <div className="mt-[10px] text-pink-500 flex content-center ml-[150px]">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <p className=" ml-[3px] mt-[-4px] text-pink-400 font-bold">
              Reviews(10)
            </p>
          </div>
          <div className="mt-[10px] flex content-center ml-[150px]">
            <p className="text-[20px] text-white w-[90%] font-normal">
              {details}
            </p>
          </div>
          <div className="flex gap-[20px] mt-[10px] content-center  ">
            <p className="ml-[150px] text-white font-bold text-[30px]">
              Quantity
            </p>
            <div className="border-solid p-[12px] flex cursor-pointer mt-[10px] ">
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
          <button
            className="bg-pink-400 text-white font-bold px-[30px] ml-[240px] rounded-lg py-[5px] text-[20px] mt-[10px]"
            type="button"
            onClick={() => onAdd(discproduct, qty)}
          >
            Add to Cart
          </button>
          <button
            className="bg-purple-400 text-white font-bold px-[30px] ml-[250px] rounded-lg py-[5px] text-[20px] mt-[15px]"
            type="button"
            onClick=""
          >
            Buy Now
          </button>
        </div>
      </div>

      <div className="w-full text-center">
        <h1 className="text-[40px] font-bold text-pink-500">
          What Others Love
        </h1>
        <p className="font-bold text-white">(and you might as well)</p>

        <div className="marquee">
          <div className="flex justify-center gap-[15px] mt-[20px]">
            {discproducts.map((item) => (
              <DiscProduct key={item._id} discproduct={item} /> // this was where error originated, ended up needing to only add disc to product(discpruduct)
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const discQuery = `*[_type == "discproduct"] {
            slug {
                current
            }
        }`;

  const discProducts = await client.fetch(discQuery);
  const paths = discProducts.map((discproduct) => ({
    params: {
      slug: discproduct.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const discQuery = `*[_type == "discproduct" && slug.current == '${slug}'][0]`; // grab all products from sanity dashboard
  const productsQuery = '*[_type == "discproduct"]';

  const discproduct = await client.fetch(discQuery);
  const discproducts = await client.fetch(productsQuery);

  console.log(discproduct);

  return {
    props: {
      discproduct,
      discproducts,
    },
  };
};

export default DiscProductDetails;
