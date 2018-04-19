import React, { Component } from 'react';
import './Demo.css';

class Demo extends Component {

	constructor(props) {
    super(props);
    this.workflow = this.workflow.bind(this);
  }

  workflow() {}

  render() {
    return (
      <section className="demo">
	      <div className="demo__campaign">
	      	Left

	      	<div className="demo__content__box demo__content__box--yellow">
			    	<h2 className="demo__content__box__title">Tools Used</h2>
			    	<div className="demo__content__box__container">
				    	<div className="demo__content__box__icon">Icon</div>
				    	<div className="demo__content__box__icon">Icon</div>
				    	<div className="demo__content__box__icon">Icon</div>
				    	<div className="demo__content__box__icon">Icon</div>
				    	<div className="demo__content__box__icon">Icon</div>
				    	<div className="demo__content__box__icon">Icon</div>
				    	<div className="demo__content__box__icon">Icon</div>
				    	<div className="demo__content__box__icon">Icon</div>
				    	<div className="demo__content__box__icon">Icon</div>
				    	<div className="demo__content__box__icon">Icon</div>
			    	</div>
			    </div>

	      </div>
	      <div className="demo__content">
	      	<h1 className="demo__content__title">Hi There!</h1>
	      	<p className="demo__content__p">So, this is what we have learned about you so far. Cool, huh?
	      	Now your clients/leads don't have to fill all those pesky forms. 
	      	If the data is correct, press send. If you want to edit some fields, 
	      	you are free to do it too ;)
  				</p>
  				<div className="demo__content__form">
  					<form noValidate id="contact-form" method="post" name="stpo-contact-form" ref={(form) => { this.contactForm = form; }}>
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
						    <p className="center-align contact__button__container">
							    <button className="btn waves-effect waves-light purple darken-4" type="submit" name="action" id="submitBtn" onClick={this.handleSubmit}>
							    	Submit
								  </button>
							  </p>
				      </div>
				    </form>
				  </div>

			    <div className="demo__content__box demo__content__box--grey">
			    	<h2 className="demo__content__box__title">Tools Used</h2>
			    	<div className="demo__content__box__container">
				    	<div className="demo__content__box__icon">Icon</div>
				    	<div className="demo__content__box__icon">Icon</div>
				    	<div className="demo__content__box__icon">Icon</div>
				    	<div className="demo__content__box__icon">Icon</div>
				    	<div className="demo__content__box__icon">Icon</div>
				    	<div className="demo__content__box__icon">Icon</div>
				    	<div className="demo__content__box__icon">Icon</div>
				    	<div className="demo__content__box__icon">Icon</div>
				    	<div className="demo__content__box__icon">Icon</div>
				    	<div className="demo__content__box__icon">Icon</div>
			    	</div>
			    </div>

	      </div>
      </section>
    );
  }
}

export default Demo;
