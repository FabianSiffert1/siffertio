import React from 'react';

import {NavLink, Outlet} from "react-router-dom";
import LinkContainer from '../../components/LinkContainer/LinkContainer';

//import whiteLogo from '../../resources/images/logoW.svg'
import Logo from '../../resources/images/logo.svg'
import './Home.css';

//TODO: EXPORT NAVBAR TO COMPONENT

function Home() {
  return (
        <div>
          <Outlet/>
          <LinkContainer imageSource={Logo} link ='/index'/>
          <nav
            style={{
              borderTop: "solid 6px",
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

export default Home;
