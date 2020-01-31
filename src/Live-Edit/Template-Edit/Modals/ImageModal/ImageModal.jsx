import React, { Component } from 'react'

import ImageSourcePicker from './ImageSourcePicker'
import SelectField from '../../Components/InputField-Components/SelectField'

import { Consumer } from '../../Template/Template-Context/TemplateContext'
import { MODAL_IMAGE_SOURCE, MODAL_STATUS,EDIT_INFORMATION_OPTIONS_IMAGEBANNER } from '../../Template/Template-Context/TemplateTypes'
import './ImageModal.scss';
export class ImageModal extends Component {

  //chage img source
  handleChangeSource = (dispatch, e) => {
    e.preventDefault();
    let source = e.target.value;
    console.log(`change ${source}`)

    dispatch({
      type: MODAL_IMAGE_SOURCE,
      payload: source
    })
  }

  handleSelect = (dispatch, e) => {

    // let type = this.props.elementToEdit.tag
    let type
    
  
    if(this.props.elementToEdit.tag === 'informationOptionImg'){
      type = EDIT_INFORMATION_OPTIONS_IMAGEBANNER
    } else {
      type = this.props.elementToEdit.tag
    }
    console.log(type)
    console.log(`test ${this.props.selectedImagetag}`)
    let url = this.props.selectedImagetag

    dispatch({
      type: type ,
      payload: url
    })

    dispatch({
      type: MODAL_STATUS,
      payload: 'none'
    })
  }

  handleCancel = (dispatch, e) => {

    dispatch({
      type: MODAL_STATUS,
      payload: 'none'
    })
  }
  render() {
    return (
      <Consumer>
        {value => {	
          const { dispatch, imageModalSource } = value;
          return (
            <div className="modal">
              <div className="modal-header">
                <div className="modal-header_text">
                  <h3 className="title">
                    Pick your image
                </h3>
                  <p className="description">
                    Click the image to select it. You can pick an image from your upload folder, or third-party libraries.
                </p>
                </div>
                <div className="modal-header_selector"
                  onChange={this.handleChangeSource.bind(this, dispatch)}>
                  <SelectField
                    label='Image library'
                    name='source'
                    options={[
                      { value: "album", label: "Album" },
                      { value: "shutterstock", label: "Shutterstock" },

                    ]} />
                </div>
              </div>
              <div className="modal-body">
                <ImageSourcePicker />
              </div>
              <div className="modal-footer">
                <button className="modal-footer_delete button">
                  <i className="fas fa-trash"></i>
                  Delete
                </button>
                <div className="modal-footer_cta">
                  <button className="cancel button"
                    onClick={this.handleCancel.bind(this, dispatch)}>Cancel</button>
                  <button className="select button"
                    onClick={this.handleSelect.bind(this, dispatch)}>
                    Select
                    <i className="fas fa-check"></i>
                  </button>
                </div>
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default ImageModal
