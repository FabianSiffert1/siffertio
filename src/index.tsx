import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Home from './views/Home/Home';
import Biography from './views/Biography/Biography';
import Contact from './views/Contact/Contact';
import Contacts from './views/Contacts/contacts';
import ImageRouter from "./components/ImageRouter/ImageRouter";
import Secret from "./resources/images/buttons/secret.svg"
import AttractScreen from "./views/AttractScreen/AttractScreen";

const container = document.getElementById('root');
// value! -> TS checks that value is never null
const root = ReactDOMClient.createRoot(container!);

root.render(<React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}>
                    <Route path="/" element={<AttractScreen/>}/>
                    <Route path="biography" element={<Biography/>}/>
                    <Route path="contact" element={<Contact/>}>
                        <Route
                            index
                            element={
                                <main style={{padding: "0rem"}}>
                                    <p>Select an invoice</p>
                                </main>
                            }
                        />
                        <Route path=":invoiceId" element={<Contacts/>}/>
                    </Route>
                    <Route
                        path="*"
                        element={
                            <main style={{padding: "0rem", alignItems: "center"}}>
                                <p>There's nothing here!</p>
                                <ImageRouter url={'/'} navLinkKey={'Home'} imagePath={Secret}/>
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
