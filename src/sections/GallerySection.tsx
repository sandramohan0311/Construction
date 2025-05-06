import GalleryCard from '@/components/GalleryCard';
import H1Title from '@/components/H1Title';
import React from 'react';
import Image1 from '@/assets/image/gal1.png'
// import { useQuery, useQueryClient } from '@tanstack/react-query';
// import { fetchGallery } from '@/api/publicApi';
// import RefetchComponent from '@/components/RefetchComponent';

interface GalleryItem {
  id: number;
  title: string;
  image: string;
}

const GallerySection: React.FC = () => {

  return (
    <div className="h-auto w-full flex flex-col items-center gap-4 xl:px-20 px-10 py-10">
      <H1Title Titles="Gallery" />
      <div className="h-auto xl:w-[1300px] w-full flex flex-wrap gap-2">
            <GalleryCard GalleryImgTitle='title' GalleryImage={Image1}/>
      </div>
    </div>
  );
};

export default GallerySection;
