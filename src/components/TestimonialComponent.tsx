import React from 'react';
import Star from '@/assets/icon/Stars.svg';

interface TestimonialComponentProps {
  TstlName: string;
  TstlPlace: string;
  TstlDescription: string;
}

const TestimonialComponent: React.FC<TestimonialComponentProps> = ({ TstlName, TstlPlace, TstlDescription }) => {
  return (
    <div className="h-[270px] w-[300px] flex flex-col gap-1 bg-white p-5">
      <p className="text-2xl font-bold">{TstlName}</p>
      <p className="text-md font-normal">{TstlPlace}</p>
      <img className="h-5 w-20" src={Star} alt="Star rating" />
      <p className="text-sm">{TstlDescription}</p>
    </div>
  );
};

export default TestimonialComponent;
