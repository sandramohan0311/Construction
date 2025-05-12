import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import ChairmanImg from '@/assets/image/said.png';
import Quotes from '@/assets/icon/quotes.svg'
import { useLanguage } from "@/contexts/LanguageContext";

const MessagePopUp = () => {

  const { t } = useLanguage();

  return (
    <Dialog>
    <DialogTrigger className="font-bold">readmore</DialogTrigger>
    <DialogContent className="w-full !max-w-[70vw] max-h-[80vh] overflow-y-auto" >
        <DialogHeader>
        <DialogDescription>
            <div className="h-auto w-full flex lg:flex-row lg:justify-center lg:items-center flex-col-reverse gap-6 mt-5">
                <div className="h-auto w-auto flex flex-col">
                    <img className='h-full w-auto' src={ChairmanImg} alt="" />
                    <p className='text-xl text-black font-bold w-full flex justify-center items-center'>Saeed Ahmed seddiqi</p>
                    <p className='text-md text-[#7B7B7B] font-semibold w-full flex justify-center items-center'>Chairman and director</p>
                </div>
                <div className="w-full">
                    <img className='h-10 mb-3' src={Quotes} alt="" />
                    <p>
                       {t("Msg")}
                    </p>
                </div>
            </div>
        </DialogDescription>
        </DialogHeader>
    </DialogContent>
    </Dialog>
  )

}

export default MessagePopUp