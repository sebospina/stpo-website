import React, { Component } from 'react';
import './ScrollSpy.css';
import $ from 'jquery';

class ScrollSpy extends Component {
	componentDidMount() {
		$(".scrollItem").click(function() {
		    $('html, body').animate({
		        scrollTop: $("#hello").offset().top
		    }, 2000);
		});
	}
  render() {
    return (
    	<div className="scrollSpy">
	      <ul className="section table-of-contents">
	        <li className="scrollItem"><a href="#service1">Introduction</a></li>
	        <li className="scrollItem"><a href="#service2">Structure</a></li>
	        <li className="scrollItem"><a href="#service3">Intialization</a></li>
	      </ul>
	    </div>
    );
  }
}

export default ScrollSpy;
