import { Row, Col, Input, Button } from 'antd'
import Mail from '../resource/group.png';

function ContactBar() {
    return (<div className='contactBar-content'>
        <Row className='contactBar'>
            <Col span={24} className="title">
                <span>
                    <img src={Mail} className="avatar" alt='Mail' />
                </span>

                <span className="title-title">Sign Up & Stay Connected</span>

            </Col>

        </Row>
        <Row className='contactBar-form'>
            <Col span={12} className="description" sm={24} xs={24} md={12}>
                <p >Sign up for the newsletter and get 20% off! Gain access to exclusive offers and be the first to know when new stuff drops!</p>

            </Col>
            <Col span={12}  sm={24} xs={24} md={12}>
                <Row className="contactBar-content">
                    <Col span={19} style={{paddingRight:13}} xs={24} sm={24} md={19}>

                        <Input className="email_address" placeholder="Enter Your Email Address" />

                    </Col>
                    <Col span={5}  xs={24} sm={24} md={5}>
                        <Button className="subscribe">SUBSCRIBE</Button>
                    </Col>
                </Row>
            </Col>

        </Row>
    </div>);
}

export default ContactBar;