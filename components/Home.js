import React from 'react';
import '../styles/Home.css';
import Container from 'react-bootstrap/Container';
import playground from '../pictures/playground.png';

var Home = function Home() {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'div',
      null,
      React.createElement(
        Container,
        { fluid: true },
        React.createElement('a', { href: '#home' }),
        React.createElement(
          'div',
          { className: 'playground' },
          React.createElement('img', { src: playground, alt: 'loader' })
        )
      )
    )
  );
};

export default Home;