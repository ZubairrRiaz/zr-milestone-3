'use client'
import { FaFacebookF, FaTwitter, FaInstagram, FaCcPaypal, FaCcVisa, FaCcMastercard } from 'react-icons/fa';
import { IoMdCall, IoMdMail } from 'react-icons/io';

function Footer() {
  return (
    <footer className="bg-[#4a4e69] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Support Services */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-lg font-bold mb-4">Support Services</h2>
            <ul>
              <li className="flex items-center mb-2">
                <IoMdCall className="mr-2" /> +92 3082552823
              </li>
              <li className="flex items-center">
                <IoMdMail className="mr-2" /> zubairrajpoot2164@gmail.com
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="w-full flex justify-evenly md:w-1/3 mb-6 md:mb-0 text-center">
            <h2 className="text-lg font-bold mb-4">Follow Us</h2>
            <div className="flex justify-center mt-[2px] space-x-4">
              <FaFacebookF className="cursor-pointer hover:text-gray-300" />
              <FaTwitter className="cursor-pointer hover:text-gray-300" />
              <FaInstagram className="cursor-pointer hover:text-gray-300" />
            </div>
          </div>

          {/* Payment Methods */}
          <div className="w-full md:w-1/3">
            <h2 className="text-xl text-center font-bold mb-4">Payment Methods</h2>
            <div className="flex justify-center space-x-4">
              <FaCcPaypal className="text-8xl" />
              <FaCcVisa className="text-8xl" />
              <FaCcMastercard className="text-8xl" />
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Zoobmart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
