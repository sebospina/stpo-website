import React, { Component } from 'react';
import './Demo.css';

import DemoLoader from '../Demo/DemoLoader/DemoLoader';
import DemoLightbox from '../Demo/DemoLightbox/DemoLightbox';

class Demo extends Component {

	constructor(props) {
    super(props);
    this.actions = this.props.screenActions;
    this.loadersList = [];

    this.renderActions = this.renderActions.bind(this);

    this.state = {lightboxIsActive: false}
  }

  renderActions() {
  	this.setState({
      lightboxIsActive: true
    });
    fetch('http://localhost:3001/contact/6')
    	.then( response => response.json() )
    	.then( contact => console.log(contact.contactId));
  }

  componentWillMount() {
  	let loaders = this.actions.loaders;
  	this.loadersList = loaders.map( (loader) => <DemoLoader key={loader.id} icon={loader.icon} text={loader.text} /> );
  }

  render() {
    return (
      <section className="demo">
      	<DemoLightbox loaders={this.loadersList} isActive={this.state.lightboxIsActive} />
	      <div className="demo__campaign">
	      	
	      	InstanceScreen

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
	      	<h1 className="demo__content__title">{this.props.title}</h1>
	      	<p className="demo__content__p">Description</p>
  				<div className="demo__content__form">
  					<button onClick={this.renderActions}>Click Me!</button>
  					Content
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
