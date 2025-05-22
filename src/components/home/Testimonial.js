"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";

const profiles = [
  {
    name: "Philip",
    studies: "Spanish",
    knows: "English",
    studiesFlag: "/flag/pl.svg",
    knowsFlag: "/flag/zh.svg",
    image: "/person.jpeg",
  },
  {
    name: "Luis",
    studies: "Italian",
    knows: "Spanish",
    studiesFlag: "/flag/es.webp",
    knowsFlag: "/flag/en-uk.svg",
    image: "/person2.jpeg",
  },
  {
    name: "지원",
    studies: "German",
    knows: "Korean",
    studiesFlag: "/flag/zh.svg",
    knowsFlag: "/flag/pl.svg",
    image: "/person3.jpeg",
  },
  {
    name: "Jane",
    studies: "English",
    knows: "German",
    studiesFlag: "/flag/pl.svg",
    knowsFlag: "/flag/en-uk.svg",
    image: "/person4.jpeg",
  },
  {
    name: "John",
    studies: "Italian",
    knows: "English",
    studiesFlag: "/flag/pl.svg",
    knowsFlag: "/flag/pl.svg",
    image: "/person5.jpeg",
  },
  {
    name: "Sarah",
    studies: "English",
    knows: "Italian",
    studiesFlag: "/flag/pl.svg",
    knowsFlag: "/flag/en-uk",
    image: "/person6.jpeg",
  },
];

const Testimonial = () => {
  return (
    <div className="min-h-screen py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 max-w-[1440px] mx-auto">
      <div className="mx-auto text-center">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 text-blue-900">
          Millions of language partners. Any language combinations.
        </h1>

        <div className="relative overflow-hidden px-2 sm:px-8 md:px-12 lg:px-36">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              480: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {profiles.map((profile, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg shadow-lg p-3 sm:p-4 md:p-5 flex flex-col sm:flex-row items-center justify-between h-full">
                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full mb-3 sm:mb-0"
                  />
                  <div className="text-center sm:text-start w-full sm:w-auto sm:ml-3 md:ml-4">
                    <h2 className="font-semibold text-lg sm:text-xl md:text-2xl sm:text-right">
                      {profile.name}
                    </h2>
                    <div className="mt-1 sm:mt-2 text-xs sm:text-sm flex flex-col sm:flex-row items-center sm:space-x-2">
                      <span className="text-base sm:text-lg md:text-xl font-extralight">
                        Wants to learn
                      </span>{" "}
                      <img src={profile.studiesFlag} className="w-4 h-4 sm:w-5 sm:h-5 mt-1 sm:mt-0" />
                    </div>
                    <div className="mt-1 text-xs sm:text-sm flex flex-col sm:flex-row items-center sm:space-x-2">
                      <span className="text-base sm:text-lg md:text-xl font-extralight">
                        Can teach you
                      </span>{" "}
                      <img src={profile.knowsFlag} className="w-4 h-4 sm:w-5 sm:h-5 mt-1 sm:mt-0" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Swiper navigation buttons */}
          <div className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 text-blue-600 text-xl sm:text-2xl md:text-3xl z-10">
            <FaChevronLeft />
          </div>
          <div className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 text-blue-600 text-xl sm:text-2xl md:text-3xl z-10">
            <FaChevronRight />
          </div>
        </div>

        <Link href="/learning">
          <button className="hover:text-[#077736] hover:bg-transparent text-sm sm:text-base font-normal py-1.5 sm:py-2 border-2 border-[#074C77] px-6 sm:px-8 md:px-10 rounded-full bg-green-500 text-white mt-6 sm:mt-8 md:mt-10">
            Start to learn languages
          </button>
        </Link>
      </div>

      <div
        className="mx-auto w-full text-center bg-cover bg-center min-h-[16rem] sm:min-h-[20rem] md:min-h-[26rem] my-12 sm:my-16 md:my-20 lg:my-28 flex justify-center items-center bg-black"
        style={{
          backgroundImage: `url('/flag/footerbg.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "black",
        }}
      >
        <div className="px-4 sm:px-6 md:px-8">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-200">
            Discover your <br /> community
          </h3>
          <p className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[476px] mx-auto text-sm sm:text-base md:text-lg font-semibold text-gray-200 mt-3 sm:mt-4 md:mt-5">
            Enligten connects you with millions of individuals who are
            experiencing the delights and hurdles of mastering a new language.
            Come join our vibrant community and contribute your thoughts to the
            world!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
