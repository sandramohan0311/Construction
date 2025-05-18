import { useParams } from 'react-router-dom';
import ServicePageSection from '@/sections/ServisePageSection';
import { servicesData } from '@/constant/Service'; // constants file with 10 services
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const ServicePage = () => {

  const { language } = useLanguage();

  const { type } = useParams<{ type: string }>();

  const service = servicesData.find(s => s.galleryType === type);

  if (!service) return <p>Service not found</p>;

  return (
    <div dir={language === "ar" ? "rtl" : "ltr"} className="h-full w-full">
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
