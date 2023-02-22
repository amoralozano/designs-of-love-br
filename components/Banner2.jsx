import React from "react";
import { urlFor } from "../lib/client";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";

//  finish this off and look at fixing the last 2 bugs and check for mobile and push to update.

// change this to
//desk: box side to side with image for the first half top and text and button for the second half.

const Banner2 = ({ banner2 }) => {
  return (
    // only do flex w non mobile screens
    <div className="flex items-center justify-center bg-gray-900 w-full h-[600px] md:h-[700px] mt-[200px] md:mt-[200px] ">
      <div className="w-[45%] bg-gray-900 h-[400px]  md:h-[670px] lg:ml-[0px]">
        <img
          src={urlFor(banner2.image)}
          className="bg-gray-500 h-[200px] w-[220px] md:w-[525px] md:h-[450px] lg:w-[525px] lg:h-[450px] ml-[10px] md:ml-[60px] mt-[30px] md:mt-[100px] flex rounded-lg"
        />
      </div>
      <div className="lg:flex items-center justify-center bg-gray-900 w-[60%] h-[400px] md:h-[670px]">
        <div className="lg:w-[90%] h-[550px] bg-black lg:mr-[80px] rounded-lg">
          <h1 className=" ml-[10px] rowdies mt-[60px] text-left text-[65px] font-semibold text-white">
            {" "}
            {banner2.largeText2}
          </h1>
          <h1 className=" ml-[10px] rowdies text-left text-[55px] font-semibold text-pink-300">
            {banner2.midText}{" "}
          </h1>

          <p className=" ml-[10px] mt-[10px] text-left text-[23px] font-light text-white">
            Explore collections for you, and for what defines you!
          </p>

          <Link href="/collection">
            <button
              className=" bg-black text-pink-300 font-bold px-[10px] md:px-[20px] rounded-lg py-[6px] md:py-[10px] text-[15px] md:text-[25px] mt-[5px] md:mt-[25px] ml-[50px] md:ml-[10px] mb-[5px] md:mb-[10px] border-[1px] border-pink-300"
              type="button"
              href="/collection"
            >
              {banner2.buttonText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
// mt-[-400px] ml-[180px]

export default Banner2;

{
  /* <div className="w-[80%] md:w-[90%] bg-black border-2 border-pink-500 mt-[-100px] ml-[30px] md:ml-[-40px] rounded-lg">
<h1 className="text-center ml-[10px] md:ml-[-90px] lg:ml-[-50px] text-pink-500 mt-[30px] lg:mt-[20px] w-[90%] md:w-full md:mt-[120px] text-[20px] md:text-[30px] lg:text-[40px] font-bold">
  {banner2.largeText2}
</h1>
<h1 className=" text-center text-pink-500 md:ml-[-30px] lg:ml-[-10px] mt-[15px] md:mt-[40px] text-[20px] w-[100%] md:w-full md:text-[35px]">
  {banner2.largeText1}
</h1>
<h1 className="text-center ml-[20px] md:ml-[0px] text-pink-500 w-[90%] md:w-full md:mr-[30px] font-bold text-[20px] md:text-[35px] mt-[15px] md:mt-[40px]">
  {banner2.midText}
</h1>
<Link href="/collection">
  <button
    className=" bg-black text-pink-300 font-bold px-[10px] md:px-[20px] rounded-lg py-[6px] md:py-[10px] text-[15px] md:text-[25px] mt-[5px] md:mt-[25px] ml-[50px] md:ml-[250px] mb-[5px] md:mb-[10px] border-[1px] border-pink-300"
    type="button"
    href="/collection"
  >
    {banner2.buttonText}
  </button>
</Link>
</div> */
}

// div className="w-[80%] bg-black border-2 border-purple-500 mt-[20px] lg:mt-[50px] ml-[30px] md:ml-[110px] rounded-lg">
//           <h1 className=" text-center text-purple-400 mt-[15px] md:mt-[40px] lg:mt-[20px] text-[20px] w-[105%] md:w-full md:text-[35px]">
//             Shop Unique
//           </h1>
//           <h1 className="text-center ml-[20px] md:ml-[0px] text-purple-400 w-[90%] md:w-full md:mr-[30px] font-bold text-[20px] md:text-[35px] mt-[15px] md:mt-[40px]">
//             {banner2.midText}
//           </h1>
//           <Link href="./collection">
//             <button
//               className=" bg-black text-purple-300 border-[1px] border-purple-300 font-bold px-[10px] md:px-[20px] rounded-lg py-[5px] md:py-[10px] text-[15px] md:text-[25px] mt-[10px] md:mt-[25px] ml-[20px] mb-[5px] md:ml-[200px] md:mb-[10px]"
//               type="button"
//             >
//               Explore Collections
//             </button>
//           </Link>
//         </div>
