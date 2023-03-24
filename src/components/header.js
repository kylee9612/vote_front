import React, {useEffect} from "react";
import NavBar from './navBar'

import './css/header.css'
import {useNavigate, useLocation} from "react-router-dom";
import styled from 'styled-components';



function Header() {
    const navigate = useNavigate()
    const toHome = () =>{
        navigate("/")
    }

    const { pathname } = useLocation();
    const Logo = styled.h1`
        color: ${(props) =>
            (props.current ? "#fff":"#000")
         };
    `;

    return(
        <header className={"header"}>
            {/*<h1 onClick={toHome} current={pathname === "/"}>VOTE</h1>*/}
             <Logo onClick={toHome} current={pathname === "/"}>VOTE</Logo>
            <NavBar></NavBar>
        </header>
    )
}
export default Header;