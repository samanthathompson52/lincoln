import React from 'react';
import Text from './Text';
import Files from './../languages/en.json';

const Education = () => {

    const files = [];
    for (let i=1; i<=31; i++) {
        files.push(`f-${i}`)
    }
    const filesHtml = files.map(e => (
        <h5 key={e}><a href ={`education_files/${Files[e]}.pdf`} className = 'underline' target = "_blank"  rel="noreferrer">
            <Text id={e} />
        </a></h5>
    ));

    return (  
        <div className = "section">
            <div className = "content" data-aos = "fade-up">
                <h1 className = "line"><Text id={"education"} /></h1>
                <h2><Text id={"downloads"} /></h2>
                <h5><a href = "https://www.healthychildren.org/English/safety-prevention/at-home/medication-safety/Pages/Acetaminophen-for-Fever-and-Pain.aspx" className = "underline" target = "_blank" rel="noreferrer"><Text id={"fever"} /></a></h5>
                <h5><a href = "https://www.tylenolprofessional.com/dosage" className = "underline" target = "_blank" rel="noreferrer"><Text id={"tylenol"} /></a></h5>
                {filesHtml}
            </div>
        </div>
    );
  }
  
  
  export default Education;
