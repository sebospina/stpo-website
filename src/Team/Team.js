import React, { Component } from 'react';
import './Team.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import SectionDescription from '../SectionDescription/SectionDescription';
import Person from '../Person/Person';

class Team extends Component {
  render() {
    return (
      <section className="team center-align section">
      	<div className="row">
      		<SectionTitle text="Team" />
          <div className="container show-on-medium show-on-large hide-on-small-only">
            <SectionDescription text="Smartempo is a new generation B2B Marketing Consultancy focused on driving results for our clients and valued partners.
Our team is comprised of B2B industry experts with significant years of experience working with organizations ranging from SMB to Enterprise.
" />
      		  <div className="row">
              <div className="col s4">
                <Person avatar="mitch.png" name="Mitch Patel" title="Principal" linkedin="https://www.linkedin.com/in/mitchpatel/" />
              </div>
              <div className="col s4">
                <Person avatar="sebastian.png" name="Sebastian Ospina" title="Managing Consultant" linkedin="https://www.linkedin.com/in/sebasospina/" />
              </div>
              <div className="col s4">
                <Person avatar="bal.png" name="Bal Ramirez" title="Business Development Latam" linkedin="https://www.linkedin.com/in/bal-ramirez-2158752a/" />
              </div>
            </div>
            <div className="row">
              <div className="col s4">
                <Person avatar="david.png" name="David Tobon" title="Automation Manager" linkedin="https://www.linkedin.com/in/david-alejandro-tobon-ba6212125/" />
              </div>
              <div className="col s4">
                <Person avatar="daniel.png" name="Daniel Romero" title="Implementation Specialist" linkedin="" />
              </div>
              <div className="col s4">
                <Person avatar="nico.png" name="Nicolas Tobon" title="Lead Developer" linkedin="https://www.linkedin.com/in/nicolas-tobon/" />
              </div>
            </div>
          </div>
      	</div>
        <div className="row hide-on-med-and-up">
          <div className="team__carousel">
            <div className="col s12">
              <Person avatar="mitch.png" name="Mitch Patel" title="Principal" linkedin="https://www.linkedin.com/in/mitchpatel/" />
            </div>
            <div className="col s12">
              <Person avatar="sebastian.png" name="Sebastian Ospina" title="Managing Consultant" linkedin="https://www.linkedin.com/in/sebasospina/" />
            </div>
            <div className="col s12">
              <Person avatar="bal.png" name="Bal Ramirez" title="Business Development Latam" linkedin="https://www.linkedin.com/in/bal-ramirez-2158752a/" />
            </div>
            <div className="col s12">
              <Person avatar="daniel.png" name="Daniel Romero" title="Implementation Specialist" linkedin="" />
            </div>
            <div className="col s12">
              <Person avatar="david.png" name="David Tobon" title="Marketing Automation Manager" linkedin="https://www.linkedin.com/in/david-alejandro-tobon-ba6212125/" />
            </div>
            <div className="col s12">
                <Person avatar="nico.png" name="Nicolas Tobon" title="Lead Developer" linkedin="https://www.linkedin.com/in/nicolas-tobon/" />
            
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Team;
