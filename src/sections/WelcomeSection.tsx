import Com_image1 from '@/assets/image/hero1.png';
import { Button } from "@/components/ui/button"


const WelcomeSection = () => {
  return (
    <div className='lg:h-[400px] h-auto w-full flex lg:flex-row lg:justify-center flex-col  '>
        <div className="h-full lg:w-[500px] w-full px-5 lg:px-0 bg-[#E0DFE4] flex items-end">
            <img className='h-full w-full object-cover' src={Com_image1} alt="" />
        </div>
        <div className="h-full lg:w-[500px] w-full px-3 py-10 flex flex-col gap-3">
            <p className='text-32 font-medium'>Welcome to Saeed seddiqi construction </p>
            <p className='lg:text-3xl text-xl font-bold'>Saeed seddiqi construction Co. LLC| Low Cost | Stunning Design | Enduring Trust</p>
            <p className='text-24 font-normal text-[#626262]'>Established in the year 2018, Era Creatio Developers in Kuttikattor, Is A One Of The Top Player In The Category Builders & Developers In Kerala.</p>
            <Button variant="outline" className='bg-black text-white w-44'>Learn More</Button>
        </div>
      
    </div>
  )
}

export default WelcomeSection
