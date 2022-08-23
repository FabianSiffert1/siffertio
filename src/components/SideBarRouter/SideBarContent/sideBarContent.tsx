import {useParams} from "react-router-dom";
import { getInvoice } from "../../../tmpData/data";

export default function SideBarContent() {
    let params = useParams();
    let invoice = getInvoice(parseInt(params.invoiceId!, 10));
    return (
        invoice ?
        <main style={{ wordWrap: "break-word", padding: "1vw", minWidth:"40vw", maxWidth:"80vw", paddingRight:"2vw" }}>
          <h2>Total Due: {invoice.amount}</h2>
          <p>
            {invoice.name!}: {invoice.number!}
          </p>
          <p>Due Date: {invoice.due}</p>
        </main>
     : <main>Invoice not found</main> );
  }