import React, { Component } from 'react'


import { Consumer } from '../../../../../Template/Template-Context/TemplateContext'
import { SELECT_IMAGE } from '../../../../../Template/Template-Context/TemplateTypes'

import './SingleImage.scss'
export class SingleImage extends Component {

  handleSelectImage = (dispatch, e) => {
    let id = e.target.id;
    let url= e.target.src;
    console.log(`single img album ${url}`)
    dispatch({
      type: SELECT_IMAGE,
      payload: url
    })

  }
  render() {
    const { imagetag, url, title } = this.props.image
    return (
      <Consumer>
        {value => {
          const { dispatch } = value
          return (
            <div className='imageCard' onClick={this.handleSelectImage.bind(this, dispatch)}>
              <img className="imageCard-image" src={url} alt="" id={imagetag} />
              <p className="imageCard-title">{title}</p>
            </div>
          )

        }}
      </Consumer>
    )
  }
}

export default SingleImage
