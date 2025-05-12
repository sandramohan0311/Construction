

const ServiceComponent = ({ServiceTitle, ServicDescription, ServiceImage}) => {
    const limitedWords = ServicDescription.split(' ').slice(0, 20).join(' ') + (ServicDescription.split(' ').length > 20 ? '...' : '');

  return (
    <div className='h-[340px] w-full rounded-3xl bg-white p-4 flex flex-col gap-2'>
      <p className='lg:text-3xl text-2xl text-black font-bold'>
        {ServiceTitle}
      </p>
      <p className='text-sm text-[#4A4A4A] font-regular'>
        {limitedWords }
      </p>
      <div className="flex-1 relative rounded-xl overflow-hidden">
        <img 
          src={ServiceImage} 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ServiceComponent;
