import classes from "./Footer.module.css";
import footer__logo from "../../images/footer_logo.png";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <section>
        <img src={footer__logo} />
        <div className={classes.social__icons}>
          <i class="bi bi-facebook"></i>
          <i class="bi bi-instagram"></i>
          <i class="bi bi-twitter"></i>
        </div>
      </section>
      <section className={classes.footer__section}>
            <h3 className={classes.footer__title}>Community</h3>
            <ul className={classes.footer__links}>
                <li>NFT</li>
                <li>Tokens</li>
                <li>Landlords</li>
                <li>Discord</li>
            </ul>

      </section>

      <section className={classes.footer__section}>
            <h3 className={classes.footer__title}>Places</h3>
            <ul className={classes.footer__links}>
                <li>Castle</li>
                <li>Farms</li>
                <li>Beachs</li>
                <li>Learn more</li>
            </ul>

      </section>


      <section className={classes.footer__section}>
            <h3 className={classes.footer__title}>About Us</h3>
            <ul className={classes.footer__links}>
                <li>Roadmap</li>
                <li>Creators</li>
                <li>Career</li>
                <li>Contact us</li>
            </ul>

      </section>
    </footer>
  );
};
export default Footer;
