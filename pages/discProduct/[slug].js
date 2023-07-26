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
import {
  FaCcApplePay,
  FaGooglePay,
  FaCcPaypal,
  FaCcMastercard,
} from "react-icons/fa";
import AccordionItem from "../../components/AccordionItem";

/// to do for the last push:
// fix the cart to showup in fron tof the first banner // only one left to do. push to github
// push to github and look at deploying for testing purposes.

// DUE BY END OF DAY SATURDAY!
// YOU GOT THIS HOT ROD;)

const DiscProductDetails = ({ discproduct, discproducts }) => {
  const [open, setOpen] = useState(false);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };

  const handleBuyNow = () => {
    onAdd(discproduct, qty);

    setShowCart(true);
  };

  const { image, name, details, price, materials, shipping } = discproduct;
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
      title: "Shipping!",
      desc: [shipping],
    },
  ];

  return (
    <div className="w-full bg-white mb-[200px] md:mb-[100px]">
      <br />
      <div className=" md:flex md:items-center md:justify-center w-full h-[1200px] md:h-[800px] md:ml-[-100px] lg:ml-[-100px] xl:ml-[0px] bg-white">
        <div className=" w-full md:w-[50%] lg:w-[50%] h-[730px] md:h-full lg:h-full">
          <h1 className="visible md:invisible text-center w-full text-[50px] md:text-[60px] mt-[-30px] rowdies font-bold text-black ">
            {name}
          </h1>
          <div className=" ml-[60px] md:ml-[-30px] lg:ml-[-150px] xl:ml-[50px] mt-[30px] md:mt-[0px] h-[300px] w-[350px] md:w-[650px] md:h-[400px] md:flex items-center justify-center">
            <img
              className="bg-white rounded-lg ml-[-15px] md:ml-[0px] mt-[15px] w-[350px] h-[300px] md:w-[500px] md:h-[400px]  duration-3000 shadow-md shadow-pink-400"
              src={urlFor(image && image[index])}
            />
            <div className="flex items-center overflow-y-auto md:grid md:grid-cols-1 md:overflow-y-auto md:align-middle w-[120%]  md:w-[30%] lg:w-[20%] xl:w-[20%] h-[120px] md:h-[350px] md:gap-[10px] mt-[20px] lg:mt-[0px] ml-[-35px] md:ml-[20px] no-scrollbar">
              {image?.map((item, i) => (
                <img
                  key={i}
                  src={urlFor(item)}
                  className={
                    i === index
                      ? "w-[120px] h-[100px] md:w-full md:h-[120px] cursor-pointer bg-pink-400 rounded-lg"
                      : "rounded-lg w-[80px] h-[80px] md:w-[100px] md:h-[100px] cursor-pointer bg-black shadow-md shadow-black ml-[5px] lg:ml-[0px]"
                  }
                  onMouseEnter={() => setIndex(i)}
                />
              ))}
            </div>
          </div>
          <div className=" invisible md:visible ml-[50px] md:ml-[35px] mt-[150px] md:mt-[30px] w-[70%] h-[160px] ">
            <h1 className=" lobster text-center text-[25px] md:text-[30px] ml-[20px] lg:ml-[0px] font-bold text-pink-500">
              Pay With
            </h1>
            <div className="flex flex-col-4 items-center justify-center w-full text-[70px] md:mt-[10px]">
              <div className="w-[50px] h-[40px] md:w-[70px] md:h-[60px] mr-[10px] text-black">
                <FaCcApplePay />
              </div>
              <div className="w-[50px] h-[40px] md:w-[70px] md:h-[60px] ml-[40px] text-black">
                <FaGooglePay />
              </div>
              <div className="w-[50px] h-[40px] md:w-[70px] md:h-[60px] ml-[50px] text-black">
                <FaCcPaypal />
              </div>
              <div className="w-[50px] h-[40px] md:w-[70px] md:h-[60px] ml-[50px] text-black">
                <FaCcMastercard />
              </div>
            </div>
          </div>
        </div>

        <div className="content-center w-[380px] md:w-[40%] mt-[-300px] md:mt-[0px] ml-[25px] md:ml-[0px] h-[500px] md:h-full  rounded-lg ">
          <h1 className="invisible md:visible ml-[20px] w-full text-[50px] md:text-[60px] rowdies font-bold text-black ">
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
            <h3 className=" ml-[20px] md:ml-[20px] text-black font-bold">
              Quantity
            </h3>
            <div className="border-solid p-[12px] mr-[20px] ml-[-100px] md:ml-[-100px] flex cursor-pointer mt-[30px] ">
              <button
                className=" bg-black border-2 text-white border-pink-400 mr-[10px] rounded-full px-[12px] py-[8px]"
                onClick={decQty}
              >
                <AiOutlineMinus />
              </button>
              <span className=" bg-black border-2 text-white border-pink-500 rounded-full text-[15px] px-[15px] py-[8px]">
                {qty}
              </span>
              <button
                className=" bg-black border-2 text-white border-pink-400 ml-[10px] rounded-full px-[12px] py-[8px]"
                onClick={incQty}
              >
                <AiOutlinePlus />
              </button>
            </div>
          </div>
          <div className="bg-transparent grid grid-row-2 w-full h-[150px] mt-[10px] ">
            <button
              className="rowdies w-[300px] md:w-[250px] h-[50px] bg-black text-white hover:bg-pink-400 hover:text-black px-[30px] ml-[20px] rounded-lg py-[5px] text-[22px] mt-[10px]"
              type="button"
              onClick={() => onAdd(discproduct, qty)}
            >
              Add to Cart
            </button>
            <button
              className=" invisible md:visible rowdies w-[300px] md:w-[300px] h-[50px] bg-black text-pink-400 hover:bg-white hover:text-black hover:border-2 hover:border-black px-[30px] ml-[20px] md:ml-[20px] rounded-lg py-[5px] text-[22px] mt-[10px]"
              type="button"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
            <button
              className=" visible md:invisible rowdies w-[300px] md:w-[300px] h-[50px] bg-black text-pink-400 hover:bg-white hover:text-black hover:border-2 hover:border-black px-[30px] ml-[20px] md:ml-[20px] rounded-lg py-[5px] text-[22px] mt-[-60px]"
              type="button"
              onClick={() => onAdd(discproduct, qty)}
            >
              Buy Now
            </button>
          </div>

          <div className="grid place-items-center bg-transparent mt-[30px] md:mt-[30px] ml-0 md:ml-[-110px] text-black">
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
      <div className="w-full  h-[500px] md:h-[700px] lg:h-[1200px] xl:h-[700px] text-center md:text-left lg:text-left mt-[70px] bg-white md:mt-[20px]">
        <h1 className="lobster text-[40px] md:text-[70px] text-left md:mr-[50px] lg:ml-[280px] ml-[30px] xl:ml-[30px] font-bold text-pink-500">
          What Others Love
        </h1>
        <p className=" rowdies font-bold ml-[40px] md:ml-[20px] text-black text-[20px] text-left lg:ml-[430px] xl:ml-[50px]">
          and you might as well
        </p>

        <div className=" md:mt-[0px] w-full h-[600px] md:h-[600px] lg:w-[80%] md:ml-[90px] lg:ml-[250px] px-2 rounded-lg">
          <div className="h-[500px] md:h-[500px] relative mr-[40px] md:mr-[0px] w-full ">
            <div className="h-[450px] flex item-center overflow-x-auto ml-[0px] md:ml-[-290px] md:space-x-[50px] lg:ml-[-130px] xl:ml-[-150px] md:flex hover md:justify-center md:absolute lg:grid lg:grid-cols-2 xl:flex xl:justify-center md:mt-[5px]">
              {discproducts.map(
                (item, index) =>
                  index < 4 && <DiscProduct key={item._id} discproduct={item} /> // I made it to where only 3 show instead of the scrolling.
              )}
            </div>
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
