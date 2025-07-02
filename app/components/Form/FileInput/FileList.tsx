"use client";

import { Trash2, UploadCloud } from "lucide-react";
import { useFileInput } from "./Root";
import { formatBytes } from "@/app/utils/format-bytes";

export const FileList = () => {
  const { files } = useFileInput();

  return (
    <div className="mt-4 flex flex-col space-y-3">
      {files.map((files) => (
        <div
          key={files.name}
          className="group flex p-4 items-start gap-4 border border-zinc-200 rounded-lg"
        >
          <div className="rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600">
            <UploadCloud className="h-4 w-4" />
          </div>

          <div className="flex flex-1 flex-col items-start gap-1">
            <div className="flex flex-col">
              <span className="text-sm text-zinc-700">{files.name}</span>
              <span className="text-sm text-zinc-500">
                {formatBytes(files.size)}
              </span>
            </div>

            <div className="flex w-full items-center gap-3">
              <div
                className="h-2 bg-violet-200 flex-1 rounded-full"
                role="progressbar"
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div className="bg-violet-600 h-2 w-4/5 rounded-full"></div>
              </div>
              <span className="text-sm font-medium text-zinc-700">80%</span>
            </div>
          </div>

          <button
            type="button"
            className="ml-auto p-2  hover:bg-zinc-200 rounded"
          >
            <Trash2 className="h-5 w-5 text-zinc-500" />
          </button>
        </div>
      ))}
    </div>
  );
};
