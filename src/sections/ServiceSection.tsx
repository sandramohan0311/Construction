import ServiceComponent from "@/components/ServiceComponent"
import DummyImg from '@/assets/image/buildingimg1.png'
import { useLanguage } from "@/contexts/LanguageContext";


const ServiceSection = () => {
  const { t } = useLanguage();
  return (
    <div className='h-auto w-full px-10  bg-[#E0DFE4] pb-10'>
        <p className='lg:text-xl text-sm text-black font-medium w-full flex justify-center items-center'>Our Services</p>
        <p className='lg:text-4xl text-2xl text-black font-medium w-full flex justify-center items-center'>We Provide Services</p>
        <div className="h-auto w-full flex flex-col gap-5 mt-5 ">
          <div className="h-auto w-full flex lg:flex-row flex-col gap-5 ">
            <div className="h-auto lg:w-2/3 w-full">
              <ServiceComponent 
                ServiceTitle={t("S1T")}
                ServicDescription={t("S1D")}
                ServiceImage={DummyImg}/>
            </div>
            <div className="h-auto lg:w-1/3 w-full">
              <ServiceComponent 
                ServiceTitle={t("S2T")}
                ServicDescription={t("S2D")}
                ServiceImage={DummyImg}/>
            </div> 
          </div>
          <div className="h-auto w-full flex lg:flex-row flex-col gap-5 ">
            <div className="h-auto lg:w-1/3 w-full">
              <ServiceComponent 
                ServiceTitle={t("S3T")}
                ServicDescription={t("S3D")}
                ServiceImage={DummyImg}/>
            </div>
            <div className="h-auto lg:w-2/3 w-full">
              <ServiceComponent 
                ServiceTitle={t("S4T")}
                ServicDescription={t("S4D")}
                ServiceImage={DummyImg}/>
            </div> 
          </div>
          <div className="h-auto w-full flex lg:flex-row flex-col gap-5 ">
            <div className="h-auto lg:w-2/3 w-full">
              <ServiceComponent 
                ServiceTitle={t("S5T")}
                ServicDescription={t("S5D")}
                ServiceImage={DummyImg}/>
            </div>
            <div className="h-auto lg:w-1/3 w-full">
              <ServiceComponent 
                ServiceTitle={t("S6T")}
                ServicDescription={t("S6D")}
                ServiceImage={DummyImg}/>
            </div> 
          </div>
          <div className="h-auto w-full flex lg:flex-row flex-col gap-5 ">
            <div className="h-auto lg:w-1/3 w-full">
              <ServiceComponent 
                ServiceTitle={t("S7T")}
                ServicDescription={t("S7D")}
                ServiceImage={DummyImg}/>
            </div>
            <div className="h-auto lg:w-2/3 w-full">
              <ServiceComponent 
                ServiceTitle={t("S8T")}
                ServicDescription={t("S8D")}
                ServiceImage={DummyImg}/>
            </div> 
          </div><div className="h-auto w-full flex lg:flex-row flex-col gap-5 ">
            <div className="h-auto lg:w-2/3 w-full">
              <ServiceComponent 
                ServiceTitle={t("S9T")}
                ServicDescription={t("S9D")}
                ServiceImage={DummyImg}/>
            </div>
            <div className="h-auto lg:w-1/3 w-full">
              <ServiceComponent 
                ServiceTitle={t("S10T")}
                ServicDescription={t("S10D")}
                ServiceImage={DummyImg}/>
            </div> 
          </div>
        </div>
    </div>
  )
}

export default ServiceSection
