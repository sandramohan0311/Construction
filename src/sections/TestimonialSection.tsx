import TestimonialComponent from "@/components/TestimonialComponent"
import { useLanguage } from "@/contexts/LanguageContext";

const TestimonialSection = () => {

  const { t } = useLanguage();

  return (
    <div className='h-auto w-full flex flex-col gap-5 pb-10'>
        <p className='lg:text-4xl text-2xl text-black font-medium w-full flex justify-center items-center'>{t("THdg")}</p>
        <p className='lg:text-xl text-md text-black font-medium w-full flex justify-center items-center'>{t("TSubHdg")}</p>
        <div className="h-auto w-full flex lg:flex-row lg:justify-center flex-col items-center gap-5">
            <TestimonialComponent TstlName={t("TName")} TstlPlace={t("TPosition")} TstlDescription={t("Testimonial")} />
            <TestimonialComponent TstlName={t("TName")} TstlPlace={t("TPosition")} TstlDescription={t("Testimonial")} />
            <TestimonialComponent TstlName={t("TName")} TstlPlace={t("TPosition")} TstlDescription={t("Testimonial")} />    
        </div>
        
    </div>
  )
}

export default TestimonialSection
