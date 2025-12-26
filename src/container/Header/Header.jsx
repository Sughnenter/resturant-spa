import React from "react";

import "./Header.css";
import { SubHeading } from "../../components";
import { images } from "../../constants";

function Header() {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Chase the new flavour" />
        <h1 className="app__header-h1">The Key To Fine Dining</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          Welcome to Genricht where we believe the key to the perfect meal is a
          balance of three sacred items, good food, an even better desert and
          the perfect cocktail to close it out giving you a truly dashing
          experience, eat here where food does more than just satisfy your
          cravings, it elevates your day{" "}
        </p>
        <button type="button" className="custom__button">
          Explore Menu
        </button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header_img" />
      </div>
    </div>
  );
}
export default Header;
