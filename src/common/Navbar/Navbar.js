import classes from "./Navbar.module.css";
import logo from "../../images/logo.png";
import Modal from "../../components/Modal/Modal";
import { useRef, useState } from "react";

const Navbar = (props) => {
  const [showModal, setShowModal] = useState(false);
  const nav_list = useRef()
  const nav_btn = useRef()

  const connectBtnHandler = () => {
    setShowModal(true);
  };

  const clearModal = () => {
    setShowModal(false);
  };

  const toggleNavHandler = (e) => {
    console.log(e.target)
    nav_list.current.classList.toggle("mobile_hidden")
    nav_btn.current.classList.toggle("mobile_hidden")
  }

  return (
    <>
      <Modal showModal={showModal} clearModal={clearModal} />
      <nav aria-label="Main" className={classes.navbar}>
        <div className={classes.hanger_nav} onClick={toggleNavHandler}>
          <img src={logo} alt="Metabnb Logo" />
          <div className={classes.hanger}>
            <div className={classes.buger}></div>
            <div className={classes.buger}></div>
            <div className={classes.buger}></div>
          </div>

        </div>
        <ul ref={nav_list} className={`${classes.nav__items} mobile_hidden`}>
          <li className={classes.nav__item}>
            <a href="/">Home</a>
          </li>
          <li className={classes.nav__item}>
            <a href="/place2stay">Place to stay</a>
          </li>
          <li className={classes.nav__item}>NFTs</li>
          <li className={classes.nav__item}>Community</li>
        </ul>
        <button ref={nav_btn} onClick={connectBtnHandler} className={`${classes.btn__connect} mobile_hidden`}>
          Connect wallet
        </button>
      </nav>
    </>
  );
};

export default Navbar;
