import React, { Component } from 'react'

import TextSlideshow from '../Text&Slideshow-Component/TextSlideshow'

import { Consumer } from '../../Template/Template-Context/TemplateContext';

export class EnticeConditionalComponent extends Component {
	render() {
		return (
			<Consumer>
				{value =>{
					const {elementToShow, options} = value.entice;
					if (elementToShow === 'image') {
						return (
							<div className="image">
							image
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
							<div className="textSlideshow">
								<TextSlideshow textSlideshow={options.textSlideshow}/>
							</div>
						)
					}
				
				}}
			</Consumer>
		)
	}
}

export default EnticeConditionalComponent
