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

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


const App = () => {
  const [Loading, setLoading] = useState(true);
  
  setTimeout(()=>{
      setLoading(false);
    }, 2000
  );

  useEffect(() =>{
    Aos.init({duration: 1500})
  }, []);
  
  return (

    <Router>
    <div> 
    <Header />
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
          <div className={Loading}>
           <Home />
          </div>
        </Route>

      </Switch> 
    </div>    
    </Router>
    
  );
}

export default App;
