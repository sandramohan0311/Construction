import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils.js";
import Logo from '@/assets/icon/con_logo.png';
import { FiMenu, FiX } from "react-icons/fi";
import HeaderComponent from "./HeaderComponent";
import { CalendarClock, MailCheck, PhoneCall } from "lucide-react";
import LanguageSelector from "./LanguageSelector";


const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 1024);
  const location = useLocation();

  const scrollThreshold = 50;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!isMobile) {
        setIsScrolled(window.scrollY > scrollThreshold);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = (
    <>
      {[
        { path: "/", label: "Home" },
        { path: "#about", label: "About" },
        { path: "/gallery", label: "Gallery" },
        { path: "#", label: "Service" },
        { path: "#", label: "Project" },
        { path: "#", label: "Contact" },
      ].map(({ path, label }) => (
        <Link
          key={path}
          to={path}
          className={`transition-all duration-300 transform ${
            location.pathname === path
              ? "text-black-500 underline"
              : "hover:scale-110"
          }`}
          onClick={() => setMenuOpen(false)}
        >
          {label}
        </Link>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-200 bg-[#F4F5F9]">
      {isMobile ? (
        <div className="flex items-center justify-between px-6 py-4 ">
          <Link to="/">
            <img className="h-12 w-auto" src={Logo} alt="Logo" />
          </Link>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      ) : (
        <div
          className={`flex flex-col transition-all duration-200 ${
            isScrolled ? "transform-gpu" : ""
          }`}
        >
          <div
            className={`flex items-center transition-all duration-200 justify-evenly ${
              isScrolled ? "justify-between px-6 py-4" : "justify-center py-4"
            }`}
          >
            <Link to="/">
              <img
                className={`transition-all duration-200  ${
                  isScrolled ? "h-10" : "h-12"
                } w-auto`}
                src={Logo}
                alt="Logo"
              />
            </Link>
            <div className="h-auto w-auto flex">
                <HeaderComponent HeaderIcon={<CalendarClock />} HeaderTitle="Opening Hour" HeaderDescription="9:00 AM - 5:00 PM" />
                <HeaderComponent HeaderIcon={<PhoneCall />} HeaderTitle="Call Us" HeaderDescription="+91 7907 30 40 50" />
                <HeaderComponent HeaderIcon={<MailCheck />} HeaderTitle="Email Us" HeaderDescription="eracreatiodevelopers@gmail.com" />
            </div>
            
            <LanguageSelector/>

            {isScrolled && (
              <nav className="flex gap-6 text-lg transition-all duration-200 items-center mr-4">
                {navLinks}
              </nav>
            )}
          </div>

          {/* Show nav links when not scrolled */}
          <div
            className={cn(
              "flex justify-center pb-4 transition-all duration-500 ease-in-out",
              {
                "opacity-0 h-0 pb-0 overflow-hidden": isScrolled,
                "opacity-100 h-auto ": !isScrolled,
              }
            )}
          >
            <nav className="flex gap-6 text-lg">{navLinks}</nav>
          </div>
        </div>
      )}

      {/* Mobile Dropdown Menu */}
      {isMobile && (
        <div
          className={`flex flex-col items-center gap-4 px-6 pb-4 transition-[max-height,opacity] duration-400 ease-in-out overflow-hiddens ${
            menuOpen ? "h-[calc(100vh-70px)] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="h-auto w-auto flex flex-col items-center gap-4 px-6 pb-4">{navLinks}</div>

            <div className="h-auto w-auto flex flex-col gap-2">
                <HeaderComponent HeaderIcon={<CalendarClock />} HeaderTitle="Opening Hour" HeaderDescription="9:00 AM - 5:00 PM" />
                <HeaderComponent HeaderIcon={<PhoneCall />} HeaderTitle="Call Us" HeaderDescription="+91 7907 30 40 50" />
                <HeaderComponent HeaderIcon={<MailCheck />} HeaderTitle="Email Us" HeaderDescription="eracreatiodevelopers@gmail.com" />
            </div>
            <div className="h-auto w-full flex justify-center"><LanguageSelector/></div>
        </div>
      )}
    </header>
  );
};

export default Header;
