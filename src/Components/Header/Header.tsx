import React, { FC } from "react";
import Logo from "../../assets/cannabis.png";
import { Link } from "react-router-dom";
import "./Header.css";

interface HeaderProps {
  fetchData: () => void;
  allStrains: Array<any>;
}

const Header: FC<HeaderProps> = ({ allStrains, fetchData }) => {
  return (
    <header className="header">
      <section className="header-content">
        <Link to="/" className="logo-container">
          <img className="logo" src={Logo} alt="hand and leaf" />
        </Link>
        <section className="title-container">
          <h1 className="title">Blissful Blends</h1>
        </section>
        <nav className="button-container">
          <Link to="/allStrains">
            <button className="header-buttons">All Strains</button>
          </Link>
          <Link to="/matches">
            <button className="header-buttons">Matches</button>
          </Link>
        </nav>
      </section>
    </header>
  );
};

export default Header;
