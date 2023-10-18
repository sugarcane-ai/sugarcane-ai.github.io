import React, { useState } from "react";

const BeforeAfter2 = ({
  beforeImg,
  afterImg,
}: {
  beforeImg: string;
  afterImg: string;
}) => {
  const [image, setImage] = useState("before"); // Default image state
  const handleButtonClick = (e: any, type: string) => {
    console.log(`changing image to ${type}`);
    if (e) {
      e.preventDefault();
    }
    setImage(type);
  };

  let klass = "btn btn-primary mt-5";
  let styles = { marginLeft: "1rem" };

  return (
    <div>
      <div>
        <div class="inline-flex rounded-md shadow-sm m-2" role="group">
          <button
            onClick={(e) => handleButtonClick(e, "before")}
            type="button"
            // class="px-4 py-2 text-sm font-medium rounded-l-md text-black bg-white hover:bg-gray-100 hover:text-black focus:z-10 focus:ring-2 focus:ring-gray-700 focus:text-black dark:bg-gray-100 dark:border-gray-600 dark:text-black dark:hover:text-black dark:hover:bg-white"
            class="px-4 py-2 text-sm font-medium rounded-l-md text-black bg-white hover:bg-gray-100 hover:text-black focus:z-10 focus:ring-2 focus:ring-gray-700 focus:text-black dark:bg-gray-100 dark:border-gray-600 dark:text-black dark:hover:text-black dark:hover:bg-white"
          >
            Before
          </button>

          <button
            type="button"
            onClick={(e) => handleButtonClick(e, "after")}
            class="px-4 py-2 text-sm font-medium text-black bg-white  rounded-r-md hover:bg-gray-100 hover:text-black focus:z-10 focus:ring-2 focus:ring-gray-700 focus:text-black dark:bg-gray-100 dark:border-gray-600 dark:text-black dark:hover:text-black dark:hover:bg-white"
            class="px-4 py-2 text-sm font-medium text-black bg-white  rounded-r-md hover:bg-gray-100 hover:text-black focus:z-10 focus:ring-2 focus:ring-gray-700 focus:text-black dark:bg-gray-100 dark:border-gray-600 dark:text-black dark:hover:text-black dark:hover:bg-white"
          >
            After
          </button>
        </div>
      </div>
      <div className="w-100 h-100">
        <img src={image == "before" ? beforeImg : afterImg} alt={image} />
      </div>
    </div>
  );
};

const BeforeAfter = ({
  beforeImg,
  afterImg,
}: {
  beforeImg: string;
  afterImg: string;
}) => {
  const [activeTab, setActiveTab] = useState("before");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <nav
        className="relative inline-flex gap-2 rounded-[32px] m-2"
        aria-label="Tabs"
      >
        <button
          onClick={() => handleTabChange("before")}
          className={`text-gray-100 transition-all duration-300 relative px-3 py-1 whitespace-nowrap rounded-full hover:text-neutral-0 transition-all duration-300 ${
            activeTab === "before" ? "bg-gray-600" : ""
          }`}
        >
          <div
            className="absolute inset-0"
            style={{
              borderRadius: "32px",
              transform: "none",
              transformOrigin: "50% 50% 0px",
            }}
          />
          <div className="relative z-10">Before</div>
        </button>
        <button
          onClick={() => handleTabChange("after")}
          className={`hover:bg-neutral-500/30 text-gray-100 relative px-3 py-1 whitespace-nowrap rounded-full hover:text-neutral-0 transition-all duration-300 ${
            activeTab === "after" ? "bg-gray-600" : ""
          }`}
        >
          <div className="relative z-10">After</div>
        </button>
      </nav>
      <div className="w-100 h-100">
        <img
          src={activeTab == "before" ? beforeImg : afterImg}
          alt={activeTab}
        />
      </div>
    </div>
  );
};

export default BeforeAfter;
