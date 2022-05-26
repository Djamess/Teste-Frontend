import React from "react";

const IconButton = ({className, text, icon}) => {
  return (
    <button className={className}>
      {text}
      <i className={icon}/>
    </button>
  );
};

export default IconButton;