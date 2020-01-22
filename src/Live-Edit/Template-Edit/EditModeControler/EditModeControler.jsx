import React, { Component } from 'react'

import Icon from '../Components/FontAwesome-Icon-Component/Icon'

import { Consumer } from '../Template/Template-Context/TemplateContext'
import { EDITMODE_CONTROLER, PREVIEW_SIZE } from '../Template/Template-Context/TemplateTypes'
import './EditModeControler.scss'

export class EditModeConroler extends Component {

	handleEditModeControler = (dispatch, e) => {
		let editModeState = '';
		let previewSize = 'PC';
		if (e.target.className === 'fas fa-chevron-right') {
			editModeState = 'on';
		} else {
			editModeState = 'off';
		}

		//	console.log('from template edit')
		dispatch({
			type: EDITMODE_CONTROLER,
			payload: editModeState
		})
		dispatch({
			type: PREVIEW_SIZE,
			payload: previewSize
		})
	}
	render() {
		return (
			<Consumer>
				{value => {
					let { editMode, dispatch } = value;
					return (
						<div
							onClick={this.handleEditModeControler.bind(this, dispatch)}
							className={editMode === "on" ? "EditModeControlerOn" : "EditModeControlerOff"}>
							{editMode === 'on' ?
								<Icon icon='fas fa-chevron-left' /> :
								<Icon icon='fas fa-chevron-right' />}

						</div>
					)
				}}

			</Consumer>
		)
	}
}

export default EditModeConroler
// kontrolise var iz state > editMode vrednost moze da bude on/off
//neka ovo bude Previiew moda> isto se aktivira i daje ti opciju da kliknes na komp/tablet/phone ikone