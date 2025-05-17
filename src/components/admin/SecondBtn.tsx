import React from 'react';

interface SecondBtnProps {
  BtnText: string;
  onClick: () => void;
}

const SecondBtn: React.FC<SecondBtnProps> = ({ BtnText, onClick }) => {
  return (
    <button
      type="button"
      className="bg-[#E6E7E9] h-[50px] w-full rounded-md flex justify-center items-center cursor-pointer"
      onClick={onClick}
    >
      {BtnText}
    </button>
  );
};

export default SecondBtn;
