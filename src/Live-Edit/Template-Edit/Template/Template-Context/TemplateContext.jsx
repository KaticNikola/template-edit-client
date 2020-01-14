import React from 'react'

import reducer from './TemplatesReducers'


const Context = React.createContext();

export class Provider extends React.Component {
	state = {
		selectedElement: 'entice',//za form picker>edit menu
		editMode: 'on',
		previewSize: '',


    //za editMenu 
    editMenuContent:"",//moze da bude Formpicker | campani info - bice default | Section
		enticeStatus: '',
		informStatus: '',
		connectStatus: '',
		footerStatus: '',
		campaingName:"Campaing Name",
		
		header: { 
			id:"header",
			navStatus: '',
			logo: {
				id: 'headerLogo',
				background: "url()",

			},
			navigationHome: {
				id: 'headerNavigationHome',
				background: '',
				border: '',
				borderThickness: '',
				borderType: '',
				borderColor: '',
				borderRadius: '',

				content: "Home",
				fontSize: '',
				fontType: "",
				fontWeight: "",
				color: "",
				textTransform: "",
				fontStyle: "",
				textAlign: "",
				textDecoration: "",
				letterSpacing: '',

				// boxShadowColor: '',
				// boxShadowBlur: '',
				// boxShadowSpread: '',
				// boxShadowHorizontal: '',
				// boxShadowVertical: '',

				// hoverBackground: '',
				// hoverBorder: '',
				// hoverBorderThiknes: '',
				// hoverBorderType: '',
				// hoverBorderColor: '',
				// hoverBorderRadius: '',

				// hoverContent: "",
				// hoverFontSize: '',
				// hoverFontType: "",
				// hoverFontWeight: "",
				// color: "",
				// hoverTextTransform: "",
				// hoverFontStyle: "",
				// hoverTextAlign: "",
				// hoverTextDecoration: "",

				// hoverBoxShadowColor: '',
				// hoverBoxShadowBlurRadius: '',
				// hoverBoxShadowSpreadRadius: '',
				// hoverBoxShadowHorizontal: '',
				// hoverBoxShadowVertical: '',

			},
			navigationEntice: {
				id: 'headerNavigationEntice',
				background: '',
				border: '',
				borderThickness: '',
				borderType: '',
				borderColor: '',
				borderRadius: '',

				content: "Entice",
				fontSize: '',
				fontType: "",
				fontWeight: "",
				color: "",
				textTransform: "",
				fontStyle: "",
				textAlign: "",
				textDecoration: "",
				letterSpacing: '',

				// boxShadowColor: '',
				// boxShadowBlur: '',
				// boxShadowSpread: '',
				// boxShadowHorizontal: '',
				// boxShadowVertical: '',

				// hoverBackground: '',
				// hoverBorder: '',
				// hoverBorderThiknes: '',
				// hoverBorderType: '',
				// hoverBorderColor: '',
				// hoverBorderRadius: '',

				// hoverContent: "",
				// hoverFontSize: '',
				// hoverFontType: "",
				// hoverFontWeight: "",
				// color: "",
				// hoverTextTransform: "",
				// hoverFontStyle: "",
				// hoverTextAlign: "",
				// hoverTextDecoration: "",

				// hoverBoxShadowColor: '',
				// hoverBoxShadowBlurRadius: '',
				// hoverBoxShadowSpreadRadius: '',
				// hoverBoxShadowHorizontal: '',
				// hoverBoxShadowVertical: '',

			},
			navigationEngage: {
				id: 'headerNavigationEngage',
				background: '',
				border: '',
				borderThickness: '',
				borderType: '',
				borderColor: '',
				borderRadius: '',

				content: "Engage",
				fontSize: '',
				fontType: "",
				fontWeight: "",
				color: "",
				textTransform: "",
				fontStyle: "",
				textAlign: "",
				textDecoration: "",
				letterSpacing: '',

				boxShadowColor: '',
				boxShadowBlur: '',
				boxShadowSpread: '',
				boxShadowHorizontal: '',
				boxShadowVertical: '',

				// hoverBackground: '',
				// hoverBorder: '',
				// hoverBorderThiknes: '',
				// hoverBorderType: '',
				// hoverBorderColor: '',
				// hoverBorderRadius: '',

				// hoverContent: "",
				// hoverFontSize: '',
				// hoverFontType: "",
				// hoverFontWeight: "",
				// color: "",
				// hoverTextTransform: "",
				// hoverFontStyle: "",
				// hoverTextAlign: "",
				// hoverTextDecoration: "",

				// hoverBoxShadowColor: '',
				// hoverBoxShadowBlurRadius: '',
				// hoverBoxShadowSpreadRadius: '',
				// hoverBoxShadowHorizontal: '',
				// hoverBoxShadowVertical: '',

			},

			title: {
				id: 'headerTitle',
				content: "A Short Catchy Title",
				fontSize: '55',
				fontType: "",
				fontWeight: "",
				color: "",
				textTransform: "",
				fontStyle: "",
				textAlign: "",
				textDecoration: "",
				lineHeight: "",

				//mozda nece biti
				// letterSpacing: '',
				// marginTop: '',
				// marginLeft: '',
				// marginBottom: '',
				// marginRight: '',
				// paddingTop: '',
				// paddingLeft: '',
				// paddingBottom: '',
				// paddingRight: '',

			},
			description: {
				id: "headerDescription",
				content: "This primary subtitle is used to directly lead the audience to participate.",
				fontSize: '',
				fontType: "",
				fontWeight: "",
				color: "",
				textTransform: "",
				fontStyle: "",
				textAlign: "",
				textDecoration: "",
				lineHeight: "",
			},

			button: {
				id: 'headerButton',
				background: '',
				border: '',
				borderThickness: '',
				borderType: '',
				borderColor: '',
				borderRadius: '',

				content: "Engage",
				fontSize: '',
				fontType: "",
				fontWeight: "",
				color: "",
				textTransform: "",
				fontStyle: "",
				textAlign: "",
				textDecoration: "",
				lineHeight: "",

				// boxShadowColor: '',
				// boxShadowBlur: '',
				// boxShadowSpread: '',
				// boxShadowHorizontal: '',
				// boxShadowVertical: '',

				// hoverBackground: '',
				// hoverBorder: '',
				// hoverBorderThiknes: '',
				// hoverBorderType: '',
				// hoverBorderColor: '',
				// hoverBorderRadius: '',

				// hoverContent: "",
				// hoverFontSize: '',
				// hoverFontType: "",
				// hoverFontWeight: "",
				// color: "",
				// hoverTextTransform: "",
				// hoverFontStyle: "",
				// hoverTextAlign: "",
				// hoverTextDecoration: "",

				// hoverBoxShadowColor: '',
				// hoverBoxShadowBlurRadius: '',
				// hoverBoxShadowSpreadRadius: '',
				// hoverBoxShadowHorizontal: '',
				// hoverBoxShadowVertical: '',

			},
			background: {
				id: 'headerBackground',
				background: "introduce-bg.svg",
				backgroundColor: '',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
				backgroundSize: 'center',
				backgroundOrigin: '',
			},
		},

		entice: {
			id:"entice",
			icon: {
				id: 'enticeTitleIcon',
				icon: 'fas fa-star',// fontawesome class
				fontSize: '30',
				color: '#d8383c',
				textAlign: '',

			},
			title: {
				id: 'enticeTitle',
				content: "Entice the audience",
				fontSize: '',
				fontType: "",
				fontWeight: "",
				color: "",
				textTransform: "",
				fontStyle: "",
				textAlign: "",
				textDecoration: "",
				lineHeight: "",

				//mozda nece biti
				// letterSpacing: '',
				// marginTop: '',
				// marginLeft: '',
				// marginBottom: '',
				// marginRight: '',
				// paddingTop: '',
				// paddingLeft: '',
				// paddingBottom: '',
				// paddingRight: '',
				//new advanced

			},
			description1: {
				id: "enticeDescription1",
				content: " Use this section to provide a further enticement to the visitors who have still not started the engage. Put differently, this section should answer the question “WHY ENGAGE",
				fontSize: '',
				fontType: "",
				fontWeight: "",
				color: "",
				textTransform: "",
				fontStyle: "",
				textAlign: "",
				textDecoration: "",
				lineHeight: "",
			},
			description2: {
				id: "enticeDescription2",
				content: "Primarily, you should use this section to display prizes that you could get by playing the engage. Conversely, you could use it to promote relevant products or services. In any case, alternative layouts combining text, single photos and galleries should help you get your message accross.",
				fontSize: '',
				fontType: "",
				fontWeight: "",
				color: "",
				textTransform: "",
				fontStyle: "",
				textAlign: "",
				textDecoration: "",
				lineHeight: "",
			},

			//in progress
			// component options user to pick
			elementToShow:'cardList',
			options: {
				// promeni ime
				cardList: [
					// img + title
					{
						title: {
							id: 'enticeOptionPrize0Title',
							//actionType: 'EDIT_HEADER_TITILE',
							content: "Win This Prize!",
							fontSize: '',
							fontType: "",
							fontWeight: "",
							color: "",
							textTransform: "",
							fontStyle: "",
							textAlign: "",
							textDecoration: "",
							lineHeight: "",

						},
						image: {
							id: 'enticeOptionPrize0Image',
							url: 'https://o.aolcdn.com/images/dims?quality=85&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fcrop%3D1920%252C1080%252C0%252C0%26quality%3D85%26format%3Djpg%26resize%3D1600%252C900%26image_uri%3Dhttps%253A%252F%252Fs.yimg.com%252Fos%252Fcreatr-uploaded-images%252F2019-09%252Fa7ec8f80-e04e-11e9-bfaf-14f222042ebe%26client%3Da1acac3e1b3290917d92%26signature%3D953f11e05a621ef5141ef2508585859cbfee3eb5&client=amp-blogside-v2&signature=3ab20db4dc4b04dc6a07cebdfe9fa8497642394b',
							//koje cemo porperies da menjamo vezane za img 
							backgroundPosition: 'center', 
							backgroundRepeat: 'no-reperat', 
							backgroundSize: "cover",
							

						}
					},
					{
						title: {
							id: 'enticeOptionPrize1Title',
							//actionType: 'EDIT_HEADER_TITILE',
							content: "Win This Prize!",
							fontSize: '',
							fontType: "",
							fontWeight: "",
							color: "",
							textTransform: "",
							fontStyle: "",
							textAlign: "",
							textDecoration: "",
							lineHeight: "",

						},
						image: {
							id: 'enticeOptionPrize1Image',
							url: "https://o.aolcdn.com/images/dims?quality=85&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fcrop%3D1920%252C1080%252C0%252C0%26quality%3D85%26format%3Djpg%26resize%3D1600%252C900%26image_uri%3Dhttps%253A%252F%252Fs.yimg.com%252Fos%252Fcreatr-uploaded-images%252F2019-09%252Fa7ec8f80-e04e-11e9-bfaf-14f222042ebe%26client%3Da1acac3e1b3290917d92%26signature%3D953f11e05a621ef5141ef2508585859cbfee3eb5&client=amp-blogside-v2&signature=3ab20db4dc4b04dc6a07cebdfe9fa8497642394b",

						},

					},
					{
						title: {
							id: 'enticeOptionPrize2Title',
							//actionType: 'EDIT_HEADER_TITILE',
							content: "Win This Prize!",
							fontSize: '',
							fontType: "",
							fontWeight: "",
							color: "",
							textTransform: "",
							fontStyle: "",
							textAlign: "",
							textDecoration: "",
							lineHeight: "",

						},
						image: {
							id: 'enticeOptionPrize2Image',
							url: "https://o.aolcdn.com/images/dims?quality=85&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fcrop%3D1920%252C1080%252C0%252C0%26quality%3D85%26format%3Djpg%26resize%3D1600%252C900%26image_uri%3Dhttps%253A%252F%252Fs.yimg.com%252Fos%252Fcreatr-uploaded-images%252F2019-09%252Fa7ec8f80-e04e-11e9-bfaf-14f222042ebe%26client%3Da1acac3e1b3290917d92%26signature%3D953f11e05a621ef5141ef2508585859cbfee3eb5&client=amp-blogside-v2&signature=3ab20db4dc4b04dc6a07cebdfe9fa8497642394b",

						},

					}

				],
				image: {
					id: "enticeptionImg",
					url: "https://o.aolcdn.com/images/dims?quality=85&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fcrop%3D1920%252C1080%252C0%252C0%26quality%3D85%26format%3Djpg%26resize%3D1600%252C900%26image_uri%3Dhttps%253A%252F%252Fs.yimg.com%252Fos%252Fcreatr-uploaded-images%252F2019-09%252Fa7ec8f80-e04e-11e9-bfaf-14f222042ebe%26client%3Da1acac3e1b3290917d92%26signature%3D953f11e05a621ef5141ef2508585859cbfee3eb5&client=amp-blogside-v2&signature=3ab20db4dc4b04dc6a07cebdfe9fa8497642394b",

				},
				video: {
					id: "enticeOptionVideo",
					url: "",

				}
			},

			background: {
				id: 'enticeBackground',
				background: "url()",
				backgroundColor: '',
				backgroundRepeat: '',
				backgroundPosition: '',
				backgroundSize: '',
				backgroundOrigin: '',
			}

		},

		engage: {
			id:"engage",
			icon: {
				id: 'engageTitleIcon',
				icon: 'fas fa-gift',// fontawesome class
				fontSize: '',
				color: '',
				textAlign: '',

			},
			title: {
				id: 'engageTitle',
				content: "Engage the audience",
				fontSize: '',
				fontType: "",
				fontWeight: "",
				color: "",
				textTransform: "",
				fontStyle: "",
				textAlign: "",
				textDecoration: "",
				lineHeight: "",

				//mozda nece biti
				// letterSpacing: '',
				// marginTop: '',
				// marginLeft: '',
				// marginBottom: '',
				// marginRight: '',
				// paddingTop: '',
				// paddingLeft: '',
				// paddingBottom: '',
				// paddingRight: '',
				//new advanced

			},
			description1: {
				id: "engageDescription1",
				content: "Use this section to present the audience with the game you have created. The point of this introduction text should be to invite the audience to “ENGAGE NOW”.",
				fontSize: '',
				fontType: "",
				fontWeight: "",
				color: "",
				textTransform: "",
				fontStyle: "",
				textAlign: "",
				textDecoration: "",
				lineHeight: "",
			},
			description2: {
				id: "engageDescription2",
				content: "The players will be able to retry if they lose or claim their prize if they win. The winner may be required to enter their details to receive the prize, or be presented with a coupon / voucher. Options to share this page via the social media could also be shown at this point. In a “prizeless” game, players could just set scores and challenge their friends via social media to beat them.",
				fontSize: '',
				fontType: "",
				fontWeight: "",
				color: "",
				textTransform: "",
				fontStyle: "",
				textAlign: "",
				textDecoration: "",
				lineHeight: "",
			},
			background: {
				id: 'engageBackground',
				background: "url()", 
				backgroundColor: '',
				backgroundRepeat: '',
				backgroundPosition: '',
				backgroundSize: '',
				backgroundOrigin: '',
			}

		},

		information: {
			id:"information",
			icon: {
				id: 'informationTitleIcon',
				icon: 'fas fa-bell',// fontawesome class
				fontSize: '30',
				color: '#d8383c',
				textAlign: '',
			},
			title: {
				id: 'informationTitle',
				content: "Inform the audience",
				fontSize: '',
				fontType: "",
				fontWeight: "",
				color: "",
				textTransform: "",
				fontStyle: "",
				textAlign: "",
				textDecoration: "",
				lineHeight: "",

				//mozda nece biti
				// letterSpacing: '',
				// marginTop: '',
				// marginLeft: '',
				// marginBottom: '',
				// marginRight: '',
				// paddingTop: '',
				// paddingLeft: '',
				// paddingBottom: '',
				// paddingRight: '',
				//new advanced

			},
			description: {
				id: "informationDescription",
				content: "Use this section to supply any additional information that supports your campaign. While this section is optional, it answers the question “WHAT TO DO NEXT” and appears after you’ve captured your audience’s attention. By including elements such as the a of sponsors, promoted products, social network feed, etc. you can further boost user engagement, bolster your company’s or campaign’s significance through social proof, or generate leads.",
				fontSize: '',
				fontType: "",
				fontWeight: "",
				color: "",
				textTransform: "",
				fontStyle: "",
				textAlign: "",
				textDecoration: "",
				lineHeight: "",
			},

			//in progress
			//user selected element
			elementToShow:'',
			//cards
			card1Title: {
				id: "informationCard1Title"
			},
			card1Subtitle: {
				id: "informationCard1Subtitle"
			},
			card1icon: {
				id: "informationCard1Icon"
			},
			card1Descritpion: {
				id: "informationCard1Description"
			},
			card1Image: {
				id: "informationCard1Image"
			},
			//ovo se potencijalno menja 
			//da li automatski vuce date
			card1Date: {},
			card1LikeIcon: {},
			card1TalkIcon: {},

			//card2
			card2Title: {
				id: "informationCard2Title"
			},
			card2Subtitle: {
				id: "informationCard2Subtitle"
			},
			card2icon: {
				id: "informationCard2Icon"
			},
			card2Descritpion: {
				id: "informationCard2Description"
			},
			card2Image: {
				id: "informationCard2Image"
			},

			//card 3
			card3Title: {
				id: "informationCard3Title"
			},
			card3Subtitle: {
				id: "informationCard3Subtitle"
			},
			card3icon: {
				id: "informationCard3Icon"
			},
			card3Descritpion: {
				id: "informationCard3Description"
			},
			card3Image: {
				id: "informationCard3Image"
			},
/// in progress end 
			background: {
				id: 'informationBackground',
				background: "url()",
				backgroundColor: '',
				backgroundRepeat: '',
				backgroundPosition: '',
				backgroundSize: '',
				backgroundOrigin: '',

			}
		},

		contact: {
			id:"contact",
			icon: {
				id: 'contactTitleIcon',
				icon: 'fas fa-heart',// fontawesome class
				fontSize: '30',
				color: '#d8383c',
				textAlign: '',
			},
			title: {
				id: 'contactTitle',
				content: "Connect",
				fontSize: '',
				fontType: "",
				fontWeight: "",
				color: "",
				textTransform: "",
				fontStyle: "",
				textAlign: "",
				textDecoration: "",
				lineHeight: "",

				//mozda nece biti
				// letterSpacing: '',
				// marginTop: '',
				// marginLeft: '',
				// marginBottom: '',
				// marginRight: '',
				// paddingTop: '',
				// paddingLeft: '',
				// paddingBottom: '',
				// paddingRight: '',
				//new advanced

			},
			//description
			description: {
				id: "contactDescription",
				content: " Use this section to list any company contact information you would like to be available to the end users. Alternatively (or additionally), social media links could go here. ",
				fontSize: '',
				fontType: "",
				fontWeight: "",
				color: "",
				textTransform: "",
				fontStyle: "",
				textAlign: "",
				textDecoration: "",
				lineHeight: "",
			},
			//location 
			location: {
				id: "contactLocation",
				content: "177 York St, Brooklyn, NY 11201, USA",
				fontSize: '',
				fontType: "",
				fontWeight: "",
				color: "",
				textTransform: "",
				fontStyle: "",
				textAlign: "",
				textDecoration: "",
				lineHeight: "",
			},
			// phone 
			phone: {
				id: "contactPhone",
				content: "+1-929-123-4567",
				fontSize: '',
				fontType: "",
				fontWeight: "",
				color: "",
				textTransform: "",
				fontStyle: "",
				textAlign: "",
				textDecoration: "",
				lineHeight: "",
			},
			// email
			email: {
				id: "contactEmail",
				content: "contact@email.com",
				fontSize: '',
				fontType: "",
				fontWeight: "",
				color: "",
				textTransform: "",
				fontStyle: "",
				textAlign: "",
				textDecoration: "",
				lineHeight: "",
			},
			//social media (arr sa linkovima i za svaki SM profile)
			socialMedia: [
				{
					id: '',
					name: 'Facebook',
					linkTo: ''
				},
				{
					id: '',
					name: 'Tweeter',
					linkTo: ''
				},
				{
					id: '',
					name: 'Instsagram',
					linkTo: ''
				}
			],
			background: {
				id: 'contactBackground',
				background: "url()", 
				backgroundColor: '',
				backgroundRepeat: '',
				backgroundPosition: '',
				backgroundSize: '',
				backgroundOrigin: '',
			}
		},


		dispatch: action => this.setState(state => reducer(state, action)),

	}

	render() {
		return (
			<Context.Provider value={this.state}>
				{this.props.children}
			</Context.Provider>
		)
	}
}

export const Consumer = Context.Consumer;