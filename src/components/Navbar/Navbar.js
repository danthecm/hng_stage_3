import classes from "./Navbar.module.css";
import logo from "../../images/logo.png";
import Modal from "../Modal/Modal";
import { useState } from "react";

const Navbar = (props) => {
  const [showModal, setShowModal] = useState(false);

  const connectBtnHandler = () => {
    setShowModal(true);
  }

  const clearModal = () => {
    setShowModal(false);
  }
  return (
    <>
      <Modal showModal={showModal} clearModal={clearModal}  />
      <nav aria-label="Main" className={classes.navbar}>
        <img src={logo} alt="Metabnb Logo" />
        <ul className={classes.nav__items}>
          <li className={classes.nav__item}>Home</li>
          <li className={classes.nav__item}>Place to stay</li>
          <li className={classes.nav__item}>NFTs</li>
          <li className={classes.nav__item}>Community</li>
        </ul>
        <button onClick={connectBtnHandler} className={classes.btn__connect}>Connect wallet</button>
      </nav>
    </>
  );
};

export default Navbar;
