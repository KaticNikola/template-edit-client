import React, { Component } from 'react';

// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

import BrameNav from "./components/brame-nav/brameNav";
/// N
import MainTitle from '../../../../Components/Text-Components/MainTitle'
import Description from '../../../../Components/Text-Components/Description'
import Button from "../../../../Components/Button-Components/Button"

import { Consumer } from '../../../Template-Context/TemplateContext'
// import { SELECTED_ELEMENT } from '../../../template-context/TemplateTypes'

import "./brame-introduce.scss";
class BrameIntroduce extends Component {


	render() {

		return (
			<Consumer>
				{value => {
					const { previewSize } = value;// 
					const { title, description, button, background, introduceStatus } = value.introduce;
					// let style = {
					// 	// background: `url('./assets/${background}')`
					// 	background: `url("./assets/introduce-bg.svg")`
					// };
					let bgStyle = {
						background: `url(${background.background})`,
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center',
						backgroundSize: 'cover',
					}
					return (
						<div style={{
								background : `url(${background.background})`,
								 backgroundSize: 'cover',	
								 backgroundRepeat: 'no-repeat',
								 width: "100%",
								 height: "100vh"
								 }} id={`introduce-${previewSize}`} >
							<div className="navbar" >
								<BrameNav />
							</div>

							<div className="container">
								<div className="boxLeft">
									<div className="boxLeft-title hover">
										{/* <MainTitle	 {...title} id={} /> */}
										<MainTitle {...title} />
									</div>
									<div className="boxLeft-description">
										<Description	 {...description} />
									</div>
									<div className="boxLeft-button">
										<Button {...button} />
									</div>
								</div>
							</div>
							<div className="bottom-border">
								{/* ovde ces trebadi da stavis novu komponentu koja ce mocu da menja bg img koja je border */}
							</div>
						</div>
					)
				}}
			</Consumer>

		);
	}
}

export default BrameIntroduce;