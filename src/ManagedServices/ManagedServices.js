import React, { Component } from 'react';
import './ManagedServices.css';

import SectionHeader from '../SectionHeader/SectionHeader';
import ServiceItem from '../ServiceItem/ServiceItem';
import ScrollSpy from '../ScrollSpy/ScrollSpy';
import Contact from '../Contact/Contact';

import $ from 'jquery';

class ManagedServices extends Component {
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
        <div className="stpoServices">
        	<div className="sectionScroll">
            <ul>
              <li className="sectionScroll__item" data-id="campaignServices">
                <div className="sectionScroll__tooltip scale-transition scale-out">Campaign</div>
                <div className="sectionScroll__circle" onClick={this.scrollTo} onMouseOver={this.itemHover} onMouseOut={this.itemOut}></div>
              </li>
            </ul>
          </div>
        	<SectionHeader img="stpoServices__managedServices" title="Managed Services" />
          <ServiceItem img="Campaign-Services.jpg" color="dark" theId="campaignServices" title="Campaign Services" 
            text={<div>Let's face it B2B Marketing organizations are challenged with driving results and could use additional resources 
            so they can focus efforts elsewhere. Our customers could also use a hand when internal resources are stretched. 
            <p>Smartempo's managed services consultants help you our customer as an extension of your internal team allowing you to 
            focus on other value added tasks to drive business results. Our experts are highly skilled at multiple marketing automation 
            platforms and can support end to end campaign management including creation, production, deployment, and optimization.</p>
            <p>Our value delivered campaign services include:</p>
              <ul>
                <li>Marketing Asset Development & Enhancement (Customer journeys, Website, microsite, mobile app, Email, landing page, form 
                    templates supporting specific campaign goals, user testing and optimization)
                </li>
                <li>
                  Campaign Execution & Optimization (Audit of existing issues, key processes, business requirements, campaign development, 
                  performance tracking and campaign enhancements, deliverability and SPAM management, conversion, A/B testing, 
                  ROI tracking and reporting).
                </li>
              </ul>
            </div>} />

          <Contact />
        </div>
    );
  }
}

export default ManagedServices;
