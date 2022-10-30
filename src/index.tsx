import React from "react";
import * as ReactDOMClient from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./utils/reduxStore/reduxStore";

import Home from "./views/Home/Home";
import About from "./views/About/About";

import PageNotFound from "./views/PageNotFound/PageNotFound";
import Projects from "./views/Projects/Projects";

const container = document.getElementById("root");
// value! -> TS checks that value is never null
// eslint-disable-next-line
const root = ReactDOMClient.createRoot(container!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="*" element={<PageNotFound />} />
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