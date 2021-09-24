import React, {useState, useEffect} from 'react';
import './styles/App.css';
import './styles/Fonts.css';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Education from './components/Education.jsx';
import Immunization from './components/Immunization.jsx';
import Aos from "aos";
import "aos/dist/aos.css";
import LanguageContext from './languages/LanguageContext';
import Dictionary from './languages/Dictionary.js';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


const App = () => {
  
  const defaultEs = window.localStorage.getItem('rcml-lang') === "es";
  const [isSpanish, setSpanish] = useState(defaultEs || false);

  const provider = {
    dict: Dictionary[!isSpanish ? "en" : "es"] || Dictionary["en"]
  }

  useEffect(() =>{
    Aos.init({duration: 1500})
  }, []);
  
  return (

    <Router>
    <LanguageContext.Provider value={provider}>
      <Header isSpanish={isSpanish} setSpanish={setSpanish}/>
      <Switch>

        <Route path="/about"> 
          <About />
        </Route>

        <Route path="/services"> 
          <Services />
        </Route>

        <Route path="/education"> 
          <Education />
        </Route>

        <Route path="/immunization"> 
           <Immunization />
        </Route>

        <Route path="/"> 
          <div>
           <Home />
          </div>
        </Route>

      </Switch> 
    </LanguageContext.Provider>    
    </Router>
    
  );
}

export default App;
