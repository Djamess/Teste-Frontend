import React from "react";
import IconButton from "../components/IconButton";

/**
 * Cards do componente Board.
 */

const CardBoard = _ => {
  return (
    <div className="demo">
      <div className='title-commercial d-flex align-items-center'>
        <small>Demonstrativo comercial</small>
        <div className="button-group">
          <IconButton className="btn-demo" icon="fas fa-globe-asia" />
          <IconButton className="btn-demo" icon="fas fa-ellipsis-h" />
        </div>
      </div>
      <div className="img-demo">
        <img
          alt="Random"
          src="https://lh3.googleusercontent.com/eh16gThHJIAcZTFxSHjxzv6Va3J5hP8Iva5fHihLm6LNFBPju-sOJNhgfNuk6LU5dnStcwY=s85"
        />
        <img
          alt="Random"
          src="https://lh3.googleusercontent.com/DUvhu2_DiqeVrc9ZZYDcY6qYerc6tgXm8Gd0W0dgJEqkr3rtyTTgmbcByPGjaNloRUE7CPY=s85"
        />
        <img
          alt="Random"
          src="https://lh3.googleusercontent.com/WPeHUExJpdce_nr4BoYh-wXdLzq66C3RC1Pb3Z4CkBlPn7HmYmN8XnhHmT59rxP2JIU4Ib8=s85"
        />
        <img
          alt="Random"
          src="https://lh3.googleusercontent.com/EVUGXAlPBL-Eq2pAT-y8a_pE4BNcSfWwbWpvXoluYP5qOtNWM_i5M09V1QOaWYWG-Qaeat0=s85"
        />
      </div>
    </div>
  );
};

export default CardBoard;
