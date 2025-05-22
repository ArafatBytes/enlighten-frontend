"use client"
import React, { useState } from 'react';

const languages = [
  { icon: "/en.png", name: "English" },
  { icon: "/spain.png", name: "Spanish" },
  { icon: "/french.png", name: "French" },
  { icon: "/german.png", name: "German" },
  { icon: "/italian.png", name: "Italian" },
  { icon: "/portugal.png", name: "Portuguese" },
  { icon: "/russian.png", name: "Russian" },
  { icon: "/japan.png", name: "Japanese" },
  { icon: "/chinese.png", name: "Chinese" },
  { icon: "/korean.png", name: "Korean" },
  { icon: "/others.png", name: "Other" },
];

const LanguageGrid = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  return (
    <div className="text-center mt-5 px-4 sm:px-6 md:px-8 max-w-[1440px] mx-auto">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#074C77] my-3 sm:my-5">I want to learn...</h2>
      <div className="flex justify-center flex-wrap gap-2 sm:gap-3 md:gap-4">
        {languages.map((lang, index) => (
          <div
            key={index}
            onClick={() => setSelectedLanguage(lang.name)}
            className={`cursor-pointer p-1 sm:p-2 border-2 rounded-md hover:border-blue-500 transition duration-300 ${
              selectedLanguage === lang.name ? 'border-blue-500' : 'border-transparent'
            }`}
          >
            <img 
              src={lang.icon} 
              alt={lang.name} 
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" 
            />
            <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base">{lang.name}</p>
          </div>
        ))}
      </div>
      {selectedLanguage && (
        <div className="mt-3 sm:mt-4">
          <p className="text-base sm:text-lg md:text-xl">You selected: <span className="font-bold">{selectedLanguage}</span></p>
        </div>
      )}
    </div>
  );
};

export default LanguageGrid;
