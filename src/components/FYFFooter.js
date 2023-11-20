import React from "react";
import { ImGithub } from "react-icons/im";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsPersonFill, BsPaypal } from "react-icons/bs";
import { logoLight, paymentLogo } from "../assets";
import  logo  from "../assets/img/logo-white.png";

const FYFFooter = () => {
  return (
    <div className="bg-black  py-20 font-titleFont ">
      <div className="max-w-screen-xl flex items-center justify-center">
        <div className="flex flex-col gap-7 ">
          <img className="w-52" src={logo} alt="logoLight" />
          <img className="w-56" src={paymentLogo} alt="paymentLogo" />
          <div className="flex gap-5 text-lg text-gray-400">
            <ImGithub className="hover:text-white duration-300 cursor-pointer" />
            <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
            <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
       
       
        
      </div>
    </div>
  );
};

export default FYFFooter;
