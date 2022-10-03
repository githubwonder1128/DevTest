import { Row, Col } from "antd";
import Follow from '../resource/follow.png';
import Vector from "../resource/Vector.png"
import Twitter from '../resource/twitter.png';

import Description from './contactFrom';
import FollowUs from './FollowUs';

function ComplexBar() {
    const services = [
        "Accessibility",
        "Contact Us",
        "Return Policy",
        "FAQ",
        "Gift Certificates",
        "Wishlist"
    ];

    const companys = [
        "About Us",
        "Careers",
        "Press",
        "Affiliates"
    ]

    const deskFollows = [
        Vector,
        Follow,
    ]

    const mobileFollows = [
        Vector,
        Follow,
        Twitter
    ]


    const follows = window.innerWidth > 769 ? deskFollows : mobileFollows; 


    return (<div >
        <Row className="complexBar-content">
            <Col span={24} className="complexBar">
                <Description
                    key="customerService"
                    className="customerService"
                    title="Customer Service"
                    descriptions={services}
                    icon={window.innerWidth < 768 }
                />

                <Description
                    key="company"
                    className="company"
                    title="Company"
                    descriptions={companys}
                    icon={window.innerWidth < 768 }

                />

                <FollowUs
                    className="follow"
                    title="Follow Us"
                    follows={follows}

                />
            </Col>
        </Row>
    </div>);
}

export default ComplexBar;