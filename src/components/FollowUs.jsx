import { Row, Col } from 'antd';

function FollowUs(props) {
    const { title, follows,className } = props;
    return (
        <div className={className}>
            <Row>
                <Col span={24} className="title">
                    <p>{title}</p>
                </Col>

            </Row>
            <Row>
                <Col span={24} className="description">
                    {
                        follows.map((follow, index) => <img src={follow} key={index} className="followIcon" alt='Icon' />)
                    }
                </Col>
            </Row>
        </div>

    );
}

export default FollowUs;