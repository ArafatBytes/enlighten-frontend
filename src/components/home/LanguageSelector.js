"use client";
import React, { useState, useRef, useEffect } from "react";

const languages = [
  { icon: "/eng.svg", show: "English", value: "en" },
  { icon: "/italy.svg", show: "Italian", value: "it" },
  { icon: "/spain.svg", show: "Spanish", value: "es" },
  { icon: "/france.svg", show: "French", value: "fr" },
  { icon: "/germany.svg", show: "German", value: "de" },
  { icon: "/china.svg", show: "Chinese", value: "zh" },
  { icon: "/japan.svg", show: "Japanese", value: "ja" },
  { icon: "/portugal.svg", show: "Portuguese", value: "pt" },
  { icon: "/russia.svg", show: "Russian", value: "ru" },
  { icon: "/bangladesh.svg", show: "Bengali", value: "bn" },
  { icon: "/india.svg", show: "Hindi", value: "in" },
];

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[2]); // Default set to Spanish
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle dropdown when the button is clicked
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  // Function to handle language change
  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    setIsOpen(false);
    console.log(`Language changed to: ${lang.show} (${lang.value})`); // Logs to console
  };

  return (
    <div className="relative w-full sm:w-auto" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between w-full sm:w-36 md:w-48 px-3 sm:px-4 py-2 border border-gray-300 rounded-full shadow-sm bg-white text-sm sm:text-base"
      >
        <img 
          src={selectedLanguage.icon} 
          alt="" 
          className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" 
        />
        <span className="flex-grow text-left">{selectedLanguage.show}</span>
        <svg
          className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 flex-shrink-0"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 sm:mt-2 bg-white border border-gray-300 rounded-md shadow-lg w-full sm:w-48 max-h-60 overflow-y-auto">
          {languages.map((lang) => (
            <button
              key={lang.value}
              onClick={() => handleLanguageChange(lang)}
              className="flex items-center w-full px-3 sm:px-4 py-2 hover:bg-gray-100 text-sm sm:text-base"
            >
              <img 
                src={lang.icon} 
                alt={lang.show} 
                className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" 
              />
              <span className="text-left">{lang.show}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
