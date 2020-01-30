import React, { Component } from 'react'

import './SingleImage.scss'
export class SingleImage extends Component {
  render() {
    const { image } = this.props
    return (
      <div>

        <div className='imageCard'>
          <img className="imageCard-image" src='' alt=""  />
          <p className="imageCard-title"></p>
        </div>

      </div>
    )
  }
}

export default SingleImage
