import React, { Component } from 'react'

import './ChangeImage.scss'

export class ChangeImage extends Component {
  render() {
    const { background, label, className, min, max, step, append } = this.props;
    return (
      <div className='changeImage'>
        <label style={!label ? { display: "none" } : { display: "block" }} >{label}</label>
        <div className="changeImage-content">
          <div className="changeImage-content_titile">
            image name
          </div>
          <div className="changeImage-content_image">
              <img src={background.background} alt=""/>
          </div>

        </div>
        
      </div>
    )
  }
}

export default ChangeImage
