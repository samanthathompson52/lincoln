import React from 'react';
import '../styles/Home.css';
import Container from 'react-bootstrap/Container';
import playground from '../pictures/playground.png';



const Home = () => {
  return (
    
 <div>
    <div>
        <Container fluid>
          <a href="#home"></a>
          <div className = "playground">   
          <img src = {playground} alt="loader"></img>           
          </div>
        </Container>
        
    </div>
</div>
  );
}

export default Home;