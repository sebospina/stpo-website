import React, { Component } from 'react';
import './DemoLoader.css';

class DemoLoader extends Component {

	constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="demoLoader">
      	{this.props.text}
      </div>
    );
  }
}

export default DemoLoader;
