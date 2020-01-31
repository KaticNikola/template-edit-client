//ovde ode prebacu sve reducers nije povezano sa context 


import {
	EDIT_INTRODUCE_TITLE,
	EDIT_INTRODUCE_DESCRIPTION,
	EDIT_INTRODUCE_BUTTON,
	EDIT_INTRODUCE_BACKGROUND,
	INTRODUCE_NAV_STATUS,
	EDIT_INTRODUCE_LOGO,
	EDIT_INTRODUCE_NAVIGATION_HOME,
	EDIT_INTRODUCE_NAVIGATION_ENTICE,
	EDIT_INTRODUCE_NAVIGATION_ENGAGE,

	SECTION_ENTICE_STATUS,
	EDIT_ENTICE_TITLE,
	EDIT_ENTICE_ICON,
	EDIT_ENTICE_DESCRIPTION_1,
	EDIT_ENTICE_DESCRIPTION_2,
	EDIT_ENTICE_BACKGROUND,
	ENTICE_ELEMENT_TO_SHOW,
	EDIT_ENTICE_PRICE_1_TITLE,
	EDIT_ENTICE_PRICE_1_IMAGE,
	EDIT_ENTICE_PRICE_2_TITLE,
	EDIT_ENTICE_PRICE_2_IMAGE,
	EDIT_ENTICE_PRICE_3_TITLE,
	EDIT_ENTICE_PRICE_3_IMAGE,
	EDIT_ENTICE_OPTIONS_SINGLEIMAGE,

	EDIT_ENGAGE_TITLE,
	EDIT_ENGAGE_ICON,
	EDIT_ENGAGE_DESCRIPTION_1,
	EDIT_ENGAGE_DESCRIPTION_2,
	EDIT_ENGAGE_BACKGROUND,

	SECTION_INFORMATION_STATUS,
	EDIT_INFORMATION_TITLE,
	EDIT_INFORMATION_ICON,
	EDIT_INFORMATION_DESCRIPTION,
	EDIT_INFORMATION_BACKGROUND,
	INFORMATION_ELEMENT_TO_SHOW,
	EDIT_INFORMATION_OPTIONS_IMAGEBANNER,

	SECTION_CONTACT_STATUS,
	EDIT_CONTACT_TITLE,
	EDIT_CONTACT_ICON,
	EDIT_CONTACT_DESCRIPTION,
	EDIT_CONTACT_LOCATION,
	EDIT_CONTACT_PHONE,
	EDIT_CONTACT_EMAIL,
	EDIT_CONTACT_SOCIAL_MEDIA,
	EDIT_CONTACT_BACKGROUND,


	SELECTED_ELEMENT,
	EDITMODE_CONTROLER,
	PREVIEW_SIZE,
	INTRODUCE_STATUS,
	MODAL_STATUS,
	MODAL_IMAGE_SOURCE,
	MODAL_ICON_SOURCE,
	UPLOAD_IMAGE,
	SELECT_IMAGE,
	REMOVE_IMAGE,

} from './TemplateTypes';

