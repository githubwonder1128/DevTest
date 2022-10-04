import React, { useState, useRef } from 'react';
import { Row, Col, Button } from "antd";
import Hero_1 from '../../resource/hero-1.png';
import Hero_2 from '../../resource/hero-2.png';
import Hero_3 from './../Sliderource/hero-3.png';
import Circle from '../../resource/circle.png';
import Active from '../../resource/active-circle.png';

import Slider from './Slider';

function HeroBar() {
    const [current, setCurrent] = useState(0);

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

    const images = [
        "/asset/hero-1.png",
        "/asset/hero-2.png",
        "/asset/hero-3.png"
    ];

    const dragItem = useRef();
    const dragOverItem = useRef();

    const dragStart = (e) => {
       console.log(current)
    };
    
    const dragEnter = (e) => {
    console.log("dragenter")

    };
    
    const drop = (e) => {
        setCurrent(current+1)
    };

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
            <Slider slides={images} /> 
        </div>

    );
}

export default HeroBar;