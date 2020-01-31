import React, { Component } from 'react'

import './ChangeImage.scss'

export class ChangeImage extends Component {
  render() {
    const { background, label, className, min, max, step, append, tag } = this.props;
    return (
      <div className='changeImage' id={tag}>
        <label id={tag} style={!label ? { display: "none" } : { display: "block" }} >{label}</label>
        <div className="changeImage-content">
          <p d={tag} className="changeImage-content_titile">
            image name
          </p>
          <div className="changeImage-content_image">
              <img  id={ tag} src={background} alt=""/>
          </div>

        </div>
        
      </div>
    )
  }
}

export default ChangeImage
