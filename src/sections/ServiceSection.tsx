import ServiceComponent from "@/components/ServiceComponent"
import { useLanguage } from "@/contexts/LanguageContext";
import DummyImg from '@/assets/image/con1.jpg'
import BuildingImg from '@/assets/image/con_2.jpg'
import AdsImg from '@/assets/image/con_bill.png'
import SteelImg from '@/assets/image/con_steel.png'
import RoadImg from '@/assets/image/con6.jpg'
import TrafficImg from '@/assets/image/Traffic.png'
import ElectronicsImg from '@/assets/image/con7.jpg'
import MaintainImg from '@/assets/image/con9.jpg'
import ElectricalImg from '@/assets/image/con_8.jpg'
import PoolImg from '@/assets/image/Pool.png'
import { Link } from "react-router-dom";



const ServiceSection = () => {
  const { t } = useLanguage(); 
  return (
    <div id="service" className='h-auto w-full px-10  bg-[#E0DFE4] pb-10'>
        <p className='lg:text-xl text-sm text-black font-medium w-full flex justify-center items-center'>{t("SHdg")}</p>
        <p className='lg:text-4xl text-2xl text-black font-medium w-full flex justify-center items-center'>{t("SSubHdg")}</p>
        <div className="h-auto w-full flex flex-col gap-5 mt-5 ">
          <div className="h-auto w-full flex lg:flex-row flex-col gap-5 ">
            <div className="h-auto lg:w-2/3 w-full">
              <Link to="/services/decoration">
                <ServiceComponent 
                  ServiceTitle={t("S1T")}
                  ServicDescription={t("S1D")}
                  ServiceImage={DummyImg}
                />
              </Link>
            </div>
            <div className="h-auto lg:w-1/3 w-full">
              <Link to="/services/building">
                <ServiceComponent 
                  ServiceTitle={t("S2T")}
                  ServicDescription={t("S2D")}
                  ServiceImage={BuildingImg}/>
              </Link>
            </div> 
          </div>
          <div className="h-auto w-full flex lg:flex-row flex-col gap-5 ">
            <div className="h-auto lg:w-1/3 w-full">
              <Link to="/services/billboards">
                <ServiceComponent 
                  ServiceTitle={t("S3T")}
                  ServicDescription={t("S3D")}
                  ServiceImage={AdsImg}/>
              </Link>
            </div>
            <div className="h-auto lg:w-2/3 w-full">
              <Link to="/services/steel">
                <ServiceComponent 
                  ServiceTitle={t("S4T")}
                  ServicDescription={t("S4D")}
                  ServiceImage={SteelImg}/>
              </Link>
            </div> 
          </div>
          <div className="h-auto w-full flex lg:flex-row flex-col gap-5 ">
            <div className="h-auto lg:w-2/3 w-full">
              <Link to="/services/road">
                <ServiceComponent 
                  ServiceTitle={t("S5T")}
                  ServicDescription={t("S5D")}
                  ServiceImage={RoadImg}/>
              </Link>
            </div>
            <div className="h-auto lg:w-1/3 w-full">
              <Link to="/services/traffic">
                <ServiceComponent 
                  ServiceTitle={t("S6T")}
                  ServicDescription={t("S6D")}
                  ServiceImage={TrafficImg}/>
              </Link>
            </div> 
          </div>
          <div className="h-auto w-full flex lg:flex-row flex-col gap-5 ">
            <div className="h-auto lg:w-1/3 w-full">
              <Link to="/services/electromechanical">
                <ServiceComponent 
                  ServiceTitle={t("S7T")}
                  ServicDescription={t("S7D")}
                  ServiceImage={ElectronicsImg}/>
              </Link>
            </div>
            <div className="h-auto lg:w-2/3 w-full">
              <Link to="/services/electrical">
                <ServiceComponent 
                  ServiceTitle={t("S8T")}
                  ServicDescription={t("S8D")}
                  ServiceImage={ElectricalImg}/>
              </Link>
            </div> 
          </div><div className="h-auto w-full flex lg:flex-row flex-col gap-5 ">
            <div className="h-auto lg:w-2/3 w-full">
              <Link to="/services/maintenance">
                <ServiceComponent 
                  ServiceTitle={t("S9T")}
                  ServicDescription={t("S9D")}
                  ServiceImage={MaintainImg}/>
              </Link>
            </div>
            <div className="h-auto lg:w-1/3 w-full">
              <Link to="/services/swimmingpools">
                <ServiceComponent 
                  ServiceTitle={t("S10T")}
                  ServicDescription={t("S10D")}
                  ServiceImage={PoolImg}/>
              </Link>
            </div> 
          </div>
        </div>
    </div>
  )
}

export default ServiceSection
