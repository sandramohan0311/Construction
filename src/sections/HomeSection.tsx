import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import { Pagination, Autoplay } from "swiper/modules";
import { Navigation } from "swiper/modules";
import HeroComponent from "@/components/HeroComponent";

const HomeSection = () => {
  return (
    <div className="relative h-[calc(100vh-10rem)] w-full">
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#fff",
            "--swiper-navigation-size": "20px",
          } as React.CSSProperties
        }
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay, Navigation]}
        autoplay={{ delay: 5000, disableOnInteraction: false }} // Auto-swipes every 5 seconds
        className="mySwiper h-full"
        navigation={true}
      >
        <SwiperSlide>
          <HeroComponent />
        </SwiperSlide>
        <SwiperSlide>
          <HeroComponent />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSection;
