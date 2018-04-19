import React, { Component } from 'react';
import './AboutUs.css';

import SectionHeader from '../SectionHeader/SectionHeader';
import ServiceItem from '../ServiceItem/ServiceItem';
import ScrollSpy from '../ScrollSpy/ScrollSpy';
import Contact from '../Contact/Contact';
import SectionTitle from '../SectionTitle/SectionTitle';
import SectionDescription from '../SectionDescription/SectionDescription';

import $ from 'jquery';

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.scrollTo = this.scrollTo.bind(this);
    this.itemHover = this.itemHover.bind(this);
    this.itemOut = this.itemOut.bind(this);
  }
  scrollTo(e) {
    let parent = e.target.parentElement;
    let id = parent.getAttribute('data-id');
    $('html, body').animate({
        scrollTop: $('#'+id).offset().top - 50
    }, 500);
  }
  itemHover(e) {
    let parent = e.target.parentElement;
    let elem = parent.getElementsByClassName('sectionScroll__tooltip');
    if(elem[0]) {
      elem[0].classList.toggle('scale-in');
    }
  }
  itemOut(e) {
    let parent = e.target.parentElement;
    let elem = parent.getElementsByClassName('sectionScroll__tooltip');
    if(elem[0]) {
      elem[0].classList.toggle('scale-in');
    }
  }
  componentDidMount() {
    const { hash } = window.location;
    if (hash !== '') {
      const id = hash.replace('#', '');
      $('html, body').animate({
          scrollTop: $('#'+id).offset().top - 50
      }, 500);
    }
  }
  render() {
    return (
        <div className="aboutUs">
        	
          <SectionHeader img="stpoServices__advisoryServices" title="About Us" />

          <div className="section aboutUs--light">
            <div className="row center-align">
              <SectionTitle text="Who are we?" />
            </div>
            <div className="row container center-align">
              <SectionDescription text="Smartempo is a new generation B2B Marketing Consultancy focused on driving results for our clients and valued partners.
                                        Our team is comprised of B2B industry experts with significant years of experience working with organizations ranging from SMB to Enterprise." />
            </div>
            <div className="row">
              <div className="col m12 l6">
                <img className="responsive-img" src={process.env.PUBLIC_URL + 'img/Lead-management.jpg'} />
              </div>
              <div className="col m12 l6 aboutUs__text">
                <ul>
                  <li>We are Marketers that have led Marketing organizations as executives, practitioners, and technologists</li>
                  <li>We have sold products and services to B2B buyers and intimately understand our clients’ needs and pain</li>
                  <li>We have built partner programs in the Marketing Ecosystem and have in-depth knowledge of MarTech vendors, 
                  agencies and their capabilities allowing us to make educated recommendations to our clients 
                  (we don't claim to do everything but we do know who does what best!)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="section aboutUs--dark">
            <div className="row center-align">
              <SectionTitle text="What we do!" />
            </div>
            <div className="row container center-align">
              <SectionDescription text="Smartempo helps drive revenue for B2B companies selling products and services across 
                                        industries with expert consulting services for the CMO office.  We provide services 
                                        in these primary areas:" />
            </div>
            <div className="row container">
              <div className="col m12 l6 aboutUs__text">
                <p>
                  <span className="aboutUs__text__subtitle">Technology Services</span> to include Marketing Automation deployment, Custom Development, 
                  Data/Integration, Reporting/Analytics, Lead Management and more!
                </p>
                <p>
                  <span className="aboutUs__text__subtitle">Advisory Services</span> for the CMO office, MarTech assessments/recommendations, Agency recommendations and more!
                </p>
                <p>
                  <span className="aboutUs__text__subtitle">Managed Services</span> allowing our team to serve as an extension of your organization through a full range of campaign services we can run on your behalf!
                </p>
                <p>
                  <span className="aboutUs__text__subtitle">Industry Solutions</span> for Business, Financial Services, Manufacturing, Higher Education, Sports and Entertainment, Travel, Utilities and more!
                </p>
              </div>
              <div className="col m12 l6">
                <img className="responsive-img" src={process.env.PUBLIC_URL + 'img/Marketing-automation.jpg'} />
              </div>
            </div>
          </div>

          <Contact />
        </div>
    );
  }
}

export default AboutUs;
