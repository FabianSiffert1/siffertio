import {NavLink, Outlet} from "react-router-dom";
import styles from "./Contact.module.scss";
import { getInvoices } from "../../tmpData/data";

export default function Contact() {
  let invoices = getInvoices();
  return (
    <div className={styles.Contact}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {invoices.map((invoice) => (
          <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "lightblue" : "white",
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
