import React from "react";
import Logo from "/Users/reidpoole/blissful-blends/src/assets/cannabis.png"
import "./Header.css"

const Header = () => {
  return (
    <header className="header">
      <section className="header-content">
        <img className="logo" src={Logo} alt="hand and leaf" />
        <section className="title-container">
          <h1 className="title">Blissful Blends</h1>
        </section>
        <section className="button-container">
          <button className="header-buttons">All Strains</button>
          <button className="header-buttons">Matches</button>
        </section>
      </section>
    </header>
  )
}

export default Header