"use client";
import Image from "next/image";
import React from "react";
import LanguageSelector from "./LanguageSelector";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const Banner = () => {
  const { t } = useLanguage();
  return (
    <div
      className="min-h-[300px] sm:min-h-[400px] md:min-h-[469px] max-w-[1440px] mx-auto flex items-center bg-cover bg-center px-4 sm:px-6 md:px-8"
      style={{ backgroundImage: `url('/bannerbg.png')` }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center w-full mx-auto py-8 md:py-0">
        {/* Banner image - hidden on small screens, visible from medium screens */}
        <div className="hidden md:block md:w-1/2 lg:w-5/12">
          <Image
            src={"/banner.png"}
            width={400}
            height={300}
            alt="banner image"
            className="w-full max-w-[350px] lg:max-w-[400px] h-auto"
            priority
          />
        </div>

        {/* Banner content */}
        <div className="w-full md:w-1/2 lg:w-7/12 text-center md:text-left">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] leading-tight md:leading-[55px] text-[#074C77] font-medium">
            Practice Languages with <br className="hidden sm:inline" /> Native Speakers
          </h3>
          <p className="text-base sm:text-lg md:text-xl font-bold text-[#407023] leading-normal md:leading-[41px] my-3 md:my-4">
            Join us in our mission to save nature! We&apos;re dedicating 10% of
            our income to green initiatives
          </p>
          
          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-5 mt-6 items-center sm:items-start">
            <LanguageSelector />
            <Link href={"/learning"} className="w-full sm:w-auto">
              <button className="w-full sm:w-auto hover:text-[#074C77] hover:bg-transparent text-sm sm:text-base font-normal py-2 border-2 border-[#074C77] px-6 sm:px-10 rounded-full bg-[#074C77] text-white transition-colors">
                Start to learn languages
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
