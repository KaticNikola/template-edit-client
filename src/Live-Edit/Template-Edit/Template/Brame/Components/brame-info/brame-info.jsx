import React, { Component } from 'react';
import "./brame-info.scss";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import leftTitleIcon from "../brame-info/assets/leftTitleIcon.svg";
import rightTitleIcon from "../brame-info/assets/rightTitleIcon.svg";
// import card1 from "../brame-info/assets/card1.svg";
// import card2 from "../brame-info/assets/card2.svg";
// import card3 from "../brame-info/assets/card3.svg";
// import brand from "../brame-info/assets/brand.svg";
// import heart from "../brame-info/assets/heart.svg";
// import talk from "../brame-info/assets/talk.svg";
// import Card from "react-bootstrap/Card";
// import CardDeck from "react-bootstrap/CardDeck";

// import bell from "./assets/titleBell.svg";

import { Consumer } from '../../../Template-Context/TemplateContext'
import SecondaryTitle from '../../../../Components/Text-Components/SecondaryTitle'
import Description from '../../../../Components/Text-Components/Description'
import Icon from '../../../../Components/FontAwesome-Icon-Component/Icon'
import InfoConditionalComponent from '../../../../Components/Info-Conditional-Component/InfoConditionalComponent'


class BrameInfo extends Component {
	render() {
		return (
			<Consumer>
				{value => {
					const { previewSize } = value
					const { informStatus, title, description, icon, elementToShow } = value.information;
					return (
						<div id={`info-${previewSize}`} style={{display:informStatus}}>
							<div className="container-60">
								<div className="container-60-titleBox">
									<div className="container-60-titleBox_decorationLeft">
										<img src={leftTitleIcon} alt='title decoration' className="leftTitleIcon" />
									</div>
									<div className="container-60-titleBox_icon">
										<Icon {...icon} />
									</div>
									<div className="container-60-titleBox_title">
										<SecondaryTitle {...title} />
									</div>
									<div className="container-60-titleBox_decorationRight">
										<img src={rightTitleIcon} alt='title decoration' className="rightTitleIcon" />
									</div>
								</div>
								<div className="container-60-descriptionBox">
									<Description {...description} />
								</div>
							</div>
							<div className="container">
								<InfoConditionalComponent />
							</div>
						</div>
					)
				}}
			</Consumer>

		);
	}
}

export default BrameInfo;