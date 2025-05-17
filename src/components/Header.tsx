import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
// import { cn } from "@/lib/utils.js";

import { FiMenu, FiX } from "react-icons/fi";
import HeaderComponent from "./HeaderComponent";
import { CalendarClock, MailCheck, PhoneCall } from "lucide-react";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

import EngLogo from "@/assets/image/eng_logo.png";
import AraLogo from "@/assets/image/ara_logo.png";

const Header: React.FC = () => {
  const { t, language } = useLanguage();

  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 1024);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Only scroll to top for full page navigation (not hash links)
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  // Handle smooth scrolling to sections
  const handleNavigation = (path: string) => {
    setMenuOpen(false);
    
    // Check if the path is a hash link
    if (path.startsWith('#')) {
      // Get the element to scroll to
      const element = document.getElementById(path.substring(1));
      if (element) {
        // Scroll to the element with smooth behavior
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Regular navigation
      // The Link component will handle this
    }
  };

  const navLinks = (
    <>
      {[
        { path: "/", label: t("H1") },
        { path: "#about", label: t("H2") },
        { path: "#service", label: t("H3") },
        { path: "#message", label: t("H4") },
      ].map(({ path, label }) => (
        <Link
          key={path}
          to={path}
          className={`transition-all duration-300 transform ${
            location.pathname === path && !path.startsWith('#')
              ? "text-black-500 underline"
              : "hover:scale-110"
          }`}
          onClick={(e) => {
            if (path.startsWith('#')) {
              e.preventDefault();
              handleNavigation(path);
            }
          }}
        >
          {label}
        </Link>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-50 lg:h-40 h-20 w-full bg-[#F4F5F9]">
      {isMobile ? (
        <div className="flex items-center justify-between px-6 py-4">
          <Link to="/">
             <img
              className="h-12 w-auto"
              src={language === 'ar' ? AraLogo : EngLogo}
              alt="Logo"
            />
          </Link>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      ) : (
        <div className="flex flex-col">
          {/* Top Row with Logo and Contact Info */}
          <div className="flex items-center justify-center py-4">
            <Link to="/">
               <img
                className="h-12 w-auto"
                src={language === 'ar' ? AraLogo : EngLogo}
                alt="Logo"
              />
            </Link>
            <div className="h-auto w-auto flex ml-10">
              <HeaderComponent
                HeaderIcon={<CalendarClock />}
                HeaderTitle={t("HT1")}
                HeaderDescription={t("HD1")}
              />
              <HeaderComponent
                HeaderIcon={<PhoneCall />}
                HeaderTitle={t("HT2")}
                HeaderDescription={t("HD2")}
              />
              <HeaderComponent
                HeaderIcon={<MailCheck />}
                HeaderTitle={t("HT3")}
                HeaderDescription="eracreatiodevelopers@gmail.com"
              />
            </div>
            <div className="ml-6">
              <LanguageSelector />
            </div>
          </div>

          {/* Navigation Row Always Visible */}
          <div className="flex justify-center pb-4">
            <nav className="flex gap-6 text-lg">{navLinks}</nav>
          </div>
        </div>
      )}

      {/* Mobile Dropdown Menu */}
      {isMobile && (
        <div
          className={`flex flex-col items-center gap-4 px-6 pb-4 transition-[max-height,opacity] duration-400 ease-in-out overflow-hidden bg-[#F4F5F9] ${
            menuOpen ? "h-[calc(100vh-70px)] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="h-auto w-auto flex flex-col items-center gap-4 px-6 pb-4">
            {navLinks}
          </div>

          <div className="h-auto w-auto flex flex-col gap-2">
            <HeaderComponent
              HeaderIcon={<CalendarClock />}
              HeaderTitle={t("HT1")}
              HeaderDescription={t("HD1")}
            />
            <HeaderComponent
              HeaderIcon={<PhoneCall />}
              HeaderTitle={t("HT2")}
              HeaderDescription={t("HD2")}
            />
            <HeaderComponent
              HeaderIcon={<MailCheck />}
              HeaderTitle={t("HT3")}
              HeaderDescription="eracreatiodevelopers@gmail.com"
            />
          </div>
          <div className="h-auto w-full flex justify-center">
            <LanguageSelector />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;