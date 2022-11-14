import classes from "./Main.module.css";
import mbtoken_logo from "../../images/mbtoken.png"
import opensea_logo from "../../images/opensea.png"
import metamask_logo from "../../images/metamask.png"

const Main = () => {
return (
    <main>
        <section className={classes.brands}>
            <img src={mbtoken_logo} alt="MBtoken brand logo"/>
            <img src={metamask_logo} alt="Metamask brand logo" />
            <img src={opensea_logo} alt="OpenSea brand logo" />
        </section>
    </main>
)

}
export default Main;