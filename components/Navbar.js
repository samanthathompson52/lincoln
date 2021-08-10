import React from 'react';
import useScrollPosition from '@react-hook/window-scroll';
import Nav from 'react-bootstrap/Nav';

var Header = function Header() {
  var scrollY = useScrollPosition();

  return React.createElement(
    'nav',
    { className: 'navbar sticky-top navbar-expand-lg navbar-dark smoothscroll ' + (scrollY === 0 ? '' : 'shadow') },
    React.createElement(
      'a',
      { className: 'navbar-brand', href: '/#' },
      React.createElement('img', { src: 'logo75.png', alt: 'logo' })
    ),
    React.createElement(
      'button',
      { className: 'navbar-toggler', type: 'button', 'data-toggle': 'collapse', 'data-target': '#navbarNavAltMarkup', 'aria-controls': 'navbarNavAltMarkup', 'aria-expanded': 'false', 'aria-label': 'Toggle navigation' },
      React.createElement('span', { className: 'navbar-toggler-icon' })
    ),
    React.createElement(
      'div',
      { className: 'collapse navbar-collapse', id: 'navbarNavAltMarkup' },
      React.createElement(
        'div',
        { className: 'navbar-nav' },
        React.createElement(
          Nav.Link,
          { href: '/#' },
          'Home'
        ),
        React.createElement(
          Nav.Link,
          { href: '#about' },
          'About Me'
        ),
        React.createElement(
          Nav.Link,
          { href: '#project' },
          'Projects'
        ),
        React.createElement(
          Nav.Link,
          { href: '#experience' },
          'Experience'
        ),
        React.createElement(
          Nav.Link,
          { href: '#contact' },
          'Contact'
        )
      )
    )
  );
};

export default Header;