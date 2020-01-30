import React from 'react'

import reducer from './TemplatesReducers'


const Context = React.createContext();

export class Provider extends React.Component {
	state = {
		selectedElement: 'start',//za form picker>edit menu
		editMode: 'on',
		previewSize: 'PC',
		campaingName: "Campaing Name",
		campaingtag: '',//*
		//dodato
		modalStatus: '',
		imageModalSource: "album",
		iconModalSource: "",
		selectedImagetag:'',
		//test i placeholder
		album:[
			{
				imagetag:'1',
				url:'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBRfMUB.img?h=552&w=750&m=6&q=60&u=t&o=f&l=f&x=1034&y=799',
				title:'TEST'
			},
			{
				imagetag:'1',
				url:'https://lh6.googleusercontent.com/proxy/UvKAjDXLVFcGVeI27PaST2lWDsCBtbcb_zv_NzKVIX-wsOasNQNsWDzgxYBMVwoASpnuOYOg6SRjaZp6XIlXduMyTRU_Sudj5_eiHyDOMuaYu9KZ_me1PWKEVIh1N6m-mquksKcL',
				title:'TEST'
			},
			{
				imagetag:'2',
				url:'https://www.tes.com/tesv2/files/styles/news_article_ml_x2/public/news-images/presents.jpg?itok=U9SQpcDS',
				title:'TEST'
			},
			{
				imagetag:'3',
				url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqdOCBahkiQv-VRpGoZSgiU0sCG_KMjoUW9SWQSRrVZs5SY0ewVQ&s',
				title:'TEST'
			},
			{
				imagetag:'4',
				url:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cropped-hands-of-woman-arranging-christmas-presents-royalty-free-image-889538316-1544619359.jpg?crop=0.670xw:1.00xh;0.190xw,0&resize=480:*',
				title:'TEST'
			},
			{
				imagetag:'5',
				url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsPCV1624Nr-LavbIePUbvg7ZzrUyBi1_O4A7BzgYIv6mMOg9N&s',
				title:'TEST'
			},
			
		],

		//promena header > introduce * id svakog elementa je u stringu zamenio header sa introduce
		introduce: {
			introduceStatus: '',
			tag: "introduce",
			navStatus: 'flex',
			logo: {
				tag: 'introduceLogo',
				background: "url()",

			},
			navigationHome: {
				tag: 'introduceNavigationHome',
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
				tag: 'introduceNavigationEntice',
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
				tag: 'introduceNavigationEngage',
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
				tag: 'introduceTitle',
				content: "A Short Catchy Title",
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

			},
			description: {
				tag: "introduceDescription",
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
				tag: 'introduceButton',
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
				tag: 'introduceBackground',
				background: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBRfMUB.img?h=552&w=750&m=6&q=60&u=t&o=f&l=f&x=1034&y=799",//ne radi za img iz foldera
				backgroundColor: '',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
				backgroundSize: 'center',
				backgroundOrigin: '',
			},
		},

		entice: {
			tag: "entice",
			enticeStatus: '', //izmena
			icon: {
				tag: 'enticeTitleIcon',
				icon: 'fas fa-star',// fontawesome class
				fontSize: '',
				color: '#d8383c',
				textAlign: '',
			},

			title: {
				tag: 'enticeTitle',
				content: "Entice the audience",
				fontSize: '40',
				fontType: "",
				fontWeight: "",
				color: "",
				textTransform: "",
				fontStyle: "",
				textAlign: "",
				textDecoration: "",
				lineHeight: "",

			},
			description1: {
				tag: "enticeDescription1",
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
				tag: "enticeDescription2",
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

			// component options user to pick
			elementToShow: 'textSlideshow',
			options: {
				textSlideshow: [
					// img + title
					{
						title: {
							tag: 'enticeOptionT&S0Title', //izmena 
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
							tag: 'enticeOptionT&S0Image',//izmena
							url: './assets/prize1.jpg',
							//koje cemo porperies da menjamo vezane za img 
							backgroundPosition: 'center',
							backgroundRepeat: 'no-reperat',
							backgroundSize: "cover",


						}
					},
					{
						title: {
							tag: 'enticeOptionT&S1Title',//izmena
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
							tag: 'enticeOptionT&S1Image',
							url: "https://o.aolcdn.com/images/dims?quality=85&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fcrop%3D1920%252C1080%252C0%252C0%26quality%3D85%26format%3Djpg%26resize%3D1600%252C900%26image_uri%3Dhttps%253A%252F%252Fs.yimg.com%252Fos%252Fcreatr-uploaded-images%252F2019-09%252Fa7ec8f80-e04e-11e9-bfaf-14f222042ebe%26client%3Da1acac3e1b3290917d92%26signature%3D953f11e05a621ef5141ef2508585859cbfee3eb5&client=amp-blogside-v2&signature=3ab20db4dc4b04dc6a07cebdfe9fa8497642394b",

						},

					},
					{
						title: {
							tag: 'enticeOptionT&S2Title',//izmena
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
							tag: 'enticeOptionT&S2Image',//izmena
							url: "https://o.aolcdn.com/images/dims?quality=85&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fcrop%3D1920%252C1080%252C0%252C0%26quality%3D85%26format%3Djpg%26resize%3D1600%252C900%26image_uri%3Dhttps%253A%252F%252Fs.yimg.com%252Fos%252Fcreatr-uploaded-images%252F2019-09%252Fa7ec8f80-e04e-11e9-bfaf-14f222042ebe%26client%3Da1acac3e1b3290917d92%26signature%3D953f11e05a621ef5141ef2508585859cbfee3eb5&client=amp-blogside-v2&signature=3ab20db4dc4b04dc6a07cebdfe9fa8497642394b",
							linkTo: ''

						},

					}

				],
				image: {
					tag: "enticeptionImg",
					url: "https://o.aolcdn.com/images/dims?quality=85&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fcrop%3D1920%252C1080%252C0%252C0%26quality%3D85%26format%3Djpg%26resize%3D1600%252C900%26image_uri%3Dhttps%253A%252F%252Fs.yimg.com%252Fos%252Fcreatr-uploaded-images%252F2019-09%252Fa7ec8f80-e04e-11e9-bfaf-14f222042ebe%26client%3Da1acac3e1b3290917d92%26signature%3D953f11e05a621ef5141ef2508585859cbfee3eb5&client=amp-blogside-v2&signature=3ab20db4dc4b04dc6a07cebdfe9fa8497642394b",
					

				},
				video: {
					tag: "enticeOptionVideo",
					url: "",

				}
			},

			background: {
				tag: 'enticeBackground',
				background: "",
				backgroundColor: '',
				backgroundRepeat: '',
				backgroundPosition: '',
				backgroundSize: '',
				backgroundOrigin: '',
			}

		},

		engage: {
			tag: "engage",
			icon: {
				tag: 'engageTitleIcon',
				icon: 'fas fa-gift',// fontawesome class
				fontSize: '',
				color: '',
				textAlign: '',

			},
			title: {
				tag: 'engageTitle',
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
				tag: "engageDescription1",
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
				tag: "engageDescription2",
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
				tag: 'engageBackground',
				background: "url()",
				backgroundColor: '',
				backgroundRepeat: '',
				backgroundPosition: '',
				backgroundSize: '',
				backgroundOrigin: '',
			}

		},

		information: {
			tag: "information",
			informStatus: '',
			icon: {
				tag: 'informationTitleIcon',
				icon: 'fas fa-bell',// fontawesome class
				fontSize: '30',
				color: '#d8383c',
				textAlign: '',
			},
			title: {
				tag: 'informationTitle',
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
				tag: "informationDescription",
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

			elementToShow: 'imageBanner',
			options: {
				imageBanner: {
					tag: "enticeptionImg",
					url: "https://o.aolcdn.com/images/dims?quality=85&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fcrop%3D1920%252C1080%252C0%252C0%26quality%3D85%26format%3Djpg%26resize%3D1600%252C900%26image_uri%3Dhttps%253A%252F%252Fs.yimg.com%252Fos%252Fcreatr-uploaded-images%252F2019-09%252Fa7ec8f80-e04e-11e9-bfaf-14f222042ebe%26client%3Da1acac3e1b3290917d92%26signature%3D953f11e05a621ef5141ef2508585859cbfee3eb5&client=amp-blogside-v2&signature=3ab20db4dc4b04dc6a07cebdfe9fa8497642394b",
					linkTo: '',// link ka nekom sajtu

				},
				video: {
					tag: "enticeOptionVideo",
					url: "",

				}
			},
			background: {
				tag: 'informationBackground',
				background: "url()",
				backgroundColor: '',
				backgroundRepeat: '',
				backgroundPosition: '',
				backgroundSize: '',
				backgroundOrigin: '',

			}
		},

		contact: {
			connectStatus: '',
			tag: "contact",
			icon: {
				tag: 'contactTitleIcon',
				icon: 'fas fa-heart',// fontawesome class
				fontSize: '30',
				color: '#d8383c',
				textAlign: '',
			},
			title: {
				tag: 'contactTitle',
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
			description: {
				tag: "contactDescription",
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
				tag: "contactLocation",
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
				tag: "contactPhone",
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
				tag: "contactEmail",
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
					tag: '',
					name: 'Facebook',
					linkTo: ''
				},
				{
					tag: '',
					name: 'Tweeter',
					linkTo: ''
				},
				{
					tag: '',
					name: 'Instsagram',
					linkTo: ''
				}
			],
			background: {
				tag: 'contactBackground',
				background: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/12/27/18/presents-under-tree.jpg?w968",
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