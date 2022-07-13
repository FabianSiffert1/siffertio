import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import { Provider } from 'react-redux'
import store from './utils/reduxStore/reduxStore'

import Home from './views/Home/Home';
import Biography from './views/Biography/Biography';
import Contact from './views/Contact/Contact';
import Contacts from './views/Contacts/contacts';
import Welcome from "./views/Welcome/Welcome";
import PageNotFound from "./views/PageNotFound/PageNotFound";
import Projects from "./views/Projects/Projects";


const container = document.getElementById('root');
// value! -> TS checks that value is never null
const root = ReactDOMClient.createRoot(container!);

root.render(<React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}>
                    <Route path="/" element={<Welcome/>}/>
                    <Route path="biography" element={<Biography/>}/>
                    <Route path="projects" element={<Projects/>}/>
                    <Route path="contact" element={<Contact/>}>
                        <Route
                            index
                            element={
                                <main style={{padding: "1rem", minWidth: "40vw"}}>
                                    <p>Select an invoice</p>
                                </main>
                            }
                        />
                        <Route path=":invoiceId" element={<Contacts/>}/>
                    </Route>
                    <Route
                        path="*"
                        element={
                            <PageNotFound/>
                        }
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    </Provider>
    </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
