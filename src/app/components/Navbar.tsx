"use client";
import React, { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { IoMdClose } from "react-icons/io"; // Importing a close icon
import { RiMenuFoldLine } from "react-icons/ri";
import Link from "next/link";
import { useAppSelector } from "../store/hooks";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const cart = useAppSelector(state=> state.cart)

  return (
    <div className="font-[family-name:var(--font-geist-sans)] text-black bg-white">
      <div>
        <div className="w-full h-[40px] bg-[#9fc6d2] text-white text-center content-center overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-marquee sm:w-[85%]">
            Get free shipping when you order over <span className="text-black">Rs.5999 </span>
            Get the best quality T-Shirts and Trousers with unbeleiveble <span className="text-black">Discounts upto 55%</span>
          </div>
          
        </div>
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
        `}
      </style>
    

      <div className="w-full h-[40px] text-white bg-[#4a4e69] flex justify-center items-center py-10">
        <div className="flex md:w-[90%] w-full flex-row md:flex-row justify-between items-center gap-4 md:gap-16 px-2 md:px-0">
          <div className="sm:hidden"><Link href={'/Cart'} className="flex flex-col items-center justify-center mb-"><span className="h-3">{cart.length == 0 ? '?' : cart.length}</span> <CiShoppingCart className="text-white" size={30} /></Link></div>
          <div className="font-extrabold text-center sm:text-start text-[39px] flex-1 italic">
            <Link href={'/'}><span className="text-[50px]">Z</span>oobMart</Link>
          </div>
          <button
            className="sm:hidden flex-none text-white"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? (
              <IoMdClose size={30} />
            ) : (
              <RiMenuFoldLine size={35} />
            )}
          </button>
          <div className="hidden md:block">
            <ul className="text-[18px] box-border font-semibold flex flex-col md:flex-row gap-4 md:gap-6 font-[family-name:var(--font-geist-sans)]">
              <li>
                <Link
                  href={"/"}
                  className="border-transparent border hover:border-white rounded-lg p-2"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={"/About"}
                  className="border-transparent border hover:border-white rounded-lg p-2"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href={"/Cart"}
                  className="border-transparent border hover:border-white rounded-lg p-2 pr-3 relative"
                >
                  Cart
                  <CiShoppingCart className="absolute left-11 top-2" size={20} />
                  <span className="ml-5 font-light">{cart.length == 0 ? null : cart.length}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className="md:hidden bg-white">
        <div
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className={`fixed inset-0 backdrop-blur-sm bg-opacity-75 z-50 transition-transform duration-300 ${
            sidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="bg-[#4a4e69] text-white w-72 h-[65%] flex justify-center items-center rounded-l-full shadow-lg fixed right-0">
            <div className="absolute right-3 top-3">
              <IoMdClose size={30} />
            </div>

            <ul className="text-[18px] rounded-l-full font-semibold flex flex-col ml-20 gap-4 p-4 font-[family-name:var(--font-geist-sans)]">
              <li
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="border-transparent border hover:border-white text-center rounded-lg p-2"
              >
                <Link href={"/"}>Home</Link>
              </li>
              <li
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="border-transparent border hover:border-white text-center rounded-lg p-2"
              >
                <Link href={"/About"}>About</Link>
              </li>
              <li
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="border-transparent border hover:border-white text-center rounded-lg p-2"
              >
                <Link className="flex justify-center items-center ml-1" href={"/Cart"}>
                  Cart <CiShoppingCart size={20} />
                  <span className="font-light">{cart.length == 0 ? null : cart.length}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

