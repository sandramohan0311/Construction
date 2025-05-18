import DecorationImg from '@/assets/image/con1.jpg';
import BuildingImg from '@/assets/image/con_2.jpg';
import TrafficImg from '@/assets/image/Traffic.png';
import BillboardImg from '@/assets/image/con_bill.png';
import SteelImg from '@/assets/image/con_steel.png';
import RoadImg from '@/assets/image/con6.jpg';
import ElectromechanicalImg from '@/assets/image/con7.jpg';
import ElectricalImg from '@/assets/image/con_8.jpg';
import MaintenanceImg from '@/assets/image/con9.jpg';
import PoolImg from '@/assets/image/Pool.png';

export type TranslationKeys =
  | "S1T" | "S1D"
  | "S2T" | "S2D"
  | "S3T" | "S3D"
  | "S4T" | "S4D"
  | "S5T" | "S5D"
  | "S6T" | "S6D"
  | "S7T" | "S7D"
  | "S8T" | "S8D"
  | "S9T" | "S9D"
  | "S10T" | "S10D";


// Instead of hardcoding title and description, use translation keys here
export const servicesData = [
  {
    titleKey: "S1T",
    descriptionKey: "S1D",
    image: DecorationImg,
    galleryType: "decoration",
  },
  {
    titleKey: "S2T",
    descriptionKey: "S2D",
    image: BuildingImg,
    galleryType: "building",
  },
  {
    titleKey: "S6T",  // note: your Arabic uses different keys for traffic (S6T) vs original service.ts Traffic Management (title: Traffic Management)
    descriptionKey: "S6D",
    image: TrafficImg,
    galleryType: "traffic",
  },
  {
    titleKey: "S3T",
    descriptionKey: "S3D",
    image: BillboardImg,
    galleryType: "billboards",
  },
  {
    titleKey: "S4T",
    descriptionKey: "S4D",
    image: SteelImg,
    galleryType: "steel",
  },
  {
    titleKey: "S5T",
    descriptionKey: "S5D",
    image: RoadImg,
    galleryType: "road",
  },
  {
    titleKey: "S7T",
    descriptionKey: "S7D",
    image: ElectromechanicalImg,
    galleryType: "electromechanical",
  },
  {
    titleKey: "S8T",
    descriptionKey: "S8D",
    image: ElectricalImg,
    galleryType: "electrical",
  },
  {
    titleKey: "S9T",
    descriptionKey: "S9D",
    image: MaintenanceImg,
    galleryType: "maintenance",
  },
  {
    titleKey: "S10T",
    descriptionKey: "S10D",
    image: PoolImg,
    galleryType: "swimmingpools",
  },
]as const;
