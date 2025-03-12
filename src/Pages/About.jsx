import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Mail, Phone, Calendar, MapPin } from "lucide-react";
import FloatingDockDemo from "../Pages/FloatingDockDemo";
import profileImage from "../Component/pics/Profile1.jpg";
import { useNavigate } from "react-router-dom";
import InfiniteMovingCardsDemo from "./infinite-moving-cards-demo";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#131212] text-white p-4 lg:p-6">
      {/* Sidebar */}
      <div className="bg-[#222222] p-4 lg:p-6 rounded-2xl shadow-lg w-full lg:max-w-sm lg:w-[300px] lg:h-[1000px] flex flex-col justify-between items-center border border-gray-700 mt-4 lg:mt-10 mb-4 lg:mb-10 lg:ml-10">
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

      {/* Main Content */}
      <div className="w-full lg:w-[820px] p-4 lg:p-8 border border-gray-700 rounded-2xl mt-4 lg:mt-10 mb-4 lg:mb-10 lg:ml-10 bg-[#222222]">
        {/* Navigation Tabs */}
        <div className="flex space-x-4 lg:space-x-6 text-sm lg:text-lg float-right border border-gray-800 w-full lg:w-[400px] h-[40px] lg:h-[50px] rounded-2xl bg-[#383636] justify-center items-center font-serif cursor-pointer">
          <button onClick={() => navigate("/")}>About</button>
          <button onClick={() => navigate("/resume")}>Resume</button>
          <button onClick={() => navigate("/portfolio")}>Portfolio</button>
          <button onClick={() => navigate("/blog")}>Blog</button>
          <button onClick={() => navigate("/contact")}>Contact</button>
        </div>

        {/* About Section */}
        <div className="mt-4">
          <h2 className="text-2xl lg:text-3xl font-semibold border-b-5 rounded-xl border-yellow-500 inline-block pb-1">
            About Me
          </h2>
          <p className="mt-4 lg:mt-8 text-gray-400 text-sm font-sans">
            Passionate MERN Stack Developer with a strong foundation in MongoDB,
            Express.js, React.js, and Node.js, dedicated to crafting
            high-performance, scalable, and user-friendly web applications. I
            specialize in front-end development with React, ensuring seamless
            user experiences, optimized performance, and responsive designs.
            With hands-on experience in building full-stack applications, I
            thrive on solving complex challenges and turning innovative ideas
            into functional, dynamic products. Whether it's creating modern
            e-commerce platforms, developing RESTful APIs, or integrating
            advanced UI/UX principles, I bring a detail-oriented and
            solution-driven approach to every project. My expertise includes
            state management (Redux, Context API), component-driven
            architecture, performance optimization, and responsive design using
            Tailwind CSS, Material UI, and Bootstrap. I have experience in
            server-side logic with Node.js and Express.js, implementing
            authentication strategies (JWT, OAuth), database management with
            MongoDB, and working with cloud platforms like Firebase and AWS.
            Beyond coding, I am passionate about staying ahead of industry
            trends, continuously learning new technologies, and collaborating
            with teams to build innovative solutions. I take pride in writing
            clean, maintainable code and following best practices to ensure
            scalability, security, and efficiency.
            <br /> <br />
            My job is to build your website so that it is functional and
            user-friendly but at the same time attractive. Moreover, I add
            personal touch to your product and make sure that is eye-catching
            and easy to use. My aim is to bring across your message and identity
            in the most creative way. I created web design for many famous brand
            companies.
          </p>
        </div>

        {/* Services Section */}
        <div className="mt-6 lg:mt-10">
          <h2 className="text-xl lg:text-2xl font-medium">What I'm Doing</h2>
         
            <InfiniteMovingCardsDemo/>
          
        </div>
      </div>
    </div>
  );
};

// Contact Info Component (Fixed)
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

// Service Card Component
const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-[#292828] p-4 lg:p-6 rounded-lg shadow-2xl flex items-start space-x-4 border border-gray-700">
    <FontAwesomeIcon icon={icon} size="lg" className="text-yellow-500" />
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-400 text-sm mt-1">{description}</p>
    </div>
  </div>
);

export default About;