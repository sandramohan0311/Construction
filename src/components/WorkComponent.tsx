import React, { ReactNode } from 'react';

interface WorkComponentProps {
  WorkIcon: ReactNode;
  WorkTitle: string;
  WorkDescription: string;
}

const WorkComponent: React.FC<WorkComponentProps> = ({ WorkIcon, WorkTitle, WorkDescription }) => {
  return (
    <div className="h-full lg:w-[400px] w-full bg-white px-5 py-4 flex flex-col gap-2">
      <div className="lg:h-[90px] lg:w-[90px] h-[65px] w-[65px] rounded-xl border-2 flex justify-center items-center">
        {WorkIcon}
      </div>
      <p className="lg:text-3xl text-xl font-bold text-black">{WorkTitle}</p>
      <p className="lg:text-lg text-sm font-medium text-[#6E6E6E]">{WorkDescription}</p>
    </div>
  );
};

export default WorkComponent;
