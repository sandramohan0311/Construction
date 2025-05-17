import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface NavChipProps {
  navTitle: string;
  navPath?: string;
  Icon?: LucideIcon;
  onClick?: () => void;
  isLogout?: boolean;
}

const NavChip: React.FC<NavChipProps> = ({ navTitle, navPath = "", Icon, onClick, isLogout = false }) => {
  const location = useLocation();
  const isActive = location.pathname === navPath;

  if (isLogout) {
    return (
      <div
        onClick={onClick}
        className={`w-full h-11 flex items-center justify-start gap-4 px-2 rounded cursor-pointer
          ${isActive ? 'bg-black text-white' : 'bg-white text-black'}`}
      >
        {Icon && <Icon size={16} className={isActive ? 'text-white' : 'text-black'} />}
        {navTitle}
      </div>
    );
  }

  return (
    <Link
      to={navPath}
      className={`w-full h-11 flex items-center justify-start gap-4 px-2 rounded 
        ${isActive ? 'bg-black text-white' : 'bg-white text-black'}`}
    >
      {Icon && <Icon size={16} className={isActive ? 'text-white' : 'text-black'} />}
      {navTitle}
    </Link>
  );
};

export default NavChip;
