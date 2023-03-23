import React from "react";
import NavBar from './navBar'

import './css/header.css'
import {useNavigate} from "react-router-dom";
import styled from 'styled-components';

function Header() {
    const navigate = useNavigate()
    const toHome = () =>{
        navigate("/")
    }

    return(
        <header>
            <h1 onClick={toHome}>VOTE</h1>
            <NavBar></NavBar>
        </header>
    )
}
export default Header;