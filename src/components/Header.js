import React from "react";
/**
 * Componente Header.
 */
const Header = _ => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="https://media-exp1.licdn.com/dms/image/C560BAQGpgXg0pG3kiA/company-logo_200_200/0/1642109824490?e=1661385600&v=beta&t=i22RrcpT3smr-O2dsGf80O8y7yfnQVXsTizgEb0ApGo"
            alt=""
            width={50}/>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
