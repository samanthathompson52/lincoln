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
                <div className = "content" data-aos = "fade-up">
                    <h1 className = "line">Our Services</h1>
                    <Container fluid>
                        <Row>
                            <Col xs={12} lg={7} className="align-items-left nopadding">
                            <h2>We offer many services for you and your child. Take a look at our services:</h2>
                            <ul>
                                <h2>
                                <li>Newborn Care & Examinations</li>
                                <li>Well Child Check-Up/Physical Examination</li>
                                <li>Sports Physicals, Camp Physicals, College Physicals</li>
                                <li>Immunizations</li>
                                <li>Wart removal</li>
                                <li>Nebulizer Treatment</li>
                                <li>Laboratory Testing - Strep, Urine, RSV, and Influenza Testing</li>
                                <li>Consultations</li>
                                <li>ADHD</li> 
                                <li>Allergy & Asthma</li> 
                                <li>Behavioral Evaluation</li>
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
                            <Col lg={5} className="align-items-left nopadding d-none d-lg-block">
                                <Container fluid className = "float-right">
                                    
                                <img src={lincolnbaby} alt = "Dr. Lincoln with a newborn" class = "portrait img-fluid"></img>
                                {/* <img src={baby5} alt = "baby five" class = "babypics img-fluid"></img> */}

                                </Container>
                            </Col>
                        </Row>
                    </Container>
                    <div className = 'line'></div>
                </div>
            </div>

            <div className = "section">
                <div className = "content" data-aos = "fade-up">
                    <h1 className = "line">Well-Routine Visits</h1>
                    <h3>Information on visits in our office</h3>
                    <h2>New borns are scheduled to be seen in our office after a few days from the hospital discharge.  In the first two years of your baby's life, you will be scheduled reoutine-well visits on a regular basis.</h2>
                    <h2>For well visits we do allocate 20 minutes that you will spend with the doctor and the nurses.  Please be prepared to stay longer if immunizations are required at the time of visit.</h2>
                    <div className = "spacing">
                        
                    </div>
                    <h3>Focus of the visit</h3>
                    <h2>We ask you to be prepared and organized with any questions you may have about your baby for our physician.  We will focus on the physical exam, discussing developmental milestones, and anticipatory guidance.</h2>
                    <h2>If any concerns and medical issues arise that need extra time, a follow-up visit will be made for you.  This way other scheduled patients will not experience delays.</h2>
                </div>
            </div>

            <div className = "section">
                <div className = "content" data-aos = "fade-up">
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