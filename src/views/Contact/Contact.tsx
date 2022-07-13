import {NavLink, Outlet} from "react-router-dom";
import styles from "./Contact.module.scss";
import {getInvoices} from "../../tmpData/data";
import language from "../../resources/language/language";
import {useSelector} from "react-redux";

export default function Contact() {
    const currentTheme = useSelector((state: any) => state.theme.value)
    let invoices = getInvoices();
    return (
        <div className={styles.Contact}>
            <div
                className={currentTheme === language.THEME_DARK_VAR ? styles.darkTheme : currentTheme === language.THEME_LIGHT_VAR ? styles.lightTheme : styles.colorfulTheme}>
                <nav
                    style={{
                        borderRight: "solid 0.1vw",
                        padding: "0.5vw",
                    }}
                >
                    {invoices.map((invoice) => (
                        <NavLink
                            style={({isActive}) => {
                                return {
                                    display: "block",
                                    margin: "1vh 0",
                                    border: isActive ? "solid" : "solid transparent",
                                    borderRadius: "30vw",
                                    padding: "0.5vw",
                                };
                            }}
                            to={`/contact/${invoice.number}`}
                            key={invoice.number}
                        >
                            {invoice.name}
                        </NavLink>
                    ))}
                </nav>
                <Outlet/>
            </div>
        </div>
    );
}
