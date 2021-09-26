import React from 'react';
import '../styles/Services.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import lincolnbaby from '../pictures/lincoln-baby.png';
import Text from './Text';

const Services = () => {

    const services = [];
    for(let i=1; i<=18; i++) {
        services.push(`s-${i}`);
    }
    const servicesHtml = services.map(e => (
        <li key={e}><Text id={e} /></li>
    ));
    const e1 = [];
    for(let i=1; i<=6; i++) {
        e1.push(`e-1${i}`);
    }
    const e1Html = e1.map(e => (
        <li key={e}><Text id={e} /></li>
    ));
    const e2 = [];
    for(let i=1; i<=6; i++) {
        e2.push(`e-2${i}`);
    }
    const e2Html = e2.map(e => (
        <li key={e}><Text id={e} /></li>
    ));

    return (  
        <div>
            <div className = "section">
                <div className = "content" data-aos = "fade-up">
                    <h1 className = "line"><Text id={"services"} /></h1>
                    <Container fluid>
                        <Row>
                            <Col xs={12} lg={7} className="align-items-left nopadding">
                            <h2><Text id={"s-i"} /></h2>
                            <ul>
                                <h2>
                                {servicesHtml}
                                </h2>
                            </ul>
                            </Col>    
                            <Col lg={5} className="align-items-left nopadding d-none d-lg-block">
                                <Container fluid className = "float-right">                                  
                                <img src={lincolnbaby} alt = "Dr. Lincoln with a newborn" className = "portrait img-fluid"></img>
                                </Container>
                            </Col>
                        </Row>
                    </Container>
                    <div className = 'line'></div>
                </div>
            </div>

            <div className = "section">
                <div className = "content" data-aos = "fade-up">
                    <h1 className = "line"><Text id={"visits"} /></h1>
                    <h3><Text id={"s-info"} /></h3>
                    <h2><Text id={"s-i1"} /></h2>
                    <h2><Text id={"s-i2"} /></h2>
                    <div className = "spacing"></div>
                    <h3><Text id={"s-focus"} /></h3>
                    <h2><Text id={"s-f1"} /></h2>
                    <h2><Text id={"s-f2"} /></h2>
                </div>
            </div>

            <div className = "section">
                <div className = "content" data-aos = "fade-up">
                    <h1 className = "line"><Text id={"emergency"} /></h1>
                    <h2><Text id={"911"} /></h2>
                    <Container fluid>
                        <Row>
                            <Col xs={6} className="align-items-center nopadding">
                            <ul>
                                <h2>
                                {e1Html}
                                </h2>
                            </ul>
                            </Col>    
                            <Col xs={6} className="align-items-center nopadding">
                            <ul>
                                <h2>
                                {e2Html}
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