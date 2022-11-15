const Cards = (props) => {
    const cards = {
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            padding:" 20px 100px 70px 100px",
            gap: "24px",
    }
    return (
        <ul style={cards}>
            {props.children}
        </ul>
    )

}
export default Cards;