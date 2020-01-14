import React, { Component } from 'react';

import Container from "react-bootstrap/Container";

import BrameIntroduce from "./Components/brame-introduce/brame-introduce";
import BrameEntice from "./Components/brame-entice/brame-entice";
import BrameEngage from "./Components/brame-engage/brame-engage";
import BrameInfo from "./Components/brame-info/brame-info";
import BrameConnect from "./Components/brame-connect/brame-connect";
import BrameFooter from "./Components/brame-footer/brame-footer";

import { Consumer } from '../Template-Context/TemplateContext'
import { SELECTED_ELEMENT } from "../Template-Context/TemplateTypes";

import "./Brame.scss"
class Brame extends Component {
	handleSelectElement = (dispatch, e) => {
		let id = e.target.id
		let actionType = e.target.name
		//
		console.log(`id${id}`)
		console.log(actionType)
		dispatch({
			type: SELECTED_ELEMENT,
			payload: {
				id
				// selectionKey
			}
		})
	}
	render() {
		return (
			<Consumer>
				{value => {
					const { previewSize, dispatch, enticeStatus, informStatus, connectStatus,footerStatus } = value;
					return (
						<div id="brame" className={previewSize} onClick={this.handleSelectElement.bind(this, dispatch)}>
							<Container fluid="true">
								<BrameIntroduce />
								<BrameEntice status={enticeStatus} />
								<BrameEngage />
								<BrameInfo status={informStatus} />
								<BrameConnect status={connectStatus} />
								<BrameFooter status={footerStatus}/>
							</Container>
						</div>
					)
				}}
			</Consumer>

		);
	}
}

export default Brame;