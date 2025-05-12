import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import 'swiper/css/navigation';


import { Pagination, Autoplay } from "swiper/modules";

import { Navigation } from 'swiper/modules';
import { useLanguage } from '@/contexts/LanguageContext';
import HeroComponent from "@/components/HeroComponent";


const HomeSection = () => {
    const { t } = useLanguage();
  return (
    <div className="relative h-[calc(100vh-10rem)] w-full">
        <Swiper
            style={{"--swiper-navigation-color":"#fff", "--swiper-navigation-size":"20px"}}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay, Navigation]}
            autoplay={{ delay: 5000, disableOnInteraction: false }} // Auto-swipes every 5 seconds
            className="mySwiper h-full "
            navigation={true}
        >
            <SwiperSlide>
                <HeroComponent/>
            </SwiperSlide>
            <SwiperSlide>
                <HeroComponent/>
            </SwiperSlide>
        </Swiper>
      
    </div>
  )
}

export default HomeSection
