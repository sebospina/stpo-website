import React, { Component } from 'react';
import './Loading.css';

import loading from './loading.gif';

class Loading extends Component {
  render() {
    return (
      <div className="loading"><img className="loading__img" src={loading} /></div>
    );
  }
}

export default Loading;
