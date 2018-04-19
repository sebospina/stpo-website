import React, { Component } from 'react';
import './IntroServiceMobile.css';

class IntroServiceMobile extends Component {
  render() {
    return (
      <div className="col s12 m6">
	      <div className="card introServiceMobile__card">
	        <div>
	          <img className="introServiceMobile__img" src={this.props.icon} />
	        </div>
	        <div>
	          <span className="introServiceMobile__title">{this.props.title}</span>
	        </div>
	        <div className="introServiceMobile__content">
	        	<ul>
	        		{this.props.text}
	        	</ul>
	        </div>
	      </div>
	    </div>
    );
  }
}

export default IntroServiceMobile;
