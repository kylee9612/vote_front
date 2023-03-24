import React, { useState, useEffect } from 'react';
import { Menu, Button } from 'antd';
import styled from 'styled-components';
import { BrowserView, MobileView } from 'react-device-detect';
import { MenuOutlined, MenuFoldOutlined } from '@ant-design/icons';
import {Outlet, NavLink, useLocation} from 'react-router-dom';
import Notice from './Notice';


const NavTop = styled.div`
  display: flex;
  // justify-content: flex-end;
  justify-content: right;
  position:fixed;
  top:5%;
  button {
    background: transparent;
    border: none;
    box-shadow:none;
  }
`;

const StyledButton = styled(Button)`
  color: #fff;
  font-weight: normal;
  
    color: ${(props) =>
        (props.current ? "#fff":"#000")
    };

  :not(:disabled):hover {
    background:none;
    color: #000;
  }

`;

const StyledMenu = styled(Menu)`
    background: ${(props) =>
    (props.current ? "rgba(255,255,255,.3)":"rgba(0,0,0,.7)")
};
`

function NavBar() {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [toggleBar, setToggleBar] = useState(true)

    const toggleChange = () => {
        setToggleMenu(!toggleMenu)
        setToggleBar(!toggleBar)
    }

    const onMenuClick = () => {
        setToggleMenu(!toggleMenu)
        setToggleBar(!toggleBar)
    }

    const { pathname } = useLocation();
    return(

    <div>
        <NavTop>
            <StyledButton type={"primary"} onClick={toggleChange} style={{marginBottom: 16}} className={"button"} current={pathname === "/"}>
                {toggleBar ? <MenuOutlined /> : <MenuFoldOutlined />}
            </StyledButton>
        </NavTop>
        {toggleMenu &&
            <StyledMenu
                defaultSelectedKeys={['1']}
                mode="inline"
                theme="light"
                inlineCollapsed={toggleBar}
                onClick={onMenuClick}
                className={"menu-ul"}
                current={pathname === "/"}
            >
                <Menu.Item key="info" className={"menu-li"}>
                    회사소개
                </Menu.Item>
                <Menu.Item key="vote" className={"menu-li"}>
                    <NavLink to={"/votelist"}>투표하기</NavLink>
                </Menu.Item>
                <Menu.Item key="notice" className={"menu-li"}>
                    <NavLink to={"/notice"}>공지사항</NavLink>
                </Menu.Item>
            </StyledMenu>

        }
    </div>);
}

export default NavBar;