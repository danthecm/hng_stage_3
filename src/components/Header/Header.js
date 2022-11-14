import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <section arial-label="main__content" className={classes.main__content}>
        <h1 className={classes.main__heading}>
          Rent a <span className={classes.highlight__bold}>Place</span> away
          from <span className={classes.highlight__bold}>Home</span> in the{" "}
          <span className={classes.highlight__bold}>Metaverse</span>
        </h1>
        <p className={classes.main__content__p}>
          we provide you access to luxury and affordable houses <br /> in the
          metaverse, get a chance to turn your <br /> imagination to reality at your
          comfort zone
        </p>
      </section>

      <section
        arial-aria-label="image__content"
        className={classes.img__section}
      ></section>
    </header>
  );
};
export default Header;
