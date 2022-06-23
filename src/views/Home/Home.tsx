import React from 'react';

import {NavLink, Outlet} from "react-router-dom";
import LinkContainer from '../../components/LinkContainer/LinkContainer';
import NavBar from '../../components/NavBar/NavBar';

//import whiteLogo from '../../resources/images/logoW.svg'
import Logo from '../../resources/images/logo.svg'
import './Home.css';

//TODO: EXPORT NAVBAR TO COMPONENT

function Home() {
    return (
        <div>
            <Outlet/>
            <div className={"NavigationContainer"}>
                <LinkContainer imageSource={Logo} link='/index'/>
                <NavBar/>
            </div>
        </div>
    );
}

export default Home;
