import React from "react";

/**
 * Componente de convidados.
 */
const ProfilePeople = ({ name, avatar, username, confirmed_presence }) => {
  return (
    <div className="list-people">
      <img className="img-fluid" alt={name} src={avatar} />
      <span className="profile-name"> | {name} | {username} | {confirmed_presence === true ? "Confirmado" : "Não confirmado" }</span>
    </div>
  );
};

export default ProfilePeople;
