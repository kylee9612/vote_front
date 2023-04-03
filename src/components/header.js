import React, {useEffect} from "react";
import NavBar from './navBar'

import './css/sweetalert.css';
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

    const HeaderStyled = styled.header`
        background: ${(props) =>
        (props.current ? "transparent":"rgba(255,255,255,.8)")
    };
    `

    return(
        <HeaderStyled className={"header"} current={pathname === "/"}>
            {/*<h1 onClick={toHome} current={pathname === "/"}>VOTE</h1>*/}
             <Logo onClick={toHome} current={pathname === "/"} className={"header-logo"}>VOTE</Logo>
            <NavBar></NavBar>
        </HeaderStyled>
    )
}
export default Header;