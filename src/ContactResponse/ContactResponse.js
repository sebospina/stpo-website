import React, { Component } from 'react';
import './ContactResponse.css';

class ContactResponse extends Component {
	constructor(props) {
    super(props);
  }
  componentDidMount() {
    setTimeout( () => {
      document.getElementById('contactResponse').classList.add('scale-in')}
    ,100 );
  }
  render() {
    return (
      <div id="contactResponse" className="contactResponse scale-transition scale-out">
      	<div className="contactResponse__title">{this.props.title}</div>
      	<div className="contactResponse__icon md-48"><i className="material-icons">mail_outline</i></div>
      	<div className="contactResponse__msg">{this.props.msg}</div>
      </div>
    );
  }
}

export default ContactResponse;
