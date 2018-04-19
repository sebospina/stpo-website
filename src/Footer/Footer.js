import React, { Component } from 'react';
import './Footer.css';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
    	<section className="footer section">
    		<div className="footer__wrapper">
	      	<div className="footer__item footer__item--logo">
	      		<Logo />
	      	</div>
	      	<div className="footer__item">
	      		<p className="footer__title">About Us</p>
	      	</div>
	      	<div className="footer__item">
	      		<p className="footer__title">Services</p>
	      		<ul className="footer__list">
	      			<li className="footer__subtitle">Advisory</li>
	      			<li><Link to='/advisory-services#marketingTechnology' className="footer__link">Marketing Technology</Link></li>
	            <li><Link to='/advisory-services#agencySelection' className="footer__link">Agency Selection</Link></li>
	            <li><Link to='/advisory-services#cmoStaffing' className="footer__link">CMO & Staffing</Link></li>
	            <li><Link to='/advisory-services#partnerNetwork' className="footer__link">Partner Network</Link></li>
	      		</ul>
	      	</div>
	      	<div className="footer__item">
	      		<p className="footer__title">&nbsp;</p>
		      	<ul className="footer__list">
		    			<li className="footer__subtitle">Managed</li>
		    			<li><Link to='/managed-services#campaignServices' className="footer__link">Campaign Services</Link></li>
		    		</ul>
		    	</div>
	      	<div className="footer__item">
	      		<p className="footer__title">&nbsp;</p>
	      		<ul className="footer__list">
	      			<li className="footer__subtitle">Technology</li>
	      			<li><Link to='/technology-services#marketingTechnology' className="footer__link">Marketing Technology</Link></li>
	            <li><Link to='/technology-services#agencySelection' className="footer__link">Agency Selection</Link></li>
	            <li><Link to='/technology-services#cmoStaffing' className="footer__link">CMO & Staffing</Link></li>
	            <li><Link to='/technology-services#partnerNetwork' className="footer__link">Partner Network</Link></li>
	      		</ul>
	      	</div>
	      	<div className="footer__item">
	      		<p className="footer__title">Partner</p>
	      		<ul className="footer__list">
	      			<li className="footer__subtitle">Technology</li>
	      			<li><Link to='/partner-with-us#customerSuccess' className="footer__link">Marketing Technology</Link></li>
	            <li><Link to='/partner-with-us#campaignServices' className="footer__link">Agency Selection</Link></li>
	            <li><Link to='/partner-with-us#marTech' className="footer__link">CMO & Staffing</Link></li>
	            <li><Link to='/partner-with-uss#customDevelopment' className="footer__link">Partner Network</Link></li>
	      		</ul>
	      	</div>
	      	<div className="footer__item">
	      		<p className="footer__title">Contact</p>
	      	</div>
      	</div>
      </section>
    );
  }
}

export default Footer;
