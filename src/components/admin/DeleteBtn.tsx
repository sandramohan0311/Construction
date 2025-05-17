import { Trash2 } from "lucide-react";
import React from "react";

interface DeleteBtnProps {
  onClick?: () => void;
  className?: string;
}

export const DeleteBtn: React.FC<DeleteBtnProps> = ({ onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`flex select-none items-center gap-1 rounded-lg bg-bg-muted px-1 text-xs hover:bg-gray-200 active:bg-gray-300 w-fit cursor-pointer ${className}`}
    >
      <Trash2 className="w-3" />
      Delete
    </button>
  );
};
