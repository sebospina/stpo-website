import React, { Component } from 'react';
import './PartnerServices.css';

import SectionHeader from '../SectionHeader/SectionHeader';
import ServiceItem from '../ServiceItem/ServiceItem';
import ScrollSpy from '../ScrollSpy/ScrollSpy';
import Contact from '../Contact/Contact';

import $ from 'jquery';

class PartnerServices extends Component {
  constructor(props) {
    super(props);
    this.scrollTo = this.scrollTo.bind(this);
    this.itemHover = this.itemHover.bind(this);
    this.itemOut = this.itemOut.bind(this);
    this.ppp = this.ppp.bind(this);
  }
  ppp(e) {
    console.log(e.target.parentElement);
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
  render() {
    return (
        <div className="stpoServices">
        	<div className="sectionScroll">
            <ul>
              <li className="sectionScroll__item" data-id="partnerCustomerSuccess">
                <div className="sectionScroll__tooltip scale-transition scale-out">Customer</div>
                <div className="sectionScroll__circle" onClick={this.scrollTo} onMouseOver={this.itemHover} onMouseOut={this.itemOut}></div>
              </li>
              <li className="sectionScroll__item" data-id="partnerCampaignServices">
                <div className="sectionScroll__tooltip scale-transition scale-out">Campaign</div>
                <div className="sectionScroll__circle" onClick={this.scrollTo} onMouseOver={this.itemHover} onMouseOut={this.itemOut}></div>
              </li>
              <li className="sectionScroll__item" data-id="partnerMarketingTechnology">
                <div className="sectionScroll__tooltip scale-transition scale-out">MarTech</div>
                <div className="sectionScroll__circle" onClick={this.scrollTo} onMouseOver={this.itemHover} onMouseOut={this.itemOut}></div>
              </li>
              <li className="sectionScroll__item" data-id="partnerCustomDevelopment">
                <div className="sectionScroll__tooltip scale-transition scale-out">Development</div>
                <div className="sectionScroll__circle" onClick={this.scrollTo} onMouseOver={this.itemHover} onMouseOut={this.itemOut}></div>
              </li>
            </ul>
          </div>
        	<SectionHeader img="stpoServices__partnerWithUs" title="Partner With Us" />
          
          <ServiceItem img="Customer-Success.jpg" color="dark" theId="partnerCustomerSuccess" title="Customer Success" 
            text={<div>At Smartempo, we are customer driven and our #1 priority is to make our clients successful. We help our clients select 
                  the best agency fit and technology solutions for their business and will refer clients to the right partner to ensure 
                  mutual client success. We do not do everything nor claim to do everything and work with partners to augment our capabilities 
                  and expertise. Our team through our Advisory Services help our clients identify the right fit for their organization as it 
                  relates to people, technology, and processes. In many instances, this requires expert services and solutions that we will 
                  recommend to our valued partners.

                  <p>Are you an agency or consultant looking to partner with our expert team? We can help serve your clients by augmenting your 
                  capabilities with ours.</p>

                  <p>Types of services include:</p>

                  <ul>
                  <li>Campaign Management</li>
                  <li>MarTech Deployment</li>
                  <li>Custom Development/Integrations</li>
                  </ul>
                  </div>} />

          <ServiceItem img="Campaign-Services.jpg" color="light"  theId="partnerCampaignServices" title="Campaign Management" 
            text={<div>Our value delivered campaign services include:
                <ul>
                <li>Marketing Asset Development & Enhancement (Customer journeys, Website, microsite, mobile app, Email, 
                  landing page, form templates supporting specific campaign goals, user testing and optimization)</li>

                <li>Campaign Execution & Optimization (Audit of existing issues, key processes, business requirements, 
                  campaign development, performance tracking and campaign enhancements, deliverability and SPAM management, 
                  conversion, A/B testing, ROI tracking and reporting).</li>
                </ul>
                </div>} />

          <ServiceItem img="Martech.jpg" color="dark"  theId="partnerMarketingTechnology" title="MarTech Deployment" 
            text={<div>Our team has hands-on expertise with the most common marketing automation platforms used by your clients in the marketplace. 
                  We can handle on behalf of your clients everything from standing up a platform to complex migrations. The types of services 
                  we can address on behalf of your clients include:
                  <ul>
                  <li>MAP Implementation (Technology audit, IP warming, data cleansing, basic asset configuration, Scoring matrix, segmentation, 
                  Branding & deliverability and configuration of existing drip campaigns.)</li>
                  <li>MAP-CRM Integration - (Map of key processes and data flows and API connections)</li>
                  <li>Custom Integration & Development (Custom tracking script for web and mobile and integration SMS, phone, mail, 3rd party apps)</li>
                  </ul>
                  </div>} />

          <ServiceItem img="Custom-development.jpg" color="light"  theId="partnerCustomDevelopment" title="Custom Development & Integrations" 
            text={<div>Marketing technology is exploding and the need to develop complex non standard solutions is increasingly prevalent in today's Enterprise. Our team of highly skilled full stack engineers have experience building 
                custom solutions with the most common technologies like AngularJS, NodeJS, JAVA, Swift, Objective-C, PHP, Magento, Laravel or Symfony.
                <p>Leave the heavy lifting to us when it comes to building custom solution for your clients that require development or integration. Types of engagements include developing custom applications for Eloqua, Marketo and SFDC</p></div>} />
            
          <Contact />
        </div>
    );
  }
}

export default PartnerServices;
