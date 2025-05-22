"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FiMessageSquare, FiVideo, FiCheck, FiGlobe } from "react-icons/fi"; // React icons for the buttons
import { BsChatTextFill } from "react-icons/bs";
import VideoInFrame from "./VideoFrame";

const Features = () => {
  const [imgSrc, setImgSrc] = useState("/phone1.png");
  const [activeTab, setActiveTab] = useState("Chat");

  console.log(activeTab)

  const tabs = [
    { name: "Chat", icon: <BsChatTextFill /> },
    { name: "Video", icon: <FiVideo /> },
    { name: "Correction", icon: <FiCheck /> },
    { name: "Translate", icon: <FiGlobe /> },
  ];
  return (
    <div className="text-[#074C77] px-4 sm:px-6 md:px-8 max-w-[1440px] mx-auto py-8 sm:py-12 md:py-16">
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight sm:leading-tight md:leading-[60px]">
        Irma and Jane met on <br className="hidden sm:inline" />
        the <span className="font-bold text-black">app Enlighten</span>...
      </h2>
      
      {/* Mobile tabs - visible only on small screens */}
      <div className="md:hidden mt-6 mb-8">
        <div className="flex justify-between overflow-x-auto py-2 px-2 gap-2">
          {tabs.map((tab) => (
            <div
              key={tab.name}
              className={`flex flex-col justify-between items-center cursor-pointer pb-1 min-w-[70px] ${
                activeTab === tab.name ? "text-[#2cc1d7] border-b-2 border-[#2cc1d7]" : "text-gray-400"
              }`}
              onClick={() => setActiveTab(tab.name)}
            >
              <div
                className={`p-3 rounded-full border-2 text-xl ${
                  activeTab === tab.name
                    ? "border-[#2cc1d7]"
                    : "border-gray-300"
                }`}
              >
                {tab.icon}
              </div>
              <span
                className={`mt-1 text-xs ${
                  activeTab === tab.name
                    ? "text-[#2cc1d7] font-semibold"
                    : "text-gray-500"
                }`}
              >
                {tab.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Main content - flex column on mobile, row on desktop */}
      <div className="flex flex-col md:flex-row items-center mx-auto justify-center my-4 sm:my-6 md:my-10 md:space-x-6 lg:space-x-10">
        {/* Phone/Video display */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          {activeTab === "Chat" && 
            <Image 
              src={imgSrc} 
              width={456} 
              height={700} 
              alt="phone 1" 
              className="max-w-[250px] sm:max-w-[300px] md:max-w-[350px] h-auto" 
              priority
            />
          }
          {activeTab === "Video" && <VideoInFrame video={"/video.mp4"}/>}
          {activeTab === "Correction" && <VideoInFrame video={"/correction.mp4"}/>}
          {activeTab === "Translate" && <VideoInFrame video={"/translate.mp4"}/>}
        </div>
        
        {/* Right side content */}
        <div className="w-full md:w-1/2 h-full px-0 sm:px-4 md:px-6 lg:px-10">
          {/* Desktop tabs - hidden on mobile */}
          <div className="hidden md:flex justify-center py-4">
            {tabs.map((tab) => (
              <div
                key={tab.name}
                className={`flex flex-col justify-between items-center cursor-pointer pb-2 w-full ${
                  activeTab === tab.name ? "text-[#2cc1d7] border-b-4 border-[#2cc1d7]" : "text-gray-400"
                }`}
                onClick={() => setActiveTab(tab.name)}
              >
                <div
                  className={`p-4 lg:p-6 rounded-full border-2 text-2xl lg:text-3xl font-extrabold ${
                    activeTab === tab.name
                      ? "border-[#2cc1d7]"
                      : "border-gray-300"
                  }`}
                >
                  {tab.icon}
                </div>
                <span
                  className={`mt-2 ${
                    activeTab === tab.name
                      ? "text-[#2cc1d7] font-semibold"
                      : "text-gray-500"
                  }`}
                >
                  {tab.name}
                </span>
              </div>
            ))}
          </div>
          
          {/* Description text */}
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-normal sm:leading-relaxed md:leading-[45px] tracking-[0.5px] mt-6 md:mt-12 lg:mt-20 px-0 sm:px-4 md:px-6 lg:px-10 text-center md:text-left">
            ...and use Enlighten's intuitive interface and support features to help you learn a language together! Irma helps Jane with German, Jane helps Irma with English.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
