import React, { useState } from "react";

const NewsArticle = ({ newspaper, title, description, imageUrl }) => (
  <div className="border p-4 mb-4 flex flex-col lg:flex-row items-center lg:w-[50rem]">
    <img src={imageUrl} alt={title} className="w-full lg:w-1/2 lg:h-40 object-cover mb-4 lg:mb-0 lg:mr-4" />
    <div>
      <h2 className="text-lg font-semibold mb-1">{newspaper}</h2>
      <h3 className="text-base font-medium mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const WorkItem = ({ title, description, imageUrl }) => (
  <div className="border p-4 mb-4 flex flex-col lg:flex-row items-center lg:w-[50rem]">
    <img src={imageUrl} alt={title} className="w-full lg:w-1/2 lg:h-40 object-cover mb-4 lg:mb-0 lg:mr-4" />
    <div>
      <h2 className="text-lg font-semibold mb-1">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <button className="bg-green-500 text-white py-2 px-4 mt-2 rounded-full hover:bg-green-600 transition duration-300">
        Learn More
      </button>
    </div>
  </div>
);

const SelectionComponent = () => {
  const [selectedOption, setSelectedOption] = useState("latestNews");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 flex mt-8 text-2xl">
        <div
          className={`cursor-pointer mr-4 ${
            selectedOption === "latestNews" ? "border-b-2 border-green-500 font-bold" : ""
          }`}
          onClick={() => handleOptionClick("latestNews")}
        >
          Latest News
        </div>

        <div
          className={`cursor-pointer ${
            selectedOption === "ourWorks" ? "border-b-2 border-green-500 font-bold" : ""
          }`}
          onClick={() => handleOptionClick("ourWorks")}
        >
          Our Works
        </div>
      </div>

      <div className="mt-8 w-full lg:w-[70%] xl:w-[60%] 2xl:w-[50%]">
        {selectedOption === "latestNews" && (
          <>
            <h2 className="text-3xl font-bold mb-4">Latest News</h2>
            {/* Sample News Articles */}
            <NewsArticle
              newspaper="Daily News"
              title="Breaking News: Exciting Developments in Agriculture"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              imageUrl="https://i.pinimg.com/564x/e4/f3/50/e4f350e5d2e38410e923eedef3914d86.jpg"
            />
            <NewsArticle
              newspaper="Weekly Gazette"
              title="Innovative Solutions for Sustainable Farming Practices"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              imageUrl="https://i.pinimg.com/564x/c9/7a/91/c97a916688dfc68a6d45b80f4a9a0984.jpg"
            />
            <NewsArticle
              newspaper="Agriculture Times"
              title="Global Collaboration to Address Climate Change in Agriculture"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              imageUrl="https://i.pinimg.com/564x/40/ec/84/40ec8457ee3df1b7ffbe4d1edf718f7c.jpg"
            />
          </>
        )}

        {selectedOption === "ourWorks" && (
          <>
            <h2 className="text-3xl font-bold mb-4">Our Works</h2>
            {/* Render Work Items */}
            <WorkItem
              title="Work Title 1"
              description="Description for Work Item 1."
              imageUrl="https://example.com/work-image-1.jpg"
            />
            <WorkItem
              title="Work Title 2"
              description="Description for Work Item 2."
              imageUrl="https://example.com/work-image-2.jpg"
            />
            <WorkItem
              title="Work Title 3"
              description="Description for Work Item 3."
              imageUrl="https://example.com/work-image-3.jpg"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default SelectionComponent;
