import React, { useRef } from "react";
import Link from "next/link";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import toast from "react-hot-toast";

import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";

import getStripe from "../lib/getStripe";

// try to factor the code to where it works and still runs efficient. change colors for the style and try to make the add and subtract circular.
// try to fix the empty shooping cart area whereit fits and where it does not interfeer with the mobile version.

const Cart = () => {
  const cartRef = useRef();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuantity,
    onRemove,
  } = useStateContext();

  const handleCheckout = async () => {
    // this is where the bug "starts"
    const stripe = await getStripe();

    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });

    if (response.statusCode === 500) return;

    const data = await response.json();

    toast.loading("Redirecting...");

    stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    // figure out a good color pattern to best match the website and design.
    <div className=" absolute md:fixed">
      <div className="h-[100vh] md:h-[100vh] md:w-[600px] bg-gradient-to-l from-gray-900 to-black float-right px-[40px] py-[10px] mr-[-25px] md:ml-[-20px] lg:ml-[180px] mt-[-25px] md:mt-[-72px] relative border-2 border-gray-900 shadow-md shadow-gray-900">
        <button
          type="button"
          className="flex align-middle text-[18px] text-white font-bold cursor-pointer gap-[2px] ml-[-15px] bg-transparent"
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className=" ml-[10px] text-white">Your Cart</span>
          <span className="ml-[10px] text-pink-400">
            ({totalQuantities} items)
          </span>
        </button>
        {cartItems.length < 1 && (
          <div className="w-[300px] ml-[50px] md:ml-[120px] mt-[200px] bg-transparent align-center">
            <div className=" ml-[-40px] md:ml-[20px]">
              <AiOutlineShopping
                className="text-pink-400 ml-[100px] md:ml-[50px]"
                size={150}
              />
              <h3 className=" lobster text-[25px] text-center w-[100%] font-bold text-white">
                Your Shopping Cart is Empty
              </h3>
            </div>
            <br />
            <Link href="/">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className=" rowdies w-[100%] max-w-[400px] px-[10px] py-[12px] rounded-lg font-bold text-[25px] mt-[1px] ml-[-10px] border-2 border-pink-400 bg-black text-pink-400 cursor-pointer"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}
        <div className="mt-[15px] overflow-auto max-h-[70vh] px-[1px] py-[15px]">
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <div
                className=" relative bg-transparent flex gap-[10px] mt-[15px] md:mr-[50px]"
                key={item._id}
              >
                <img
                  src={urlFor(item?.image[0])}
                  className=" relative w-[150px] h-[130px] ml-[0px] mt-[10px] rounded-md bg-gray-400" // continue off here! try to finish this app by today;) you got this!!!
                />
                <div className=" ml-[0px] md:ml-[40px] mt-[20px]">
                  <div className=" bg-transparent flex space-x-[60px] w-[200px]">
                    <h5 className=" rowdies text-[24px] font-bold text-pink-400">
                      {item.name}
                    </h5>
                    <h4 className=" lobster text-[20px] text-purple-400 font-semibold">
                      ${item.price}
                    </h4>
                  </div>
                  <div className="mt-[40px]">
                    <div className="border-solid p-[12px] flex cursor-pointer mt-[10px] ">
                      <button
                        className=" bg-black border-2 text-white border-purple-400 mr-[10px] rounded-full px-[12px] py-[8px]"
                        onClick={() => toggleCartItemQuantity(item._id, "dec")}
                      >
                        <AiOutlineMinus />
                      </button>
                      <span className=" bg-black border-2 text-white border-purple-500 rounded-full text-[15px] px-[15px] py-[8px]">
                        {item.quantity}
                      </span>
                      <button
                        className=" bg-black border-2 text-white border-purple-400 ml-[10px] rounded-full px-[12px] py-[8px]"
                        onClick={() => toggleCartItemQuantity(item._id, "inc")}
                      >
                        <AiOutlinePlus />
                      </button>
                    </div>
                    <button
                      type="button"
                      className="text-[24px] ml-[180px] mt-[-50px] text-pink-600 cursor-pointer bg-transparent"
                      onClick={() => onRemove(item)}
                    >
                      <TiDeleteOutline />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="absolute bottom-[12px] bg-transparent mr-[120px] right-[5px] w-[70%] px-[0px] py-[65px]">
            <div className="flex ml-[120px] space-x-[10px] ">
              <h3 className=" lobster text-[30px] ml-[-10px] md:ml-[0px] text-purple-400  font-bold">
                Subtotal:
              </h3>
              <h3 className=" lobster text-[28px] text-white font-bold">
                ${totalPrice.toFixed(2)}
              </h3>
            </div>
            <div className="w-[300px] m-auto">
              <button
                type="button"
                className="rowdies w-[100%] max-w-[400px] px-[10px] py-[12px] rounded-md text-[20px] mt-[10px] ml-[60px] md:ml-[0px] bg-black text-pink-400 border-2 border-pink-400 cursor-pointer font-bold"
                onClick={handleCheckout}
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
