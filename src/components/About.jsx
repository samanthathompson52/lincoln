import React from 'react';
import '../styles/About.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import headshot from '../pictures/Headshot.png';


const About = () => {

    return (  
        <div className = "section">
            <div className = "content" data-aos = "fade-up">
                <h1 className = "line">About Us</h1>
                <Container fluid>
              <Row>
                <Col xs={3} className="align-items-left nopadding">
                <div className = "padding-center">
                  <img src={headshot} alt = "Dr. Sergiwa" class = " img-fluid headshot"></img>


                  <div className = "quote-box">
                    <h6>"On behalf of Lincoln Pediatrics, I want you to know that you and your children are our highest priority.  We want your experience to be pleasant and fulfilling, and we will do all we can to make this so.  I want to thank you once more for choosing us as your health care provider."</h6>
                    <h7>- Dr. Sergiwa</h7>
                  </div>
                </div>

                    
                </Col>    
                <Col xs={9} className="align-items-left nopadding">
                    <h3>Sergiwa Adam M.D.</h3>
                    <h2>Dr. Sergiwa is a well-established pediatrician, bringing with him extensive experience and our skills in pediatrics, newborns. adolescents, and young adults.</h2>
                    <h2>He gained much of his experience during his intensive training in United Kingdom and USA at Columbia University in Manhattan, NY.  During his work experience here in LaPorte and at one of the largest university hospitals in London, he worked as lead clinician and educator in pediatric diabetes, endocrinology and eating disorders.</h2>
                    <h2>Dr. Sergiwa is Board certified by the American Board of Pediatrics and by the Royal college of Physicians in United Kingdom.  Dr. Sergiwa earned a degree in Pediatrics and Neonatal Intensive Care from the Royal Collage of Pediatrics and Child Health in United Kingdom.  Dr. Sergiwa is also a Diplomat in Child Health from the Royal College of Glasgow, Scotland and he earned a Master's degree in Pediatric Health. </h2>   
                    <div className = "linebreak"></div>
                    <h4 className = "bold">Hospital Affiliations</h4>
                    <h2>Dr. Sergiwa is an active staff member at the following hospitals:</h2>
                    <ul>
                        <h4><li>St. Anthony Memorial Hospital, Michigan City</li>
                        <li>Memorial Children's Hospital, South Bend</li></h4>
                    </ul>
                    <div className = "linebreak"></div>

                    <h4 className = "bold">Awards</h4>
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