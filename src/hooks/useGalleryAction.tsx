import {
  addGallery,
  deleteGallery,
  editGalleryById,
} from '@/api/admin/galleryApi';
import { useMutation, useQueryClient } from '@tanstack/react-query';


export const useGalleryAction = () => {
  const queryClient = useQueryClient();

  // Delete Gallery
  const deleteMutation = useMutation({
    mutationFn: deleteGallery,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['fetch_gallery'] });
    },
    onError: (error) => {
      console.error('Failed to delete:', error);
    },
  });

  // Create Gallery
  const createMutation = useMutation({
    mutationFn: addGallery,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['fetch_gallery'] });
    },
    onError: (error) => {
      console.error('Failed to create:', error);
    },
  });

  // Update Gallery
  const updateMutation = useMutation({
    mutationFn: editGalleryById,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['fetch_gallery'] });
    },
    onError: (error) => {
      console.error('Failed to update:', error);
    },
  });

  return {
    // Delete
    trash: deleteMutation.mutate,
    isTrashing: deleteMutation.isLoading,

    // Create
    create: createMutation.mutate,
    creating: createMutation.isLoading,
    createError: createMutation.error,
    created: createMutation.isSuccess,

    // Update
    update: updateMutation.mutate,
    updating: updateMutation.isLoading,
    updateError: updateMutation.error,
    updated: updateMutation.isSuccess,
  };
};
