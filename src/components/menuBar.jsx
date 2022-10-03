import React, { useState } from 'react';

import { Row, Col } from 'antd';
import Logo from '../resource/logo.png'
import Shopping from '../resource/shoppingCart.png';
import User from '../resource/user.png';
import Search from '../resource/search.png';
import MenuIcon from '../resource/menu.png';


function MenuBar() {
    const currentWidth = window.innerWidth;
    const [flag, setFlag] = useState(currentWidth > 768);
    const menuItems = [
        {
            label: "Men’s",
            key: "men"
        },
        {
            label: "WOMen’s",
            key: "women"
        },
        {
            label: "ACCESSORIES",
            key: "accessories"
        },
        {
            label: "SALE!",
            key: "sale"
        }
    ];

    const iconItems = [
        {
            src: Search
        },
        {
            src: User
        },
        {
            src: Shopping
        }
    ];

    const handleClick = () => {
        setFlag(!flag);
    };


    return (
        <Row className='menuBar-content'>
            <Col span={24} className="menuBar">
                <div className="menu-img" onClick={handleClick}>
                    <img
                        src={MenuIcon}
                        alt="MenuIcon"
                    />
                </div>

                <div className='logo-img'>
                    <img
                        src={Logo}
                        alt="Logo"
                    />
                </div>

                <div className="menuBar-items" style={{ display: flag ? "" : "none" }}>
                    {
                        menuItems.map((item, index) => (
                            <div className='menuItem' key={index}>{item.label}</div>
                        ))
                    }
                </div>
                <div className="menuBar-icons">
                    {
                        iconItems.map((icon, index) => (
                            <img className="menuIcon" src={icon.src} key={index} alt="menuBar-icon" />
                        ))
                    }
                </div>
            </Col>
        </Row>

    );
}

export default MenuBar;