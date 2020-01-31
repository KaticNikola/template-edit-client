import React, { Component } from 'react'

import { Consumer } from '../../Template/Template-Context/TemplateContext'
import './ImageBanner.scss'
export class ImageBanner extends Component {
  render() {
    const { ImageBanner } = this.props
    return (
      <Consumer>
        {value => {
          if (ImageBanner.linkTo !== '') {
            return (
              <div className='imageBanner'>
                <a href={ImageBanner.linkTo} target="_blank" >
                  <img id={ImageBanner.tag} src={ImageBanner.url} width='100%' height='100%' alt="" />
                </a>
              </div>
            )
          } else {
            return (
              <div className='imageBanner'>
                <img id={ImageBanner.tag} src={ImageBanner.url} width='100%' height='100%' alt="" />
              </div>
            )
          }
        }}
      </Consumer>

    )
  }
}

export default ImageBanner
