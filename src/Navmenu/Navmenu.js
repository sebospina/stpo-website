import React, { Component } from 'react';
import './Navmenu.css';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class Navmenu extends Component {
	
	constructor(props) {
    super(props);
    this.addMouseEnter = this.addMouseEnter.bind(this);
    this.addMouseLeave = this.addMouseLeave.bind(this);
    this.addClick = this.addClick.bind(this);
    this.scrollTo = this.scrollTo.bind(this);
  }

  componentDidMount() {
    let menuItems = document.querySelectorAll(
      '.navmenu__content__item.navmenu__content__item--submenu');

    for (let item of menuItems) {
    	if(window.innerWidth > 943) {
	      this.addMouseEnter(item);
	      this.addMouseLeave(item);
	    }
	    else {
	    	this.addClick(item);
	    }
    }
  }

	addMouseEnter(item) {
		item.addEventListener('mouseenter', function(e){
			item.querySelector('.navmenu__submenu').classList.toggle('displayflex');
			item.querySelector('.navmenu__submenu__wrapper').classList.toggle('displayblock');
		});
	}

  addMouseLeave(item) {
		item.addEventListener('mouseleave', function(e){
			item.querySelector('.navmenu__submenu').classList.toggle('displayflex');
			item.querySelector('.navmenu__submenu__wrapper').classList.toggle('displayblock');
		});
  }

  addClick(item) {
		item.addEventListener('click', function(e){
			item.querySelector('.navmenu__submenu').classList.toggle('displayblock');
		});
  }

  scrollTo() {
    setTimeout(function(){
      const { hash } = window.location;
      if (hash !== '') {
        const id = hash.replace('#', '');
        $('html, body').animate({
            scrollTop: $('#'+id).offset().top - 50
        }, 500);
      }
    }, 50);  
  }

  render() {
    return (
      <div className="navmenu">
				<div className="navmenu__container">
					<ul className="navmenu__content">
						<li className="navmenu__content__item"><a href="/about-us">About Us</a></li>
						<li className="navmenu__content__item navmenu__content__item--submenu"><span>Services</span>
							<div className="navmenu__submenu__wrapper"></div>
							<div className="navmenu__submenu">
								<ul className="navmenu__submenu__content">
									<li className="navmenu__submenu__item__title">Advisory</li>
                  <li className="navmenu__submenu__item"><Link onClick={this.scrollTo}  to='/advisory-services#marketingTechnology' className="navmenu__submenu__item__link">Marketing Technology</Link></li>
                  <li className="navmenu__submenu__item"><Link onClick={this.scrollTo}  to='/advisory-services#agencySelection' className="navmenu__submenu__item__link">Agency Selection</Link></li>
								</ul>
								<ul className="navmenu__submenu__content">
									<li className="navmenu__submenu__item__title">Managed</li>
                  <li className="navmenu__submenu__item"><Link onClick={this.scrollTo}  to='/managed-services#campaignServices' className="navmenu__submenu__item__link">Campaign Services</Link></li>
								</ul>
								<ul className="navmenu__submenu__content">
									<li className="navmenu__submenu__item__title">Technology</li>
                  <li className="navmenu__submenu__item"><Link onClick={this.scrollTo}  to='/technology-services#martechDeployment' className="navmenu__submenu__item__link">MarTech Deployment</Link></li>
                  <li className="navmenu__submenu__item"><Link onClick={this.scrollTo}  to='/technology-services#leadManagement' className="navmenu__submenu__item__link">Lead Management</Link></li>
                  <li className="navmenu__submenu__item"><Link onClick={this.scrollTo}  to='/technology-services#customDevelopment' className="navmenu__submenu__item__link">Custom Development</Link></li>
                  <li className="navmenu__submenu__item"><Link onClick={this.scrollTo}  to='/technology-services#reporting' className="navmenu__submenu__item__link">Reporting & Analytics</Link></li>
                  <li className="navmenu__submenu__item"><Link onClick={this.scrollTo}  to='/technology-services#data' className="navmenu__submenu__item__link">Data & Integration</Link></li>
								</ul>
							</div>
						</li>
						<li className="navmenu__content__item navmenu__content__item--submenu"><span>Partner with us</span>
							<div className="navmenu__submenu__wrapper"></div>
							<div className="navmenu__submenu">
								<ul className="navmenu__submenu__content">
									<li className="navmenu__submenu__item"><Link onClick={this.scrollTo} to='/partner-with-us#partnerCustomerSuccess' className="navmenu__submenu__item__link">Customer Success</Link></li>
                  <li className="navmenu__submenu__item"><Link onClick={this.scrollTo} to='/partner-with-us#partnerCampaignServices' className="navmenu__submenu__item__link">Campaign Services</Link></li>
                  <li className="navmenu__submenu__item"><Link onClick={this.scrollTo} to='/partner-with-us#partnerMarketingTechnology' className="navmenu__submenu__item__link">Marketing Technology</Link></li>
                  <li className="navmenu__submenu__item"><Link onClick={this.scrollTo} to='/partner-with-us#partnerCustomDevelopment' className="navmenu__submenu__item__link">Custom Development</Link></li>
								</ul>
							</div>
						</li>
						<li className="navmenu__content__item"><Link onClick={this.scrollTo} to='/contact' className="navmenu__submenu__item__link">Contact</Link></li>
					</ul>
				</div>
			</div>
    );
  }
}

export default Navmenu;
