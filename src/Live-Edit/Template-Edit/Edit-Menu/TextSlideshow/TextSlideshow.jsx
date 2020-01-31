import React, { Component } from 'react'

import ChangeImage from '../../Components/InputField-Components/ChangeImage'
import InputField from '../../Components/InputField-Components/InputField'
import { Consumer } from '../../Template/Template-Context/TemplateContext';
import { MODAL_STATUS, SELECTED_ELEMENT, EDIT_ENTICE_PRICE_1_TITLE, ENTICE_PRICE_2_TITLE ,ENTICE_PRICE_3_TITLE} from '../../Template/Template-Context/TemplateTypes'

import './TextSlideshow.scss'
export class TextSlideshow extends Component {

  // handleChangecaption1 = (dispatch, e) => {
  //   e.preventDefault();

  //   const property = "content";
  //   const value = e.target.value;
  //   const selectedElement = this.props.selectedElement;
  //   console.log(`from edit 1 ${property}`)
  //   console.log(`from edit 223123123${value}`)
  //   console.log(`from edit 3${selectedElement}`)


  //   dispatch({
  //     type: EDIT_ENTICE_PRICE_1_TITLE,//selectedElement 
  //     payload: {
  //       property,
  //       value
  //     }
  //   })

  // }

  handeOpenModal = (dispatch, e) => {
    let id = e.target.id
    console.log(`imgpicker - ${id}`)

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
                  Slideshow Images
                </h3>
                {/* <div className="slideshow-content_section" 
                onChange={this.handleChangecaption1.bind(this, dispatch)}>
                  <InputField
                    label="Caprion 1 title"
                    type="text"
                    name='content'
                    value={elementToEdit[0].title.content} />
                </div>
                 */}
                <div className="slideshow-content_section"
                  onClick={this.handeOpenModal.bind(this, dispatch)}
                  tag='on'>
                  {/* <img src={background} alt=""/> */}
                  <ChangeImage
                    tag='enticeOptionT&S0Image'
                    label='Change Background'
                    background={elementToEdit[0].image.url} />
                </div>
               
                {/* <div className="slideshow-content_section">
                  <InputField
                    label="Caprion 2 title"
                    type="text"
                    name='content'
                    value={elementToEdit[1].title.content} />
                </div>
                 */}
                <div className="slideshow-content_section"
                  onClick={this.handeOpenModal.bind(this, dispatch)}
                  tag='on'>
                  <ChangeImage
                   tag='enticeOptionT&S1Image'
                    label='Change Background'
                    background={elementToEdit[1].image.url} />
                </div>
                
{/* 
                <div className="slideshow-content_section">
                  <InputField
                    label="Caprion 3 title"
                    type="text"
                    name='content'
                    value={elementToEdit[2].title.content} />
                </div> */}

                <div className="slideshow-content_section"
                  onClick={this.handeOpenModal.bind(this, dispatch)}
                  tag='on'>
                  {/* <img src={background} alt=""/> */}
                  <ChangeImage
                    tag='enticeOptionT&S2Image'
                    label='Change Background'
                    background={elementToEdit[2].image.url}/>
                </div>
                


                <p className="slideshow-content_layout">
                  Click on the layout elements to edit their content. We’ll save your changes as soon as you make them.
              </p>

              </div>
              {/* select element koji ima option vlaue [sa elementima koje mozes da pokazes u sectionu ] > u menja value u state koja odredjuje u conditional component sta ce da se renderuje */}

              {/* <div className="introduce-finish">
                <div className="introduce-finish_text">
                  <h3 className="title">Happy with what you see?</h3>
                  <p className="description">
                    Click Finish to save changes and complete editing your template.
                  </p>
                </div>
                <div className="introduce-finish_cta">
                  <a href="#">Finish</a>
                </div>
              </div> */}

            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default TextSlideshow
