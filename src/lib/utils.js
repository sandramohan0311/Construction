import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatFileSize(sizeInBytes) {
  // If the file size is less than 1 KB, display it in bytes
  if (sizeInBytes < 1024) {
    return sizeInBytes + ' Bytes';
  }
  // If the file size is less than 1 MB, convert to KB
  else if (sizeInBytes < 1024 * 1024) {
    return (sizeInBytes / 1024).toFixed(2) + ' KB';
  }
  // If the file size is less than 1 GB, convert to MB
  else if (sizeInBytes < 1024 * 1024 * 1024) {
    return (sizeInBytes / (1024 * 1024)).toFixed(2) + ' MB';
  }
  // If the file size is 1 GB or more, convert to GB
  else {
    return (sizeInBytes / (1024 * 1024 * 1024)).toFixed(2) + ' GB';
  }
}
