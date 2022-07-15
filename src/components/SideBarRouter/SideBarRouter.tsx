import language from "../../resources/language/language";
import styles from "./SideBarRouter.module.scss";
import {getInvoices} from "../../tmpData/data";

import {NavLink, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

export default function SideBarRouter() {
    const currentTheme = useSelector((state: any) => state.theme.value)
    let invoices = getInvoices();
    return (
        <div className={styles.SideBarRouter}>
            <div
                className={currentTheme === language.THEME_DARK_VAR ? styles.darkTheme : currentTheme === language.THEME_LIGHT_VAR ? styles.lightTheme : styles.colorfulTheme}>
                <nav
                    style={{
                        borderRight: "solid 0.2vw",
                        padding: "0.5vw",
                        minWidth: "12vw",
                    }}
                >
                    {invoices.map((invoice) => (
                        <NavLink className={styles.navigationItem}
                                 style={({isActive}) => {
                                     return {
                                         display: "block",
                                         margin: "1vh 0",
                                         border: isActive ? "solid" : "",
                                         borderRadius: "2vw",
                                         padding: "0.5vw",
                                     };
                                 }
                                 }
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
