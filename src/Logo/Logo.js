import React, { Component } from 'react';
import './Logo.css';
import logo from './logo.png';
import { Link } from 'react-router-dom';

class Logo extends Component {
  render() {
    return (
      <div className="logo">
      	<Link to='/' className="header__menu__link"><img src={logo} className="logo__img" /></Link>
      </div>
    );
  }
}

export default Logo;
