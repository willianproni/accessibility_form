import { ChevronDown } from "lucide-react";
import { ElementType } from "react";

type NavItemProps = {
  title: string;
  icon: ElementType;
};

export const NavItem = ({ title, icon: Icon }: NavItemProps) => {
  return (
    <a
      href=""
      className="group flex items-center gap-3 rounded px-3 py-2 hover:bg-violet-100"
    >
      <Icon
       className="h-5 w-5 text-zinc-500" />
      <span className="font-medium text-zinc-700 group-hover:text-violet-500">
        {title}
      </span>
      <ChevronDown className="ml-auto text-zinc-400 group-hover:text-violet-300" />
    </a>
  );
};

export default NavItem;
