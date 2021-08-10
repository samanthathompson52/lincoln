import React, {useState} from 'react';
import './styles/App.css';
import './styles/Fonts.css';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';



const App = () => {
  const [Loading, setLoading] = useState(true);
  
  setTimeout(()=>{
      setLoading(false);
    }, 2000
  );
  
  return (
    
    <div className={Loading}>
      
      <Header />
      <Home />
    
    </div>
  );
}

export default App;
