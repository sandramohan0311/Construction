import GalleryCard from '@/components/GalleryCard';
import DummyImg from '@/assets/image/buildingimg1.png'


import Image1 from '@/assets/image/gal1.png';
import { useLanguage } from '@/contexts/LanguageContext';

interface GalleryItem {
  id: number;
  title: string;
  image: string;
}

// interface GallerySectionProps {
//   ServiceTitle: string;
//   ServicDescription: string;
//   ServiceImage: string;
// }

const GallerySection: React.FC = () => { 
  // Example gallery items (you can replace this with data fetched from an API or passed as props)
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'Gallery Item 1',
      image: Image1,
    },
    // You can add more items here if necessary
  ];

  const { t } = useLanguage();

  return (
    <div className="h-auto w-full flex flex-col items-center gap-4 xl:px-20 px-10 py-10">

      <div className="h-auto w-full">
        <div className="h-auto w-full rounded-3xl bg-white p-4 flex flex-col gap-2">
          <p className="w-full lg:text-3xl text-2xl flex justify-center items-center text-black font-bold">
            {t("S1T")}
          </p>
          <div className="flex h-96 relative rounded-xl overflow-hidden">
            <img
              src={DummyImg}
              alt="Service"
              className="w-full object-cover"
            />
          </div>
          <p className="text-sm text-[#4A4A4A] font-normal">
            {t("S1D")}
          </p>
          
        </div>
      </div>

      <div className="h-auto xl:w-[1300px] w-full flex flex-wrap gap-2">
        {galleryItems.map((item) => (
          <GalleryCard
            key={item.id}
            GalleryImgTitle={item.title}
            GalleryImage={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default GallerySection;
