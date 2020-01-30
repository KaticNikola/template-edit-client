import React, { Component } from 'react'

import SingleImage from './SingleImage/SingleImage'
import { Consumer } from '../../../../Template/Template-Context/TemplateContext'

export class RenderImages extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { album } = this.props;
          return (
            <>
              {
                album.map(image => {
                  return (
                    <SingleImage image={image} />
                  )
                })
              }
            </>
          )
        }}
      </Consumer>
    )

  }
}

export default RenderImages
