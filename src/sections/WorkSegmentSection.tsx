import WorkComponent from '@/components/WorkComponent'
import { useLanguage } from '@/contexts/LanguageContext';
import { BicepsFlexed, PhoneCall, ShieldCheck } from 'lucide-react'

const WorkSegmentSection = () => {

  const { t } = useLanguage();

  return (
    <div className='lg:h-[300px] h-auto w-full flex lg:flex-row lg:justify-center flex-col gap-3 lg:-mt-10 z-10 relative lg:px-0 px-5 mb-10 lg:mb-0'>
        <WorkComponent WorkIcon={<BicepsFlexed size={40}/>} WorkTitle={t("SegT1")} WorkDescription={t("SegD1")}/>
        <WorkComponent WorkIcon={<ShieldCheck size={40}/>} WorkTitle={t("SegT2")} WorkDescription={t("SegD2")}/>
        <WorkComponent WorkIcon={<PhoneCall size={40}/>} WorkTitle={t("SegT2")} WorkDescription={t("SegD3")}/>
    </div>
  )
}

export default WorkSegmentSection