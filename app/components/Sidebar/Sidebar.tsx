import { Search } from "lucide-react";
import Logo from "../Logo";

const Sidebar = () => {
  return (
    <aside className="space-y-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <div className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
        <Search className="h-6 w-6 text-zinc-500"/>
        <input
          className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
          type="search"
          placeholder="Search..."
        />
      </div>
    </aside>
  );
};

export default Sidebar;
