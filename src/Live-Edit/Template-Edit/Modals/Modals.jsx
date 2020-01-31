import React, { Component } from 'react'

import ImageModal from './ImageModal/ImageModal';

import { Consumer } from '../Template/Template-Context/TemplateContext';
import "./Modals.scss"
export class Modals extends Component {
  render() {
    let elementToEdit = null;
    let formTypeControler = "";
    return (
      <Consumer>
        {value => {
          const { selectedElement, selectedImagetag } = value;
    
          if (selectedElement === 'introduce') {
            elementToEdit = value.introduce.background;
            formTypeControler = 'image'
          } else if (selectedElement === 'engage') {
            elementToEdit = value.engage.background;
            formTypeControler = 'image'
          } else if (selectedElement === 'contact') {
            elementToEdit = value.contact.background;
            formTypeControler = 'image'
          }
          else if (selectedElement === 'enticeOptionT&S0Image') {
            elementToEdit = value.entice.options.textSlideshow[0].image;
            formTypeControler = 'image'
          }
          else if (selectedElement === 'enticeOptionT&S1Image') {
            elementToEdit = value.entice.options.textSlideshow[1].image;
            formTypeControler = 'image'
          }
          else if (selectedElement === 'enticeOptionT&S2Image') {
            elementToEdit = value.entice.options.textSlideshow[2].image;
            formTypeControler = 'image'
          }
          else if (selectedElement === 'enticeOptionImg') {
            elementToEdit = value.entice.options.image;
            formTypeControler = 'image'
          }
          else if (selectedElement === 'informationOptionImg') {
            elementToEdit = value.information.options.imageBanner;
            formTypeControler = 'image'
          }

//return modal
          if(formTypeControler === 'image'){
            return(
              <>
                <ImageModal 
                  elementToEdit={elementToEdit} 
                  selectedImagetag={selectedImagetag}/>
              </>
            )
          }

          // //render modal
          // if (modalStatus === 'on' && formTypeControler === 'image') {
          //   return (
          //     <div className="modalWrapper">
          //       <h1>IMAGE</h1>
          //     </div>

          //   )
          // } else if (modalStatus === 'on' && formTypeControler === 'text') {
          //   return (
          //     <div className="icon">
          //      icon
          //     </div>
          //   )
          // }

        }}
      </Consumer>
    )
  }
}

export default Modals
