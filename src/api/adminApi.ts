import apiClient from '@/lib/apiClient';

interface GalleryItem {
  id: number;
  title: string;
  image: string;
  type: string;
  // add other gallery item fields here as needed
}


const fetchAllGallery = async (
  page: number = 1,
  limit: number = 10
): Promise<GalleryItem[]> => {
  const response = await apiClient.get('/gallery', {
    params: { page, limit },
  });
  return response.data; // assuming this is correct structure
};

export { fetchAllGallery };
