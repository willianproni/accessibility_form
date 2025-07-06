"use client";

import * as Tabs from "@radix-ui/react-tabs";
import TabItem from "./TabItem";
import { useState } from "react";

export const SettingsTabs = () => {
  const [currentTab, setCurrentTab] = useState("tab1");

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
        <TabItem
          value="tab1"
          itemName="My Forms"
          isSelected={currentTab === "tab1"}
        />
        <TabItem
          value="tab2"
          itemName="Finances"
          isSelected={currentTab === "tab2"}
        />
        <TabItem
          value="tab3"
          itemName="Contact"
          isSelected={currentTab === "tab3"}
        />
        <TabItem
          value="tab4"
          itemName="Help"
          isSelected={currentTab === "tab4"}
        />
      </Tabs.List>
    </Tabs.Root>
  );
};

export default SettingsTabs;
