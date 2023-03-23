import React, { useState, useEffect } from 'react';
import { Menu, Button } from 'antd';
import styled from 'styled-components';
import { BrowserView, MobileView } from 'react-device-detect';
import { MenuOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Outlet, NavLink} from 'react-router-dom';
import Notice from './Notice';


const NavTop = styled.div`
  display: flex;
  // justify-content: flex-end;
  justify-content: right;
  position:fixed;
  button {
    background: transparent;
    border: none;
    box-shadow:none;
  }
`;

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
    return(

    <div>
        <NavTop>
            <Button type={"primary"} onClick={toggleChange} style={{marginBottom: 16}}>
                {toggleBar ? <MenuOutlined /> : <MenuFoldOutlined />}
            </Button>
        </NavTop>
        {toggleMenu &&
            <Menu
                defaultSelectedKeys={['1']}
                mode="inline"
                theme="light"
                inlineCollapsed={toggleBar}
                onClick={onMenuClick}
            >
                <Menu.Item key="info">
                    회사소개
                </Menu.Item>
                <Menu.Item key="vote">
                    투표하기
                </Menu.Item>
                <Menu.Item key="notice">
                    <NavLink to={"/notice"}>공지사항</NavLink>
                </Menu.Item>
            </Menu>

        }
    </div>);
}

export default NavBar;