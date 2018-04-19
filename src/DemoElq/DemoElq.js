import React, { Component } from 'react';
import './DemoElq.css';

import Demo from '../Demo/Demo';
import SectionHeader from '../SectionHeader/SectionHeader';

class DemoElq extends Component {

	constructor(props) {
    super(props);
    this.makeRequest = this.makeRequest.bind(this);
    this.changeLeadScore = this.changeLeadScore.bind(this);
    this.changeAccountScore = this.changeAccountScore.bind(this);
    this.addTool = this.addTool.bind(this);
    this.animate = this.animate.bind(this);
    this.highlight = this.highlight.bind(this);
    this.moveAvatar = this.moveAvatar.bind(this);
  }

  makeRequest() {}
  changeLeadScore() {}
  changeAccountScore() {}
  addTool() {}
  animate() {}
  highlight() {}
  moveAvatar() {}

  render() {
    return (
      <section className="DemoElq">
      	<SectionHeader img="stpoServices__advisoryServices" title="Platform Demo" />
      	<Demo />
      </section>
    );
  }
}

export default DemoElq;
