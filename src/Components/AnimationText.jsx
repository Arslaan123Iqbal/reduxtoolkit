import React from "react";
import "./animation.css"

const AnimationText = ({text}) => {
  return (
    <div className="animated-text-container">
    {[...text].map(item=>(
        <div className="animated-text-item">{item}</div>
    ))}
    </div>
  );
};

export default AnimationText;
