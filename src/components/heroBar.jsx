import React, { useState } from 'react';
import { Row, Col, Button } from "antd";
import Hero_1 from '../resource/hero-1.png';
import Hero_2 from '../resource/hero-2.png';
import Hero_3 from '../resource/hero-3.png';
import Circle from '../resource/circle.png';
import Active from '../resource/active-circle.png';

function HeroBar() {
    const [current, setCurrent] = useState(0);

    const items = [
        {
            src: Hero_1,
            title: "Shop New Arrivals",
            description: "Our coolest new items are waiting for you!"
        },
        {
            src: Hero_2,
            title: "Our Fave Tees",
            description: "Shop all of our favorites."
        },
        {
            src: Hero_3,
            title: "Men’s Tees",
            description: "Find the perfect shirt."
        }
    ];

    const deskColors = [
        "#10504F",
        "#FFFFFF",
        "#FFFFFF"
    ];

    const mobileColors = [
        "#10504F",
        "#10504F",
        "#10504F",
    ]

    const colors = window.innerWidth > 768 ? deskColors : mobileColors;


    return (
        <div className="heroBar-content">
            <Row>
                <Col span={24} className="heroBar">
                    <div className={"heroBar-Card"}>
                        <div className='img-content'>
                            <img src={items[current].src}  alt='Hero' />
                            <div className='heroBar-circles'>
                                {
                                    items.map((item, index) => <img alt='circle' key={index} src={current === index ? Active : Circle} className="heroBar-circle" onClick={() => setCurrent(index)} />)
                                }
                            </div>
                        </div>
                        <div className="heroBar-Description">
                            <p className={"title"} style={{ color: colors[current] }}>
                                {items[current].title}
                            </p>
                            <p className={"description"} style={{ color: colors[current] }}>
                                {items[current].description}
                            </p>
                            <Button className={"heroButton"}>SHOP NOW</Button>
                        </div>
                    </div>
                    
                </Col>
            </Row>
        </div>

    );
}

export default HeroBar;