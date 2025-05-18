import {
  addGallery,
  deleteGallery,
  editGalleryById,
} from '@/api/admin/galleryApi';
import { useMutation, useQueryClient } from '@tanstack/react-query';

type GalleryCreateInput = FormData;
type GalleryUpdateInput = { id: string | number; formDataObj: FormData };
type GalleryDeleteInput = string | number;

export const useGalleryAction = () => {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation<void, Error, GalleryDeleteInput>({
    mutationFn: deleteGallery,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['fetch_gallery'] });
    },
    onError: (error) => {
      console.error('Failed to delete:', error);
    },
  });

  const createMutation = useMutation<void, Error, GalleryCreateInput>({
    mutationFn: addGallery,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['fetch_gallery'] });
    },
    onError: (error) => {
      console.error('Failed to create:', error);
    },
  });

  const updateMutation = useMutation<void, Error, GalleryUpdateInput>({
    mutationFn: editGalleryById,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['fetch_gallery'] });
    },
    onError: (error) => {
      console.error('Failed to update:', error);
    },
  });

  return {
    trash: deleteMutation.mutate,
    deleteError: deleteMutation.error,
    deleting: deleteMutation.status === 'pending',
    deleted: deleteMutation.status === 'success',

    create: createMutation.mutate,
    createError: createMutation.error,
    creating: createMutation.status === 'pending',
    created: createMutation.status === 'success',

    update: updateMutation.mutate,
    updateError: updateMutation.error,
    updating: updateMutation.status === 'pending',
    updated: updateMutation.status === 'success',
  };
};
