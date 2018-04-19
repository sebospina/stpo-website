import React, { Component } from 'react';
import './ServiceItem.css';

class ServiceItem extends Component {
	componentDidMount() {
		let divClass = (this.props.color == 'dark') ? 'serviceItem--dark' : 'serviceItem--light';
		this.theDiv.classList.add(divClass);
	}
  render() {
    return (
    	<div id={this.props.theId} className="section scrollspy" ref={(elem) => { this.theDiv = elem; }}>
	      <div className="row serviceItem">
	      	<div className="col m12 l6">
	      		<div className="serviceItem__content">
	      			<div className="serviceItem__title">
	      				{this.props.title}
	      			</div>
	      			<div className="serviceItem__text flow-text">
	      				{this.props.text}
	      			</div>
	      		</div>
	      	</div>
	      	<div className="col m12 l6">
	      		<img className="responsive-img" src={process.env.PUBLIC_URL + 'img/' + this.props.img} />
	      	</div>
	      </div>
      </div>

    );
  }
}

export default ServiceItem;
