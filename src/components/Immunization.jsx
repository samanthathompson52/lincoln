import React from 'react';
import '../styles/Fonts.css';

const Immunization = () => {

    return (  
        <div className = "section fullsize">
            <div className = "content" data-aos = "fade-up">
                <h1 className = "line">Immunization</h1>
                <h2>The CDC (Centers for Disease Control and Prevention) provides information on vaccines and their schedule.  Please check out the following links for more information:</h2>
                <div className = "linebreak">
                    <h5><a href = "https://www.cdc.gov/vaccines/schedules/hcp/imz/child-adolescent.html" className = "underline">Schedule</a></h5>
                    <h5><a href = "https://www.cdc.gov/vaccines/vpd/vaccines-diseases.html" className = "underline">Vaccines</a></h5>
                </div>
                <h2>Here are additional links for more information!</h2>
                <div className = "linebreak">
                    <h5><a href = "https://www.healthychildren.org/English/safety-prevention/at-home/medication-safety/Pages/Acetaminophen-for-Fever-and-Pain.aspx" className = "underline">Taminophen for Fever and Pain</a></h5>
                    <h5><a href = "https://www.tylenolprofessional.com/dosage" className = "underline">Tylenol Dosage</a></h5>
                </div>
                <div className = "line"></div>
            </div>
        </div>  
    );
  }
  
  
  export default Immunization;