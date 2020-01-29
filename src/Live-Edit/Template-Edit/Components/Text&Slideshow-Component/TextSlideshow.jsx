import React, { Component } from 'react'

import Card from './Card'

import './TextSlideshow.scss'
export class TextSlideshow extends Component {
  render() {
		const { textSlideshow } = this.props
		return (
			<>
				{
					textSlideshow.map((card, index) => {
						return (
							<>
								<Card
									card={card}
									idIndex={index}
								/>								
							</>
						)
					})

				}
			</>

		)
	}
}

export default TextSlideshow
