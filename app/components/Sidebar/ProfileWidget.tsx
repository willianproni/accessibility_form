import { LogOut } from "lucide-react";
import Image from "next/image";
import { Button } from "../Button";

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
      <Button type="button" variant="ghost">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  );
};

export default ProfileWidget;
