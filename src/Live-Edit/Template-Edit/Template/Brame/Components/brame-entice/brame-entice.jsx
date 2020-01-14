import React, { Component } from 'react';
import "./brame-entice.scss";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// import prize from "./assets/prize.jpg";
// import star from './assets/star.svg';
// import Card from "react-bootstrap/Card";
// import CardGroup from "react-bootstrap/CardGroup";

import { Consumer } from '../../../Template-Context/TemplateContext'
import SecondaryTitle from '../../../../Components/Text-Components/SecondaryTitle'
import Description from '../../../../Components/Text-Components/Description'
import Icon from '../../../../Components/FontAwesome-Icon-Component/Icon'

import ConditionalComponent from '../../../../Components/Conditional-Component/ConditionalComponent'

class BrameEntice extends Component {
	render() {
		const {status } = this.props
		return (
			<Consumer>
				{value => {
					const { description1, description2, title, icon, elementToShow} = value.entice;
					return (
						<div id="entice" style={{display:status}}>
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
									<ConditionalComponent elementToShow={elementToShow}/>
								</div>
								{/* <Row>
									<Col md="7"> */}
										{/*<img src={win_price} className="winPrice" alt=""/>*/}
										{/* <CardGroup>
											<Card className='card1'>
												<Card.Img variant="top" src={prize} />
												<Card.Body>
													<Card.Text>
														Win this prize!
                                        </Card.Text>
												</Card.Body>
											</Card>
											<Card className='card2'>
												<Card.Img variant="top" src={prize} />
												<Card.Body>
													<Card.Text>
														Win this prize!
                                        </Card.Text>
												</Card.Body>
											</Card>
											<Card className='card3'>
												<Card.Img variant="top" src={prize} />
												<Card.Body>
													<Card.Text>
														Win this prize!
                            </Card.Text>
												</Card.Body>
											</Card>

										</CardGroup> */}
									{/* </Col>
								</Row> */}
							</div>
						</div>
					)
				}}
			</Consumer>

		);
	}
}

export default BrameEntice;