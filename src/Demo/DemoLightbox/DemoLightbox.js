import React, { Component } from 'react';
import './DemoLightbox.css';

class DemoLightbox extends Component {

	constructor(props) {
		super(props)
	}

  render() {
  	const isActive = this.props.isActive === false ? 'demoLightbox__lightbox--hidden' : '';
    return (
    	<div className={'demoLightbox ' + isActive}>
	      <div id="demoLightbox__lightbox" className="demoLightbox__lightbox"></div>
	      <div id="demoLightbox__loaders" className="demoLightbox__loaders"> {this.props.loaders} </div>
	    </div>
    );
  }
}

export default DemoLightbox;
