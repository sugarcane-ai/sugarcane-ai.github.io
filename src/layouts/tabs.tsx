import React, { useState } from "react";

interface tab {
  name: string;
  url: string;
}

const Tabs = ({ tabs }: { tabs: tab[] }) => {
  const [activeTab, setActiveTab] = useState<tab>(tabs[0]);

  const handleTabChange = (tab: tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="flex flex-wrap">
        {tabs.map((tab: tab, index: number) => (
          <button
            key={index}
            onClick={() => handleTabChange(tab)}
            className={`flex-1 w-auto text-gray-100 transition-all duration-300 relative px-3 py-1 m-1 whitespace-nowrap rounded-full hover:text-neutral-0 transition-all duration-300 ${
              activeTab.name === tab.name ? "bg-gray-600" : ""
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="w-full h-auto mt-2">
        <img
          src={activeTab.url}
          alt={activeTab.name}
          style={{ width: "100%", height: "auto" }} // Adjust the image size as needed
        />
      </div>
    </div>
  );
};

export default Tabs;
