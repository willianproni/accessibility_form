import * as Tabs from "@radix-ui/react-tabs";
import { motion } from "motion/react";

type TabItemProps = {
  value: string;
  itemName: string;
  isSelected?: boolean;
};

export const TabItem = ({
  value,
  itemName,
  isSelected = false,
}: TabItemProps) => {
  return (
    <Tabs.Trigger
      value={value}
      className="relative group px-1 pb-4 text-sm font-medium text-zinc-500 hover:text-violet-700 data-[state=active]:text-violet-700 outline-none"
    >
      <span className="rounded group-focus-visible:ring-2 group-focus-visible:ring-violet-400 group-focus-visible:ring-offset-4">
        {itemName}
      </span>

      {isSelected ? (
        <motion.div
          layoutId="activeTab"
          className="absolute left-0 right-0 h-0.5 bg-violet-700 -bottom-px"
        ></motion.div>
      ) : null}
    </Tabs.Trigger>
  );
};

export default TabItem;
