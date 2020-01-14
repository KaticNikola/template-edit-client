import React, { Component } from 'react';
import "./brame-info.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import leftTitleIcon from "../brame-info/assets/leftTitleIcon.svg";
import rightTitleIcon from "../brame-info/assets/rightTitleIcon.svg";
import card1 from "../brame-info/assets/card1.svg";
import card2 from "../brame-info/assets/card2.svg";
import card3 from "../brame-info/assets/card3.svg";
import brand from "../brame-info/assets/brand.svg";
import heart from "../brame-info/assets/heart.svg";
import talk from "../brame-info/assets/talk.svg";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

import bell from "./assets/titleBell.svg";

import { Consumer } from '../../../Template-Context/TemplateContext'
import SecondaryTitle from '../../../../Components/Text-Components/SecondaryTitle'
import Description from '../../../../Components/Text-Components/Description'
import Icon from '../../../../Components/FontAwesome-Icon-Component/Icon'

import ConditionalComponent from '../../../../Components/Conditional-Component/ConditionalComponent';


class BrameInfo extends Component {
	render() {
		return (
			<Consumer>
				{value => {
					const { title, description, icon, elementToShow } = value.information;
					return (
						<div id="info">
							<div className="container60">
								<div className="container60-titleBox">
									<div className="container60-titleBox_decorationLeft">
										<img src={leftTitleIcon} alt='title decoration' className="leftTitleIcon" />
									</div>
									<div className="container60-titleBox_icon">
										<Icon {...icon} />
									</div>
									<div className="container60-titleBox_title">
										<SecondaryTitle {...title} />
									</div>
									<div className="container60-titleBox_decorationRight">
										<img src={rightTitleIcon} alt='title decoration' className="rightTitleIcon" />
									</div>
								</div>
								<div className="container60-descriptionBox">
									<Description {...description} />
								</div>
							</div>
							<div className="container80">
								<ConditionalComponent elementToShow={elementToShow} />
							</div>
							{/* <div className="container">
					<Row>
						<Col md={{ span: 10, offset: 1 }}>
							<h3><img src={leftTitleIcon} className="leftTitleIcon" /> Inform the audience <img src={rightTitleIcon} className="rightTitleIcon" /></h3>
							<p>
								Use this section to supply any additional information that supports your campaign. While this section is optional, it answers the question “WHAT TO DO NEXT” and appears after you’ve captured your audience’s attention. By including elements such as the a of sponsors, promoted products, social network feed, etc. you can further boost user engagement, bolster your company’s or campaign’s significance through social proof, or generate leads.
                            </p>
						</Col>
					</Row>
					<Row>
						<Col md={{ span: 10, offset: 1 }}>
							<CardDeck>
								<Card>
									<Card.Body>
										<Card.Title> <img src={brand} alt="" /> Brand Name</Card.Title>
										<Card.Text>
											This is the first post taken from the company’s Twitter feed. <span className="tag">@mention #hashtag</span>
										</Card.Text>
										<Card.Img variant="top" src={card1} />
										<div className="status">
											<img src={heart} alt="" /> 1,234 9:09 PM - Nov 25, 2019
                                        </div>
									</Card.Body>
									<Card.Footer>
										<small className="text-red"><img src={talk} alt="" /> 243 people are talking about this</small>
									</Card.Footer>
								</Card>
								<Card>
									<Card.Body>
										<Card.Title> <img src={brand} alt="" /> Brand Name</Card.Title>
										<Card.Text>
											This is the second post sourced from the company’s Twitter feed. <span className="tag">@mention #hashtag</span>
										</Card.Text>
										<Card.Img variant="top" src={card2} />
										<div className="status">
											<img src={heart} alt="" /> 1,234 9:09 PM - Nov 25, 2019
                                        </div>
									</Card.Body>
									<Card.Footer>
										<small className="text-red"><img src={talk} alt="" /> 243 people are talking about this</small>
									</Card.Footer>
								</Card>
								<Card>
									<Card.Body>
										<Card.Title> <img src={brand} alt="" /> Brand Name</Card.Title>
										<Card.Text>
											This is the third post pulled from the company’s Twitter feed. <span className="tag">@mention #hashtag</span>
										</Card.Text>
										<Card.Img variant="top" src={card3} />
										<div className="status">
											<img src={heart} alt="" /> 1,234 9:09 PM - Nov 25, 2019
                                        </div>
									</Card.Body>
									<Card.Footer>
										<small className="text-red"><img src={talk} alt="" /> 243 people are talking about this</small>
									</Card.Footer>
								</Card>
							</CardDeck>
						</Col>
					</Row>
				
				</div> */}
						</div>
					)
				}}
			</Consumer>

		);
	}
}

export default BrameInfo;