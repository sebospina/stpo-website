import React, { Component } from 'react';
import './SectionHeader.css';

import servicesImg from './advisoryServices-hero.jpg';

class SectionHeader extends Component {
	constructor(props) {
    super(props);
  }

  componentDidMount (nextProps, nextState) {
  	const backgroundClass = this.props.img;
		this.mainDiv.classList.add(backgroundClass);
  }
	
  render() {
    return (
      <div className="row sectionHeader valign-wrapper" ref={(elem) => { this.mainDiv = elem; }}>
        <div className="col s12">
      	 <div className="sectionHeader__title">{this.props.title}</div>
        </div>
      </div>
    );
  }
}

export default SectionHeader;
