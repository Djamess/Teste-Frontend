import React from "react";

const Row = ({ children, className }) => {
  const style = className ? className : ''
  return <div className={`${style} row`}>{children}</div>;
};

export default Row;
