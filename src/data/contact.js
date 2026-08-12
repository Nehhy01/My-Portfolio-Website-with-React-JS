import {EnvelopeIcon, HomeIcon } from "@heroicons/react/16/solid";
import { PhoneCall } from "lucide-react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitterX, BsWhatsapp } from "react-icons/bs";

export const contactInfo = [
  {
    id: 1,
    icon: EnvelopeIcon,
    category: "Email",
    address: "olanehemiah20@gmail.com",
  },
  {
    id: 2,
    icon: PhoneCall,
    category: "Phone",
    address: "+234 708 446 6606",
  },
  {
    id: 3,
    icon: HomeIcon,
    category: "Location",
    address: "Lagos, Nigeria",
  },
];

export const socials = [
  {
    alt: "linkedIn",
    url: "https://www.linkedin.com/in/nehemiah-ola",
    style: "",
    iconStyle: "hover:text-blue-500 w-6 h-6 cursor-pointer",
    src: BsLinkedin,
  },
  {
    alt: "facebook",
    url: "https://www.linkedin.com/in/nehemiah-ola",
    style: "",
    iconStyle: "hover:text-white w-6 h-6  cursor-pointer",
    src: BsTwitterX,
  },
  {
    alt: "whatsapp",
    url: "https://www.linkedin.com/in/nehemiah-ola",
    style: "border-green-600 border bg-green-900",
    iconStyle: "hover:text-green-600 w-6 h-6 cursor-pointer",
    src: BsWhatsapp,
  },
];