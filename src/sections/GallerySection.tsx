import GalleryCard from '@/components/GalleryCard';
import H1Title from '@/components/H1Title';

import Image1 from '@/assets/image/gal1.png';

interface GalleryItem {
  id: number;
  title: string;
  image: string;
}

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

  return (
    <div className="h-auto w-full flex flex-col items-center gap-4 xl:px-20 px-10 py-10">
      <H1Title Titles="Gallery" />
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
