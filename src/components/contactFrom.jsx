import React, { useState } from 'react';
import { Row, Col } from 'antd'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';

function Description(props) {
    const [flag, setFlag] = useState(1);
    const { title, descriptions, className, icon } = props;

    const handleClick = () => {
        setFlag(!flag);
    }

    return (
        <div className={className}>
            <Row className="title">
                <Col span={24}>
                    <p >
                        {title}
                        {
                            icon ? <span onClick={handleClick} style={{ float: "right" }}>{flag ? <MinusOutlined /> : <PlusOutlined />}</span> : ""
                        }

                    </p>
                </Col>
            </Row>
            <div className="description" style={{ display: flag ? "" : "none" }}>
                {
                    descriptions.map((description, index) =>
                        <Row key={index}>
                            <Col span={24}>
                                <p key={index}>
                                    {description}
                                </p>
                            </Col>
                        </Row>
                    )
                }
            </div>

        </div>);
}

export default Description;