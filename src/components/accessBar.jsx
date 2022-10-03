import { Row, Col } from 'antd'

import Men from '../resource/men.png';
import Women from '../resource/women.png';
import Access from '../resource/access.png';
import AccessMobile from '../resource/access-mobile.png';


function accessBar() {

    const cards = [
        {
            resource: Women,
            description: "Women’s"
        },
        {
            resource: Men,
            description: "Men’s"
        },

        {
            resource: window.innerWidth > 768 ? Access : AccessMobile,
            description: "Accessories"
        }
    ];


    return (
        <div className='accessBar-content'>
            <Row className='accessBar'>
                {
                    cards.map((card, index) =>
                        index === 2 ? <Col md={8} className="accessBar-Card" key={index} sm={24} xs={24}>
                            <img src={card.resource} className="cover_img" width="100%" alt='Card' />
                            <p className="description">{card.description}</p>
                        </Col> :
                            <Col md={8} className="accessBar-Card" key={index} sm={12} xs={12}>
                                <img src={card.resource} className="cover_img" width="100%" alt='Card' />
                                <p className="description">{card.description}</p>
                            </Col>
                    )
                }
            </Row>
        </div>
    );
}

export default accessBar;