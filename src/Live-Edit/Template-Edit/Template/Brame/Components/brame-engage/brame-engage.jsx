import React, { Component } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./brame-engage.scss";
import leftTitleIcon from "./assets/left-title.svg";
import rightTitleIcon from "./assets/right-title.svg";
import gift from "./assets/gift.svg";

import { Consumer } from '../../../Template-Context/TemplateContext'
import SecondaryTitle from '../../../../Components/Text-Components/SecondaryTitle'
import Description from '../../../../Components/Text-Components/Description'
import Icon from '../../../../Components/FontAwesome-Icon-Component/Icon'

class BrameEngage extends Component {
	render() {
		return (
			<Consumer>
				{value => {
					const { previewSize } = value;
					const { title, description1, description2, icon } = value.engage;
					return (
						<div id={`engage-${previewSize}`}>
							{/* <div className="container-fluid"> */}
							<div className='borderTop'></div>
							<div className="container">
								<div className="container-titleBox">
									<div className="container-titleBox_icon">
										{/* <img src={gift} alt="gift" /> */}
										<Icon {...icon} />
									</div>
									<div className="container-titleBox_title">
										<SecondaryTitle {...title} />
									</div>
								</div>
								<div className="container-description">
									<div className="container-description_1">
										<Description {...description1} />
									</div>
									<div className="container-description_2">
										<Description {...description2} />
									</div>
								</div>
								<div className="container-game">
									GAME
									</div>
							</div>
							<Row className="bottom-border"></Row>
						</div>
						// </div>
					)
				}}
			</Consumer>

		);
	}
}

export default BrameEngage;