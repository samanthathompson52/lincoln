import React from 'react';
import '../styles/About.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import DrSergiwa from '../pictures/Headshot-DrSergiwa.png';
import VictoriaSergiwa from '../pictures/Headshot-VictoriaSergiwa.jpg';
import Text from './Text';

const About = () => {

    return (  
        <div className = "section">
            <div className = "content" data-aos = "fade-up">
                <h1 className = "line"><Text id={"about"} /></h1>
                <Container fluid>
                  <Row>
                    <Col xs={12} lg={3} className="align-items-left nopadding">
                      <div className = "padding-center">
                        <img src={DrSergiwa} alt = "Dr. Sergiwa" className = "img-fluid headshot"></img>
                        <div className = "quote-box d-none d-lg-block">
                          <h6><Text id={"a-q"} /></h6>
                          <h7>- Dr. Sergiwa</h7>
                        </div>
                      </div>                  
                    </Col>    
                    <Col xs={12} lg={9} className="align-items-left nopadding">
                      <h3>Sergiwa Adam M.D.</h3>
                      <h2><Text id={"a-i1"} /></h2>
                      <h2><Text id={"a-i2"} /></h2>
                      <h2><Text id={"a-i3"} /></h2>   
                      <div className = "linebreak"></div>
                      <h4 className = "bold"><Text id={"affil"} /></h4>
                      <h2><Text id={"a-b1"} /></h2>
                      <ul>
                        <div>
                        <h2><li>St. Anthony Memorial Hospital, Michigan City</li>
                          <li>Memorial Children's Hospital, South Bend</li></h2>
                        </div>
                      </ul>
                      <div className = "linebreak"></div>

                      <h4 className = "bold"><Text id={"awards"} /></h4>
                      <h2>Franciscan Health Michigan City St. Luke Award</h2>
                      <div className = "linebreak"></div>
                    </Col>
                  </Row>
                </Container>
              <div className = "line"></div>
              <div className = "linebreak"></div>
              <Container fluid>
                  <Row>
                    <Col xs={12} lg={9} className="align-items-left nopadding">
                      <h3>Victoria Markovic Sergiwa</h3>
                      <h4 className = "bold">Administrative Director</h4>
                      <div className = "linebreak"></div>
                      <div className='pr-4'>
                      <h2><Text id={"a-i4"} /></h2>
                      <h2><Text id={"a-i5"} /></h2>
                      </div>
                      <div className = "linebreak"></div>
                    </Col>
                    <Col xs={12} lg={3} className="align-items-left nopadding">
                      <img src={VictoriaSergiwa} alt = "Victoria Markovic Sergiwa" className = "img-fluid headshot-2"></img>                       
                    </Col> 
                  </Row>
                </Container>
              <div className = "line"></div>
            </div>
          </div>     
    );
  }
  
  export default About;