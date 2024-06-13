import React from "react";
import { useState } from "react";
import { MdOutlineWhereToVote } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaShop } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaGooglePlusG } from "react-icons/fa";


const icons = {
    MdOutlineWhereToVote:MdOutlineWhereToVote,
    RiCustomerService2Fill:RiCustomerService2Fill,
    FaShop:FaShop,
    FaFacebook:FaFacebook,
    FaInstagram:FaInstagram,
    FaTwitter:FaTwitter,
    CiLinkedin:CiLinkedin,
    FaGooglePlusG:FaGooglePlusG,
}

const IconName = ({icon}) => {
    const Icon = icons[icon];
        if (!Icon) {
            return null; 
          }
        
        return <Icon />;
};

export default IconName