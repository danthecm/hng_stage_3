import classes from "./Card.module.css";
import Stars from "./Stars";

const Card = (props) => {
  return (
    <li className={classes.card}>
      <figure>
        <img className={classes.card__img} src={props.src} alt={props.alt} />
        <figcaption className={classes.card__caption}>
          Desert king{" "}
          <span className={classes.card__price} aria-label="price">
            1MBT per night
          </span>
          2345km away <span>available for 2weeks stay</span>
        </figcaption>
        <Stars className={classes.stars} />
      </figure>
    </li>
  );
};
export default Card;
