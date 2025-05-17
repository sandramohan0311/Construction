import React from 'react';
import { Plus } from 'lucide-react';

interface PrimaryButtonProps {
  ButtonText: string;
  onClick: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ ButtonText, onClick }) => {
  return (
    <div
      className="h-12 w-[190px] px-6 bg-black text-white flex items-center justify-center rounded-full cursor-pointer"
      onClick={onClick}
    >
      <Plus />
      <span className="ml-2">{ButtonText}</span>
    </div>
  );
};

export default PrimaryButton;
