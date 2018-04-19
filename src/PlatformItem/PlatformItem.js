import React, { Component } from 'react';
import './PlatformItem.css';

class PlatformItem extends Component {
  render() {
    return (
      <div className="card hoverable platformItem">
		    <div className="waves-effect waves-block waves-light">
		      <img className="platformItem__img activator" src={process.env.PUBLIC_URL + 'img/' + this.props.icon} />
		    </div>

		    <div className="card-reveal platformItem__desc">
		      <span className="card-title platformItem__title grey-text text-darken-4"><img className="platformItem__imgColor" src={process.env.PUBLIC_URL + 'img/' + this.props.iconActive} /><i className="material-icons right">close</i></span>
		      <div className="platformItem__text">{this.props.description}</div>
		    </div>
		  </div>
    );
  }
}

export default PlatformItem;
