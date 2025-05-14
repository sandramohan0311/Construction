import Com_image1 from '@/assets/image/hero1.png';
import { Button } from "@/components/ui/button"
import { useLanguage } from '@/contexts/LanguageContext';


const WelcomeSection = () => {

   const { t } = useLanguage();

  return (
    <div className='lg:h-[400px] h-auto w-full flex lg:flex-row lg:justify-center flex-col  '>
        <div className="h-full lg:w-[500px] w-full px-5 lg:px-0 bg-[#E0DFE4] flex items-end">
            <img className='h-full w-full object-cover' src={Com_image1} alt="" />
        </div>
        <div className="h-full lg:w-[500px] w-full px-3 py-10 flex flex-col gap-3">
            <p className='text-32 font-medium'>{t("WelS1")} </p>
            <p className='lg:text-3xl text-xl font-bold'>{t("WelS2")}</p>
            <p className='text-24 font-normal text-[#626262]'>{t("WelS3")}</p>
            <Button variant="outline" className='bg-black text-white w-44'>{t("WelS4")}</Button>
        </div>
      
    </div>
  )
}

export default WelcomeSection
