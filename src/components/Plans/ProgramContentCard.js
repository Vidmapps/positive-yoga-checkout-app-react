import React from "react";

const ProgramContentCard = (props) => {
  return (
    <li className="d-flex">
      <img
        src={require(`../../assets/${props.icon}.svg`)}
        alt={props.icon}
      ></img>
      <div className="p-2">
        <strong>{props.title}</strong>
        <div className="opacityLow">{props.content}</div>
      </div>
    </li>
  );
};

export default ProgramContentCard;
