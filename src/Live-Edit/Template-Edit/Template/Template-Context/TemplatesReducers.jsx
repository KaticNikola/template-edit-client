//ovde ode prebacu sve reducers nije povezano sa context 


import {
	EDIT_HEADER_TITLE,
	EDIT_HEADER_DESCRIPTION,
	EDIT_HEADER_BUTTON,
	EDIT_HEADER_BACKGROUND,
	EDIT_HEADER_LOGO,
	EDIT_HEADER_NAVIGATION_HOME,
	EDIT_HEADER_NAVIGATION_ENTICE,
	EDIT_HEADER_NAVIGATION_ENGAGE,

	EDIT_ENTICE_TITLE,
	EDIT_ENTICE_ICON,
	EDIT_ENTICE_DESCRIPTION_1,
	EDIT_ENTICE_DESCRIPTION_2,
	EDIT_ENTICE_BACKGROUND,
	EDIT_ENTICE_PRICE_1_TITLE,
	EDIT_ENTICE_PRICE_1_IMAGE,
	EDIT_ENTICE_PRICE_2_TITLE,
	EDIT_ENTICE_PRICE_2_IMAGE,
	EDIT_ENTICE_PRICE_3_TITLE,
	EDIT_ENTICE_PRICE_3_IMAGE,

	EDIT_ENGAGE_TITLE,
	EDIT_ENGAGE_ICON,
	EDIT_ENGAGE_DESCRIPTION_1,
	EDIT_ENGAGE_DESCRIPTION_2,
	EDIT_ENGAGE_BACKGROUND,

	EDIT_INFORMATION_TITLE,
	EDIT_INFORMATION_ICON,
	EDIT_INFORMATION_DESCRIPTION,
	EDIT_INFORMATION_BACKGROUND,

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
	PREVIEW_SIZE

} from './TemplateTypes';

const reducer = (state, action) => {
	switch (action.type) {
		//********** HEADER  ***************/
		case EDIT_HEADER_BACKGROUND:
			return {
				...state.header.background,
				backgroun: [state.header.background].map(key => {
					console.log(` from context ${action.payload}`)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}
		case EDIT_HEADER_TITLE:
			return {
				...state.header.title,
				title: [state.header.title].map(key => {
					//console.log(` from context ${action.payload.property} + px`)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])


				})
			}
		case EDIT_HEADER_DESCRIPTION:
			return {
				...state.header.description,
				description: [state.header.description].map(key => {
					console.log(action.payload)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}
		case EDIT_HEADER_BUTTON:
			return {
				...state.header.button,
				button: [state.header.button].map(key => {
					console.log(action.payload)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}
		//navigation
		case EDIT_HEADER_LOGO:
			return {
				...state.header.logo,
				logo: [state.header.logo].map(key => {
					console.log(action.payload)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}
		case EDIT_HEADER_NAVIGATION_HOME:
			return {
				...state.header.navigationHome,
				navigationHome: [state.header.navigationHome].map(key => {
					console.log(action.payload)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}
		case EDIT_HEADER_NAVIGATION_ENTICE:
			return {
				...state.header.navigationEntice,
				navigationEntice: [state.header.navigationEntice].map(key => {
					console.log(action.payload)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}
		case EDIT_HEADER_NAVIGATION_ENGAGE:
			return {
				...state.header.navigationEngage,
				navigationEngage: [state.header.navigationEngage].map(key => {
					console.log(action.payload)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}
		//********** ENTICE  ***************/

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
		//dodaj prizes
		//P1
		case EDIT_ENTICE_PRICE_1_TITLE:
			return {
				...state.entice.options.cardList[0].title,
				title: [state.entice.options.cardList[0].title].map(key => {
					console.log(` from context ${action.payload}`)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}
		case EDIT_ENTICE_PRICE_1_IMAGE:
			return {
				...state.state.entice.options.cardList[0].title,
				background: [state.entice.options.cardList[0].title].map(key => {
					console.log(` from context ${action.payload}`)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}
		//P2
		case EDIT_ENTICE_PRICE_2_TITLE:
			return {
				...state.entice.options.cardList[1].title,
				title: [state.entice.options.cardList[1].title].map(key => {
					console.log(` from context ${action.payload}`)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}
		case EDIT_ENTICE_PRICE_2_IMAGE:
			return {
				...state.state.entice.options.cardList[2].title,
				background: [state.entice.options.cardList[2].title].map(key => {
					console.log(` from context ${action.payload}`)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}
		//P3
		case EDIT_ENTICE_PRICE_3_TITLE:
			return {
				...state.entice.options.cardList[2].title,
				title: [state.entice.options.cardList[2].title].map(key => {
					console.log(` from context ${action.payload}`)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
			}
		case EDIT_ENTICE_PRICE_3_IMAGE:
			return {
				...state.state.entice.options.cardList[2].title,
				background: [state.entice.options.cardList[2].title].map(key => {
					console.log(` from context ${action.payload}`)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
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
				background: [state.contact.background].map(key => {
					console.log(action.payload)
					key[`${action.payload.property}`] = action.payload.value
					// console.log(key[`${action.payload.property}`])
				})
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
      // case za editMenu koji element da rederuje
		default:
			return state;
	}
}

export default reducer;