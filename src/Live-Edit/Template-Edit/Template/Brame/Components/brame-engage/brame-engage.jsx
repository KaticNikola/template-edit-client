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
					const { title, description1, description2, icon } = value.engage;
					return (
						<div id="engage">
							{/* <div className="container-fluid"> */}
							<div className="borderTop"></div>
							<div className="container">
								<div className="container-titleBox">
									<div className="container-titleBox_icon">
										{/* <img src={gift} alt="gift" /> */}
										<Icon {...icon}/>
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

							{/* <Row className="top-border">
						<Col md={{ span: 8, offset: 2 }}>
							<h3><img src={leftTitleIcon} className="leftTitleIcon" alt="" /> <img src={gift} className="gift" /> Engage the audience <img src={rightTitleIcon} className="rightTitleIcon" alt="" /></h3>
							<p className="engage-text">
								Use this section to present the audience with the game you have created. The point of this introduction text should be to invite the audience to “ENGAGE NOW”.
                                <br />
								The players will be able to retry if they lose or claim their prize if they win. The winner may be required to enter their details to receive the prize, or be presented with a coupon / voucher. Options to share this page via the social media could also be shown at this point. In a “prizeless” game, players could just set scores and challenge their friends via social media to beat them.
                            </p>
						</Col>
					</Row>
					<Row>
						<Col md={{ span: 10, offset: 1 }}>
							<p className="text-center">GAME SPACE</p>
						</Col>
					</Row> */}
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