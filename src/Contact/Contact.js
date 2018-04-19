import React, { Component } from 'react';
import './Contact.css';

import ContactForm from '../ContactForm/ContactForm';

class Contact extends Component {
  render() {
    return (
      <section className="contact" name="contact" id="contact">
      	<div className="row contact__container">
      		<div className="col s12 m12 l6 contact__left">
      			<div className="contact__content">
	      			<h1 className="contact__title">Contact</h1>
	      			<p className="contact__description">
	      				Questions? Comments? Let us help with any of them
	      			</p>
	      		</div>
      		</div>
      		<div className="col s12 m12 l6 contact__right">
      			<div className="contact__form">
      				<ContactForm />
      			</div>
      		</div>
      	</div>
      </section>
    );
  }
}

export default Contact;
