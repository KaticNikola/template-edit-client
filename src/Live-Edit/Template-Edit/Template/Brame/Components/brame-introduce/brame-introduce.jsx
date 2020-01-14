import React, { Component } from 'react';

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import BrameNav from "./components/brame-nav/brameNav";
/// N
import MainTitle from '../../../../Components/Text-Components/MainTitle'
import Description from '../../../../Components/Text-Components/Description'
import Button from "../../../../Components/Button-Components/Button"

import { Consumer } from '../../../Template-Context/TemplateContext'
// import { SELECTED_ELEMENT } from '../../../template-context/TemplateTypes'

import "./brame-introduce.scss";
class BrameIntroduce extends Component {

	// handleSelectElement = (dispatch, e) => {
	// 	let id = e.target.id
	// 	let actionType = e.target.name
	// 	//
	// 	console.log(`id${id}`)
	// 	console.log(actionType)
	// 	dispatch({
	// 		type: SELECTED_ELEMENT,
	// 		payload: {
	// 			id,
	// 			// selectionKey
	// 		}
	// 	})
	// }
	render() {
		return (
			<Consumer>
				{value => {
					const { dispatch } = value
					const { title, description, button, navStatus, background} = value.header;
					// let style = {
					// 	// background: `url('./assets/${background}')`
					// 	background: `url("./assets/introduce-bg.svg")`
					// };
					return (
						<div id="introduce"  >
							<div className="navbar" style={{ display: navStatus}}>
								{/* componenta koja ce da renderuje div > display/hide */}
								<BrameNav  />
							</div>

							<div className="container">
								<div className="boxLeft">
									<div className="boxLeft-title">
										{/* <MainTitle	 {...title} id={} /> */}
										<MainTitle {...title}/>
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