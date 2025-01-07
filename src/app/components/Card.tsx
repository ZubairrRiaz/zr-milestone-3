'use client'
import React from 'react';
import { FaHeadset, FaShippingFast, FaSmile } from 'react-icons/fa';

const ServiceCards = () => {
  return (
    <div className="flex py-20 font-serif flex-wrap justify-center space-x-0 space-y-4 md:space-x-4 md:space-y-0 p-6">
      {/* 24 Customer Services Card */}
      <div className="bg-gradient-to-r from-[#4a4e69] to-[#9fc6d2] p-6 rounded-lg shadow-lg text-white w-full md:w-64">
        <div className="flex justify-center mb-4">
          <FaHeadset size={40} />
        </div>
        <h2 className="text-2xl font-bold mb-2 text-center">24 Customer Services</h2>
        <p className="text-center">We are available 24/7 to assist you with any inquiries or issues.</p>
      </div>

      {/* Fast Delivery Card */}
      <div className="bg-gradient-to-r from-[#4a4e69] to-[#9fc6d2] p-6 rounded-lg shadow-lg text-white w-full md:w-64">
        <div className="flex justify-center mb-4">
          <FaShippingFast size={40} />
        </div>
        <h2 className="text-2xl font-bold mb-2 text-center">Fast Delivery</h2>
        <p className="text-center">Get your products delivered quickly and efficiently.</p>
      </div>

      {/* Client Satisfaction Card */}
      <div className="bg-gradient-to-r from-[#4a4e69] to-[#9fc6d2] p-6 rounded-lg shadow-lg text-white w-full md:w-64">
        <div className="flex justify-center mb-4">
          <FaSmile size={40} />
        </div>
        <h2 className="text-2xl font-bold mb-2 text-center">Client Satisfaction</h2>
        <p className="text-center">Our clients' satisfaction is our top priority.</p>
      </div>
    </div>
  );
};

export default ServiceCards;
