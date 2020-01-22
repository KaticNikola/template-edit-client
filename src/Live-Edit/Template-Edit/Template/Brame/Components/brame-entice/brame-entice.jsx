import React, { Component } from 'react';
import "./brame-entice.scss";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
 import prize from "./assets/prize.jpg";
// import star from './assets/star.svg';
// import Card from "react-bootstrap/Card";
// import CardGroup from "react-bootstrap/CardGroup";

import { Consumer } from '../../../Template-Context/TemplateContext'
import SecondaryTitle from '../../../../Components/Text-Components/SecondaryTitle'
import Description from '../../../../Components/Text-Components/Description'
import Icon from '../../../../Components/FontAwesome-Icon-Component/Icon'

import EnticeConditionalComponent from '../../../../Components/Entice-Conditional-Component/EnticeConditionalComponent'

class BrameEntice extends Component {
	render() {
		return (
			<Consumer>
				{value => {
						const { previewSize } = value;
					const { enticeStatus, description1, description2, title, icon, elementToShow} = value.entice;
					return (
						<div id={`entice-${previewSize}`} style={{display:enticeStatus}}>
							<div className="container">
								<div className="container-left">
									<div className="container-left_titleBox">
										<div className="icon">
											<Icon {...icon} />
										</div>
										<div className="title">
											<SecondaryTitle {...title} />
										</div>
									</div>
									<div className="container-left_description">
										<Description {...description1} />
										<Description {...description2} />
									</div>
								</div>
								<div className="container-right">
									<EnticeConditionalComponent elementToShow={elementToShow}/>
								</div>
							</div>
						</div>
					)
				}}
			</Consumer>

		);
	}
}

export default BrameEntice;