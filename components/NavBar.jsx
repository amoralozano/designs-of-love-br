import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import Cart from "./Cart";
import logo from "../images/logo.png";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";

import { Dropdown } from "flowbite-react";
import { Navbar } from "flowbite-react";

// figure out how to get the cart to show up on both and functioning

import { useStateContext } from "../context/StateContext";
//make height bigger and put bear in middle and text smaller, implement the cart and the navbar menu
// border-2 border-purple-400 shadow-xl shadow-purple-500. add this back if wanting to give it a try with a border on the nav.
const NavBar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-gradient-to-r from-pink-400 to-pink-500 border-gray-200 px-2 sm:px-4 py-[1px] mt-[-30px] rounded dark:bg-white">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <div class=" mt-[2] md:mt-0 mb-3 md:mb-0 mr-[10px] md:mr-[20px]">
              <a href="/" class="flex items-center">
                <Image
                  src={logo}
                  className=" w-[60px] h-[60px] mr-[10px] md:mr-0 md:h-[75px] md:w-[75px]"
                  alt="Flowbite Logo"
                />
                <span class=" lobster self-center text-xl md:text-[28px] lg:ml-[10px] font-semibold whitespace-nowrap dark:text-black">
                  Designs of Love by Ruth
                </span>
              </a>
            </div>
            <div className="md:hidden">
              <button
                className="p-2  mt-[-10px] mr-[40px] md:mr-[0px] md:mt-[0px] text-pink-300 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-4 md:block md:pb-0 md:mt-[30px] mb-[15px] md:mb-[0px] ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li className="text-black font-extrabold text-xl border-gray-100 dark:text-black">
                <a href="/">Home</a>
              </li>
              <li className="text-black font-extrabold text-xl border-gray-100 dark:text-black">
                <a href="/about">Our Story</a>
              </li>
              <li className="text-black font-extrabold text-xl border-gray-100 dark:text-black">
                <a href="/collection">Our Collection</a>
              </li>
              <li className="">
                <UserButton />
              </li>
            </ul>
          </div>
          {showCart && <Cart />}
          <div class=" order-2 bg-transparent ml-[360px] md:ml-[400px] mt-[-70px] mb-[20px] md:mt-[-30px] md:h-[30px] w-[30px] md:w-[30px]">
            <button
              type="button"
              className="text-[25px] md:ml-[30px] md:mt-[0px] text-black cursor-pointer relative ease-in-out bg-transparent"
              onClick={() => setShowCart(true)}
            >
              <AiOutlineShopping />
              <span className="absolute right-[-8px] text-[12px] text-center font-bold text-white bg-black shadow-md shadow-pink-500 w-[18px] h-[18px] rounded-[50%] mt-[-8px]">
                {totalQuantities}
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

// <div className="rounded-md md:rounded-0 mr-[50px] md:mt-[-25px]  bg-gradient-to-r from-pink-300 to-pink-500  px-[15px] sm:px-4 py-2.5 dark:bg-gray-900 w-full md:w-full z-20 top-0 left-0 mb-[30px]">
//   <div class="container flex flex-wrap items-center justify-between mx-auto">
//     <a href="/" class="flex items-center">
//       <span class="self-center text-[30px] font-semibold whitespace-nowrap lobster text-black">
//         Designs Of Love by Ruth
//       </span>
//     </a>
//     <Image src={logo} className="h-[75px] w-[75px]" alt="Flowbite Logo" />

//     <div
//       class="items-center mr-[40px] justify-between hidden w-full md:flex md:w-auto md:order-1"
//       id="navbar-sticky"
//     >
//       <ul class="flex flex-col p-5 pr-[20px] mt-5 border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0 font-extrabold md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//         <li>
//           <Link
//             href="/about"
//             className="block py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:p-0 dark:text-white md:hover:text-white rowdies text-[20px]"
//           >
//             Our Story
//           </Link>
//         </li>
//         <li>
//           <Link
//             href="/collection"
//             class="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer rowdies text-[20px]"
//           >
//             My Collection
//           </Link>
//         </li>

//         <li>
//           <Link
//             href="#"
//             class="block py-2 pl-3 pr-4 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-white md:p-0 rowdies text-[20px]"
//           >
//             Contact
//           </Link>
//         </li>
//       </ul>

//       {showCart && <Cart />}
//     </div>
//     <div class=" md:order-2 bg-green-300 md:mt-[-90px]">
//       <button
//         type="button"
//         className="text-[25px] ml-[0px] mt-[105px] text-black cursor-pointer relative ease-in-out bg-transparent"
//         onClick={() => setShowCart(true)}
//       >
//         <AiOutlineShopping />
//         <span className="absolute right-[-8px] text-[12px] text-center font-bold text-white bg-pink-600 shadow-md shadow-pink-500 w-[18px] h-[18px] rounded-[50%] mt-[-8px]">
//           {totalQuantities}
//         </span>
//       </button>
//     </div>
//   </div>
// </div>
export default NavBar;
