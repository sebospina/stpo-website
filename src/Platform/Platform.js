import React, { Component } from 'react';
import './Platform.css';

import SectionTitle from '../SectionTitle/SectionTitle';
import SectionDescription from '../SectionDescription/SectionDescription';
import PlatformItem from '../PlatformItem/PlatformItem';

class Platform extends Component {
  render() {
    return (
      <section className="platform center-align section">
      	<div className="row">
      		<SectionTitle text="Platforms we work with" />
          <div className="container show-on-large hide-on-med-and-down">
            <SectionDescription text="The core strength of our team is focused on providing solutions for the most common Marketing Automation platforms including Marketo, Salesforce Pardot, Oracle Eloqua, Adobe Campaign, and Hubspot." />
      		  <div className="row">
              <div className="col s4">
                <PlatformItem icon="eloqua.png" iconActive="eloqua_color.png" title="Eloqua" description="Offering high quality solutions like applications, campaign assets or custom integrations using best coding practices, mastering the Eloqua API and deploying best in class integrations" />
              </div>
              <div className="col s4">
                <PlatformItem icon="marketo.png" iconActive="marketo_Color.png" title="Marketo" description="Leveraging your service by making use of advanced features and customizations beyond out-of-the-box functionality for your Marketo workflows" />
              </div>
              <div className="col s4">
                <PlatformItem icon="camp.png" iconActive="camp_color.png" title="Adobe Campaign" description="Providing technical knowledge to reduce the amount of time needed to set-up, train, onboard and integrate with other tools and channels" />
              </div>
            </div>
            <div className="row">
              <div className="col s4">
                <PlatformItem icon="sales.png" iconActive="sales_color.png" title="Salesforce" description="Going beyond custom integrations to meet your buyer stages definitions, lead scoring models and the type of communication you want to send to each type of segments" />
              </div>
              <div className="col s4">
                <PlatformItem icon="hub.png" iconActive="hub_color.png" title="Hubspot" description="Generating valuable insights and turn them into predictive attributes for contacts and accounts setting up Hubspot predictive lead scoring model" />
              </div>
              <div className="col s4">
                <PlatformItem icon="pardot.png" iconActive="pardot_color.png" title="Pardot" description="Helping your clients integrate Pardot with CRM platforms different than Salesforce and developing full responsive assets at competitive costs" />
              </div>
            </div>
          </div>
      	</div>
        <div className="row show-on-medium show-on-small hide-on-large-only">
          <div className="container platform__carousel">
            <div className="col s12">
                <PlatformItem icon="eloqua.png" iconActive="eloqua_color.png" title="Eloqua" description="Oracle Eloqua equips marketers with best-in-class lead and campaign management tools that help marketers engage the right audience at the right time in the buyer’s journey" />

            </div>
            <div className="col s12">
                <PlatformItem icon="marketo.png" iconActive="marketo_Color.png" title="Marketo" description="Marketo Lead Management solution helps you attract buyers and nurture them with personalized campaigns, so sales can step in when they are engaged and ready." />

            </div>
            <div className="col s12">
                <PlatformItem icon="camp.png" iconActive="camp_color.png" title="Adobe Campaign" description="A set of solutions that help you personalize and deliver campaigns across all of your online and offline channels." />

            </div>
            <div className="col s12">
                <PlatformItem icon="sales.png" iconActive="sales_color.png" title="Salesforce" description="Service Cloud and Marketing Cloud work seamlessly to give you a 360-degree view of your customers; improving customer service, generating more leads, and increasing sales." />

            </div>
            <div className="col s12">
                <PlatformItem icon="hub.png" iconActive="hub_color.png" title="Hubspot" description="HubSpot offers a full stack of software for marketing, sales, and customer success, with a completely free CRM at its core. They’re powerful alone — but even better when used together." />

            </div>
            <div className="col s12">
                <PlatformItem icon="pardot.png" iconActive="pardot_color.png" title="Pardot" description="Intelligent analytics, supercharged with the B2B Marketing Analytics app. Empower sales to connect faster, from anywhere with Salesforce Engage." />
            
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Platform;
