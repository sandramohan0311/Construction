import React, { useState } from 'react';
import { Maximize } from 'lucide-react';
// import { BASE_FILE_URL } from '@/utils/contants';

interface GalleryCardProps {
  GalleryImgTitle: string;
  GalleryImage?: string; // Optional if not used
}

const GalleryCard: React.FC<GalleryCardProps> = ({ GalleryImage, GalleryImgTitle }) => {
//   const url = BASE_FILE_URL + folder + encodeURIComponent(mediaUrl);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleCardClick = () => {
    setShowModal(true);
    
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div
        className="relative h-[260px] w-[309px] rounded-2xl overflow-hidden group cursor-pointer"
        onClick={handleCardClick}
      >
        <img className="h-[260px] w-full" src={GalleryImage} alt="Gallery" />
        <div className="absolute top-0 h-full w-full bg-transparent hover:bg-[#00000060] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-between items-end p-3">
          <p className="text-[16px] text-white font-normal">{GalleryImgTitle}</p>
          <Maximize color="white" />
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={handleClose}>
          <div className="relative">
            <img className="max-h-[90vh] max-w-[90vw] rounded-md" src={GalleryImage} alt="Enlarged" />
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryCard;
