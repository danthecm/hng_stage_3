import classes from "./Main.module.css";
import mbtoken_logo from "../../images/mbtoken.png";
import opensea_logo from "../../images/opensea.png";
import metamask_logo from "../../images/metamask.png";

import house_1 from "../../images/houses/house_1.png";
import house_2 from "../../images/houses/house_2.png";
import house_3 from "../../images/houses/house_3.png";
import house_4 from "../../images/houses/house_4.png";
import house_5 from "../../images/houses/house_5.png";
import house_6 from "../../images/houses/house_6.png";
import house_7 from "../../images/houses/house_7.png";
import house_8 from "../../images/houses/house_8.png";
import metabnb_img from "../../images/metabnb_img.png";

import Card from "../../common/Card";
import Cards from "../../common/Cards";

const Main = () => {
  return (
    <main>
      <section className={classes.brands}>
        <img src={mbtoken_logo} alt="MBtoken brand logo" />
        <img src={metamask_logo} alt="Metamask brand logo" />
        <img src={opensea_logo} alt="OpenSea brand logo" />
      </section>
      <article className={classes.travel__cards}>
        <h2 className={classes.cards__title}>
          Inspiration for your next adventure
        </h2>
        <Cards>
          <Card src={house_1} alt="Desert House" />
          <Card src={house_2} alt="Desert House" />
          <Card src={house_3} alt="Desert House" />
          <Card src={house_4} alt="Desert House" />
          <Card src={house_5} alt="Desert House" />
          <Card src={house_6} alt="Desert House" />
          <Card src={house_7} alt="Desert House" />
          <Card src={house_8} alt="Desert House" />
        </Cards>
      </article>
      <article className={classes.metabnb__nfts}>
        <div className={classes.metabnb__main}>
          <h2 className={classes.matabnb__title}>Metabnb NFTs</h2>
          <p className={classes.metabnb__description}>
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our cutomer
            access to loads of our exclusive services.
          </p>
          <button className={classes.learn__more__btn}>Learn more</button>
        </div>
        <div>
          <img
            className={classes.metabnb__img}
            src={metabnb_img}
            alt="Metabnb NFTs"
          />
        </div>
      </article>
    </main>
  );
};
export default Main;
