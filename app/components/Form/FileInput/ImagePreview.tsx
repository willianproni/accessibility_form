"use client";

import { User } from "lucide-react";
import { useFileInput } from "./Root";
import { useMemo } from "react";
import Image from "next/image";

export const ImagePreview = () => {
  const { files } = useFileInput();

  const previewURL = useMemo(() => {
    if (files.length === 0) {
      return null;
    }

    return URL.createObjectURL(files[0]);
  }, [files]);

  if (previewURL)
    return (
      <Image
        src={previewURL}
        alt="profile image update"
        className="h-16 w-16 rounded-full object-cover"
        width={500}
        height={500}
      />
    );

  return (
    <div className="bg-violet-100 flex h-16 w-16 items-center justify-center rounded-full">
      <User className="w8 h8 text-violet-500" />
    </div>
  );
};
