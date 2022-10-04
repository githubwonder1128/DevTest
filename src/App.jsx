import { Row, Col } from 'antd';
import HeroBar from './components/heroBar';
// import HeroBar from './components/HeroBar/index';
import MenuBar from './components/menuBar';
import AccessBar from './components/accessBar';
import ProductBar from './components/productBar'
import FooterBar from './components/footerBar';
import ContactBar from './components/contactBar';
import ComplexBar from './components/complexBar'

import './styles/custom.scss';
// import './App.css';

function App() {
  return (
    <div className="App">
      <Row>
        <Col span={24} className="app-title">
            <p>FREE SHIPPING ON ALL ORDERS OVER $75</p>
        </Col>
      </Row>
      <MenuBar/>
      <HeroBar/>
      <AccessBar/>
      <ProductBar/>
      <FooterBar/>
      <ContactBar/>
      <ComplexBar/>
    </div>
  );
}

export default App;