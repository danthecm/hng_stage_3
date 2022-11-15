import classes from "./Modal.module.css";

import metamask from "../../images/metamask_icon.png";
import wallet_connect from "../../images/wallet_connect.png";

import { createPortal } from "react-dom";

const Backdrop = (props) => {
  return createPortal(
    <div onClick={props.onClick} className={classes.overlay}></div>,
    document.getElementById("backdrop-root")
  );
};

const Modal = (props) => {
  const showModal = props.showModal;
  const clearModal = props.clearModal;
  return createPortal(
    <>
      {showModal && <Backdrop onClick={clearModal} />}
      {showModal && (
        <section className={classes.modal}>
          <div className={classes.modal__heading}>
            <h2 className={classes.modal__title}>Connect Wallet</h2>
            <i
              onClick={clearModal}
              className={classes.cancel__icon + " bi bi-x-lg"}
            ></i>
          </div>
          <div className={classes.modal__content}>
            <h3 className={classes.wallets__title}>
              Choose your preferred wallet:
            </h3>
            <ul className={classes.wallet__list}>
              <li className={classes.wallet__item}>
                <img src={metamask} alt="metamask wallet logo" />
                <p className={classes.wallet__item__title}>Metamask</p>
                <i
                  className={classes.right__pointer + " bi bi-chevron-right"}
                ></i>
              </li>
              <li className={classes.wallet__item}>
                <img src={wallet_connect} alt="metamask wallet logo" />
                <p className={classes.wallet__item__title}>WalletConnect</p>
                <i
                  className={classes.right__pointer + " bi bi-chevron-right"}
                ></i>
              </li>
            </ul>
          </div>
        </section>
      )}
    </>,
    document.getElementById("overlay-root")
  );
};
export default Modal;
