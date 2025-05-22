import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaTiktok,
  FaYoutube,
  FaVk,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#373a39] text-gray-50 py-6 sm:py-8 md:py-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 text-xs sm:text-sm">
            {/* Useful Information */}
            <div>
              <h3 className="text-white text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-4">
                Useful Information
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a href="#" className="hover:underline">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Language Certificates
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Become an Ambassador
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Language Exchange
                  </a>
                </li>
              </ul>
            </div>

            {/* Local Tandems */}
            <div>
              <h3 className="text-white text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-4">
                Local Enlighten
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a href="#" className="hover:underline">
                    Berkeley
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Brisbane
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Chicago
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Edinburgh
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Houston
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Melbourne
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    New York
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    San Diego
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Seattle
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Toronto
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2 sm:mb-4">&nbsp;</h3>{" "}
              {/* Placeholder for alignment */}
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a href="#" className="hover:underline">
                    Birmingham
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Cambridge
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Dublin
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Glasgow
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    London
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Montreal
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Nottingham
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    San Francisco
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Sydney
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Vancouver
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-white text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-4">Legal</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a href="#" className="hover:underline">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Legal Information
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Privacy
                  </a>
                </li>
              </ul>
              <div className="mt-3 sm:mt-4">
                <h3 className="text-white text-sm sm:text-base font-semibold">Gazipur Office</h3>
                <p className="text-xs sm:text-sm">
                  North Str. 310
                  <br />
                  Gazipur
                  <br />
                  Bangladesh
                </p>
              </div>
              <div className="mt-3 sm:mt-4">
                <h3 className="text-white text-sm sm:text-base font-semibold">Dhanmondi Office</h3>
                <p className="text-xs sm:text-sm">
                  24/25, Green Rd
                  <br />
                  Dhanmondi
                  <br />
                  Bangladesh
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-white text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-4">
                Social Media
              </h3>
              <div className="flex space-x-3 sm:space-x-4 text-lg sm:text-xl md:text-2xl">
                <a href="https://instagram.com" target="_blank" className="text-gray-400 hover:text-white">
                  <FaInstagram />
                </a>
                <a href="https://facebook.com" target="_blank" className="text-gray-400 hover:text-white">
                  <FaFacebookF />
                </a>
                <a href="https://twitter.com" target="_blank" className="text-gray-400 hover:text-white">
                  <FaTwitter />
                </a>
                <a href="https://tiktok.com" target="_blank" className="text-gray-400 hover:text-white">
                  <FaTiktok />
                </a>
                <a href="https://youtube.com" target="_blank" className="text-gray-400 hover:text-white">
                  <FaYoutube />
                </a>
              </div>
              <div className="mt-4 sm:mt-6 flex space-x-2 sm:space-x-3">
                <img
                  src="/google.webp"
                  alt="Google Play"
                  className="h-6 sm:h-8"
                />
                <img
                  src="/apple.webp"
                  alt="App Store"
                  className="h-6 sm:h-8"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="text-center text-xs sm:text-sm text-gray-500 bg-black py-3 sm:py-4 px-4">
        <p>© 2025 Enlighten - Speak Any Language.</p>
        <p className="text-[10px] sm:text-xs mt-1">Enlighten - Mobile Language Exchange is licensed by Enlighten Foundation</p>
      </div>
    </>
  );
};

export default Footer;
