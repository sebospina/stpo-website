import React, { Component } from 'react';
import Logo from '../Logo/Logo';
import Navmenu from '../Navmenu/Navmenu';
import { Link } from 'react-router-dom';


import burgerIcon from './burger.png';

import './Header.css';

class Header extends Component {

  constructor(props) {
    super(props);
    this.showMobilemenu = this.showMobilemenu.bind(this);
  }

  showMobilemenu() {
    document.getElementById('header__navmenu').classList.toggle('showMobilemenu');
  }

  render() {
    return (
      <div className="header">
        <div className="header__wrapper">
          <div className="header__logo">
            <Logo />
          </div>
          <div className="header__navmenumobile__button" onClick={this.showMobilemenu}>
            <i className="material-icons">menu</i>
          </div>
          <div className="header__navmenu" id="header__navmenu">
            <Navmenu />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
