import classes from "./Hero.module.css";
import house_1 from "../../images/house_1.png"
import house_2 from "../../images/house_2.png"
import house_3 from "../../images/house_3.png"
import house_4 from "../../images/house_4.png"

const Hero = () => {
  return (
    <section className={classes.hero}>
      <article arial-label="main__content" className={classes.main__content}>
        <h1 className={classes.main__heading}>
          Rent a <span className={classes.highlight__bold}>Place</span> away
          from <span className={classes.highlight__bold}>Home</span> in the{" "}
          <span className={classes.highlight__bold}>Metaverse</span>
        </h1>
        <p className={classes.main__content__p}>
          we provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </p>
        <div className={classes.search}>
          <input className={classes.search__input} placeholder="Search for location" />
          <button className={classes.search__btn}>Search</button>
        </div>
      </article>

      <section
        arial-aria-label="image__content"
        className={classes.img__section}>
          <img src={house_1} className={classes.header__img} alt="savana house" />
          <img src={house_2} className={classes.header__img} alt="gucci house" />
          <img src={house_3} className={classes.header__img} alt="special house" />
          <img src={house_4} className={classes.header__img} alt="test house" />
      </section>
    </section>
  );
};
export default Hero;
