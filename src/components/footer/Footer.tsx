import React from "react";
import send_icon from "@/assets/icons/Vector.svg";
import qrCode from "@/assets/images/Qrcode 1.png";
import playm2 from "@/assets/images/playm2.svg";
import appstore from "@/assets/images/download-appstore.svg";

import {
  RiFacebookLine,
  RiTwitterLine,
  RiInstagramLine,
  RiLinkedinLine,
} from "react-icons/ri";

const Footer = () => {
  return (
    <div className="bg-primary text-[#fff] font-poppins-medium pt-20 px-[135px] max-sm:pl-0">
      <div className="container grid grid-cols-5 gap-[87px] max-md:grid-cols-3 max-sm:grid-cols-2">
        <div className="flex gap-6 flex-col">
          <h3 className="text-2xl">Exclusive</h3>
          <p className="text-xl">Subscribe</p>
          <p className="text-base">Get 10% off your first order</p>
          <div className="border-[1.5px] rounded-md max-w-[217px] h-12 flex items-center justify-evenly">
            <p className="text-base text-[#646464] max-[1350px]:text-xs max-[1200px]:text-[10px]">
              Enter your email
            </p>
            <img src={send_icon} alt="" />
          </div>
        </div>
        <div className="flex gap-6 flex-col">
          <h3 className="text-2xl">Support</h3>
          <p className="text-base">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </p>
          <p className="text-base">exclusive@gmail.com</p>
          <p className="text-base">+88015-88888-9999</p>
        </div>
        <div className="flex gap-6 flex-col">
          <h3 className="text-2xl">Account</h3>
          <p className="text-base">My Account</p>
          <p className="text-base">Login / Register</p>
          <p className="text-base">Cart</p>
          <p className="text-base">Wishlist</p>
          <p className="text-base">Shop</p>
        </div>
        <div className="flex gap-6 flex-col">
          <h3 className="text-2xl">Quick Link</h3>
          <p className="text-base">Privacy Policy</p>
          <p className="text-base">Terms Of Use</p>
          <p className="text-base">FAQ</p>
          <p className="text-base">Contact</p>
        </div>
        <div className="flex gap-6 flex-col">
          <h3 className="text-2xl">Download App</h3>
          <div className="flex flex-col gap-2">
            <p className="text-xs text-[#FAFAFA]">
              Save $3 with App New User Only
            </p>
            <div className="flex gap-2">
              <div className="max-h-20 max-w-20">
                <img src={qrCode} alt="" />
              </div>
              <div className="flex flex-col gap-2">
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={playm2} alt="Google Play" />
                </a>
                <a
                  href="https://www.apple.com/app-store/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={appstore} alt="App Store" />
                </a>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-6">
            <a href="https://www.facebook.com/">
              <RiFacebookLine />
            </a>
            <a href="https://x.com/">
              <RiTwitterLine />
            </a>
            <a href="https://www.instagram.com/">
              <RiInstagramLine />
            </a>
            <a href="https://www.linkedin.com/">
              <RiLinkedinLine />
            </a>
          </div>
        </div>
      </div>
      <div className="text-[#3D3D3D] text-base mt-[50px] text-center max-[480px]:text-[10px]">
        <p>Copyright Rimel 2022. All right reserved</p>
      </div>
    </div>
  );
};

export default React.memo(Footer);
