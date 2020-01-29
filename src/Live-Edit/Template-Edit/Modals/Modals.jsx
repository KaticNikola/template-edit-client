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
          const { selectedElement, modalStatus } = value;
    
          if (selectedElement === 'introduce') {
            elementToEdit = value.introduce.background;
            formTypeControler = 'image'
          }
//return modal
          if(formTypeControler === 'image'){
            return(
              <>
                <ImageModal elementToEdit={elementToEdit}/>
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
