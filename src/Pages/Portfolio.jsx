import React, { useState } from "react";
import { Mail, Phone, Calendar, MapPin } from "lucide-react";
import FloatingDockDemo from "../Pages/FloatingDockDemo";
import profileImage from "../Component/pics/Profile1.jpg";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const projects = [
    { 
      title: "Many Dynamic Websites", 
      category: "Websites", 
      url: "https://example.com/many-dynamic-websites",
      image: "https://via.placeholder.com/300" 
    },
    { 
      title: "E-Commerce Website", 
      category: "Websites", 
      url: "https://e-commerce-converse-7bko.vercel.app/",
      image: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/7912df109175455.5fce39ed33ce4.png"
    },
    { 
      title: "E-Commerce Static", 
      category: "Websites", 
      url: "https://mini-project-khaki-five.vercel.app/",
      image: "https://thefwa.com/dyn/resources/Case_Model_Case/slide1/0/300/1457955164/538_span12/Converse_FWA01-NTSP.jpg"
    },
    { 
      title: "Furniture Static", 
      category: "Websites", 
      url: "https://voicence-task-qdnn.vercel.app/",
      image: "https://images01.nicepagecdn.com/page/10/72/website-template-preview-107234.jpg"
    },
    { 
      title: "Company Website for Imit", 
      category: "Websites", 
      url: "https://imit-delta.vercel.app/",
      image: "https://weblium.com/blog/wp-content/uploads/2019/01/image12-1000x542.png"
    }
  ];

  const Navigate = useNavigate();

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#131212] text-white p-4 lg:p-6">
      {/* Sidebar */}
      <div className="bg-[#222222] p-4 lg:p-6 rounded-2xl shadow-lg w-full lg:max-w-sm lg:w-[300px] lg:min-h-screen flex flex-col justify-between items-center border border-gray-700 mt-4 lg:mt-10 mb-4 lg:mb-10 lg:ml-10 lg:sticky lg:top-10">
        <div className="relative mx-auto w-32 h-32 lg:w-40 lg:h-50 rounded-3xl overflow-hidden mt-4 lg:mt-10">
          <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
        </div>

        <h2 className="text-xl lg:text-2xl font-semibold mt-4 max-w-[150px] text-center">Muhammed Jashir T</h2>
        <p className="bg-[#2e2e2e] text-sm px-4 py-1 rounded-md inline-block mt-2">MERN Developer</p>

        <div className="mt-6 border-t border-gray-700 pt-4 space-y-4 w-full">
          <InfoItem icon={<Mail size={18} color="#FFD700" />} label="EMAIL" value="jashirmhd71@gmail.com" />
          <InfoItem icon={<Phone size={18} color="#FFD700" />} label="PHONE" value="+91 7356490668" />
          <InfoItem icon={<Calendar size={18} color="#FFD700" />} label="BIRTHDAY" value="Sep 29, 2000" />
          <InfoItem icon={<MapPin size={18} color="#FFD700" />} label="LOCATION" value="Wayanad, Kerala, India" />
        </div>

        <div className="mt-6 w-full">
          <FloatingDockDemo />
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full lg:w-[820px] p-4 lg:p-8 border border-gray-700 rounded-2xl mt-4 lg:mt-10 mb-4 lg:mb-10 lg:ml-10 bg-[#222222]">
        <div className="flex space-x-4 lg:space-x-6 text-sm lg:text-lg float-right border border-gray-800 w-full lg:w-[400px] h-[40px] lg:h-[50px] rounded-2xl bg-[#383636] justify-center items-center font-serif cursor-pointer">
          <button onClick={() => Navigate("/")}>About</button>
          <button onClick={() => Navigate("/resume")}>Resume</button>
          <button onClick={() => Navigate("/portfolio")}>Portfolio</button>
          <button onClick={() => Navigate("/blog")}>Blog</button>
          <button onClick={() => Navigate("/contact")}>Contact</button>
        </div>

        <div className="mt-4">
          <h2 className="text-2xl lg:text-3xl font-semibold border-b-4 rounded-xl border-yellow-500 inline-block pb-1">Portfolio</h2>
        </div>

        <div className="flex space-x-4 lg:space-x-6 mb-6 text-white mt-6">
          <button className={`font-semibold ${selectedCategory === "All" ? "text-yellow-400" : ""}`} onClick={() => setSelectedCategory("All")}>All</button>
          <button className={`hover:text-yellow-400 transition ${selectedCategory === "Applications" ? "text-yellow-400" : ""}`} onClick={() => setSelectedCategory("Applications")}>Applications</button>
          <button className={`hover:text-yellow-400 transition ${selectedCategory === "Websites" ? "text-yellow-400" : ""}`} onClick={() => setSelectedCategory("Websites")}>Websites</button>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

const InfoItem = ({ icon, label, value }) => (
  <div className="flex items-center space-x-3 p-3 rounded-lg mt-2 w-full">
    <div className="p-3 bg-[#191919] rounded-lg text-yellow-500">{icon}</div>
    <div>
      <p className="text-xs text-gray-400">{label}</p>
      <p className="text-sm">{value}</p>
    </div>
  </div>
);

const ProjectCard = ({ title, category, url, image }) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="relative text-white rounded-lg p-4 shadow-md flex flex-col items-center cursor-pointer group hover:scale-105 transition-transform">
    <div className="w-full h-32 bg-gray-300 rounded-xl flex items-center justify-center text-center absolute inset-0 transition-opacity group-hover:opacity-0">
      <div className="text-sm text-black">
        <p className="font-semibold">Hover to View</p>
        <p>This site is private.</p>
      </div>
    </div>
    <div className="w-full h-32 rounded-xl bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity absolute inset-0" style={{ backgroundImage: `url(${image})` }}></div>
    <h3 className="mt-36 text-lg font-semibold">{title}</h3>
    <p className="text-sm text-gray-400">{category}</p>
  </a>
);

export default Portfolio;