"use client";
import Image from "next/image";
import Link from "next/link";
// import pic from '@/Images/onTheRocks.svg';
// import scrollImg from '@/Images/Scroll_img.png';
// import RSpoon from '@/Images/Vector.png';
// import BottleImg from '@/Images/Cocktail.svg';
import Contact_Us from "@/Components/Contact_Us";

import BarNavbar from "@/Components/BarNavbar";

const page = () => {
  return (
    <div>
      {/* Navbar */}
      <BarNavbar />

      {/* Bar Homepage */}
      <div className='h-screen w-full bg-cover bg-center bg-[url("/BG.png")] relative'>
        <div className="h-screen flex justify-center">
          {/* Image */}
          <div className="h-screen w-full flex flex-col justify-center items-center">
            <Image
              alt=""
              src={"/Images/barHomepagePic.png"}
              width={650}
              height={650}
              className="max-lg:w-[32rem] max-sm:w-[24rem] max-sm:-mt-16  mt-20"
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
              <span className="text-5xl text-yellow-200">Bar Menu</span>
            </div>

            {/* Menu */}
            <div className="pt-10 flex flex-row items-center space-x-7 max-md:space-x-0  max-md:divide-x-2 max-md:divide-yellow-200">
              {/* Left */}
              <div className="text-white flex flex-col items-center max-md:pr-3">
                <span className="text-3xl">Wine & Beer</span>

                <div className="pt-8 space-y-6">
                  {/* Each menu item */}
                  <div className="flex flex-col">
                    <div className="flex flex-row items-center space-x-5">
                      <span className="pr-4 text-yellow-200 max-lg:pr-0">
                        Chapel Hill Shiraz
                      </span>
                      <hr className="h-px bg-white border-0 w-20 max-lg:w-10 max-sm:w-2" />
                      <span className="!font-serif">$56</span>
                    </div>
                    {/* Bottle Size */}
                    <div className=" text-gray-400 text-xs font-normal space-x-2 pt-1">
                      <span className="!font-sans ">AU</span>
                      <span className="!font-sans ">|</span>
                      <span className="!font-sans ">Bottle</span>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div className="flex flex-row items-center space-x-5">
                      <span className="pr-9 text-yellow-200 max-lg:pr-5">
                        Catena Malbec
                      </span>
                      <hr className="h-px bg-white border-0 w-20 max-lg:w-10 max-sm:w-2" />
                      <span className="!font-serif">$59</span>
                    </div>
                    {/* Bottle Size */}
                    <div className=" text-gray-400 text-xs font-normal space-x-2 pt-1">
                      <span className="!font-sans ">AU</span>
                      <span className="!font-sans ">|</span>
                      <span className="!font-sans ">Bottle</span>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div className="flex flex-row items-center space-x-5">
                      <span className="pr-9 text-yellow-200 max-lg:pr-5">
                        La Vieille Rosé
                      </span>
                      <hr className="h-px bg-white border-0 w-20 max-lg:w-10 max-sm:w-2" />
                      <span className="!font-serif">$44</span>
                    </div>
                    {/* Bottle Size */}
                    <div className=" text-gray-400 text-xs font-normal space-x-2 pt-1">
                      <span className="!font-sans ">FR</span>
                      <span className="!font-sans ">|</span>
                      <span className="!font-sans ">750 ml</span>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div className="flex flex-row items-center space-x-5">
                      <span className="pr-9 text-yellow-200 max-lg:pr-5">
                        Rhino Pale Ale
                      </span>
                      <hr className="h-px bg-white border-0 w-20 max-lg:w-10 max-sm:w-2" />
                      <span className="!font-serif">$31</span>
                    </div>
                    {/* Bottle Size */}
                    <div className=" text-gray-400 text-xs font-normal space-x-2 pt-1">
                      <span className="!font-sans ">CA</span>
                      <span className="!font-sans ">|</span>
                      <span className="!font-sans ">750 ml</span>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div className="flex flex-row items-center space-x-5">
                      <span className="pr-10 text-yellow-200 max-lg:pr-6">
                        Irish Guinness
                      </span>
                      <hr className="h-px bg-white border-0 w-20 max-lg:w-10 max-sm:w-2" />
                      <span className="!font-serif">$26</span>
                    </div>
                    {/* Bottle Size */}
                    <div className=" text-gray-400 text-xs font-normal space-x-2 pt-1">
                      <span className="!font-sans ">IR</span>
                      <span className="!font-sans ">|</span>
                      <span className="!font-sans ">750 ml</span>
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
                  height={300}
                  className="max-lg:w-[15rem]"
                />
              </div>

              {/* Right */}
              <div className="text-white flex flex-col items-center max-md:pl-3">
                <span className="text-3xl">Cocktails</span>

                <div className="pt-8 space-y-6">
                  {/* Each menu item */}
                  <div className="flex flex-col">
                    <div className="flex flex-row items-center space-x-5">
                      <span className="pr-16 text-yellow-200 max-lg:pr-7">
                        Aperol Spritz
                      </span>
                      <hr className="h-px bg-white border-0 w-20 max-lg:w-10 max-sm:w-2" />
                      <span className="!font-serif">$20</span>
                    </div>
                    {/* Bottle Size */}
                    <div className=" text-gray-400 text-xs font-normal space-x-2 pt-1">
                      <span className="!font-sans ">Aperol</span>
                      <span className="!font-sans ">|</span>
                      <span className="!font-sans max-sm:hidden">
                        Villa Marchesi prosecco
                      </span>
                      <span className="!font-sans max-sm:hidden">|</span>
                      <span className="!font-sans max-lg:hidden max-sm:inline">
                        soda
                      </span>
                      <span className="!font-sans max-lg:hidden max-sm:inline">
                        |
                      </span>
                      <span className="!font-sans lg:hidden">...</span>
                      <span className="!font-sans max-lg:hidden">30 ml</span>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div className="flex flex-row items-center space-x-4">
                      <span className="pr-12 text-yellow-200 max-lg:pr-3">
                        Dark &apos;N&apos; Stormy
                      </span>
                      <hr className="h-px bg-white border-0 w-20 max-lg:w-10 max-sm:w-2" />
                      <span className="!font-serif pl-1">$16</span>
                    </div>
                    {/* Bottle Size */}
                    <div className=" text-gray-400 text-xs font-normal space-x-2 pt-1">
                      <span className="!font-sans ">Dark rum</span>
                      <span className="!font-sans ">|</span>
                      <span className="!font-sans ">Ginger beer</span>
                      <span className="!font-sans ">|</span>
                      <span className="!font-sans sm:hidden">...</span>
                      <span className="!font-sans max-sm:hidden">
                        Slice of lime
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div className="flex flex-row items-center space-x-5">
                      <span className="pr-24 text-yellow-200 max-lg:pr-14">
                        Daiquiri
                      </span>
                      <hr className="h-px bg-white border-0 w-20 max-lg:w-10 max-sm:w-2" />
                      <span className="!font-serif pl-1 max-lg:pl-0">$10</span>
                    </div>
                    {/* Bottle Size */}
                    <div className=" text-gray-400 text-xs font-normal space-x-2 pt-1">
                      <span className="!font-sans ">Rum</span>
                      <span className="!font-sans ">|</span>
                      <span className="!font-sans ">Citrus juice</span>
                      <span className="!font-sans ">|</span>
                      <span className="!font-sans ">Sugar</span>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div className="flex flex-row items-center space-x-5">
                      <span className="pr-14 text-yellow-200 max-lg:pr-5">
                        Old Fashioned
                      </span>
                      <hr className="h-px bg-white border-0 w-20 max-lg:w-10 max-sm:w-2" />
                      <span className="!font-serif">$31</span>
                    </div>
                    {/* Bottle Size */}
                    <div className=" text-gray-400 text-xs font-normal space-x-2 pt-1">
                      <span className="!font-sans ">Bourbon</span>
                      <span className="!font-sans ">|</span>
                      <span className="!font-sans ">Brown sugar</span>
                      <span className="!font-sans ">|</span>
                      <span className="!font-sans lg:hidden">...</span>
                      <span className="!font-sans max-lg:hidden">
                        Angostura Bitters
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div className="flex flex-row items-center space-x-5">
                      <span className="pr-24 text-yellow-200 max-lg:pr-14">
                        Negroni
                      </span>
                      <hr className="h-px bg-white border-0 w-20 max-lg:w-10 max-sm:w-2" />
                      <span className="!font-serif max-lg:pl-0">$26</span>
                    </div>
                    {/* Bottle Size */}
                    <div className=" text-gray-400 text-xs font-normal space-x-2 pt-1">
                      <span className="!font-sans ">Gin</span>
                      <span className="!font-sans ">|</span>
                      <span className="!font-sans ">Sweet Vermouth</span>
                      <span className="!font-sans ">|</span>
                      <span className="!font-sans max-lg:hidden">Campari</span>
                      <span className="!font-sans max-lg:hidden">|</span>
                      <span className="!font-sans lg:hidden">...</span>
                      <span className="!font-sans max-lg:hidden">
                        Orange garnish
                      </span>
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
  );
};

export default page;
