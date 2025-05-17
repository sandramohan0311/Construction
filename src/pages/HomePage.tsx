import CtaBtn from "@/components/CtaBtn";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";
import HomeSection from "@/sections/HomeSection";
import MessageSection from "@/sections/MessageSection";
import ServiceSection from "@/sections/ServiceSection";
// import TestimonialSection from "@/sections/TestimonialSection";
import WorkHighlightSection from "@/sections/WorkHighlightSection";
import WorkSegmentSection from "@/sections/WorkSegmentSection";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  const { language } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return (
    <div dir={language === "ar" ? "rtl" : "ltr"} className="h-auto w-full bg-[#F4F5F9] relative">
      <Header />
      <HomeSection />
      <WorkSegmentSection />
      <WorkHighlightSection />
      <ServiceSection />
      <MessageSection />
      {/* <TestimonialSection/> */}
      <Footer />
      <CtaBtn/>

    </div>
  );
};


export default HomePage;
