import React from "react";

import Stars from "../../assets/Stars.svg";

const SuccessStoryCard = (props) => {
  return (
    <div className="storyCardStyle">
      <strong>{props.name}</strong>
      <div className="pb-2 opacityLow secondaryTextSize">{props.city}</div>
      <img className="pb-2 pt-2" src={Stars} alt="Stars"></img>
      <img
        className="pb-2 pt-2"
        src={require(`../../assets/${props.photo}.png`).default}
        alt={props.photo}
      ></img>
      <div dangerouslySetInnerHTML={{ __html: props.feedback }}></div>
    </div>
  );
};

export default SuccessStoryCard;
