import React from 'react';
import '../styles/Home.css';
import playground from '../pictures/playground.png';
import baby1 from '../pictures/baby1.png';
import baby2 from '../pictures/baby2.png';
import baby3 from '../pictures/baby3.png';
import baby4 from '../pictures/baby4.png';
import line from '../pictures/line.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

var Home = function Home() {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'div',
      null,
      React.createElement('a', { href: '#home' }),
      React.createElement(
        'div',
        null,
        React.createElement('img', { className: 'playground', src: playground, alt: 'loader' })
      )
    ),
    React.createElement(
      'div',
      { className: 'section' },
      React.createElement(
        'div',
        { className: 'content' },
        React.createElement(
          Container,
          { fluid: true },
          React.createElement(
            Row,
            null,
            React.createElement(
              Col,
              { xs: 7, className: 'align-items-left' },
              React.createElement(
                'h1',
                { className: 'line' },
                'Welcome to our practice!'
              ),
              React.createElement(
                'h2',
                null,
                'We want to thank you for showing interest in our practice!'
              ),
              React.createElement(
                'h2',
                null,
                'Whether you are a new or an established patient, we want to answer any questions you may have regarding Dr. Adam Sergiwa, his practice, or about your child\'s health.'
              ),
              React.createElement(
                'h2',
                null,
                'Please feel free to browse through our website and if you have any questions or concerns please contact our offices!'
              )
            ),
            React.createElement(
              Col,
              { xs: 5, className: 'align-items-left' },
              React.createElement(
                Container,
                { fluid: true },
                React.createElement(
                  Row,
                  null,
                  React.createElement(
                    Col,
                    null,
                    React.createElement('img', { src: baby1, alt: 'baby one', 'class': 'babypics img-fluid' }),
                    React.createElement('img', { src: baby2, alt: 'baby two', 'class': 'babypics img-fluid' })
                  ),
                  React.createElement(
                    Col,
                    null,
                    React.createElement('img', { src: baby3, alt: 'baby three', 'class': 'babypics img-fluid' }),
                    React.createElement('img', { src: baby4, alt: 'baby four', 'class': 'babypics img-fluid' })
                  )
                )
              )
            )
          )
        )
      )
    ),
    React.createElement(
      'div',
      { className: 'section' },
      React.createElement(
        'div',
        { className: 'content' },
        React.createElement(
          'h1',
          null,
          'Our Locations'
        ),
        React.createElement(
          'h2',
          null,
          'Our main office is located in Michigan City. Please specify which office you would like to be seen at.'
        ),
        React.createElement(
          'h2',
          null,
          'Our offices are open to serve you Monday through Saturday.  We accept all patients and almost all insurances.  We will make every effort to see you the same day or schedule you an appointment within 24 hours.  We are at your service 24 hours a day, 7 days a week, and promise that you will be seen on time.  '
        )
      )
    )
  );
};

export default Home;