import classes from "./Place2Stay.module.css";
import Card from "../../common/Card";

import house_1 from "../../images/houses/house_1.png";
import house_2 from "../../images/houses/house_2.png";
import house_3 from "../../images/houses/house_3.png";
import house_4 from "../../images/houses/house_4.png";
import house_5 from "../../images/houses/house_5.png";
import house_6 from "../../images/houses/house_6.png";
import house_7 from "../../images/houses/house_7.png";
import house_8 from "../../images/houses/house_8.png";
import house_9 from "../../images/houses/house_9.png";
import house_10 from "../../images/houses/house_10.png";
import house_11 from "../../images/houses/house_11.png";
import house_12 from "../../images/houses/house_12.png";
import house_13 from "../../images/houses/house_13.png";
import house_14 from "../../images/houses/house_14.png";
import house_15 from "../../images/houses/house_15.png";
import house_16 from "../../images/houses/house_16.png";
import Cards from "../../common/Cards";

const Place2Stay = () => {
  return (
    <>
      <nav aria-label="secondary">
        <ul className={classes.nav__list}>
          <li className={classes.nav__item}>Resturant</li>
          <li className={classes.nav__item}>Cottage</li>
          <li className={classes.nav__item}>Castle</li>
          <li className={classes.nav__item}>Fantas City</li>
          <li className={classes.nav__item}>Beach</li>
          <li className={classes.nav__item}>Carbin</li>
          <li className={classes.nav__item}>Off-grid</li>
          <li className={classes.nav__item}>Farm</li>
          <li className={classes.nav__item + " " + classes.location}>
            <p>Location</p>
            <i class="bi bi-sliders2"></i>
          </li>
        </ul>
      </nav>
      <main>
        <Cards>
          <Card src={house_1} alt="Desert House" />
          <Card src={house_2} alt="Desert House" />
          <Card src={house_3} alt="Desert House" />
          <Card src={house_4} alt="Desert House" />
          <Card src={house_5} alt="Desert House" />
          <Card src={house_6} alt="Desert House" />
          <Card src={house_7} alt="Desert House" />
          <Card src={house_8} alt="Desert House" />
          <Card src={house_9} alt="Desert House" />
          <Card src={house_10} alt="Desert House" />
          <Card src={house_11} alt="Desert House" />
          <Card src={house_12} alt="Desert House" />
          <Card src={house_13} alt="Desert House" />
          <Card src={house_14} alt="Desert House" />
          <Card src={house_15} alt="Desert House" />
          <Card src={house_16} alt="Desert House" />
        </Cards>
      </main>
    </>
  );
};
export default Place2Stay;
