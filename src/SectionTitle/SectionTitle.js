import React, { Component } from 'react';
import './SectionTitle.css';

class SectionTitle extends Component {
  render() {
    return (
    	<div className="sectionTitle">
    		<p className="sectionTitle__bigTitle show-on-large hide-on-small-only">{this.props.text}</p>
	      <h1 className="sectionTitle__title">{this.props.text}</h1>
	    </div>
    );
  }
}

export default SectionTitle;
