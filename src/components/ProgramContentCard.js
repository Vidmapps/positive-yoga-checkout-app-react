const ProgramContentCard = (props) => {
  return (
    <div>
      <li className="d-flex">
        <img
          src={require(`../assets/${props.icon}.svg`).default}
          alt={props.icon}
        ></img>
        <div className="p-2">
          <strong>{props.title}</strong>
          <div className="opacityLow">{props.content}</div>
        </div>
      </li>
    </div>
  );
};

export default ProgramContentCard;
