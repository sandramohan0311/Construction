import React from 'react';

interface UploadBtnProps {
  BtnText: string;
  type?: 'button' | 'submit' | 'reset';
}

const UploadBtn: React.FC<UploadBtnProps> = ({ BtnText, type = 'button' }) => {
  return (
    <button
      type={type}
      className="bg-[#000] text-white h-[50px] w-full rounded-md flex justify-center items-center cursor-pointer"
    >
      {BtnText}
    </button>
  );
};

export default UploadBtn;
