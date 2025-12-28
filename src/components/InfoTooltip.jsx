import React from "react";
import "./InfoTooltip.css";

const InfoTooltip = ({ text }) => {
  return (
    <span className="tooltip-container">
      ℹ️
      <span className="tooltip-text">{text}</span>
    </span>
  );
};

export default InfoTooltip;
