import React from "react";
import { Mail, Phone, Calendar, MapPin } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#191919] text-white p-6 ">
      <div className="bg-[#222222] p-6 rounded-2xl shadow-lg max-w-sm w-[330px] h-[900px] flex flex-col justify-between items-center border border-gray-700">
        {/* Profile Image */}
        <div className="relative mx-auto w-40 h-50 rounded-3xl overflow-hidden  mb-10 mt-10">
          <img
            src="https://photosly.in/wp-content/uploads/2024/07/boy-dp-pic1.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name and Role */}
        <h2 className="text-2xl font-semibold mt-4 max-w-[150px] text-center">Muhammed Jashir T</h2>
        <p className="bg-[#2e2e2e] text-sm px-4 py-1 rounded-md inline-block mt-2">
         Mern Developer
        </p>

        {/* Divider */}
        <div className="mt-6 border-t border-gray-700 pt-4 space-y-4 text-left">
          {/* Email */}
          <InfoItem icon={<Mail size={18} color="#FFD700" />} label="EMAIL" value="jashirmhd71@gmail.com" />
          
          {/* Phone */}
          <InfoItem icon={<Phone size={18} color="#FFD700" />} label="PHONE" value="+91 7356490668" />
          
          {/* Birthday */}
          <InfoItem icon={<Calendar size={18} color="#FFD700" />} label="BIRTHDAY" value="Sep 29, 2000" />
          
          {/* Location */}
          <InfoItem icon={<MapPin size={18} color="#FFD700" />} label="LOCATION" value="Wayanad, Kerala, India" />
        </div>

        {/* Social Icons */}
        <div className="flex justify-center mt-6 space-x-4">
          <SocialIcon icon="🌐" />
          <SocialIcon icon="🐦" />
          <SocialIcon icon="📷" />
        </div>
      </div>
    </div>
  );
};

// Component for Contact Details
const InfoItem = ({ icon, label, value }) => (
  <div className=" mr-10">
<div className="flex items-center  space-x-3 p-3 rounded-lg">
    <div className="p-4 bg-[#191919] rounded-lg border border-gray-700">{icon}</div>
    <div>
      <p className="text-xs text-gray-400">{label}</p>
      <p className="text-sm">{value}</p>
    </div>
  </div>
  </div>
  
);

// Component for Social Icons
const SocialIcon = ({ icon }) => (
  <span className="p-2 bg-[#2e2e2e] rounded-lg text-lg">{icon}</span>
);

export default Sidebar;
