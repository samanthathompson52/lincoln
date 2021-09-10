import React from 'react';
import '../styles/Home.css';
import playground from '../pictures/playground.png';
import baby1 from '../pictures/baby1.png';
import baby2 from '../pictures/baby2.png';
import baby3 from '../pictures/baby3.png';
import baby4 from '../pictures/baby4.png';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import laporte from '../pictures/LPoffice.png';
import michigan from '../pictures/MCoffice.png';


const Home = () => {
  return (
    
 <div>
    <div>
          <a href="#home"></a>
          <div>   
            <img className = 'playground' src = {playground} alt="loader"></img>           
          </div>
        
    </div>

    <div className = 'section'>
      <div className = 'content'>
            <Container fluid>
              <Row>
                <Col xs={7} className="align-items-left nopadding">
                <h1 className = "line">Welcome to our practice!</h1>
                <h2>We want to thank you for showing interest in our practice!</h2>
                <h2>Whether you are a new or an established patient, we want to answer any questions you may have regarding Dr. Adam Sergiwa, his practice, or about your child's health.</h2>
                <h2>Please feel free to browse through our website and if you have any questions or concerns please contact our offices!</h2>
                <div className = "line"></div>
                </Col>    
                <Col xs={5} className="align-items-left nopadding">

                         

                  {/* <Container fluid>
                    <Row>
                      <Col>
                        <img src={baby1} alt = "baby one" class = "babypics img-fluid"></img>
                        <img src={baby2} alt = "baby two" class = "babypics img-fluid"></img>
                      </Col>

                      <Col>
                        <img src={baby3} alt = "baby three" class = "babypics img-fluid"></img>
                        <img src={baby4} alt = "baby four" class = "babypics img-fluid"></img>
                      </Col>
                  
                    </Row>
                  </Container> */}
                </Col>
              </Row>
            </Container>
        
    </div>
</div>
       
      

    <div className = 'section'>
      <div className = 'content'>
        <h1 className = "line">Our Locations</h1>
        <Container fluid>
              <Row>
                <Col xs={6} className="align-items-left nopadding">
                <img src={michigan} alt = "Michigan City Office Location" class = "locations img-fluid"></img>
                <div className = "indent">
                <h3>Michigan City Office</h3>
                <h4>9856 W. County Road 400 N.</h4>
                <h4> Michigan City, IN 46360</h4>
                <h4>219-878-0882</h4></div>
           
                </Col>    
                <Col xs={6} className="align-items-left nopadding">
                <img src={laporte} alt = "LaPorte Office Location" class = "locations img-fluid"></img>
                <div className = "indent">
                <h3>LaPorte Office</h3>
                <h4>414 Lincolnway </h4>
                <h4>La Porte, IN 46350</h4>
                <h4>219-326-5411</h4></div>
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