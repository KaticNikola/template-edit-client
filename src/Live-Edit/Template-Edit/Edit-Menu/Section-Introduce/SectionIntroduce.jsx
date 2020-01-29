import React, { Component } from 'react'

import SelectField from '../../Components/InputField-Components/SelectField';
import ChangeImage from '../../Components/InputField-Components/ChangeImage'
import { Consumer } from '../../Template/Template-Context/TemplateContext';
import { INTRODUCE_NAV_STATUS, MODAL_STATUS } from '../../Template/Template-Context/TemplateTypes'

import './SectionIntroduce.scss'
export class SectionIntroduce extends Component {

  handleShowHideElement = (dispatch, e) => {
    let id;
    // let actionType = e.target.name
    // console.log(actionType)
    if (e.target.checked === true) {
      id = "none"
    } else if (e.target.checked === false) {
      id = 'flex'
    }
    console.log(`id${id}`)
    dispatch({
      type: INTRODUCE_NAV_STATUS,
      payload: {
        id
        // selectionKey
      }
    })
  }

  handeOpenModal = (dispatch, e) => {
    let id = e.target.id
    console.log(`imgpicker - ${id}`)

    dispatch({
      type: MODAL_STATUS,
      payload: e.target.id
       
        // selectionKey

    })
  }
  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch, navStatus } = value;
          const { background } = value.introduce;
          return (
            <div className='introduce'>
              <div className="introduce-content">
                <div className="introduce-content_title">
                  <h3>Introduce</h3>
                </div>

                {/* section can not be hide for now */}
                <div className="introduce-content_section">
                  <div className="wrapper">
                    <h3 className="introduce-content_section_title">
                      {navStatus === 'none' ? "Enable Navigation" : "Disable Navigation"}
                    </h3>
                    <p className="introduce-content_section_description">
                      This section is used to push the visitors who have still not started the game
                    </p>
                  </div>
                  <div className="introduce-content_section_checkbox"
                    onClick={this.handleShowHideElement.bind(this, dispatch)}
                  >
                    <input type="checkbox" name="introduce" />
                  </div>
                </div>
                
                <div className="introduce-content_section"
                  onClick={this.handeOpenModal.bind(this, dispatch)}
                  id='on'>
                    {/* <img src={background} alt=""/> */}
                  <ChangeImage
                    id='on'
                    label='Change Background'
                    background={background}/>
                </div>



                <p className="introduce-content_layout">
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

export default SectionIntroduce
