import { useLanguage } from '@/contexts/LanguageContext';
import Com_image1 from '@/assets/image/hero1.png';


const HeroComponent = () => {
    const { t } = useLanguage();

  return (
    <div
        className="lg:w-full lg:h-full relative bg-no-repeat bg-cover bg-center h-[400px]  w-full "
        style={{ backgroundImage: `url(${Com_image1})` }}
        >
        <div className="absolute z-10 top-36 left-30 text-sm text-[#b9b9b9]">
            {t("1")}
        </div>
        <div className="absolute z-10 top-44 left-30 h-auto lg:w-[500px] lg:text-5xl text-2xl font-bold text-white">
            {t("2")}
        </div>
        <div className="absolute z-10 top-72 left-30 h-[40px] w-[160px] bg-white rounded-[20px] flex justify-center items-center">
            {t("3")}
        </div>
    </div>
  )
}

export default HeroComponent
