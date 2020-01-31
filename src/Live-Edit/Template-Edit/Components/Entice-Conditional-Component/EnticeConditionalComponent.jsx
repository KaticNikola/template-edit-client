import React, { Component } from 'react'

import TextSlideshow from '../Text&Slideshow-Component/TextSlideshow'
import Image from '../Image-Component/Image'

import { Consumer } from '../../Template/Template-Context/TemplateContext';
import { SELECTED_ELEMENT } from '../../Template/Template-Context/TemplateTypes'

export class EnticeConditionalComponent extends Component {
	handleSelectElement1 = (dispatch, e) => {
		let id = "textSlideshow"
		let actionType = e.target.name
		//
		console.log(`id${id}`)
		console.log(actionType)
		dispatch({
			type: SELECTED_ELEMENT,
			payload: {
				id
				// selectionKey
			}
		})
	}
	render() {
		return (
			<Consumer>
				{value =>{
						const {  dispatch,} = value;
					const {elementToShow, options} = value.entice;
					if (elementToShow === 'singleImage') {
						return (
							<div className="image">
							<Image {...options.image}/>
							</div>

						)
					} else if (elementToShow === 'video') {
						return (
							<div className="video">
								<p>Video</p>
							</div>
						)
					} else {
						return (
							<div className="textSlideshow"  onClick={this.handleSelectElement1.bind(this, dispatch)}>
								<TextSlideshow 
									textSlideshow={options.textSlideshow}/>
							</div>
						)
					}
				
				}}
			</Consumer>
		)
	}
}

export default EnticeConditionalComponent
