import React, { Component } from 'react';
import './PartnerWithUs.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import SectionDescription from '../SectionDescription/SectionDescription';
import { Link } from 'react-router-dom';

class PartnerWithUs extends Component {
  render() {
    return (
      <section className="partnerWithUs section">
      	<div className="row center-align">
      		<SectionTitle text="Why Partner With Us?" />
      		<div className="container">
      			<SectionDescription text="Partners are an extension of our team.  The years of experience and relationships we have within the B2B Marketing ecosystem allow us to provide our customers with the right partner fit for technology and services we do not offer in-house." />
      			<Link className="waves-effect waves-light btn btn-large partnerWithUs__button partnerWithUs__button--marginTop purple darken-4" to='/partner-with-us#partnerCustomerSuccess'>Learn More</Link>
      		</div>
      	</div>
      </section>
    );
  }
}

export default PartnerWithUs;
