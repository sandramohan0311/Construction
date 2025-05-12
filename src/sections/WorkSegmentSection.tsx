import WorkComponent from '@/components/WorkComponent'
import { BicepsFlexed, PhoneCall, ShieldCheck } from 'lucide-react'

const WorkSegmentSection = () => {
  return (
    <div className='lg:h-[300px] h-auto w-full flex lg:flex-row lg:justify-center flex-col gap-3 lg:-mt-10 z-10 relative lg:px-0 px-5 mb-10 lg:mb-0'>
        <WorkComponent WorkIcon={<BicepsFlexed size={40}/>} WorkTitle='Expert Worker' WorkDescription='Skills And Experience Through Practice And Education In Particular Field'/>
        <WorkComponent WorkIcon={<ShieldCheck size={40}/>} WorkTitle='Quality Work' WorkDescription='Quality Work Is The Service / Task One Completes Successfully Within The Estimated Time'/>
        <WorkComponent WorkIcon={<PhoneCall size={40}/>} WorkTitle='24/7 Support' WorkDescription='Call To +91 7907 304050 For Enquiries'/>
    </div>
  )
}

export default WorkSegmentSection