import Stars from "../assets/Stars.svg";

const SuccessStoryCard = (props) => {
  return (
    <div>
      <div className="storyCardStyle">
        <strong>{props.name}</strong>
        <div className="pb-2 opacityLow secondaryTextSize">{props.city}</div>
        <img className="pb-2 pt-2" src={Stars} alt="Stars"></img>
        <img
          className="pb-2 pt-2"
          src={require(`../assets/${props.photo}.png`).default}
          alt={props.photo}
        ></img>
        <div>{props.feedback}</div>
      </div>
    </div>
  );
};

export default SuccessStoryCard;
