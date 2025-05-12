import HomeSection from "@/sections/HomeSection";
import MessageSection from "@/sections/MessageSection";
import ServiceSection from "@/sections/ServiceSection";
import TestimonialSection from "@/sections/TestimonialSection";
import WorkHighlightSection from "@/sections/WorkHighlightSection";
import WorkSegmentSection from "@/sections/WorkSegmentSection";

const HomePage = () => {
  return <div className="h-auto w-full bg-[#F4F5F9]">
    <HomeSection/>
    <WorkSegmentSection/>
    <WorkHighlightSection/>
    <ServiceSection/>
    <MessageSection/>
    <TestimonialSection/>
    </div>;
};

export default HomePage;
