import React, { Component } from 'react';
import './DemoElq.css';

import Demo from '../Demo/Demo';
import DemoTitle from '../Demo/DemoTitle/DemoTitle';
import SectionHeader from '../SectionHeader/SectionHeader';

class DemoElq extends Component {

	constructor(props) {
    super(props);

  }

  render() {
    
    const title = <DemoTitle title="Hello Demo!" />;
    const screenActions = {
      sayHi() {
        document.getElementById('demo_lightbox').style.display = 'block';
        console.log(screenActions.loaders);
        alert('Hey you!');
      },
      loaders: [
        { id: 1, icon: 'action-openEmail.png', text: 'Open Email'},
        { id: 2, icon: 'action-downloadWhitePaper.png', text: 'Download White Paper'}
      ]
    }

    return (
      <section className="DemoElq">
      	<SectionHeader img="stpoServices__advisoryServices" title="Platform Demo" />
      	<Demo title={title} screenActions={screenActions} />
      </section>
    );
  }
}

export default DemoElq;
