import React, { Component } from 'react'

import './ChangeImage.scss'

export class ChangeImage extends Component {
  render() {
    const { background, label, className, min, max, step, append, id } = this.props;
    return (
      <div className='changeImage' id={id}>
        <label d={id} style={!label ? { display: "none" } : { display: "block" }} >{label}</label>
        <div className="changeImage-content">
          <p d={id} className="changeImage-content_titile">
            image name
          </p>
          <div className="changeImage-content_image">
              <img  id={ id} src={background.background} alt=""/>
          </div>

        </div>
        
      </div>
    )
  }
}

export default ChangeImage
