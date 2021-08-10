var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import React, { useState } from 'react';
import './styles/App.css';
import './styles/Fonts.css';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';

var App = function App() {
  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      Loading = _useState2[0],
      setLoading = _useState2[1];

  setTimeout(function () {
    setLoading(false);
  }, 2000);

  return React.createElement(
    'div',
    { className: Loading },
    React.createElement(Header, null),
    React.createElement(Home, null)
  );
};

export default App;