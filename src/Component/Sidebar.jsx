import React from "react";
import { Mail, Phone, Calendar, MapPin } from "lucide-react";
import profileImage from "../Component/pics/Profile1.jpg";
import FloatingDockDemo from "../Pages/FloatingDockDemo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




const Sidebar = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#131212] text-white p-6 h- ">
      <div className="bg-[#222222] p-4 lg:p-6 rounded-2xl shadow-lg w-full lg:max-w-sm lg:w-[300px] lg:h-[1000px] flex flex-col justify-between items-center border border-gray-700 mt-4 lg:mt-10 mb-4 lg:mb-10 lg:ml-10 ">
              {/* Profile Image */}
              <div className="relative mx-auto w-32 h-32 lg:w-40 lg:h-50 rounded-3xl overflow-hidden mb-4 lg:mb-0 lg:mt-10">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
      
              {/* Name and Role */}
              <h2 className="text-xl lg:text-2xl font-semibold mt-4 max-w-[150px] text-center">
                Muhammed Jashir T
              </h2>
              <p className="bg-[#2e2e2e] text-sm px-4 py-1 rounded-md inline-block mt-2">
                Mern Developer
              </p>
      
              {/* Divider */}
              <div className="mt-6 border-t border-gray-700 pt-4 space-y-4 w-full">
                <InfoItem
                  icon={<Mail size={18} color="#FFD700" />}
                  label="EMAIL"
                  value="jashirmhd71@gmail.com"
                />
                <InfoItem
                  icon={<Phone size={18} color="#FFD700" />}
                  label="PHONE"
                  value="+91 7356490668"
                />
                <InfoItem
                  icon={<Calendar size={18} color="#FFD700" />}
                  label="BIRTHDAY"
                  value="Sep 29, 2000"
                />
                <InfoItem
                  icon={<MapPin size={18} color="#FFD700" />}
                  label="LOCATION"
                  value="Wayanad, Kerala, India"
                />
              </div>
      
              {/* Social Icons */}
              <div className="mt-6 w-full">
                <FloatingDockDemo />
              </div>
            </div>
    </div>
  );
};

// Component for Contact Details
const InfoItem = ({ icon, label, value }) => (
  <div className="flex items-center space-x-3 p-3 rounded-lg mt-2 w-full">
    <div className="p-3 bg-[#191919] rounded-lg text-yellow-500">
      {icon} {/* Directly render Lucide icon here */}
    </div>
    <div>
      <p className="text-xs text-gray-400">{label}</p>
      <p className="text-sm">{value}</p>
    </div>
  </div>
);

// Component for Social Icons
const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-[#292828] p-4 lg:p-6 rounded-lg shadow-2xl flex items-start space-x-4 border border-gray-700">
    <FontAwesomeIcon icon={icon} size="lg" className="text-yellow-500" />
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-400 text-sm mt-1">{description}</p>
    </div>
  </div>
);

export default Sidebar;
