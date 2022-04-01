import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

//import logo from './resources/logoW.svg';
import './App.css';

function App() {
  return (
        <div>
           <Outlet/>
          <h1>Bookkeeper</h1>
          <nav
            style={{
              borderBottom: "solid 1px",
              paddingBottom: "1rem",
            }}
          >
          <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
              };
            }}
            to={`/biography`}
            key="biography"
          >
            Biography
          </NavLink>
          <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
              };
            }}
            to={`/contact`}
            key="Contact"
          >
            Contact
          </NavLink>
          </nav>

        </div>
  );
}

export default App;
