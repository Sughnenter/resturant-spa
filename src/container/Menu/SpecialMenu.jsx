import React from "react";
import { images, data } from "../../constants";
import { SubHeading, MenuItem } from "../../components";
import "./SpecialMenu.css";
import ScrollReveal from "../../components/ScrollReveal/ScrollReveal";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <ScrollReveal animation="fade-up">
      <div className="app__specialMenu-title">
        <SubHeading title="Menu that fits your palatte" />
        <h1 className="headtext__cormorant">Today&apos;s Special</h1>
      </div>
    </ScrollReveal>

    <div className="app__specialMenu-menu">
      <ScrollReveal animation="fade-up">
        <div className="app__specialMenu-menu_wine  flex__center">
          <p className="app__specialMenu-menu_heading">Wine & Beer</p>
          <div className="app__specialMenu_menu_items">
            {data.wines.map((wine, index) => (
              <ScrollReveal
                key={wine.title + index}
                animation="fade-up"
                delay={index * 80}
              >
                <MenuItem
                  title={wine.title}
                  price={wine.price}
                  tags={wine.tags}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal animation="fade-left">
        <div className="app__specialMenu-menu_img">
          <img src={images.menu} alt="menu__img" />
        </div>
      </ScrollReveal>

      <ScrollReveal animation="fade-up">
        <div className="app__specialMenu-menu_cocktails  flex__center">
          <p className="app__specialMenu-menu_heading">Cocktails</p>
          <div className="app__specialMenu_menu_items">
            {data.cocktails.map((cocktail, index) => (
              <ScrollReveal
                key={cocktail.title + index}
                animation="fade-up"
                delay={index * 80}
              >
                <MenuItem
                  title={cocktail.title}
                  price={cocktail.price}
                  tags={cocktail.tags}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>

    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
