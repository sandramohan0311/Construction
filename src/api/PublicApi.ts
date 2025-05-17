import apiClient from "@/lib/apiClient";

interface GalleryItem {
  id: number;
  title: string;
  image: string;
  // add other relevant fields here based on your API response
}

const fetchGalleryByType = async (type: string): Promise<GalleryItem[]> => {
  if (!type) throw new Error("Type is required to fetch gallery images");

  const response = await apiClient.get(`/gallery/type/${type}`);
  return response.data;
};

export { fetchGalleryByType };
