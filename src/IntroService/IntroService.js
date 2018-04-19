import React, { Component } from 'react';
import './IntroService.css';

class IntroService extends Component {
	constructor(props) {
    super(props);
    this.handleHover = this.handleHover.bind(this);
    this.handleOut = this.handleOut.bind(this);
  }
  handleHover(e) {
    this.introServiceList.style.display = 'block';
  }
  handleOut(e) {
    this.introServiceList.style.display = 'none';
  }
  render() {
    return (
    	<div className="card-panel hoverable introService" onMouseOver={this.handleHover}  onMouseOut={this.handleOut}>
    		<img src={process.env.PUBLIC_URL + 'img/' + this.props.icon} />
    		<p className="introService__title">{this.props.title}</p>
    		<div className="introService__list" ref={(input) => { this.introServiceList = input; }}>
	    		<ul>
	    			{this.props.text}
	    		</ul>
	    	</div>
    	</div>
    );
  }
}

export default IntroService;
