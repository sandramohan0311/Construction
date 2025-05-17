import React, { useState, ReactNode } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface ConfirmProps {
  onConfirm: () => void | Promise<void>;
  children: ReactNode;
  label: string;
  buttonText: string;
}

export const Confirm: React.FC<ConfirmProps> = ({
  onConfirm,
  children,
  label,
  buttonText,
}) => {
  const [openConfirm, setOpenConfirm] = useState(false);

  const handleConfirmDelete = async () => {
    await onConfirm();
    setOpenConfirm(false);
  };

  return (
    <AlertDialog open={openConfirm} onOpenChange={setOpenConfirm}>
      <AlertDialogTrigger asChild>
        <div className="flex h-full w-full cursor-pointer items-center gap-1">
          {children}
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-amber-50">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>{label}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="text-bold bg-red-600 text-bg-secondary hover:bg-red-700 active:bg-red-900"
            onClick={handleConfirmDelete}
          >
            {buttonText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
