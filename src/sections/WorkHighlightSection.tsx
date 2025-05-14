import { useLanguage } from '@/contexts/LanguageContext';
import WelcomeSection from './WelcomeSection'
import ProjectDetails from '@/components/ProjectDetails'

const WorkHighlightSection = () => {

  const { t } = useLanguage();

  return (
    <div className='lg:h-screen h-auto w-full flex flex-col justify-center items-center'>
        <WelcomeSection/>
        <div className="h-auto w-full flex lg:flex-row lg:justify-evenly flex-col items-center lg:mt-20">
            <ProjectDetails ProjectNumber={t("ProDtl1N")} ProjectTitle={t("ProDtl1D")}/>
            <ProjectDetails ProjectNumber={t("ProDtl2N")} ProjectTitle={t("ProDtl1D")}/>
            <ProjectDetails ProjectNumber={t("ProDtl3N")} ProjectTitle={t("ProDtl1D")}/>
            <ProjectDetails ProjectNumber={t("ProDtl4N")} ProjectTitle={t("ProDtl1D")}/>
        </div>
      
    </div>
  )
}

export default WorkHighlightSection
