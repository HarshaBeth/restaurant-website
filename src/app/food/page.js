import Image from "next/image";
import Link from "next/link";
import React from "react";
// import foodPic from '@/Images/food_img.svg';
// import scrollImg from '@/Images/Scroll_img.png';
// import RSpoon from '@/Images/Vector.png';
// import BottleImg from '@/Images/Cocktail.svg';
import Contact_Us from "@/Components/Contact_Us";
import FoodNavbar from "@/Components/FoodNavbar";

const page = () => {
  return (
    <div>
      {/* Navbar */}
      <FoodNavbar />

      <div className='h-screen w-full bg-cover bg-center bg-[url("/BG.png")]'>
        <FoodNavbar />

        <div className="h-screen flex justify-center">
          {/* Image */}
          <div className="h-screen w-full flex flex-col justify-center items-center">
            <Image
              alt=""
              src={"/Images/foodHomePic.png"}
              width={425}
              height={425}
              className="max-lg:w-[24rem] max-md:w-[20rem] max-sm:w-[16rem] max-sm:-mt-16 max-md:-mt-6 mt-20 mr-10"
            />
          </div>

          {/* Scroll */}
          <div className=" flex flex-col space-y-4 justify-center items-center absolute bottom-10 lg:right-40 md:right-20 sm:justify-between">
            <Image
              alt=""
              src={"/Images/Scroll_img.png"}
              width={0}
              height={0}
              className="w-px h-10 max-sm:h-16 "
            />
            <span className="font-serif font-light text-yellow-200 text-xs max-sm:text-lg">
              SCROLL
            </span>
          </div>
        </div>

        {/* Menu page */}
        <div className="h-screen bg-gray-950">
          {/* whole thing */}
          <div className="h-screen flex flex-col items-center justify-center">
            {/* Inner box frame */}
            <div className="flex flex-col justify-center">
              {/* Heading */}
              <div className="text-white flex flex-col items-center">
                Menu That Fits Your Palatte
                <Image
                  alt=""
                  src={"/Images/Vector.png"}
                  width={37}
                  height={37}
                  className="pt-2 pb-3"
                />
                <span className="text-5xl text-yellow-200 max-sm:text-4xl">Food Menu</span>
              </div>

              {/* Menu */}
              <div className="pt-10 flex flex-row items-center space-x-7 max-md:space-x-0  max-md:divide-x-2 max-md:divide-yellow-200">
                {/* Left */}
                <div className="text-white flex flex-col items-center max-md:pr-3">
                  <span className="text-3xl max-sm:text-2xl">Indian Cuisine</span>

                  <div className="pt-8 space-y-6">
                    {/* Each menu item */}
                    <div className="flex flex-col">
                      <div className="flex flex-row items-center space-x-5">
                        <span className="pr-14 text-yellow-200 max-lg:pr-5 max-sm:pr-6">
                          Chicken Biryani
                        </span>
                        <hr className="h-px bg-white border-0 w-20 max-lg:w-10 max-sm:hidden" />
                        <span className="!font-serif">$6</span>
                      </div>
                      {/* Item Size */}
                      <div className=" text-gray-400 text-xs font-normal space-x-2 pt-1">
                        <span className="!font-sans ">1 plate</span>
                        <span className="!font-sans ">|</span>
                        <span className="!font-sans ">2 persons</span>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div className="flex flex-row items-center space-x-5">
                        <span className="pr-16 text-yellow-200 max-lg:pr-7">
                          Butter Chicken
                        </span>
                        <hr className="h-px bg-white border-0 w-20 max-lg:w-10 max-sm:hidden" />
                        <span className="!font-serif">$10</span>
                      </div>
                      {/* Item Size */}
                      <div className=" text-gray-400 text-xs font-normal space-x-2 pt-1">
                        <span className="!font-sans ">1 pot</span>
                        <span className="!font-sans ">|</span>
                        <span className="!font-sans ">3 - 4 persons</span>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div className="flex flex-row items-center space-x-5">
                        <span className="pr-12 text-yellow-200 max-lg:pr-3 max-sm:pr-4">
                          Tandoori Chicken
                        </span>
                        <hr className="h-px bg-white border-0 w-20 max-lg:w-10 max-sm:hidden" />
                        <span className="!font-serif">$7</span>
                      </div>
                      {/* Item Size */}
                      <div className=" text-gray-400 text-xs font-normal space-x-2 pt-1">
                        <span className="!font-sans ">1 plate</span>
                        <span className="!font-sans ">|</span>
                        <span className="!font-sans ">4 pieces</span>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div className="flex flex-row items-center space-x-5">
                        <span className="pr-9 text-yellow-200 max-lg:pr-0">
                          Naan Bread Combo
                        </span>
                        <hr className="h-px bg-white border-0 w-20 max-lg:w-10 max-sm:hidden" />
                        <span className="!font-serif">$12</span>
                      </div>
                      {/* Item Size */}
                      <div className=" text-gray-400 text-xs font-normal space-x-2 pt-1">
                        <span className="!font-sans ">Garlic <span className="max-lg:hidden !font-sans">Naan</span></span>
                        <span className="!font-sans ">|</span>
                        <span className="!font-sans ">Butter <span className="max-lg:hidden !font-sans">Naan</span></span>
                        <span className="!font-sans ">|</span>
                        <span className="!font-sans ">Kulcha <span className="max-lg:hidden !font-sans">Naan</span></span>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div className="flex flex-row items-center space-x-5">
                        <span className="pr-20 mr-2.5 text-yellow-200 max-lg:pr-11 max-sm:pr-12">
                          Fish Curry
                        </span>
                        <hr className="h-px bg-white border-0 w-20 max-lg:w-10 max-sm:hidden" />
                        <span className="!font-serif">$9</span>
                      </div>
                      {/* Item Size */}
                      <div className=" text-gray-400 text-xs font-normal space-x-2 pt-1">
                        <span className="!font-sans ">1 pot</span>
                        <span className="!font-sans ">|</span>
                        <span className="!font-sans ">3 - 4 persons</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Middle */}
                <div className="max-md:hidden">
                  <Image
                    alt=""
                    src={"/Images/cocktailImage.png"}
                    width={275}
                    height={275}
                    className="max-lg:w-[15rem]"
                  />
                </div>

                {/* Right */}
                <div className="text-white flex flex-col items-center max-md:pl-3">
                  <span className="text-3xl max-sm:text-2xl">Chinese Cuisine</span>

                  <div className="pt-8 space-y-6">
                    {/* Each menu item */}
                    <div className="flex flex-col">
                      <div className="flex flex-row items-center space-x-5">
                        <span className="pr-10 text-yellow-200 max-lg:pr-2 max-sm:pr-3">
                          Chicken Fried Rice
                        </span>
                        <hr className="h-px bg-white border-0 w-20 max-lg:w-10 max-sm:hidden" />
                        <span className="!font-serif">$5</span>
                      </div>
                      {/* Item Size */}
                      <div className=" text-gray-400 text-xs font-normal space-x-2 pt-1">
                        <span className="!font-sans ">1 plate</span>
                        <span className="!font-sans ">|</span>
                        <span className="!font-sans ">2 persons</span>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div className="flex flex-row items-center space-x-4">
                        <span className="pr-20 mr-3 text-yellow-200 max-lg:pr-12 max-sm:pr-11">
                          Dumplings{" "}
                        </span>
                        <hr className="h-px bg-white border-0 w-20 max-lg:w-10 max-sm:hidden" />
                        <span className="!font-serif pl-1">$10</span>
                      </div>
                      {/* Item Size */}
                      <div className=" text-gray-400 text-xs font-normal space-x-2 pt-1">
                        <span className="!font-sans ">Chicken</span>
                        <span className="!font-sans ">|</span>
                        <span className="!font-sans ">Shrimp</span>
                        <span className="!font-sans ">|</span>
                        <span className="!font-sans ">Fish</span>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div className="flex flex-row items-center space-x-4">
                        <span className="pr-20 mr-1 text-yellow-200 max-lg:pr-12">
                          Spring Rolls
                        </span>
                        <hr className="h-px bg-white border-0 w-20 max-lg:w-10 max-sm:hidden" />
                        <span className="!font-serif pl-1">$5</span>
                      </div>
                      {/* Bottle Size */}
                      <div className=" text-gray-400 text-xs font-normal space-x-2 pt-1">
                        <span className="!font-sans ">1 cup</span>
                        <span className="!font-sans ">|</span>
                        <span className="!font-sans ">6 pieces</span>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div className="flex flex-row items-center space-x-5">
                        <span className="pr-8 text-yellow-200 max-lg:pr-0">
                          Chow Mein Noodles
                        </span>
                        <hr className="h-px bg-white border-0 w-20 max-lg:w-10 max-sm:hidden" />
                        <span className="!font-serif">$12</span>
                      </div>
                      {/* Bottle Size */}
                      <div className=" text-gray-400 text-xs font-normal space-x-2 pt-1">
                        <span className="!font-sans ">Veg</span>
                        <span className="!font-sans ">|</span>
                        <span className="!font-sans ">Chicken</span>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div className="flex flex-row items-center space-x-5">
                        <span className="pr-16 mr-2 text-yellow-200 max-lg:pr-8 max-sm:pr-9">
                          Wonton Soup
                        </span>
                        <hr className="h-px bg-white border-0 w-20 max-lg:w-10 max-sm:hidden" />
                        <span className="!font-serif">$4</span>
                      </div>
                      {/* Bottle Size */}
                      <div className=" text-gray-400 text-xs font-normal space-x-2 pt-1">
                        <span className="!font-sans ">Fried</span>
                        <span className="!font-sans ">|</span>
                        <span className="!font-sans ">Steamed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Us */}
        <Contact_Us />
      </div>
    </div>
  );
};

export default page;
