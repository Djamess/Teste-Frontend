import React from "react";

const Container = ({ children, Classname }) => {
  return <div className={Classname}>{children}</div>;
};

export default Container;
