import React, { Component } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import logo from "../../assets/logo.svg"

//N
import { Consumer } from '../../../../../Template-Context/TemplateContext'
import Description from '../../../../../../Components/Text-Components/Description'

import NavigationLink from '../../../../../../Components/Navigation-Components/NavigationLink'
// import Image from '../../../../../../components/Image-Component/Image'
import './brameNav.scss';
class BrameNav extends Component {
	render() {
		return (
			<Consumer>
				{value => {
					const { logo, navigationHome, navigationEntice, navigationEngage,navStatus } = value.header;
					return (
						<div className="nav" style={{display: navStatus}}>
							<div className="nav-logo">
								{/* logo kao img  */}
								<img src={logo} alt="logo" />
								{/* <Image image={logo}/> */}
							</div>
							<div className="nav-navigation">
								<div className="nav-navigation_item">
									<NavigationLink {...navigationHome} />
								</div>
								<div className="nav-navigation_item">
									<NavigationLink {...navigationEntice} />
								</div>
								<div className="nav-navigation_item nav-navigation_item__engage" >
									<NavigationLink {...navigationEngage} />
								</div>
							</div>
						</div>
					)
				}}
			</Consumer>

		);
	}
}

export default BrameNav;