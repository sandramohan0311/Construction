import apiClient from '@/lib/apiClient';

interface GalleryItem {
  id: number;
  title: string;
  imageUrl: string;
  type: string;
  // add other gallery item fields here as needed
}

interface FetchGalleryResponse {
  data: GalleryItem[];
  total: number;
  page: number;
  limit: number;
  // add other response metadata if any
}

const fetchAllGallery = async (
  page: number = 1,
  limit: number = 10
): Promise<FetchGalleryResponse> => {
  const response = await apiClient.get<FetchGalleryResponse>('/gallery', {
    params: { page, limit },
  });
  return response.data;
};

export { fetchAllGallery };
