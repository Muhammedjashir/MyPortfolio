import React from "react";
import { Mail, Phone, Calendar, MapPin } from "lucide-react";
import FloatingDockDemo from "../Pages/FloatingDockDemo";
import profileImage from "../Component/pics/Profile1.jpg";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const projects = [
    { title: "Many Dynamic Websites", category: "Websites", url: "https://example.com/many-dynamic-websites" },
    { title: "E-Commerce Website", category: "Website", url: "https://e-commerce-converse-7bko.vercel.app/" },
    { title: "E-Commerce Static", category: "Website", url: "https://mini-project-khaki-five.vercel.app/" },
    { title: "Furniture Static", category: "Website", url: "https://voicence-task.vercel.app/" },
    { title: "Company Website for Imit", category: "Website", url: "https://imit-delta.vercel.app/" },
  ];
  
  const Navigate = useNavigate();

  return (
    <div className="min-h-screen flex bg-[#131212] text-white p-6 ">
      {/* Sidebar */}
      <div className="bg-[#222222] p-6 rounded-2xl shadow-lg max-w-sm w-[300px] h-[1000px] flex flex-col justify-between items-center border border-gray-700 mt-10 mb-10 sticky top-10 ml-15">
        {/* Profile Image */}
        <div className="relative mx-auto w-40 h-50 rounded-3xl overflow-hidden mt-10">
          <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
        </div>

        {/* Name and Role */}
        <h2 className="text-2xl font-semibold mt-4 max-w-[150px] text-center">Muhammed Jashir T</h2>
        <p className="bg-[#2e2e2e] text-sm px-4 py-1 rounded-md inline-block mt-2">Mern Developer</p>

        {/* Contact Info */}
        <div className="mt-6 border-t border-gray-700 pt-4 space-y-4">
          <InfoItem icon={<Mail size={18} color="#FFD700" />} label="EMAIL" value="jashirmhd71@gmail.com" />
          <InfoItem icon={<Phone size={18} color="#FFD700" />} label="PHONE" value="+91 7356490668" />
          <InfoItem icon={<Calendar size={18} color="#FFD700" />} label="BIRTHDAY" value="Sep 29, 2000" />
          <InfoItem icon={<MapPin size={18} color="#FFD700" />} label="LOCATION" value="Wayanad, Kerala, India" />
        </div>

        {/* Social Icons */}
        <div className="mt-6 w-full">
          <FloatingDockDemo />
        </div>
      </div>

      {/* Main Content */}
      <div className="w-[820px] p-8 border border-gray-700 rounded-2xl ml-10 bg-[#222222] mt-10 mb-10">
        {/* Navigation Tabs */}
        <div className="flex space-x-6 text-lg float-right border border-gray-800 w-[400px] h-[50px] rounded-2xl bg-[#383636] justify-center items-center font-serif cursor-pointer">
          <button onClick={() => Navigate("/")}>About</button>
          <button onClick={() => Navigate("/resume")}>Resume</button>
          <button onClick={() => Navigate("/portfolio")}>Portfolio</button>
          <button onClick={() => Navigate("/blog")}>Blog</button>
          <button onClick={() => Navigate("/contact")}>Contact</button>
        </div>

        {/* Portfolio Section */}
        <div className="mt-4">
          <h2 className="text-3xl font-semibold border-b-4 rounded-xl border-yellow-500 inline-block pb-1">Portfolio</h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex space-x-6 mb-6 text-white mt-6">
          <button className="font-semibold text-yellow-400">All</button>
          <button className="hover:text-yellow-400 transition">Applications</button>
          <button className="hover:text-yellow-400 transition">Websites</button>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} title={project.title} category={project.category} url={project.url} />
          ))}
        </div>
      </div>
    </div>
  );
};

// 📌 Project Card Component (Updated to be Clickable)
const ProjectCard = ({ title, category, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="text-white rounded-lg p-4 shadow-md flex flex-col items-center cursor-pointer hover:scale-105 transition-transform">
      <div className="w-[250px] h-32 bg-gray-200 rounded-xl flex items-center justify-center text-center">
        <div className="text-sm text-black">
          <p className="font-semibold">Click to View</p>
          <p>This site is currently private.</p>
        </div>
      </div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-400">{category}</p>
    </a>
  );
};

// 📌 Contact Info Component (Fixed)
const InfoItem = ({ icon, label, value }) => (
  <div className="flex items-center space-x-3 p-3 rounded-lg mt-2 w-full">
    <div className="p-3 bg-[#191919] rounded-lg text-yellow-500">{icon}</div>
    <div>
      <p className="text-xs text-gray-400">{label}</p>
      <p className="text-sm">{value}</p>
    </div>
  </div>
);

export default Portfolio;
