import React, { Component } from 'react';
import './DemoTitle.css';

class DemoTitle extends Component {
  render() {
    return (
      <b>{this.props.title}</b>
    );
  }
}

export default DemoTitle;
