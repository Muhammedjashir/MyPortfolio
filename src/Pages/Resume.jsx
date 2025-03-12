import React from "react";
import { Mail, Phone, Calendar, MapPin } from "lucide-react";
import FloatingDockDemo from "../Pages/FloatingDockDemo";
import profileImage from "../Component/pics/Profile1.jpg";
import {  useNavigate } from "react-router-dom";
import MultiStepLoaderDemo from "./multi-step-loader-demo";
import MultiStepLoaderDemoExp from "./multi-step-loader-demoExp";

const Resume = () => {
    const skills = [
        { name: "Html", level: 70 },
        { name: "CSS", level: 80 },
        { name: "Tailwind CSS", level: 80 },
        { name: "Bootstrap", level: 70 },
        { name: "Figma", level: 70 },
        { name: "JavaScript", level: 80 },
        { name: "React", level: 90 },
        { name: "Redux", level: 70 },
        { name: "Mongo DB", level: 70 },
        { name: "Express JS", level: 70 },
        { name: "Node JS", level: 80 },
      ];
  const Navigate = useNavigate();
  return (
    <div className="min-h-screen flex bg-[#131212] text-white p-6  ">
      {/* Sidebar */}
      <div className="bg-[#222222] p-6  rounded-2xl shadow-lg max-w-sm w-[300px] h-[1000px] flex flex-col justify-between items-center border border-gray-700 mt-10 mb-10 ml-15 sticky top-10  ">
        {/* Profile Image */}
        <div className="relative mx-auto w-40 h-50 rounded-3xl overflow-hidden  mb- mt-10">
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name and Role */}
        <h2 className="text-2xl font-semibold mt-4 max-w-[150px] text-center">
          Muhammed Jashir T
        </h2>
        <p className="bg-[#2e2e2e] text-sm px-4 py-1 rounded-md inline-block mt-2">
          Mern Developer
        </p>

        {/* Divider */}
        <div className="mt-6 border-t border-gray-700 pt-4 space-y-4 ">
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
      <div className="w-[820px] p-8 border border-gray-700 rounded-2xl ml-10 bg-[#222222] mt-10 mb-10 ">
        {/* Navigation Tabs */}
        <div className="flex space-x-6 text-lg float-right border border-gray-800 w-[400px] h-[50px] rounded-2xl bg-[#383636] justify-center items-center font-serif cursor-pointer  ">
          <button onClick={() => Navigate("/")}>About</button>
          <button onClick={() => Navigate("resume")}>Resume</button>
          <button onClick={() => Navigate("/portfolio")}>Portfolio</button>
          <button onClick={() => Navigate('/blog')}>Blog</button>
          <button onClick={() => Navigate('/contact')}>Contact</button>
        </div>

        {/* About Section */}
        <div className="mt-4 ">
          <h2 className="text-3xl font-semibold border-b-5 rounded-xl border-yellow-500 inline-block pb-1 ">
            Resume
          </h2>
          <p className="mt-8 text-gray-400">
           <span className="text-white text-xl ">My Education 📚</span>  <br/>
           I began my educational journey at the National
            Council of Educational Research and Training, where I completed my
            Kerala Higher Secondary (HSE) from 2016 to 2018. After that, I
            pursued my Bachelor of Mass Communication and Journalism at the
            University of Calicut, graduating in 2021. Currently, I am expanding
            my expertise in the field of technology, specializing in Software
            Development in the MERN Stack at Bridgeon Solution LLP for the 2024
            - 2025 period. This phase marks my transition into a more technical
            and development-focused career, equipping me with the skills to
            build scalable and modern web applications.
          </p>
          <MultiStepLoaderDemo />
          <span className="text-white text-xl "> My Experience 💼 </span>  <br/>
          <p className="text-gray-400">
           I am currently working as a MERN Full Stack
            Developer at Imit Park Ltd (2025 - Present), where I specialize in
            building scalable and dynamic web applications using MongoDB,
            Express.js, React.js, and Node.js. My role involves developing
            user-friendly interfaces, optimizing application performance, and
            implementing backend solutions to create seamless digital
            experiences. Previously, I worked at Bridgeon Solution LLP (2024 -
            2025) as a MERN Full Stack Developer, where I honed my skills in
            full-stack development, RESTful API integration, authentication
            strategies (JWT, OAuth), and responsive UI design. This experience
            allowed me to deepen my expertise in front-end and back-end
            technologies, contributing to high-performance web applications.
            With a passion for modern web development and a strong foundation in
            the MERN stack, I continuously strive to create efficient, scalable,
            and impactful digital solutions.
          </p>
          <MultiStepLoaderDemoExp />
        </div>

        {/* Services Section */}
        <div className="mt-10 ">
          <h2 className="text-2xl font-medium ">My Skills</h2>
          <div className="bg-[#2b2929] p-6 rounded-lg shadow-2xl w-full  mx-auto mt-5 border border-gray-700">
      {skills.map((skill, index) => (
        <div key={index} className="mb-4">
          <div className="space-x-2 text-white text-sm font-medium">
            <span>{skill.name}</span>
            <span className="text-gray-300">{skill.level}%</span>
          </div>
          <div className="w-full bg-[#424242] h-2 rounded-full mt-1">
            <div
              className="bg-yellow-400 h-2 rounded-full"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
        </div>
      </div>
    </div>
  );
};

// Contact Info Component (Fixed)
const InfoItem = ({ icon, label, value }) => (
  <div className="flex items-center space-x-3 p-3 rounded-lg mt-2 w-full mr-10">
    <div className="p-3 bg-[#191919] rounded-lg text-yellow-500">
      {icon} {/* Directly render Lucide icon here */}
    </div>
    <div>
      <p className="text-xs text-gray-400">{label}</p>
      <p className="text-sm">{value}</p>
    </div>
  </div>
);



export default Resume
