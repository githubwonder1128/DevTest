import React, { useState, useRef } from 'react';
import { Row, Col, Button, Carousel } from "antd";
import Circle from '../resource/circle.png';
import Active from '../resource/active-circle.png';

function HeroBar() {

    const items = [
        {
            src: "/asset/hero-1.png",
            title: "Shop New Arrivals",
            description: "Our coolest new items are waiting for you!"
        },
        {
            src: "/asset/hero-2.png",
            title: "Our Fave Tees",
            description: "Shop all of our favorites."
        },
        {
            src: "/asset/hero-3.png",
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
    ];

    const colors = window.innerWidth > 768 ? deskColors : mobileColors;

    const heroslider = useRef();

    return (
        <div className="heroBar-content">
            <Row>
                <Col span={24} className="heroBar">
                    <Carousel 
                    dotsClass="custom-dots"

                    autoplaySpeed={3000}
                    ref={ref => {
                        heroslider.current = ref;
                    }}>
                        {
                            items.map((item, _index) => <Row key={_index}>
                                <Col span={24}>
                                    <div className={"heroBar-Card"}>
                                        <div className='img-content'>
                                            <img src={item.src} alt='Hero' />
                                            <div className='heroBar-circles'>
                                                {
                                                    items.map((item, index) => <img alt='circle' key={index} src={Circle} className="heroBar-circle" onClick={() => heroslider.current.goTo(index)} />)
                                                }
                                            </div>
                                        </div>
                                        <div className="heroBar-Description">
                                            <p className={"title"} style={{ color: colors[_index] }}>
                                                {item.title}
                                            </p>
                                            <p className={"description"} style={{ color: colors[_index] }}>
                                                {item.description}
                                            </p>
                                            <Button className={"heroButton"}>SHOP NOW</Button>
                                        </div>
                                    </div>
                                </Col>
                            </Row>)
                        }
                    </Carousel>
                </Col>
            </Row>
        </div>

    );
}

export default HeroBar;