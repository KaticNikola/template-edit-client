import React, { Component } from 'react'


import './ImageBanner.scss'
export class ImageBanner extends Component {
  render() {
    const { ImageBanner } = this.props
    return (
      <div className='imageBanner'> 
        <a href={ImageBanner.linkTo} target="_blank" >
          <img  id={ImageBanner.tag} src={ImageBanner.url} width='100%' height='100%' alt=""/>
        </a>
      </div>
    )
  }
}

export default ImageBanner
