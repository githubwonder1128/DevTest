import React, { useState, useEffect, useRef } from "react";
import { Row, Col, Carousel } from 'antd';
import Product from '../resource/product.png';
import LeftArrow from "../resource/left.png";
import RightArrow from "../resource/right.png";


function ProductBar() {
    const [currentPage, setcurrentPage] = useState(0);
    const [items, setItems] = useState([]);
    const [perPage, setPerPage] = useState(window.innerWidth > 768 ? 4 : 2);


    const totalItems = [
        {
            src: Product,
            title: "Product Title",
            description: "WOMEN’S T-SHIRT",
            price: "$1"
        },
        {
            src: Product,
            title: "Product Title",
            description: "WOMEN’S T-SHIRT",
            price: "$2"
        },
        {
            src: Product,
            title: "Product Title",
            description: "WOMEN’S T-SHIRT",
            price: "$3"
        },
        {
            src: Product,
            title: "Product Title",
            description: "WOMEN’S T-SHIRT",
            price: "$4"
        },
        {
            src: Product,
            title: "Product Title",
            description: "WOMEN’S T-SHIRT",
            price: "$5"
        },
        {
            src: Product,
            title: "Product Title",
            description: "WOMEN’S T-SHIRT",
            price: "$6"
        },
        {
            src: Product,
            title: "Product Title",
            description: "WOMEN’S T-SHIRT",
            price: "$7"
        },
        {
            src: Product,
            title: "Product Title",
            description: "WOMEN’S T-SHIRT",
            price: "$8"
        },
        {
            src: Product,
            title: "Product Title",
            description: "WOMEN’S T-SHIRT",
            price: "$9"
        }
    ]

    useEffect(() => {
        const cnt = perPage;
        const tempItems = [];
        for (let i = 0; i < totalItems.length / cnt; i++) {
            const temp = [];
            for (let k = 0; k < cnt; k++) {
                if (totalItems[cnt * i + k]) {
                    temp.push(totalItems[cnt * i + k])
                }
            }
            tempItems.push(temp)
        }

        setItems(tempItems);
    }, [currentPage])


    const slider = useRef();

    return (
        <div className="productBar-content">
            <Row className="title">
                <Col span={24} >
                    <p>{perPage === 2 ? "Shop New Arrivals" : "New Arrivals"}</p>
                </Col>
            </Row>
            <Row className="productBar" wrap={false}>
                <Col flex={window.innerWidth > 768 ? "60px" : "16px"} className="arrowLeft">
                    <img src={LeftArrow} alt="Arrow"  onClick={() => slider.current.prev()}/>
                </Col>
                <Col flex="auto">
                    <Carousel ref={ref => {
                        slider.current = ref;
                    }}>
                        {
                            items.map((item, index) => <div> <Row key={index}>
                                {
                                    item.map((product, _index) => <Col span={6} key={_index} className="productBar-Card" sm={12} xs={12} md={6}>
                                        <Row className="img-content">
                                            <Col span={24} >
                                                <img src={product.src} alt="Product" />

                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={24} className="content">
                                                <p className="title">{product.title}</p>
                                                <p className="description">{product.description}</p>
                                                <p className="price">{product.price}</p>
                                            </Col>
                                        </Row>

                                    </Col>)
                                }
                            </Row></div>)
                        }
                    </Carousel>
                </Col>
                <Col flex={window.innerWidth > 768 ? "60px" : "16px"} className="arrowRight">
                    <img src={RightArrow} alt="Arrow"  onClick={ () => slider.current.next()} />
                </Col>

            </Row>
        </div>
    );
}

export default ProductBar;