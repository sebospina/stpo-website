import React, { Component } from 'react';
import './Home.css';
import Intro from '../Intro/Intro';
import Platform from '../Platform/Platform';
import Team from '../Team/Team';
import PartnerWithUs from '../PartnerWithUs/PartnerWithUs';
import Contact from '../Contact/Contact';

class Home extends Component {
  render() {
    return (
    	<div className="baseContainer">
	      <Intro />
	      <Platform />
	      <Team />
        <PartnerWithUs />
        <Contact />
      </div>
    );
  }
}

export default Home;
