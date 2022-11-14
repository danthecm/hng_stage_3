import classes from "./Footer.module.css";
import footer__logo from "../../images/footer_logo.png";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <section className={classes.footer__main}>
        <article>
          <img src={footer__logo} />
          <div className={classes.social__icons}>
            <i class="bi bi-facebook"></i>
            <i class="bi bi-instagram"></i>
            <i class="bi bi-twitter"></i>
          </div>
        </article>
        <article className={classes.footer__section}>
          <h3 className={classes.footer__title}>Community</h3>
          <ul className={classes.footer__links}>
            <li>NFT</li>
            <li>Tokens</li>
            <li>Landlords</li>
            <li>Discord</li>
          </ul>
        </article>

        <article className={classes.footer__section}>
          <h3 className={classes.footer__title}>Places</h3>
          <ul className={classes.footer__links}>
            <li>Castle</li>
            <li>Farms</li>
            <li>Beachs</li>
            <li>Learn more</li>
          </ul>
        </article>

        <article className={classes.footer__section}>
          <h3 className={classes.footer__title}>About Us</h3>
          <ul className={classes.footer__links}>
            <li>Roadmap</li>
            <li>Creators</li>
            <li>Career</li>
            <li>Contact us</li>
          </ul>
        </article>
      </section>
      <p className={classes.copyright}> &copy; 2022 Metabnb</p>
    </footer>
  );
};
export default Footer;
