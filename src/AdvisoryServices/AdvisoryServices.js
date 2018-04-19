import React, { Component } from 'react';
import './AdvisoryServices.css';

import SectionHeader from '../SectionHeader/SectionHeader';
import ServiceItem from '../ServiceItem/ServiceItem';
import ScrollSpy from '../ScrollSpy/ScrollSpy';
import Contact from '../Contact/Contact';

import $ from 'jquery';

class AdvisoryServices extends Component {
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
              <li className="sectionScroll__item" data-id="marketingTechnology">
                <div className="sectionScroll__tooltip scale-transition scale-out">MarTech</div>
                <div className="sectionScroll__circle" onClick={this.scrollTo} onMouseOver={this.itemHover} onMouseOut={this.itemOut}></div>
              </li>
              <li className="sectionScroll__item" onClick={this.scrollTo} data-id="agencySelection"><div className="sectionScroll__tooltip scale-transition scale-out">Agency</div><div className="sectionScroll__circle" onClick={this.scrollTo} onMouseOver={this.itemHover} onMouseOut={this.itemOut}></div></li>
            </ul>
          </div>
        	<SectionHeader img="stpoServices__advisoryServices" title="Advisory Services" />

          <ServiceItem img="Martech-Advisory-Services.jpg" color="dark" theId="marketingTechnology" title="MarTech" 
            text={<div>Organizations are challenged with keeping up with the vast options available to them as it relates 
              to technology selection. The marketing technology landscape now boasts over 5000+ solutions and growing. 
              <p>Our experts will assess your current technology stack and make recommendations based on how to get the 
              most out of your marketing spend.</p>
              <p>This can involve identifying the ways in which your marketing technology 
              is impacting your organization, being utilized, adopted, integrated, and providing you clear ROI.</p>
              <p>We make sense out of the marketing lumascape and will make recommendations on vendor technology selection based 
              on your marketing maturity and growth objectives.</p></div>} />
          
          <ServiceItem img="Agency-Selection.jpg" color="light"  theId="agencySelection" title="Agency Selection" 
            text={<div>We are a highly skilled team of marketing technologists  and know what we do best! However, a marketing organization’s needs are vast. Our network of agency partners and consultants are skilled marketers and can provide value added services in addition to ours.
                  <p>Through our extensive ecosystem of partners we can help you with agency selection for various Marketing needs. The types of services could include: 
                  <ul>
                    <li>Account Based Marketing (ABM)</li>
                    <li>Content Creation, Strategy, Messaging, and Design</li>
                    <li>Sales and Marketing Alignment</li>
                    <li>CMO Advisory</li>
                  </ul>
                  </p>
                  </div>} />
          <Contact />
        </div>
    );
  }
}

export default AdvisoryServices;
