import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/Home.css';
import playground from '../pictures/playground.png';
import baby1 from '../pictures/baby1.png';
import doctor1 from '../pictures/doctor1.png';
import doctor2 from '../pictures/doctor2.png';
import frontdesk from '../pictures/frontdesk.png';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import laporte from '../pictures/LPoffice.png';
import michigan from '../pictures/MCoffice.png';
import Image from 'react-bootstrap/Image';
import Text from './Text';

const Home = () => {
  return (
    
 <div>
    <div>
       <div >   
          <img className = 'playground' src = {playground} alt="loader" ></img>           
        </div>      
    </div>

    <div className = 'section'>
      <div className = 'content' data-aos = "fade-up">
          <Container fluid>
            <Row>
              <Col xs={12} lg={7} className="align-items-left nopadding d-flex">
                <div>
                  <h1 className = "line"><Text id={"h-welcome"} /></h1>
                  <h2><Text id={"h-i1"} /></h2>
                  <h2><Text id={"h-i2"} /></h2>
                  <h2><Text id={"h-i3"} /></h2>               
                  <h2><Text id={"h-i4"} /></h2>
                  <div className = "line"></div>
                </div>
              </Col> 

              <Col xs={5} className="align-items-left nopadding d-none d-lg-flex">               
                <Container fluid className="d-flex align-items-center">
                  <Carousel>
                    <Carousel.Item>
                      <img className = "img-fluid" src= {baby1} alt="First slide"/>                                     
                    </Carousel.Item>
                    <Carousel.Item>
                      <img className="img-fluid" src= {frontdesk} alt="Second slide"/>                                                      
                    </Carousel.Item>
                    <Carousel.Item>
                      <img className="img-fluid" src= {doctor1} alt="Third slide"/>                                              
                    </Carousel.Item>
                    <Carousel.Item>
                      <img className="img-fluid" src= {doctor2} alt="Fourth slide"/>                                                      
                    </Carousel.Item>
                  </Carousel>
                </Container>                             
              </Col>
            </Row>
          </Container>       
      </div>
    </div>
       
      

    <div className = 'section'>
      <div className = 'content' data-aos = "fade-up">
        <h1 className = "line">Our Locations</h1>
        <Container fluid>
            <Row>
              <Col xs={12} lg={6} className="align-items-left pr-lg-4">
              <Image src={michigan} alt = "Michigan City Office Location" fluid className="locations pb-2"/>
              <div className = "indent">
                <h3>Michigan City Office</h3>
                <h4>9856 W. County Road 400 N.</h4>
                <h4>Michigan City, IN 46360</h4>
                <h4>219-878-0882</h4>
              </div>         
              </Col>   

              <Col xs={12} lg={6} className="align-items-left pl-lg-4">
                <Image src={laporte} alt = "Michigan City Office Location" fluid className="locations pb-2"/>
                <div className = "indent">
                  <h3>LaPorte Office</h3>
                  <h4>414 Lincolnway </h4>
                  <h4>La Porte, IN 46350</h4>
                  <h4>219-326-5400</h4>
                </div>
                <div className = "spacing"></div>
              </Col>
            </Row>
          </Container>

        <h2>Our offices are open to serve you Monday through Saturday.  We accept all patients and almost all insurances.  We will make every effort to see you the same day or schedule you an appointment within 24 hours.  </h2>
        <div className = "line"></div>
      </div>
    </div>
  </div>
  );
}

export default Home;