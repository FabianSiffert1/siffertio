import {NavLink, Outlet} from "react-router-dom";
import styles from "./Contact.module.scss";
import { getInvoices } from "../../tmpData/data";

export default function Contact() {
  let invoices = getInvoices();
  return (
    <div className={styles.Contact}>
      <nav
        style={{
          borderRight: "solid 0.1vw",
          padding: "0.5vw",
        }}
      >
        {invoices.map((invoice) => (
          <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1vh 0",
                border: isActive ? "solid" : "hidden",
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
  );
}
