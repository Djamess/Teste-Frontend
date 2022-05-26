import React from "react";

/**
 * Componente Board o qual contém diversos CardBoard
 */
const Board = ({ children, title }) => {
  return (
    <div className="card-Management">
      <h5 className='title-managementBoard'>{title}</h5>
      <div>{children}</div>
    </div>
  );
};
export default Board;
