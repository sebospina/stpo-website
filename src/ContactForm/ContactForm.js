import React, { Component } from 'react';
import './ContactForm.css';

import Loading from '../Loading/Loading';
import ContactResponse from '../ContactResponse/ContactResponse';


import axios from 'axios'

class ContactForm extends Component {
	constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
    								isBeingSend: false, 
    								isResponseReceived: false, 
    								responseMsgTitle: '',
    								responseMsg: '',
    						 };
  }
  handleSubmit(e) {
	  if ( this.contactForm.checkValidity() ) {

	  	let formData;
	  	let self = this;

	  	e.preventDefault();
	  	this.contactForm.submitBtn.disabled = true;

	  	this.setState({isBeingSend: true});

	  	axios.post('https://apiworker.smartempo.com/theBeast/public/website-contact', {
		    firstName: this.contactForm.firstName.value,
		    lastName: this.contactForm.lastName.value,
		    emailAddress: this.contactForm.emailAddress.value,
		    title: this.contactForm.title.value,
		    company: this.contactForm.company.value,
		    contactUsMsg: this.contactForm.contactUsMsg.value,
		    areYouAgency: this.contactForm.areYouAgency.checked
		  })
		  .then(function (response) {

		  	self.setState({isBeingSend: false, isResponseReceived: true});

		    if (response.data.status == 201) {
		    	self.setState({responseMsgTitle: 'Thank you!', 
		    								 responseMsg: 'Your message has been received. We will contact you soon.',
		    							 });
		    }
		    else {
		    	self.setState({responseMsgTitle: 'Oooppss!', 
		    								 responseMsg: 'Some error ocurred. Please refresh this page and try again.',
		    							 });
		    }
		  })
		  .catch(function (error) {
		    console.log(error);
		  });

	  }
  }
  render() {

  	const isBeingSend = this.state.isBeingSend;
  	const isResponseReceived = this.state.isResponseReceived;
  	const responseMsgTitle = this.state.responseMsgTitle;
  	const responseMsg = this.state.responseMsg;

  	const theForm = <form noValidate id="contact-form" method="post" name="stpo-contact-form" ref={(form) => { this.contactForm = form; }}>
		      <div className="row contact__form__content">
		        <div className="input-field col s12">
		          <input id="firstName" name="firstName" type="text" placeholder="First Name" className="validate stpoFormElement" required />
		        </div>
		        <div className="input-field col s12">
		          <input id="lastName" name="lastName" type="text"  placeholder="Last Name" className="validate stpoFormElement" required />
		        </div>
		        <div className="input-field col s12">
		          <input id="emailAddress" name="emailAddress" type="email" placeholder="Email Address"  className="validate stpoFormElement" required />
		        </div>
		        <div className="input-field col s12">
		          <input id="title" name="title" type="text" placeholder="Title" className="stpoFormElement" />
		        </div>
		        <div className="input-field col s12">
		          <input id="company" name="company" type="text" placeholder="Company" className="stpoFormElement" />
		        </div>
		        <div className="input-field col s12">
		          <textarea id="contactUsMsg" name="contactUsMsg" placeholder="Your Message" className="materialize-textarea stpoFormElement validate" required></textarea>
		        </div>
					  <div className="switch switch--padding">
					  	<p>Are you an Agency?</p>
					    <label>
					      No
					      <input type="checkbox" name="areYouAgency" />
					      <span className="lever"></span>
					      Yes
					    </label>
					  </div>
				    <p className="right-align contact__button__container">
					    <button className="btn waves-effect waves-light contact__button  purple darken-4" type="submit" name="action" id="submitBtn" onClick={this.handleSubmit}>
					    	Submit
						  </button>
					  </p>
		      </div>
		    </form>;

    return (
    	<div className="theForm">
	      {isResponseReceived ? <ContactResponse title={responseMsgTitle} msg={responseMsg} /> 
	      										: theForm}
	    </div>
    );
  }
}

export default ContactForm;
