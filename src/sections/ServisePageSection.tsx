import { useQuery } from "@tanstack/react-query";
import { fetchGalleryByType } from "@/api/PublicApi"; 
import GalleryCard from '@/components/GalleryCard';
import { BASE_FILE_URL } from "@/utils/constant";
import { useLanguage } from '@/contexts/LanguageContext';
import { TranslationKeys } from '@/constant/Service';

interface GalleryItem {
  id: number;
  title: string;
  image: string;
}

interface ServicePageSectionProps {
  titleKey: TranslationKeys;
  descriptionKey: TranslationKeys;
  image: string;
  galleryType: string;
}

const ServicePageSection: React.FC<ServicePageSectionProps> = ({
  titleKey,
  descriptionKey,
  image,
  galleryType,
}) => {
  const { t } = useLanguage();

  const {
    data: galleryItems,
    isLoading,
    isError,
    error,
  } = useQuery<GalleryItem[], Error>({
    queryKey: ["fetch_gallery_By_type", galleryType],
    queryFn: () => fetchGalleryByType(galleryType),
  });

  const folder = "gallery/";
  const url = BASE_FILE_URL + folder;

  return (
    <div className="h-auto w-full flex flex-col items-center gap-4 xl:px-20 px-10 py-10">
      <div className="h-auto w-full">
        <div className="h-auto w-full rounded-3xl bg-white p-4 flex flex-col gap-2">
          <p className="w-full lg:text-3xl text-2xl flex justify-center items-center text-black font-bold">
            {t(titleKey)}
          </p>
          <div className="flex h-96 relative rounded-xl overflow-hidden">
            <img src={image} alt="Service" className="w-full object-cover" />
          </div>
          <p className="text-sm text-[#4A4A4A] font-normal">
           {t(descriptionKey)}
          </p>
        </div>
      </div>

      {isLoading && <p>Loading gallery...</p>}
      {isError && <p>Error: {error?.message}</p>}
      <p className="text-black font-bold text-lg ">Gallery</p>
      <div className="h-auto xl:w-[1300px] w-full flex flex-wrap gap-2">
        
        {galleryItems?.map((item) => (
          <GalleryCard
            key={item.id}
            GalleryImgTitle={item.title}
            GalleryImage={url + item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicePageSection;
