import React from "react";

/**
 * Componente de convidados.
 */
const ProfilePeople = ({ name }) => {
  return (
    <div>
      <span className="profile-name">{name} </span>
    </div>
  );
};

export default ProfilePeople;
