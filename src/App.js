import React, { Component } from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom'
import Header from './Header/Header';
import Home from './Home/Home';
import AboutUs from './AboutUs/AboutUs';
import AdvisoryServices from './AdvisoryServices/AdvisoryServices';
import ManagedServices from './ManagedServices/ManagedServices';
import TechnologyServices from './TechnologyServices/TechnologyServices';
import PartnerServices from './PartnerServices/PartnerServices';
import Contact from './Contact/Contact';

import DemoElq from './DemoElq/DemoElq';



import Footer from './Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="home">
        <Header />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about-us' component={AboutUs}/>
          <Route path='/advisory-services' component={AdvisoryServices}/>
          <Route path='/managed-services' component={ManagedServices}/>
          <Route path='/technology-services' component={TechnologyServices}/>
          <Route path='/partner-with-us' component={PartnerServices}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/demo-eloqua' component={DemoElq}/>
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
