import { LogOut } from "lucide-react";
import Image from "next/image";

export const ProfileWidget = () => {
  return (
    <div className="flex items-center gap-3">
      <Image
        className="rounded-full "
        src="https://github.com/willianproni.png"
        width={40}
        height={40}
        alt="Profile GitHub"
      />
      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 truncate">
          Willian Proni
        </span>
        <span className="text-sm text-zinc-500 truncate">@proniwillian </span>
      </div>
      <button type="button" className="ml-auto p-2  hover:bg-zinc-200 rounded">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  );
};

export default ProfileWidget;
