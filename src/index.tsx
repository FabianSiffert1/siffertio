import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import App from './App';
import Biography from './routes/biography/biography';
import Contact from './routes/contact/contact';
import Contacts from './routes/contacts/contacts';

const container = document.getElementById('root');
// value! -> TS checks that value is never null
const root = ReactDOMClient.createRoot(container!);

root.render(<React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="biography" element={<Biography />} />
        <Route path="contact" element={<Contact />} >
        <Route
        index
        element={
          <main style={{ padding: "1rem" }}>
            <p>Select an invoice</p>
          </main>
        }
      />
        <Route path=":invoiceId" element={<Contacts />} />
        </Route>
      <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
      </Route>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
  );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
