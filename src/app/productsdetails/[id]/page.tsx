'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { IoStarSharp } from "react-icons/io5";
import { useAppDispatch } from '@/app/store/hooks';
import { addToCart } from '@/app/store/features/cart';
import { toast } from 'sonner';
import { clothsArray } from '@/app/components/Products';

// export const clothsArray:Productinfo[] = [
//     {
//       id: 1,
//       name: "Black linnone trouser",
//       discountPrice: "2499", 
//       originalPrice: "3999", 
//       image: "/t8.png",
//       reviews: '78',
//       Save: '40%'
//     },
//     {
//       id: 2,
//       name: "Pleated green trouser",
//       discountPrice: "1999", 
//       originalPrice: "2999", 
//       image: "/t7.png",
//       reviews: '67',
//       Save: '30%'
//     },
//     {
//       id: 3,
//       name: "Light green Khakis trouser",
//       discountPrice: "1499", 
//       originalPrice: "1999", 
//       image: "/t6.png",
//       reviews: '65',
//       Save: '35%'
//     },
//     {
//       id: 4,
//       name: "Brown lounge trouser",
//       discountPrice: "1499", 
//       originalPrice: "2499", 
//       image: "/t5.png",
//       reviews: '45',
//       Save: '45%'
//     },
//     {
//       id: 5,
//       name: "Dark marroon trouser",
//       discountPrice: "2999", 
//       originalPrice: "3999", 
//       image: "/t4.png",
//       reviews: '98',
//       Save: '20%'
//     },
//     {
//       id: 6,
//       name: "Black wooley trouser",
//       discountPrice: "999", 
//       originalPrice: "1499", 
//       image: "/t3.png",
//       reviews: '17',
//       Save: '49%'
//     },
//     {
//       id: 7,
//       name: "Dark crimpson trouser",
//       discountPrice: "2499", 
//       originalPrice: "3499", 
//       image: "/t2.png",
//       reviews: '34',
//       Save: '40%'
//     },
//     {
//       id: 8,
//       name: "Black chinose trouser",
//       discountPrice: "1299", 
//       originalPrice: "1899", 
//       image: "/t1.png",
//       reviews: '24',
//       Save: '25%'
//     },
//     {
//       id: 9,
//       name: "Dark gray dyee t-shirt",
//       discountPrice: "2499", 
//       originalPrice: "2999", 
//       image: "/s8.png",
//       reviews: '56',
//       Save: '15%'
//     },
//     {
//       id: 10,
//       name: "Mint green thread t-shirt",
//       discountPrice: "3499", 
//       originalPrice: "4999", 
//       image: "/s7.png",
//       reviews: '75',
//       Save: '43%'
//     },
//     {
//       id: 11,
//       name: "Garmet purple chaam t-shirt",
//       discountPrice: "5499", 
//       originalPrice: "6999", 
//       image: "/s6.png",
//       reviews: '86',
//       Save: '20%'
//     },
//     {
//       id: 12,
//       name: "Dark marroon tees t-shirt",
//       discountPrice: "1199", 
//       originalPrice: "2599", 
//       image: "/s5.png",
//       reviews: '35',
//       Save: '55%'
//     },
//     {
//       id: 13,
//       name: "Safety pink clean t-shirt",
//       discountPrice: "2499", 
//       originalPrice: "4499", 
//       image: "/s4.png",
//       reviews: '78',
//       Save: '50%'
//     },
//     {
//       id: 14,
//       name: "Heather red cozy t-shirt",
//       discountPrice: "2499", 
//       originalPrice: "3999", 
//       image: "/s3.png",
//       reviews: '98',
//       Save: '38%'
//     },
//     {
//       id: 15,
//       name: "Cardinal green  urban t-shirt",
//       discountPrice: "3499", 
//       originalPrice: "3999", 
//       image: "/s2.png",
//       reviews: '14',
//       Save: '20%'
//     },
//     {
//       id: 16,
//       name: "Coral silk fresh t-shirt",
//       discountPrice: "499", 
//       originalPrice: "999", 
//       image: "/s7.png",
//       reviews: '66',
//       Save: '50%'
//     },
//   ];

const ProductDetails = (props: { params: { id: string } }) => {

  // Convert the id from string to number
  const productId = Number(props.params.id);

  // Find the product from the clothsArray based on the number ID
  const product = clothsArray.filter((item) => item.id === productId);
 
  const dispatch = useAppDispatch()

  const [quantity, setQuantity] = useState(1);

  const [cartItem, setCartItem] = useState(() => {
    if (product.length > 0) {
      return {
        id: product[0].id,
        name: product[0].name,
        discountPrice: product[0].discountPrice,
        originalPrice: product[0].originalPrice,
        image: product[0].image,
        reviews: product[0].reviews,
        Save: product[0].Save,
      };
    }
    return null;
  });

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  if (!product || !cartItem) {
    return <div>Product not found</div>;
  }

  // Ensure discountPrice and originalPrice are numbers
  const discountPrice = Number(product[0].discountPrice)
  const originalPrice = Number(product[0].originalPrice)

  // Calculate total prices as numbers
  const totalDiscountPrice = discountPrice * quantity;
  const totalOriginalPrice = originalPrice * quantity;
  
  const addToCartFun = () => {
    const updatedCartItem = {
      ...cartItem,
      discountPrice: totalDiscountPrice.toString(), // Convert to string
      originalPrice: totalOriginalPrice.toString(), // Convert to string
      
    };
    setCartItem(updatedCartItem);
    dispatch(addToCart(updatedCartItem));
    toast(`Added ${quantity} Quantity Of (${product[0].name}) In Cart.`);
  };
  
  return (
    <div className="font-[family-name:var(--font-geist-sans)] sm:h-screen sm:w-[80%] mx-auto sm:flex sm:justify-evenly items-center sm:my-10 p-6 bg-gradient-to-r from-[#9fc6d2] to-[#4a4e69] sm:rounded-xl shadow-xl">
      <div className='flex justify-center'>
        <Image height={250} width={250} src={cartItem.image} alt={cartItem.name} className="sm:w-[400px] h-[90%] rounded-xl" />
      </div>
      <div className="mt-6 sm:space-y-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#4a4e69]">{cartItem.name}</h1>
        <div className="text-xl text-white mt-2 sm:text-2xl">
          <span className="line-through text-[#4a4e69] mr-2">PKR {totalOriginalPrice.toFixed(2)}</span> 
          PKR {totalDiscountPrice.toFixed(2)} 
        </div>
        <p className="mt-4 text-white sm:text-xl">This is a great product that you will love!</p>
        <div className="mt-2 text-sm text-white sm:text-xl">Reviews: {cartItem.reviews}</div>
        <p className="flex gap-2 text-yellow-500 sm:text-xl"><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /></p>
        
        <div className="mt-6 flex items-center justify-center">
          <button
            onClick={decreaseQuantity}
            className="bg-[#4a4e69] rounded-l w-14 h-[40px] text-white active:bg-white active:text-black px-4 py-2 transition duration-300"
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            min="1"
            readOnly
            className="w-16 h-[40px] text-center border-[#4a4e69]"
          />
          <button
            onClick={increaseQuantity}
            className="bg-[#4a4e69] w-14 h-[40px] rounded-r text-white active:bg-white active:text-black px-4 py-2 transition duration-300"
          >
            +
          </button>
        </div>

        <div className='flex justify-center items-center'>
          <button
            onClick={addToCartFun}
            className="mt-6 bg-[#4a4e69] text-white px-8 py-3 sm:px-10 sm:text-lg rounded-full active:bg-white active:text-black transition duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;



