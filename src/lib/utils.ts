import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatFileSize(sizeInBytes: number): string {
  if (sizeInBytes < 1024) {
    return sizeInBytes + ' Bytes';
  } else if (sizeInBytes < 1024 * 1024) {
    return (sizeInBytes / 1024).toFixed(2) + ' KB';
  } else if (sizeInBytes < 1024 * 1024 * 1024) {
    return (sizeInBytes / (1024 * 1024)).toFixed(2) + ' MB';
  } else {
    return (sizeInBytes / (1024 * 1024 * 1024)).toFixed(2) + ' GB';
  }
}

