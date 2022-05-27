import { React, useRef, useState } from "react";

const IconButtonRemove = ({ cardId, className, text, icon }) => {

  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useState(false)
  const onClickExpand = () => setIsActive(!isActive)

  function remove() {
    let card = document.getElementById(`card${cardId}`);
    card.style.display = "none";
  }

  return (
    <div>
      <button onClick={onClickExpand} className={className} >
        {text}
        <i className={icon} />
        <nav ref={dropDownRef} className={`more-menu ${isActive ? "active" : "inactive"}`}>
          <ul className="list-more-btn">
            <li className="item-list-more" onClick={remove}>Excluir item</li>
          </ul>
        </nav>
      </button>
    </div>
  );
};

export default IconButtonRemove;