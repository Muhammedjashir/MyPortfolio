import React from "react";
import { FloatingDock } from "../Component/ui/FloatingDock";
import { 
    IconBrandX, 
    IconBrandInstagram,
    IconBrandLinkedin ,
    IconBrandThreads,
    IconBrandGithub 
  } from "@tabler/icons-react";
  
export default function FloatingDockDemo() {
  const links = [
    {
      title: "Instagram",
      icon: <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://www.instagram.com/jashir_mhd/",
    },
    
    
    {
      title: "Linkedin",
      icon: <IconBrandLinkedin  className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://www.linkedin.com/in/muhammed-jashir-628565229/",
    },
    {
      title: "Threads",
      icon: <IconBrandThreads className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://www.threads.com",
    },
    {
      title: "Github",
      icon: <IconBrandGithub  className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://github.com/Muhammedjashir",
    },
  ];

  return (
    <div className="flex items-center justify-center  w-full ">
      <FloatingDock mobileClassName="translate-y-20" items={links} />
    </div>
  );
}
