import React, {useState, useEffect} from "react";
import { Row, Col } from 'antd';
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
        } ,
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
        const tempItems = []
        for (let i = 0; i < cnt; i++) {
            if (perPage * currentPage+i < totalItems.length ) {
                tempItems.push(totalItems[perPage*currentPage + i])
            }
        }
        setItems(tempItems);
    }, [currentPage])

    const handlePage = (arrow) => {
        const cpage = currentPage;
        const totalPage = parseInt(totalItems.length / perPage) ;
        if (arrow === "prev") {
            setcurrentPage(cpage - 1 < 0 ? 0 : cpage - 1)
        }else{
            setcurrentPage((cpage + 1 > totalPage) ? totalPage : cpage + 1)
        }

    }

    return (
        <div className="productBar-content">
            <Row className="title">
                <Col span={24} >
                    <p>{perPage === 2 ? "Shop New Arrivals" : "New Arrivals"}</p>
                </Col>
            </Row>
            <Row className="productBar" wrap={false}>
                <Col flex={window.innerWidth > 768 ? "60px" : "16px"} className="arrowLeft" onClick={() => handlePage("prev")}>
                    <img src={LeftArrow} alt="Arrow"/>
                </Col>
                <Col flex="auto">
                    {/* <Carousel arrows {...settings}> */}

                            <Row>
                                {
                                    items.map((item, index) =>
                                        <Col span={6} key={index} className="productBar-Card" sm={12} md={6} xs={12}>
                                            <img src={item.src} className="img-content" alt="Product"/>
                                            <div className='content'>
                                                <p className="title">{item.title}</p>
                                                <p className="description">{item.description}</p>
                                                <p className="price">{item.price}</p>
                                            </div>

                                        </Col>
                                    )
                                }
                            </Row>

                    {/* </Carousel> */}
                </Col>
                <Col flex={window.innerWidth > 768 ? "60px" : "16px"} className="arrowRight" onClick={() => handlePage("next")}>
                <img src={RightArrow}  alt="Arrow"/>
                </Col>

            </Row>
        </div>
    );
}

export default ProductBar;