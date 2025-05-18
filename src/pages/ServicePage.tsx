import { useParams } from 'react-router-dom';
import ServicePageSection from '@/sections/ServisePageSection';
import { servicesData } from '@/constant/Service'; // constants file with 10 services
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ServicePage = () => {
  const { type } = useParams<{ type: string }>();

  const service = servicesData.find(s => s.galleryType === type);

  if (!service) return <p>Service not found</p>;

  return (
    <div className="h-full w-full">
      <Header/>
      <ServicePageSection
        titleKey={service.titleKey}
        descriptionKey={service.descriptionKey}
        image={service.image}
        galleryType={service.galleryType}
      />
      <Footer/>
    </div>
  );
};

export default ServicePage;
