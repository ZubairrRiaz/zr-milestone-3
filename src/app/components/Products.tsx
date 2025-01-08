"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMdHeart } from "react-icons/io";
import { IoStarSharp } from "react-icons/io5";
import { useState } from "react";
 
export interface Productinfo {
  id: number;
  name: string;
  discountPrice: string;
  originalPrice: string;
  image: string;
  reviews: string;
  Save: string;
}

export const clothsArray:Productinfo[] = [
  {
    id: 1,
    name: "Black linnone trouser",
    discountPrice: "2499",
    originalPrice: "3999",
    image: "/t8.png",
    reviews: "78",
    Save: "40%",
  },
  {
    id: 2,
    name: "Pleated green trouser",
    discountPrice: "1999",
    originalPrice: "2999",
    image: "/t7.png",
    reviews: "67",
    Save: "30%",
  },
  {
    id: 3,
    name: "Light green Khakis trouser",
    discountPrice: "1499",
    originalPrice: "1999",
    image: "/t6.png",
    reviews: "65",
    Save: "35%",
  },
  {
    id: 4,
    name: "Brown lounge trouser",
    discountPrice: "1499",
    originalPrice: "2499",
    image: "/t5.png",
    reviews: "45",
    Save: "45%",
  },
  {
    id: 5,
    name: "Dark marroon trouser",
    discountPrice: "2999",
    originalPrice: "3999",
    image: "/t4.png",
    reviews: "98",
    Save: "20%",
  },
  {
    id: 6,
    name: "Black wooley trouser",
    discountPrice: "999",
    originalPrice: "1499",
    image: "/t3.png",
    reviews: "17",
    Save: "49%",
  },
  {
    id: 7,
    name: "Dark crimpson trouser",
    discountPrice: "2499",
    originalPrice: "3499",
    image: "/t2.png",
    reviews: "34",
    Save: "40%",
  },
  {
    id: 8,
    name: "Black chinose trouser",
    discountPrice: "1299",
    originalPrice: "1899",
    image: "/t1.png",
    reviews: "24",
    Save: "25%",
  },
  {
    id: 9,
    name: "Dark gray dyee t-shirt",
    discountPrice: "2499",
    originalPrice: "2999",
    image: "/s8.png",
    reviews: "56",
    Save: "15%",
  },
  {
    id: 10,
    name: "Mint green thread t-shirt",
    discountPrice: "3499",
    originalPrice: "4999",
    image: "/s7.png",
    reviews: "75",
    Save: "43%",
  },
  {
    id: 11,
    name: "Garmet purple chaam t-shirt",
    discountPrice: "5499",
    originalPrice: "6999",
    image: "/s6.png",
    reviews: "86",
    Save: "20%",
  },
  {
    id: 12,
    name: "Dark marroon tees t-shirt",
    discountPrice: "1199",
    originalPrice: "2599",
    image: "/s5.png",
    reviews: "35",
    Save: "55%",
  },
  {
    id: 13,
    name: "Safety pink clean t-shirt",
    discountPrice: "2499",
    originalPrice: "4499",
    image: "/s4.png",
    reviews: "78",
    Save: "50%",
  },
  {
    id: 14,
    name: "Heather red cozy t-shirt",
    discountPrice: "2499",
    originalPrice: "3999",
    image: "/s3.png",
    reviews: "98",
    Save: "38%",
  },
  {
    id: 15,
    name: "Cardinal green  urban t-shirt",
    discountPrice: "3499",
    originalPrice: "3999",
    image: "/s2.png",
    reviews: "14",
    Save: "20%",
  },
  {
    id: 16,
    name: "Coral silk fresh t-shirt",
    discountPrice: "499",
    originalPrice: "999",
    image: "/s7.png",
    reviews: "66",
    Save: "50%",
  },
];
interface RedHeartsState {
  [key: number]: boolean;
}
const Products = () => {
  const [redHearts, setRedHearts] = useState<RedHeartsState>({});

  const toggleColor = (id: number) => {
    setRedHearts((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <div className="sm:py-10">
        <h1 className="text-center font-bold text-2xl sm:text-3xl bg-gradient-to-r from-[#9fc6d2] to-[#4a4e69] sm:rounded-xl text-white py-4 shadow-xl">Best Picks Of All Time</h1>
        <div className="grid grid-cols-2 place-items-center gap-[2px] sm:gap-12 w-full lg:grid-cols-4">
          {clothsArray.map((product: Productinfo) => (
            <div
              key={product.id} // Use product.id as key instead of index
              className="bg-[#9fc6d2] shadow-sm h-[490px] relative w-[100%] md:h-[650px] md:w-[300px] border border-opacity-10"
            >
              <div className="absolute top-3 text-sm font-mono font-normal left-3 bg-[#4a4e69] rounded-3xl py-1 px-4 text-white">
                Save {product.Save}
              </div>
              <IoMdHeart
                size={25}
                className={`absolute top-3 right-3 ${
                  redHearts[product.id] ? "text-red-500" : "text-white"
                }`}
                onClick={() => toggleColor(product.id)}
              />
              <Link href={`../productsdetails/${product.id}`}>
                <div className="">
                  <Image
                    src={product.image}
                    alt="Chair"
                    width={490}
                    height={490}
                    className="h-[300px] w-[400px] sm:h-[450px]"
                  />
                </div>

                <div className="ml-4 mt-4 space-y-2 sm:text-lg">
                  <p className="sm:text-2xl text-black font-light text-xl">
                    {product.name}
                  </p>

                  <div>
                    <p className="flex gap-2 text-yellow-500">
                      <IoStarSharp />
                      <IoStarSharp />
                      <IoStarSharp />
                      <IoStarSharp />
                      <IoStarSharp />
                    </p>
                    <p className="text-sm sm:text-base text-gray-500">
                      {product.reviews} reviews
                    </p>
                  </div>

                  <p className="text-base sm:text-lg text-black">
                    <span className="line-through text-gray-700 text-opacity-65">
                      PKR {product.originalPrice}
                    </span>
                    <br />
                    PKR {product.discountPrice}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
