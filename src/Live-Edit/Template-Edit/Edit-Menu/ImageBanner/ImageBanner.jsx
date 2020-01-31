import React, { Component } from 'react'

import ChangeImage from '../../Components/InputField-Components/ChangeImage'
import InputField from '../../Components/InputField-Components/InputField'
import { Consumer } from '../../Template/Template-Context/TemplateContext';
import { MODAL_STATUS, SELECTED_ELEMENT } from '../../Template/Template-Context/TemplateTypes'


import './ImageBanner.scss'
export class ImageBanner extends Component {
  handeOpenModal = (dispatch, e) => {
    let id = e.target.id
    console.log(`imgpicker - ${id}`)
    console.log(`imgpicker - ${this.props.elementToEdit.tag}`)

    dispatch({
      type: MODAL_STATUS,
      payload: 'on'
    })

    dispatch({
      type: SELECTED_ELEMENT,
      payload: {
        id
      }
    })
  }
  render() {
    return (
      <Consumer>
        {value => {
          const {elementToEdit} = this.props;

          const { dispatch } = value;
          return (
            <div className='slideshow'>
              <div className="slideshow-content">
                <h3 className="slideshow-content_title">
                  Image Banner
                </h3>
                <div className="slideshow-content_section"
                  onClick={this.handeOpenModal.bind(this, dispatch)}
                  tag='on'>
                  {/* <img src={background} alt=""/> */}
                  <ChangeImage
                    tag={elementToEdit.tag}
                    label='Change Background'
                    background={elementToEdit.url} />
                </div>
               
              </div>
      
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default ImageBanner
