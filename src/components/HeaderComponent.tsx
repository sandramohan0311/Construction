
interface HeaderComponentProps {
  HeaderIcon: React.ReactNode;
  HeaderTitle: string;
  HeaderDescription: string;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({
  HeaderIcon,
  HeaderTitle,
  HeaderDescription,
}) => {
  return (
    <div className="xl:h-20 h-auto w-auto flex lg:justify-center lg:items-center justify-start px-2 gap-3 ">
      <div className="h-full w-auto flex items-center">{HeaderIcon}</div>
      <div className="flex flex-col">
        <p className="text-black font-normal xl:text-md text-sm">{HeaderTitle}</p>
        <p className="text-black font-medium xl:text-md text-sm">{HeaderDescription}</p>
      </div>
    </div>
  );
};

export default HeaderComponent;

