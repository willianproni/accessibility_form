"use client";

import { useAutoAnimate } from "@formkit/auto-animate/react";
import { FileItem } from "./FileItem";
import { useFileInput } from "./Root";

export const FileList = () => {
  const { files } = useFileInput();
  const [parent] = useAutoAnimate({});
  return (
    <div ref={parent} className="mt-4 flex flex-col space-y-3">
      {files.map((file) => {
       return (
        <FileItem key={file.name} name={file.name} size={file.size} state="progress"/>
       )
      })}
    </div>
  );
};
