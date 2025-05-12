import { cn } from "@/lib/utils";
import React from "react";

interface H1TitleProps {
  Titles: string;
  className?: string;
}

const H1Title: React.FC<H1TitleProps> = ({ Titles, className }) => {
  return (
    <div
      className={cn(
        "h-auto w-full flex justify-center items-center text-center text-[#642D13] text-3xl font-bold",
        className
      )}
    >
      {Titles}
    </div>
  );
};

export default H1Title;
