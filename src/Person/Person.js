import React, { Component } from 'react';
import './Person.css';
import ln from './ln-icon.png';

class Person extends Component {
  render() {
    return (
    	<div className="person">
	      <div className="person__img"><img width="130" src={process.env.PUBLIC_URL + 'img/' + this.props.avatar} /></div>
	      <p className="person__name">{this.props.name}</p>
	      <p className="person__title">{this.props.title}</p>
	      <p className="person__linkedin"><a href={this.props.linkedin} target="blank"><img width="30" src={ln}/></a></p>
	    </div>
    );
  }
}

export default Person;
