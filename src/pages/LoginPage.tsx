import React from 'react';
import LoginSection from '@/sections/LoginSection';
import Logo from '@/assets/image/eng_logo.png';

const LoginPage: React.FC = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center p-7 gap-20 bg-[#F5F5F5]">
      <img className="h-[67px] w-auto" src={Logo} alt="Kalari Logo" />
      <LoginSection />
    </div>
  );
};

export default LoginPage;
