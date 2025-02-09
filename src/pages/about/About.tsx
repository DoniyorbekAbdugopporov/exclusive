import Frame_2 from "@/assets/images/Frame 874.png";
import Frame_3 from "@/assets/images/Frame 875.png";
import Frame_4 from "@/assets/images/Frame 876.png";
import Service_2 from "@/assets/images/Services (1).png";
import Service_3 from "@/assets/images/Services (2).png";
import Service_4 from "@/assets/images/Services (3).png";
import Service_5 from "@/assets/images/Services (4).png";
import Service_6 from "@/assets/images/Services (5).png";
import Service_1 from "@/assets/images/Services.png";
import SideImage from "@/assets/images/Side Image.png";
import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="container mx-auto px-4 lg:px-0 py-12">
      <div className="text-gray-500 mb-6 text-lg">
        <NavLink to="/">Home</NavLink>
        <span className="mx-2">/</span>
        <NavLink to="/about">About</NavLink>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Launched in 2019, Exclusive is South Asia's premier online shopping
            marketplace with an unprecedented range of brands and products.
          </p>
          <p className="text-gray-600">
            Exclusive has more than 1 million products, growing at a very fast
            rate, including diverse categories ranging from consumer goods to
            fashion and electronics.
          </p>
        </div>
        <div>
          <img src={SideImage} alt="About Us" className="w-full rounded-lg" />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 items-center">
        <div className="border p-6 rounded-lg text-center flex flex-col items-center hover:bg-secondary hover:text-[#fff]">
          <img src={Service_1} alt="Service image" />
          <h3 className="text-2xl font-bold">10.5k</h3>
          <p className="text-gray-500">Sellers active on our site</p>
        </div>
        <div className="border p-6 rounded-lg text-center flex flex-col items-center  bg-secondary text-[#fff]">
          <img src={Service_2} alt="Service image" />
          <h3 className="text-2xl font-bold">33k</h3>
          <p>Monthly Product Sale</p>
        </div>
        <div className="border p-6 rounded-lg text-center flex flex-col items-center hover:bg-secondary hover:text-[#fff]">
          <img src={Service_3} alt="Service image" />
          <h3 className="text-2xl font-bold">45.5k</h3>
          <p className="text-gray-500">Customer active in our site</p>
        </div>
        <div className="border p-6 rounded-lg text-center flex flex-col items-center hover:bg-secondary hover:text-[#fff]">
          <img src={Service_4} alt="Service image" />
          <h3 className="text-2xl font-bold">25k</h3>
          <p className="text-gray-500">Annual gross sales in our site</p>
        </div>
      </div>

      <div className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <img src={Frame_2} alt="Tom Cruise" className="mx-auto" />
            <h4 className="text-lg font-semibold mt-4">Tom Cruise</h4>
            <p className="text-gray-500">Founder & Chairman</p>
            <div className="flex items-center justify-center gap-6 p-3">
              <FiTwitter />
              <FaInstagram />
              <CiLinkedin />
            </div>
          </div>

          <div className="text-center">
            <img src={Frame_3} alt="Emma Watson" className="mx-auto" />
            <h4 className="text-lg font-semibold mt-4">Emma Watson</h4>
            <p className="text-gray-500">Managing Director</p>
            <div className="flex items-center justify-center gap-6 p-3">
              <FiTwitter />
              <FaInstagram />
              <CiLinkedin />
            </div>
          </div>

          <div className="text-center">
            <img src={Frame_4} alt="Will Smith" className="mx-auto" />
            <h4 className="text-lg font-semibold mt-4">Will Smith</h4>
            <p className="text-gray-500">Product Designer</p>
            <div className="flex items-center justify-center gap-6 p-3">
              <FiTwitter />
              <FaInstagram />
              <CiLinkedin />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center flex flex-col items-center hover:bg-secondary hover:text-[#fff] py-8">
          <img src={Service_4} alt="Service image" />
          <i className="fas fa-truck text-3xl text-red-500"></i>
          <h4 className="text-lg font-semibold mt-2">Free and Fast Delivery</h4>
          <p className="text-gray-500">
            Free delivery for all orders over $100
          </p>
        </div>

        <div className="text-center flex flex-col items-center hover:bg-secondary hover:text-[#fff] py-8">
          <img src={Service_5} alt="Service image" />

          <i className="fas fa-headset text-3xl text-red-500"></i>
          <h4 className="text-lg font-semibold mt-2">24/7 Customer Service</h4>
          <p className="text-gray-500">Friendly 24/7 customer support</p>
        </div>

        <div className="text-center flex flex-col items-center hover:bg-secondary hover:text-[#fff] py-8">
          <img src={Service_6} alt="Service image" />

          <i className="fas fa-money-bill-wave text-3xl text-red-500"></i>
          <h4 className="text-lg font-semibold mt-2">Money Back Guarantee</h4>
          <p className="text-gray-500">We return money within 24 hours</p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(About);
