import React, { Component } from 'react'

import SelectField from '../../Components/InputField-Components/SelectField'

import { Consumer } from '../../Template/Template-Context/TemplateContext';
import { SECTION_ENTICE_STATUS,  ENTICE_ELEMENT_TO_SHOW} from '../../Template/Template-Context/TemplateTypes'

import './SectionEntice.scss'
export class SectionEntice extends Component {

  handleShowHideSection = (dispatch, e) => {
    let id;
    let actionType = e.target.name
    //
    console.log(actionType)
    if (e.target.checked === true) {
      id = "none"
    } else if (e.target.checked === false) {
      id = 'flex'
    }
    console.log(`id${id}`)
    dispatch({
      type: SECTION_ENTICE_STATUS,
      payload: {
        id
        // selectionKey
      }
    })
  }

  handleElementToShow = (dispatch, e) => {
    let id = e.target.value;
    console.log(`id${id}`)
    dispatch({
      type: ENTICE_ELEMENT_TO_SHOW,
      payload: {
        id
        // selectionKey
      }
    })
  }
  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          const { enticeStatus, } = value.entice
          return (
            <div className='entice'>
              <div className="entice-content">
                <div className="entice-content_title">
                  <h3>Entice</h3>
                </div>
                <div className="entice-content_section">
                  <div className="wrapper">
                    <h3 className="entice-content_section_title"
                    >
                      {enticeStatus === 'none' ? "Enable this section" : "Disable this section"}
                    </h3>
                    <p className="entice-content_section_description">
                      This section is used to push the visitors who have still not started the game
              </p>
                  </div>
                  <div className="entice-content_section_checkbox"
                    onClick={this.handleShowHideSection.bind(this, dispatch)}>
                    <input type="checkbox" name="entice" value="Bike" />
                  </div>
                </div>

                <div className="entice-content_layout" 
                onClick={this.handleElementToShow.bind(this, dispatch)}>
                  <SelectField
                    label='Content layout'
                    options={[
                      { value: "text&Slideshow", label: `Text & Slideshow` },
                      { value: "SingleImage", label: 'Single Image' },
                    ]} />
                </div>

                <div className="entice-content_layout">
                  <SelectField
                    label='Slide count'
                    options={[
                      { value: "text&Slideshow", label: `Text & Slideshow` },
                      { value: "SingleImage", label: 'Single Image' },
                    ]} />
                </div>

                <p className="entice-content_layout">
                  Click on the layout elements to edit their content. We’ll save your changes as soon as you make them.
          </p>

              </div>
              {/* select element koji ima option vlaue [sa elementima koje mozes da pokazes u sectionu ] > u menja value u state koja odredjuje u conditional component sta ce da se renderuje */}

              <div className="entice-finish">
                <div className="entice-finish_text">
                  <h3 className="title">Happy with what you see?</h3>
                  <p className="description">
                    Click Finish to save changes and complete editing your template.
                  </p>
                </div>
                <div className="entice-finish_cta">
                  <a href="#">Finish</a>
                </div>
              </div>
            </div>
          )
        }}
      </Consumer>
    )


  }
}

export default SectionEntice
