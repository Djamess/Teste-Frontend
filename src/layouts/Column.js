import React from "react";

const Column = ({ children, classStyle }) => {
  return <div className={classStyle}>{children}</div>;
};

export default Column;
