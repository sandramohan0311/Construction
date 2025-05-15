import ChairmanImg from '@/assets/image/said.png';
import Quotes from '@/assets/icon/quotes.svg'
import MessagePopUp from '@/components/MessagePopUp';
import { useLanguage } from '@/contexts/LanguageContext';

const MessageSection = () => {
    const { t } = useLanguage();
  return (
    <div className='h-auto w-full flex flex-col '>
        <div className="h-auto w-full  p-10">
            <p className='text-xl text-black font-medium w-full flex justify-center items-center'>{t("MsdHdg")}</p>
            <p className='lg:text-4xl text-2xl text-black font-medium w-full flex justify-center items-center'>{t("MsdSubHdg")}</p>
            <div className="h-auto w-full flex lg:flex-row lg:justify-center lg:items-center flex-col-reverse gap-6 mt-5">
                <div className="h-auto flex flex-col">
                    <img className='lg:h-96 ' src={ChairmanImg} alt="" />
                    <p className='text-xl text-black font-bold w-full flex justify-center items-center'>{t("Name")}</p>
                    <p className='text-md text-[#7B7B7B] font-semibold w-full flex justify-center items-center'>{t("Position")}</p>
                </div>
                <div className="lg:w-1/3 w-full ">
                    <img className='h-10 mb-3' src={Quotes} alt="" />
                    <p>
                         {t("Msg").split(" ").slice(0, 100).join(" ")} <MessagePopUp />
                    </p>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default MessageSection
