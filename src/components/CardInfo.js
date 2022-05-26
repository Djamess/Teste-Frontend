import React from "react";

/**
 * Card de informação.
 */
const CardInfo = ({ children, title }) => {
  return (
    <div className="card-info">
      <h5>{title}</h5>
      <p className="text-info">{children}</p>
      <button type='button' className='btn btn-outline-secondary'>DISPENSAR</button>
    </div>
  );
};

export default CardInfo;
