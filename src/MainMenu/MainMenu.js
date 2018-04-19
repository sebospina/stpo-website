import React, { Component } from 'react';

import './MainMenu.css';

class MainMenu extends Component {
  render() {
    return (
    	<div className="menu-container">
			  <div className="menu">
			    <ul>
			      <li><a href="http://marioloncarek.com" className="mainMenu__title">Services</a>
			        <ul>
			          <li><a href="#" className="mainMenu__subtitle">Advisory</a>
			            <ul>
			              <li><a href="#" className="mainMenu__item">Marketing Technology</a></li>
			              <li><a href="#" className="mainMenu__item">Agency Solution</a></li>
			            </ul>
			          </li>
			          <li><a href="#" className="mainMenu__subtitle">Managed</a>
			            <ul>
			              <li><a href="#" className="mainMenu__item">Campaign Services</a></li>
			            </ul>
			          </li>
			          <li><a href="#" className="mainMenu__subtitle">Technology Services</a>
			            <ul>
			              <li><a href="#" className="mainMenu__item">MA Implementation</a></li>
			              <li><a href="#" className="mainMenu__item">Data Integration</a></li>
			              <li><a href="#" className="mainMenu__item">Reporting & Analytics</a></li>
			              <li><a href="#" className="mainMenu__item">Custom Development</a></li>
			            </ul>
			          </li>
			        </ul>
			      </li>
			      <li><a href="#" className="mainMenu__title">Platforms Demos</a></li>
			      <li><a href="http://marioloncarek.com" className="mainMenu__title">Partner With Us</a></li>
			      <li><a href="http://marioloncarek.com" className="mainMenu__title">Contact Us</a> </li>
			    </ul>
			  </div>
			</div>
    );
  }
}

export default MainMenu;
