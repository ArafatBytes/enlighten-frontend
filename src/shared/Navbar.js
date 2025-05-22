"use client";
import UserMenu from "@/components/ui/UserMenu";
import { useLanguage } from "@/context/LanguageContext";
import { fetchLoggedInUser } from "@/features/user/userSlice";
import { fetchProfile } from "@/features/user/profileSlice";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import getToken from "./getToken";
import { resetProfile } from "@/features/user/profileSlice";
import { logout } from "@/features/user/userSlice";
import { useRouter } from "next/navigation";

const privet = ["/login", "/sign-up", "/forgot-password", "/reset-password"];

const Navbar = () => {
  const { t } = useLanguage();
  const pathName = usePathname();
  const dispatch = useDispatch();
  const { currentUser, loading } = useSelector((state) => state.user);
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const token = getToken();
    if (token) {
      const fetchData = async () => {
        try {
          const userResult = await dispatch(fetchLoggedInUser()).unwrap();
          console.log("User data fetched:", userResult);
          const profileResult = await dispatch(fetchProfile()).unwrap();
          console.log("Profile data fetched:", profileResult);
        } catch (err) {
          console.error("Error fetching user data:", err);
          // Remove the token if it's invalid, expired, or user is deleted
          Cookies.remove("token");
          // Clear Redux state
          dispatch(resetProfile());
          dispatch(logout());
          // Redirect to login if not already there
          if (!privet.some((privetPath) => pathName.includes(privetPath))) {
            router.replace("/login");
          }
        }
      };
      fetchData();
    }
  }, [dispatch, pathName]); // Add pathName as a dependency

  const navList = [
    { name: t("nav.findPartner"), url: "community" },
    { name: t("nav.chat"), url: "chat" },
    { name: t("nav.blog"), url: "blog" },
    { name: "Learn", url: "learning" },
  ];

  const [isSticky, setIsSticky] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 8);
      setIsScrolled(window.scrollY > 8);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when path changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathName]);

  const isPrivatePath = privet.some((privetPath) =>
    pathName.includes(privetPath)
  );

  const textColorClass =
    pathName === "/blog" && !isScrolled ? "text-white" : "text-[#074C77]";

  if (loading) {
    return <div>Loading...</div>; // Show a loading spinner or skeleton
  }

  return (
    <div
      className={`w-full z-50 transition-colors duration-300 ${
        pathName === "/blog" ? "fixed my-0" : "sticky"
      } ${isSticky ? "bg-white shadow-md" : "bg-transparent"} ${
        pathName === "/dashboard" && "hidden"
      }`}
      style={{ top: pathName === "/blog" ? "-16px" : "0px" }}
    >
      <div className="max-w-[1440px] mx-auto flex justify-between items-center px-4 sm:px-5 py-2">
        {/* Logo */}
        <Link href={"/"}>
          <div className="flex items-center space-x-1 z-20">
            <Image
              src="https://res.cloudinary.com/dh20zdtys/image/upload/v1723709261/49f87c8af2a00c070b11e2b15349fa1c_uakips.png"
              width={50}
              height={50}
              alt="Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-[50px] md:h-[50px]"
            />
            <h2 className={`${textColorClass} font-bold text-lg sm:text-xl`}>
              Enlighten
            </h2>
          </div>
        </Link>

        {/* Desktop Navigation */}
        {!isPrivatePath && (
          <div className="hidden md:flex space-x-6 lg:space-x-16">
            {navList.map((item) => (
              <Link
                href={`/${item.url}`}
                key={item.name}
                className="group hover:font-bold"
              >
                <p className={`${textColorClass} text-base font-medium`}>
                  {item.name}
                </p>
                <p className="w-[100%] rounded-full h-[2px] bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></p>
              </Link>
            ))}
          </div>
        )}

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-20 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-[#074C77] mb-1.5 transition-all ${mobileMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-[#074C77] mb-1.5 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-[#074C77] transition-all ${mobileMenuOpen ? 'transform -rotate-45' : ''}`}></div>
        </button>

        {/* Auth Buttons or User Menu (Desktop) */}
        {!loading && (
          <div className="hidden md:block">
            {!currentUser ? (
              <div className="flex space-x-3 lg:space-x-7">
                {pathName !== "/login" && (
                  <Link href={"/login"}>
                    <button
                      className={`${
                        pathName === "/blog"
                          ? `${
                              !isSticky
                                ? "text-white border-white"
                                : "text-[#074C77] border-[#074C77]"
                            }`
                          : "text-[#074C77] border-[#074C77]"
                      } ${
                        !isSticky ? "text-[#074C77] border-[#074C77]" : ""
                      } text-sm lg:text-base font-normal border-2 py-1.5 sm:py-2 px-5 sm:px-8 lg:px-10 rounded-full hover:bg-[#074C77] hover:text-white`}
                    >
                      {t("loginButton")}
                    </button>
                  </Link>
                )}
                {pathName !== "/sign-up" && (
                  <Link href={"/sign-up"}>
                    <button className="hover:text-[#074C77] hover:bg-transparent text-sm lg:text-base font-normal border-2 border-[#074C77] py-1.5 sm:py-2 px-5 sm:px-8 lg:px-10 rounded-full bg-[#074C77] text-white">
                      {t("signupButton")}
                    </button>
                  </Link>
                )}
              </div>
            ) : (
              <UserMenu />
            )}
          </div>
        )}

        {/* Mobile Menu (Slide-in) */}
        <div 
          ref={menuRef}
          className={`fixed top-0 right-0 h-screen w-[70%] sm:w-[60%] bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-10 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex flex-col h-full pt-20 px-6">
            {/* Mobile Navigation Links */}
            {!isPrivatePath && (
              <div className="flex flex-col space-y-6 border-b border-gray-200 pb-6">
                {navList.map((item) => (
                  <Link
                    href={`/${item.url}`}
                    key={item.name}
                    className="text-[#074C77] text-lg font-medium hover:font-bold"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}

            {/* Mobile Auth Buttons */}
            {!loading && (
              <div className="mt-6">
                {!currentUser ? (
                  <div className="flex flex-col space-y-4">
                    {pathName !== "/login" && (
                      <Link href={"/login"} className="w-full">
                        <button className="w-full text-[#074C77] border-2 border-[#074C77] py-2 px-4 rounded-full hover:bg-[#074C77] hover:text-white">
                          {t("loginButton")}
                        </button>
                      </Link>
                    )}
                    {pathName !== "/sign-up" && (
                      <Link href={"/sign-up"} className="w-full">
                        <button className="w-full bg-[#074C77] text-white border-2 border-[#074C77] py-2 px-4 rounded-full hover:bg-transparent hover:text-[#074C77]">
                          {t("signupButton")}
                        </button>
                      </Link>
                    )}
                  </div>
                ) : (
                  <div className="mt-4 border-t border-gray-200 pt-4">
                    <p className="text-gray-600 mb-4">Logged in as:</p>
                    <div className="md:hidden">
                      <UserMenu isMobile={true} />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Overlay when mobile menu is open */}
        {mobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-0"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