const reducer = (state, action) => {
	switch (action.type) {
		//********** HEADER  ***************/
		case EDIT_INTRODUCE_BACKGROUND:
			return {
				...state.introduce.background,
				background: state.introduce.background.background = action.payload
			}
		case EDIT_INTRODUCE_TITLE:
			return {
				...state.introduce.title,
				title: [state.introduce.title].map(key => {
					//console.log(` from context ${action.payload.property} + px`)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])


				})
			}
		case EDIT_INTRODUCE_DESCRIPTION:
			return {
				...state.introduce.description,
				description: [state.introduce.description].map(key => {
					console.log(action.payload)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}
		case EDIT_INTRODUCE_BUTTON:
			return {
				...state.introduce.button,
				button: [state.introduce.button].map(key => {
					console.log(action.payload)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}
		//navigation
		case 	INTRODUCE_NAV_STATUS:
			return {
				...state.introduce.navStatus,
				navStatus: state.introduce.navStatus = action.payload.id
				// console.log(key[`${action.payload.property}`])
			}
		case EDIT_INTRODUCE_LOGO:
			return {
				...state.introduce.logo,
				logo: [state.introduce.logo].map(key => {
					console.log(action.payload)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}
		case EDIT_INTRODUCE_NAVIGATION_HOME:
			return {
				...state.introduce.navigationHome,
				navigationHome: [state.introduce.navigationHome].map(key => {
					console.log(action.payload)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}
		case EDIT_INTRODUCE_NAVIGATION_ENTICE:
			return {
				...state.introduce.navigationEntice,
				navigationEntice: [state.introduce.navigationEntice].map(key => {
					console.log(action.payload)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}
		case EDIT_INTRODUCE_NAVIGATION_ENGAGE:
			return {
				...state.introduce.navigationEngage,
				navigationEngage: [state.introduce.navigationEngage].map(key => {
					console.log(action.payload)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}
		//********** ENTICE  ***************/

		case SECTION_ENTICE_STATUS:
			return {
				...state.entice.enticeStatus,
				enticeStatus: state.entice.enticeStatus = action.payload.id
				// console.log(key[`${action.payload.property}`])
			}
		case EDIT_ENTICE_TITLE:
			return {
				...state.entice.title,
				title: [state.entice.title].map(key => {
					console.log(` from context ${action.payload}`)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}
		case EDIT_ENTICE_ICON:
			return {
				...state.entice.icon,
				icon: [state.entice.icon].map(key => {
					console.log(` from context ${action.payload}`)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}
		case EDIT_ENTICE_DESCRIPTION_1:
			return {
				...state.entice.description1,
				description1: [state.entice.description1].map(key => {
					console.log(` from context payload ${action.payload}`)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}
		case EDIT_ENTICE_DESCRIPTION_2:
			return {
				...state.entice.description1,
				description1: [state.entice.description2].map(key => {
					console.log(` from context ${action.payload}`)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}
		case EDIT_ENTICE_BACKGROUND:
			return {
				...state.entice.background,
				background: [state.entice.background].map(key => {
					console.log(` from context ${action.payload}`)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}
		//element to show

		case ENTICE_ELEMENT_TO_SHOW:
			return {
				...state.entice.elementToShow,
				elementToShow: state.entice.elementToShow = action.payload
				// console.log(key[`${action.payload.property}`])
			}
		//P1
		case EDIT_ENTICE_PRICE_1_TITLE:
			return {
				...state.entice.options.textSlideshow[0].title,
				title: [state.entice.options.textSlideshow[0].title].map(key => {
					console.log(` from context ${action.payload}`)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}
		case EDIT_ENTICE_PRICE_1_IMAGE:
			return {
				...state.entice.options.textSlideshow[0].image,
				url: state.entice.options.textSlideshow[0].image.url  = action.payload
					// console.log(key[`${action.payload.property}`])
			}
		//P2
		case EDIT_ENTICE_PRICE_2_TITLE:
			return {
				...state.entice.options.textSlideshow[1].title,
				title: [state.entice.options.textSlideshow[1].title].map(key => {
					console.log(` from context ${action.payload}`)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}
		case EDIT_ENTICE_PRICE_2_IMAGE:
			return {
				...state.entice.options.textSlideshow[1].image,
				url: state.entice.options.textSlideshow[1].image.url  = action.payload
			}
		//P3
		case EDIT_ENTICE_PRICE_3_TITLE:
			return {
				...state.entice.options.textSlideshow[2].title,
				title: [state.entice.options.textSlideshow[2].title].map(key => {
					console.log(` from context ${action.payload}`)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}
		case EDIT_ENTICE_PRICE_3_IMAGE:
			return {
				...state.entice.options.textSlideshow[2].image,
				url: state.entice.options.textSlideshow[2].image.url  = action.payload
			}
			case EDIT_ENTICE_OPTIONS_SINGLEIMAGE:
				return {
					...state.entice.options.image,
					url: state.entice.options.image.url  = action.payload
				}




		//********** ENGAGE  ***************/
		case EDIT_ENGAGE_TITLE:
			return {
				...state.engage.title,
				title: [state.engage.title].map(key => {
					console.log(` from context ${action.payload}`)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}
		case EDIT_ENGAGE_ICON:
			return {
				...state.engage.icon,
				title: [state.engage.icon].map(key => {
					console.log(` from context ${action.payload}`)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}
		case EDIT_ENGAGE_DESCRIPTION_1:
			return {
				...state.engage.description1,
				title: [state.engage.description1].map(key => {
					console.log(` from context ${action.payload}`)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}
		case EDIT_ENGAGE_DESCRIPTION_2:
			return {
				...state.engage.description2,
				title: [state.engage.description2].map(key => {
					console.log(` from context ${action.payload}`)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}
		case EDIT_ENGAGE_BACKGROUND:
			return {
				...state.engage.background,
				title: [state.engage.background].map(key => {
					console.log(` from context ${action.payload}`)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}

		//********** INFORMATION  ***************/

		case SECTION_INFORMATION_STATUS:
			return {
				...state.information.informStatus,
				informStatus: state.information.informStatus = action.payload.id
				// console.log(key[`${action.payload.property}`])
			}
		case EDIT_INFORMATION_TITLE:
			return {
				...state.information.title,
				title: [state.information.title].map(key => {
					console.log(` from context ${action.payload}`)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}

		case EDIT_INFORMATION_ICON:
			return {
				...state.information.icon,
				icon: [state.information.icon].map(key => {
					console.log(` from context ${action.payload}`)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}
		case EDIT_INFORMATION_DESCRIPTION:
			return {
				...state.information.description,
				description: [state.information.description].map(key => {
					console.log(action.payload)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}
		case EDIT_INFORMATION_BACKGROUND:
			return {
				...state.information.background,
				btn: [state.information.background].map(key => {
					console.log(action.payload)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}
			case INFORMATION_ELEMENT_TO_SHOW:
			return {
				...state.information.elementToShow,
				elementToShow: state.information.elementToShow = action.payload
				// console.log(key[`${action.payload.property}`])
			}
			case EDIT_INFORMATION_OPTIONS_IMAGEBANNER:
				return {
					...state.information.options.imageBanner,
					url: state.information.options.imageBanner.url  = action.payload
				}
		//********** CONTACT  ***************/


		case EDIT_CONTACT_TITLE:
			return {
				...state.contact.title,
				title: [state.contact.title].map(key => {
					console.log(` from context ${action.payload}`)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}

		case EDIT_CONTACT_ICON:
			return {
				...state.contact.icon,
				icon: [state.contact.icon].map(key => {
					console.log(`reducer box1 description ${action.payload}`)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}

		case EDIT_CONTACT_DESCRIPTION:
			return {
				...state.contact.description,
				description: [state.contact.description].map(key => {
					console.log(` from context ${action.payload}`)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}

		case EDIT_CONTACT_LOCATION:
			return {
				...state.contact.location,
				location: [state.contact.location].map(key => {
					console.log(action.payload)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}

		case EDIT_CONTACT_PHONE:
			return {
				...state.contact.phone,
				phone: [state.contact.phone].map(key => {
					console.log(` from context ${action.payload}`)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}

		case EDIT_CONTACT_EMAIL:
			return {
				...state.contact.email,
				email: [state.contact.email].map(key => {
					console.log(action.payload)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}
		case EDIT_CONTACT_SOCIAL_MEDIA:
			return {
				...state.contact.socia,
				title: [state.contact.socia].map(key => {
					console.log(` from context ${action.payload}`)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}

		case EDIT_CONTACT_BACKGROUND:
			return {
				...state.contact.background,
				background: state.contact.background.background = action.payload
			}



		case SELECTED_ELEMENT:
			return {
				...state,
				// selectionKey: state.selectionKey = action.payload.id,
				selectedElement: state.selectedElement = action.payload.id
			}
		case EDITMODE_CONTROLER:
			return {
				...state,
				// selectionKey: state.selectionKey = action.payload.id,
				editMode: state.editMode = action.payload
			}
		case PREVIEW_SIZE:
			return {
				...state,
				previewSize: state.previewSize = action.payload
			}
		case INTRODUCE_STATUS:
			return {
				...state,
				introduceStatus: state.introduceStatus = action.payload
			}
			case SECTION_CONTACT_STATUS:
				return {
					...state,
					contactStatus: state.contact.connectStatus = action.payload
				}



			//modal reduces
			case MODAL_STATUS:
			return {
				...state,
				modalStatus: state.modalStatus = action.payload
			}
			case MODAL_IMAGE_SOURCE:
			return {
				...state,
				modalImageSource: state.imageModalSource = action.payload
			}
			case MODAL_ICON_SOURCE:
			return {
				...state,
				iconModalSource: state.iconModalSource = action.payload
			}
		// case za editMenu koji element da rederuje

		//upload imge
		case UPLOAD_IMAGE:
			return {
				...state,
				album: state.album.push(action.payload) 
			}
			case SELECT_IMAGE:
			return {
				...state,
				selectedImagetag: state.selectedImagerag = action.payload
			}
			// case REMOVE_IMAGE:
			// return {
			// 	...state,
			// 	album: state.album.
			// }
		default:
			return state;
	}
}

export default reducer;