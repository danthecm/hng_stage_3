import classes from "./Cards.module.css"

const Cards = (props) => {
    return (
        <ul className={classes.cards}>
            {props.children}
        </ul>
    )

}
export default Cards;