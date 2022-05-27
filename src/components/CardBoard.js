import React from "react";
import IconButton from "../components/IconButton";

/**
 * Cards do componente Board.
 */

const CardBoard = ({ data }) => {
  return (
    data.boards.map(
      (boards, index) => (
        <div key={index} className="demo" >
          <div className='title-commercial d-flex align-items-center'>
            <small>{boards.title}</small>
            <div className="button-group">
              <IconButton className="btn-demo" icon="fas fa-globe-asia" />
              <IconButton className="btn-demo" icon="fas fa-ellipsis-h" />
            </div>
          </div>
          <div className="img-demo">
            {boards.resume_files.map(({ file }, index) => (
              <img key={index} className="img-management"
                alt={boards.title}
                src={file}
              />
            )
            )}
          </div>
        </div>
      ))
  );
};

export default CardBoard;
