import React from 'react';
import '../styles/Services.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import lincolnbaby from '../pictures/lincoln-baby.png';
import baby5 from '../pictures/baby5.JPG';

const Services = () => {

    return (  
        <div>
            <div className = "section">
                <div className = "content">
                    <h1 className = "line">Our Services</h1>
                    <Container fluid>
                        <Row>
                            <Col xs={7} className="align-items-left nopadding">
                            <h2>We offer many services for you and your child. Take a look at our services:</h2>
                            <ul>
                                <h2>
                                <li>Newborn Care & Examinations</li>
                                <li>Well Child Check-Up/Physical Examination</li>
                                <li>Sports Physicals, Camp Physicals, College Physicals</li>
                                <li>Immunizations</li>
                                <li>Wart removal</li>
                                <li>Nebulizer Treatment</li>
                                <li>Consultations (ADHD, Allergy & Asthma, Behavioral Evaluation)</li>
                                <li>Developmental screening</li>
                                <li>Asthma Testing (Spirometry)</li>
                                <li>Tongue-clipping (Frenotomy)</li>
                                <li>Complementaary Prenatal Visits</li>
                                <li>Nutritional Counseling</li>
                                <li>Suture removal</li>
                                <li>Ear Piercing</li>
                                </h2>
                            </ul>
                            </Col>    
                            <Col xs={5} className="align-items-left nopadding">
                                <img src={lincolnbaby} alt = "Dr. Lincoln with a newborn" class = "babypics img-fluid"></img>
                                <img src={baby5} alt = "baby five" class = "babypics img-fluid"></img>
                            </Col>
                        </Row>
                    </Container>
                    <div className = 'line'></div>
                </div>
            </div>

            <div className = "section">
                <div className = "content">
                    <h1 className = "line">Emergencies and Hospitalization</h1>
                    <h2>For any emergency after hours, call the office phone and the answering service will page Dr. Sergiwa.  If your child experiences any of the following symptoms, go to the nearest Emergency Room or call 911:</h2>
                    <Container fluid>
                        <Row>
                            <Col xs={6} className="align-items-center nopadding">
                            <ul>
                                <h2>
                                <li>Overdose</li>
                                <li>Poisoning</li>
                                <li>Temperature over 103.5</li>
                                <li>Unconsciousness</li>
                                <li>Difficulty Breathing</li>
                                <li>Convulsions</li>
                                </h2>
                            </ul>
                            </Col>    
                            <Col xs={6} className="align-items-center nopadding">
                            <ul>
                                <h2>
                                <li>Bleeding that won't stop</li>
                                <li>Severe pain</li>
                                <li>Severe injuries</li>
                                <li>Animal Bite</li>
                                <li>Small babies with fevers</li>
                                <li>Pregnancy labor</li>
                                </h2>
                            </ul>
                            </Col>
                        </Row>
                    </Container>
                    <div className = 'line'></div>
                </div>
            </div>
        </div>
    
    );
  }
  
  
  export default Services;