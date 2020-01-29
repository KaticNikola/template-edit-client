import React, { Component } from 'react'

//image picker
import ImagePicker from './ImagePicker/ImagePicker'

import { Consumer } from '../../Template/Template-Context/TemplateContext';
import { SELECTED_ELEMENT } from '../../Template/Template-Context/TemplateTypes';
import './ImageUploader.scss';

export class ImageUploader extends Component {
  render() {
    let elementToEdit = {};
    let formTypeControler = "Entice";
    return (
      <Consumer>
        {value => {
          const { imageUploader, selectedElement, editMode } = value;

          if (selectedElement === 'introduce') {
            elementToEdit = value.introduce.background;
            formTypeControler = 'imagePicker'
          }
          else if (selectedElement === 'introduceNavigationHome') {
            elementToEdit = value.introduce.navigationHome;
            formTypeControler = 'button'
          }


          //renderuje elemente
          else if (editMode === 'on' && formTypeControler === 'Entice') {
            return (
              <div className="uploader" >
                <div className="uploader-header">

                </div>
                <div className="uploader-content">

                </div>
                <div className="uploader-footer">
                  
                </div>

              </div>
            )
          }
        }}
      </Consumer>

    )
  }
}

export default ImageUploader
