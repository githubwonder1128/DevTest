import Footer from '../resource/footer.png'
import {Row,Col,Button} from 'antd';

function FooterBar() {
    return ( 
        <div className='footerBar-content'>
            <Row className="footerBar">
                <Col span={24} className="content">
                    <div className='img-content'>
                        <img src={Footer} style={{width:"100%"}} alt="Footer"/>
                    </div>
                    <div className="description-content">
                        <p className="title">Our Favorite Tees</p>
                        <p className="description">Everyday tees you need.</p>
                        <Button className='footerButton'>SHOP NOW</Button>
                    </div>
                    
                </Col>
            </Row>
        </div>
     );
}

export default FooterBar;