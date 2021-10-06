import { SuccessStoriesInfo } from "../../data";
import SuccessStoryCard from "./SuccessStoryCard";

const SuccessStories = () => {
  return (
    <div className="pt-4">
      <h4 className="text-center">Hear success stories from our clients</h4>
      <div className="d-flex overflow-auto">
      {SuccessStoriesInfo.map((SuccessStoriesInfoItem) => {
              return (
                <SuccessStoryCard
                  photo={SuccessStoriesInfoItem.photo}
                  name={SuccessStoriesInfoItem.name}
                  city={SuccessStoriesInfoItem.city}
                  feedback={SuccessStoriesInfoItem.feedback}
                />
              );
            })}
      </div>
    </div>
  );
};

export default SuccessStories;
