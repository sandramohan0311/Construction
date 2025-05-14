import React from 'react';

interface ProjectDetailsProps {
  ProjectNumber: number | string;
  ProjectTitle: string;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ ProjectNumber, ProjectTitle }) => {
  return (
    <div className="h-[100px] w-[150px] flex flex-col justify-center items-center">
      <p className="text-4xl text-black font-bold">{ProjectNumber}</p>
      <p className="text-md text-black font-medium">{ProjectTitle}</p>
    </div>
  );
};

export default ProjectDetails;
