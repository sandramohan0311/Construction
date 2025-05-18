import apiClient from '@/lib/apiClient';

interface GalleryData {
  title: string;
  image?: File | null;
  type: string;
  // add other fields if your gallery has more properties
}

const getGallery = async (): Promise<GalleryData> => {
  const response = await apiClient.get(`/gallery`);
  return response.data;
};

const addGallery = async (formDataObj: FormData): Promise<void> => {
  await apiClient.post("/gallery", formDataObj);
};

const deleteGallery = async (id: number | string): Promise<void> => {
  await apiClient.delete(`/gallery/${id}`);
};

const getGalleryById = async (id: number | string): Promise<GalleryData> => {
  const response = await apiClient.get(`/gallery/${id}`);
  return response.data;
};

const editGalleryById = async ({
  id,
  formDataObj,
}: {
  id: number | string;
  formDataObj: FormData;
}): Promise<void> => {
  await apiClient.put(`/gallery/${id}`, formDataObj);
};

export {
  addGallery,
  deleteGallery,
  getGalleryById,
  editGalleryById,
  getGallery
};
