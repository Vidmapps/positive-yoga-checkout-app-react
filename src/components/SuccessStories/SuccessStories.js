import React from "react";

import { SuccessStoriesInfo } from "../../data";
import SuccessStoryCard from "./SuccessStoryCard";

const SuccessStories = () => {
  return (
    <div className="pt-4">
      <h4 className="text-center">Hear success stories from our clients</h4>
      <div className="d-flex overflow-auto">
        {SuccessStoriesInfo.map((item) => {
          return (
            <SuccessStoryCard
              key={item.name}
              photo={item.photo}
              name={item.name}
              city={item.city}
              feedback={item.feedback}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SuccessStories;
