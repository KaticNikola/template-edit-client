import React, { Component } from 'react'

import TextSlideshow from '../Text&Slideshow-Component/TextSlideshow'
import ImageBanner from '../ImageBanner-Component/ImageBanner'

import { Consumer } from '../../Template/Template-Context/TemplateContext';

export class InfoConditionalComponent extends Component {
	render() {
		return (
			<Consumer>
				{value =>{
					const {elementToShow, options } = value.information;
					if (elementToShow === 'ImageBanner') {
						return (
							<div className="ImageBanner">
							<ImageBanner ImageBanner={options.imageBanner}/>
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
								{/* <TextSlideshow cardList={options.cardList}/> */}
							</div>
						)
					}
				
				}}
			</Consumer>
		)
	}
}

export default InfoConditionalComponent
