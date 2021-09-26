import React from 'react';
import '../styles/About.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import headshot from '../pictures/Headshot.png';
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
                  <img src={headshot} alt = "Dr. Sergiwa" className = " img-fluid headshot"></img>
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
            </div>
        </div>
    
    );
  }
  
  
  export default About;