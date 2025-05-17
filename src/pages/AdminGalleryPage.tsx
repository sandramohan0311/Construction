import React, { useState } from 'react';
import GalleryForm from '@/components/admin/GalleryForm';
import PrimaryButton from '@/components/admin/PrimaryButton';
import GalleryTableCompo from '@/components/admin/GalleryTableCompo';

const GalleryPage: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);

  return (
    <div className="w-full min-h-screen md:px-20 md:pt-20 px-5 pt-5 relative"> 
      <h1 className="text-[24px] font-semibold">Gallery</h1>
      
      <div className="w-full flex justify-end">
        <PrimaryButton ButtonText="Add Image" onClick={() => setIsFormOpen(true)} />
      </div>

      <div className="w-full bg-white mt-5">
        <GalleryTableCompo />
      </div>

      {/* Popup Sidebar */}
      {isFormOpen && <GalleryForm onClose={() => setIsFormOpen(false)} />}
    </div>
  );
};

export default GalleryPage;
