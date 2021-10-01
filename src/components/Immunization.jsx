import React from 'react';
import '../styles/Fonts.css';
import Text from './Text';

const Immunization = () => {

    return (  
        <div className = "section fullsize">
            <div className = "content" data-aos = "fade-up">
                <h1 className = "line"><Text id={"immunization"} /></h1>
                <h2><Text id={"cdc"} /></h2>
                <div className = "linebreak">
                    <h5><a href = "https://www.cdc.gov/vaccines/schedules/hcp/imz/child-adolescent.html" className = "underline" target = "_blank" rel="noreferrer"><Text id={"schedules"} /></a></h5>
                    <h5><a href = "https://www.cdc.gov/vaccines/vpd/vaccines-diseases.html" className = "underline" target = "_blank" rel="noreferrer"><Text id={"vaccines"} /></a></h5>
                </div>
                <h2><Text id={"links"} /></h2>
                <div className = "linebreak">
                    <h5><a href = "https://www.healthychildren.org/English/safety-prevention/at-home/medication-safety/Pages/Acetaminophen-for-Fever-and-Pain.aspx" className = "underline" target = "_blank" rel="noreferrer"><Text id={"fever"} /></a></h5>
                    <h5><a href = "https://www.tylenolprofessional.com/dosage" className = "underline" target = "_blank" rel="noreferrer"><Text id={"tylenol"} /></a></h5>
                </div>
                <div className = "line"></div>
            </div>
        </div>  
    );
  }
  
  
  export default Immunization;
