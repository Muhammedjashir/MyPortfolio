import React, { useState } from "react";
import { Mail, Phone, Calendar, MapPin, Send } from "lucide-react";
import FloatingDockDemo from "../Pages/FloatingDockDemo";
import profileImage from "../Component/pics/Profile1.jpg";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const Navigate = useNavigate();

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Full name is required.";
    if (!formData.email.trim()) tempErrors.email = "Email address is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Invalid email format.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_p4jsv3r", // Replace with your actual service ID
        "template_rup62mm", // Replace with your actual template ID
        templateParams,
        "dLHC9bfTyMyukMUKm" // Replace with your actual user ID
      )
      .then(
        (res) => {
          console.log("Email sent successfully:", res);
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Failed to send email:", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#131212] text-white p-4 lg:p-6">
      {/* Sidebar */}
      <div className="bg-[#222222] p-4 lg:p-6 rounded-2xl shadow-lg w-full lg:max-w-sm lg:w-[300px] lg:min-h-screen flex flex-col justify-between items-center border border-gray-700 mt-4 lg:mt-10 mb-4 lg:mb-10 lg:ml-10 lg:sticky lg:top-10">
        <div className="relative mx-auto w-32 h-32 lg:w-40 lg:h-50 rounded-3xl overflow-hidden mt-4 lg:mt-10">
          <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
        </div>

        <h2 className="text-xl lg:text-2xl font-semibold mt-4 max-w-[150px] text-center">
          Muhammed Jashir T
        </h2>
        <p className="bg-[#2e2e2e] text-sm px-4 py-1 rounded-md inline-block mt-2">
          MERN Developer
        </p>

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
          <h2 className="text-2xl lg:text-3xl font-semibold border-b-4 rounded-xl border-yellow-500 inline-block pb-1">
            Contact
          </h2>
        </div>

        {/* Contact Form and Google Map */}
        <div className="text-white flex flex-col items-center py-6 lg:py-10 px-4 lg:px-6">
          <div className="w-full max-w-4xl bg-[#222222] p-4 lg:p-6 rounded-2xl shadow-lg border border-gray-700">
            {/* Google Map */}
            <div className="w-full h-48 lg:h-64 rounded-lg overflow-hidden mb-4 lg:mb-6">
              <iframe
                title="Google Map"
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.0014947254123!2d76.02951947489127!3d11.801408888598134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5ff8f030ec337%3A0xf3f44e68c5b65b3!2sMANHAJ%20KUNDALA!5e0!3m2!1sen!2sin!4v1709746745239!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>

            {/* Contact Form */}
            <h2 className="text-lg font-semibold mb-4">Contact Form</h2>
            <form onSubmit={sendEmail} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3 rounded-lg bg-[#2e2e2e] border border-gray-700 text-white outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-3 rounded-lg bg-[#2e2e2e] border border-gray-700 text-white outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>
              <textarea
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-3 rounded-lg bg-[#2e2e2e] border border-gray-700 text-white outline-none focus:ring-2 focus:ring-yellow-500"
              ></textarea>
              <button
                type="submit"
                className="border border-gray-700 w-full md:w-auto flex items-center justify-center bg-[#363434] text-yellow-300 hover:bg-[#2c2a2a] font-semibold py-3 px-6 rounded-lg transition-all duration-300"
              >
                <Send size={18} className="mr-2" />
                Send Message
              </button>
            </form>
          </div>
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

export default Contact;