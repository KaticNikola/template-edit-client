import React, { Component } from 'react';
import "./brame-connect.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GoogleMapReact from 'google-map-react';
import heart from "./assets/heart.svg";
import house from "./assets/house.svg";
import et from "./assets/et.svg";
import phone from "./assets/phone.svg";


import { Consumer } from '../../../Template-Context/TemplateContext'
import SecondaryTitle from '../../../../Components/Text-Components/SecondaryTitle'
import Description from '../../../../Components/Text-Components/Description'
import Icon from '../../../../Components/FontAwesome-Icon-Component/Icon'

class BrameConnect extends Component {


	static defaultProps = {
		center: {
			lat: 59.95,
			lng: 30.33
		},
		zoom: 11
	};
	render() {
		return (
			<Consumer>
				{value => {
					const { previewSize } = value;
					const { connectStatus, title, description, icon, location, phone, email, background} = value.contact;

					return (
						<div  style={{
							background : `url(${background.background})`,
							 backgroundSize: 'cover',	
							 backgroundRepeat: 'no-repeat',
							 width: "100%",
							 height: "100vh",
							 display:connectStatus
							 }}
							 id={`connect-${previewSize}`}>
							<div className="overlay">
								<div className="top-border"></div>
								<div className="container">

									<div className="container-60">
										{/* google map  */}
                  </div>
									<div className="container-info">
										<div className="container-info_titleBox">
											<div className="title">
												<SecondaryTitle {...title}/>
											</div>
											<div className="icon">
												<Icon {...icon} />
											</div>
										</div>
										{/* descritpion */}
										<div className="container-info_description">
											<Description {...description}/>
										</div>
										{/* location */}
										<div className="container-info_information">
											<div className="item">
												<Description {...location}/>
												<i class="fas fa-home"></i>
											</div>
											<div className="item">
												<Description {...phone}/>
												<i class="fas fa-mobile-alt"></i>
											</div>
											<div className="item">
												<Description {...email}/>
												<i class="fas fa-at"></i>
											</div>

										</div>
										{/* socila media */}
										<div className="container-info_socialMedia">
											{/* SM component  */}
										</div>
									</div>


									{/* <Row>
										<Col md={{ span: 8 }}>
											<div style={{ height: '100%', width: '100%' }}>
												<GoogleMapReact
													bootstrapURLKeys={{ key: '' }}
													defaultCenter={this.props.center}
													defaultZoom={this.props.zoom}
													lat={59.955413}
													lng={30.337844}
												>
												</GoogleMapReact>
											</div>

										</Col>
										<Col md={{ span: 4 }}>
											<h2>Connect <img src={heart} alt="" /> </h2>
											<p>
												Use this section to list any company contact information you would like to be available to the end users. Alternatively (or additionally), social media links
												could go here.
                                </p>
											<p>
												177 York St, Brooklyn, NY 11201, USA <img src={house} alt="" />
												<br />
												+1-929-123-4567 <img src={phone} alt="" />
												<br />
												contact@email.com <img src={et} alt="" />
												<br />
												<span className="text-red">Instagram</span> - <span className="text-red">Twitter</span> - <span className="text-red">Facebook</span>
											</p>
										</Col>
									</Row> */}

								</div>
							</div>
						</div>

					)
				}}
			</Consumer>

		);
	}
}

export default BrameConnect;