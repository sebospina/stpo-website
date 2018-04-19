import React, { Component } from 'react';
import './TechnologyServices.css';

import SectionHeader from '../SectionHeader/SectionHeader';
import ServiceItem from '../ServiceItem/ServiceItem';
import ScrollSpy from '../ScrollSpy/ScrollSpy';
import Contact from '../Contact/Contact';

import $ from 'jquery';

class TechnologyServices extends Component {
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
            <li className="sectionScroll__item" data-id="martechDeployment">
              <div className="sectionScroll__tooltip scale-transition scale-out">MarTech</div>
              <div className="sectionScroll__circle" onClick={this.scrollTo} onMouseOver={this.itemHover} onMouseOut={this.itemOut}></div>
            </li>
            <li className="sectionScroll__item" data-id="leadManagement">
              <div className="sectionScroll__tooltip scale-transition scale-out">Lead</div>
              <div className="sectionScroll__circle" onClick={this.scrollTo} onMouseOver={this.itemHover} onMouseOut={this.itemOut}></div>
            </li>
            <li className="sectionScroll__item" data-id="customDevelopment">
              <div className="sectionScroll__tooltip scale-transition scale-out">Development</div>
              <div className="sectionScroll__circle" onClick={this.scrollTo} onMouseOver={this.itemHover} onMouseOut={this.itemOut}></div>
            </li>
            <li className="sectionScroll__item" data-id="reporting">
              <div className="sectionScroll__tooltip scale-transition scale-out">Reporting</div>
              <div className="sectionScroll__circle" onClick={this.scrollTo} onMouseOver={this.itemHover} onMouseOut={this.itemOut}></div>
            </li>
            <li className="sectionScroll__item" data-id="data">
              <div className="sectionScroll__tooltip scale-transition scale-out">Data</div>
              <div className="sectionScroll__circle" onClick={this.scrollTo} onMouseOver={this.itemHover} onMouseOut={this.itemOut}></div>
            </li>
          </ul>
        </div>
        <SectionHeader img="stpoServices__technologyServices" title="Technology Services" />

        <ServiceItem img="Marketing-Automation.jpg" color="dark" theId="martechDeployment" title="MarTech Deployment" 
            text={<div><p>Our team has hands-on expertise with the most common marketing automation platforms used such as Eloqua, Marketo, Adobe Campaign, Pardot, Hubspot and Salesforce</p>
                  <ul>
                  <li>MAP Implementation (Technology audit, IP warming, data cleansing, basic asset configuration, Scoring matrix, segmentation, Branding & deliverability and configuration of existing drip campaigns.)</li>
                  <li>MAP-CRM Integration - (Map of key processes and data flows and API connections)</li>
                  </ul>
                  <p>Custom Integration & Development (Custom tracking script for web and mobile and integration SMS, phone, mail, 3rd party apps)</p></div>} />
        
        <ServiceItem img="Lead-management.jpg" color="dark" theId="leadManagement" title="Lead Management" 
            text={<div>We help organizations with creating and qualifying demand for their products at scale. Through tailored lead framework exercises we can develop, optimize, and apply lead scoring and lead nurture models. 
                  <p>Our specialty is implementing complex lead scoring models, tracking methods using multi-channel approaches focusing on the most important behavioral information, demographics, and lead sources when evaluating 
                  your leads for sales-readiness.</p></div>} />

        <ServiceItem img="Custom-development-technology.jpg" color="light"  theId="customDevelopment" title="Custom Development" 
          text={<div>Marketing technology is exploding and the need to develop complex non standard solutions is increasingly prevalent in today's Enterprise. Our team of highly skilled full stack engineers have experience building 
                custom solutions with the most common technologies like AngularJS, NodeJS, JAVA, Swift, Objective-C, PHP, Magento, Laravel or Symfony.
                <p>Leave the heavy lifting to us when it comes to building custom solution for your clients that require development or integration. Types of engagements include developing custom applications for Eloqua, Marketo and SFDC</p></div>} />
        
        <ServiceItem img="Reporting-and-analytics.jpg" color="dark"  theId="reporting" title="Reporting & Analytics" 
          text="We can create easy to use Dashboards so you can have all your analytics in one place pulled from different systems.  Our goal is to automate your campaigns analytics and reporting to keep track of budget and ROI at any time." />
        
        <ServiceItem img="Integration.jpg" color="light"  theId="data" title="Data & Integration" 
          text="Keep your data clean and updated. We will help in your database optimization based on industry best practices. Do you need to have different systems synced? We will centralize your data so you can have visibility" />
        
        <Contact />
      </div>

    );
  }
}

export default TechnologyServices;
