import React from 'react';
import '../styles/Header.css';

var Header = function Header() {

  return React.createElement(
    'div',
    { className: 'header-background' },
    React.createElement(
      'nav',
      { 'class': 'navbar sticky-top navbar-expand-lg navbar-light smoothscroll' },
      React.createElement(
        'a',
        { 'class': 'navbar-brand', href: '#home' },
        'Lincoln Pediatrics'
      ),
      React.createElement(
        'div',
        { 'class': 'collapse navbar-collapse', id: 'navbarNavAltMarkup' },
        React.createElement(
          'div',
          { 'class': 'navbar' },
          React.createElement(
            'a',
            { 'class': 'nav-item nav-link active', href: '#home' },
            'Welcome ',
            React.createElement(
              'span',
              { 'class': 'sr-only' },
              '(current)'
            )
          ),
          React.createElement(
            'a',
            { 'class': 'nav-item nav-link', href: '#home' },
            'About Us'
          ),
          React.createElement(
            'a',
            { 'class': 'nav-item nav-link', href: '#home' },
            'Our Services'
          ),
          React.createElement(
            'a',
            { 'class': 'nav-item nav-link', href: '#home' },
            'Education'
          ),
          React.createElement(
            'a',
            { 'class': 'nav-item nav-link', href: '#home' },
            'Immunization'
          )
        )
      )
    )
  );
};

export default Header;