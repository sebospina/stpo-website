import React, { Component } from 'react';
import './SectionDescription.css';

class SectionDescription extends Component {
  render() {
    return (
      <p className="platform__desc">{this.props.text}</p>
    );
  }
}

export default SectionDescription;
