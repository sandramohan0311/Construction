import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Pencil } from "lucide-react";

import { fetchAllGallery } from "@/api/adminApi";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { BASE_FILE_URL } from "@/utils/constant";
import { useGalleryAction } from "@/hooks/useGalleryAction";
import { Confirm } from "@/components/admin/ComfirmBtn";
import { DeleteBtn } from "@/components/admin/DeleteBtn";
import EditGalleryForm from "@/components/admin/EditGallery";

interface GalleryItem {
  id: number;
  title: string;
  type: string;
  image: string;
}

const itemsPerPage = 10;

function GalleryTableCompo(): React.ReactElement{
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [selectedGalleryId, setSelectedGalleryId] = useState<number | null>(null);

  const folder = "gallery/";
  const url = BASE_FILE_URL + folder;

  const {
    data,
    isLoading,
    isError,
    error,
  } = useQuery<GalleryItem[], Error>({
    queryKey: ["fetch_gallery"],
    queryFn: async () => {
        const response = await fetchAllGallery(1, 100);
        return response.data; // assuming response.data is GalleryItem[]
        }

  });

  const { trash } = useGalleryAction();

  const gallerys = data ?? [];
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = Math.ceil(gallerys.length / itemsPerPage);

  const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = gallerys.slice(startIndex, startIndex + itemsPerPage);

  const queryClient = useQueryClient();

  const handleRefetch = () => {
    queryClient.invalidateQueries({ queryKey: ["fetch_gallery"] });
  };

  if (isLoading)
    return (
      <p className="h-20 w-full flex justify-center items-center text-xl">
        Loading...
      </p>
    );

  if (isError)
    return (
      <div className="h-32 w-full flex flex-col justify-center items-center gap-4">
        <p className="w-full flex justify-center items-center text-xl">
          Error: {error.message}
        </p>
        <button
          className="bg-black text-white px-6 py-3 rounded-2xl"
          onClick={handleRefetch}
        >
          Retry
        </button>
      </div>
    );

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow className="sticky top-0 bg-white">
            <TableHead>Title</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentItems.map((item: GalleryItem) => (
            <TableRow
              key={item.id}
              className={
                item.id % 2 === 0 ? "bg-gray-100 border-none" : "border-none"
              }
            >
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.type}</TableCell>
              <TableCell>
                <img
                  src={url + item.image}
                  alt={item.title}
                  className="w-10 h-10 rounded"
                />
              </TableCell>
              <TableCell className="flex gap-2">
                <button
                  className="text-black hover:text-gray-600"
                  onClick={() => {
                    setSelectedGalleryId(item.id);
                    setIsFormOpen(true);
                  }}
                >
                  <Pencil size={18} />
                </button>
                <Confirm
                  onConfirm={() => trash(item.id)}
                  label="Are you sure to delete?"
                  buttonText="Delete"
                >
                  <DeleteBtn />
                </Confirm>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
      {isFormOpen && selectedGalleryId !== null && (
        <EditGalleryForm
          galleryId={selectedGalleryId.toString()}
          onClose={() => {
            setIsFormOpen(false);
            setSelectedGalleryId(null);
          }}
        />
      )}
    </div>
  );
}

export default GalleryTableCompo;
