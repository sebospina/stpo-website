import React, { Component } from 'react';
import './Intro.css';
import IntroService from '../IntroService/IntroService';
import IntroServiceMobile from '../IntroServiceMobile/IntroServiceMobile';

import hero from './intro-hero.jpg';

const advisory = ['Marketing Technology', 'Agency Selection', 'CMO & Staffing', 'Partner Network'];
const advisoryItems = advisory.map((item) =>
  <li key={item.toString()}>
    {item}
  </li>);
const managed = ['Campaign Services'];
const managedItems = managed.map((item) =>
  <li key={item.toString()}>
    {item}
  </li>);
const technology = ['Lead Management', 'Custom Development', 'Reporting & Analytics', 'Data & Integration', 'Marketing Automation'];
const technologyItems = technology.map((item) =>
  <li key={item.toString()}>
    {item}
  </li>);

class Intro extends Component {
  render() {
    return (
      <section className="intro">
        <div className="row center-align">
        	<div className="intro__title">
        		<h1>Smart Marketing<p className="intro__title--big">Services</p></h1>
        	</div>

        	<div className="container show-on-medium show-on-large hide-on-small-only">
        		<div className="col s4">
        			<IntroService title="Advisory Services" text={advisoryItems} icon="Advisory.png" />
        		</div>
        		<div className="col s4">
        			<IntroService title="Managed Services" text={managedItems} icon="Managed.png" />
        		</div>
        		<div className="col s4">
        			<IntroService title="Technology Services" text={technologyItems} icon="tecn.png" />
        		</div>
        	</div>

          <div className="container hide-on-med-and-up">
            <div className="col s12">
                <IntroServiceMobile title="Advisory Services" text={advisoryItems} icon="Advisory.png" />
            </div>
            <div className="col s12">
                <IntroServiceMobile title="Managed Services" text={managedItems} icon="Managed.png" />
            </div>
            <div className="col s12">
                <IntroServiceMobile title="Technology Services" text={technologyItems} icon="tecn.png" />
            </div>
          </div>
          
        </div>
      </section>
    );
  }
}

export default Intro;
