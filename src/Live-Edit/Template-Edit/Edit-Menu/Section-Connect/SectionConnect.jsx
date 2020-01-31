import React, { Component } from 'react'

import TextAreaField from '../../Components/InputField-Components/TextAreaField'
import InputField from '../../Components/InputField-Components/InputField'
import { Consumer } from '../../Template/Template-Context/TemplateContext';
import { SECTION_CONTACT_STATUS, EDIT_CONTACT_LOCATION, EDIT_CONTACT_EMAIL, EDIT_CONTACT_PHONE, MODAL_STATUS } from '../../Template/Template-Context/TemplateTypes'
import ChangeImage from '../../Components/InputField-Components/ChangeImage'

import './SectionConnect.scss'
export class SectionConnect extends Component {

  handleShowHideSection = (dispatch, e) => {
    let id;
    let actionType = e.target
    //
    console.log(actionType)
    if (e.target.checked === true) {
      id = "none"
    } else if (e.target.checked === false) {
      id = 'block'
    }
    console.log(`id${id}`)
    dispatch({
      type: SECTION_CONTACT_STATUS,
      payload:
        id
      // selectionKey

    })
  }

  handleInfoChange = (dispatch, e) => {
    const property = e.target.name;
    const value = e.target.value;
    let TYPE;
    console.log(e.target.placeholder)
    console.log(`test1${property}`)
    console.log(`test2${value}`)

    if (e.target.placeholder === "adress") {
      TYPE = EDIT_CONTACT_LOCATION
    } else if (e.target.placeholder === "phone") {
      TYPE = EDIT_CONTACT_PHONE
    } else if (e.target.placeholder === "email") {
      TYPE = EDIT_CONTACT_EMAIL
    }

    dispatch({
      type: TYPE,
      payload: {
        property,
        value
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
  // salje 
  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          const { connectStatus, location, phone, email, background } = value.contact

          return (
            <div className='connect'>
              <div className="connect-content">
                <h3 className="connect-content_title">
                  Section Connect
                </h3>
                <div className="connect-content_section">
                  <div className="wrapper">
                    <h3 className="connect-content_section_title">
                      {connectStatus === 'none' ? "Enable this section" : "Disable this section"}
                    </h3>
                    <p className="connect-content_section_description">
                      Use this section to list any company contact information you would like to be available to the end users.
              </p>
                  </div>
                  <div className="connect-content_section_checkbox"
                    onClick={this.handleShowHideSection.bind(this, dispatch)}>
                    <input type="checkbox" name="connect" value="" />
                    <span class="checkmark"></span>
                  </div>
                </div>

                <div className="connect-content_layout"
                  onChange={this.handleInfoChange.bind(this, dispatch)}>
                  <TextAreaField
                    label="Adress"
                    type="text"
                    name='content'
                    placeholder='adress'
                    value={location.content}
                  />
                </div>

                <div className="connect-content_layout"
                  onChange={this.handleInfoChange.bind(this, dispatch)}>
                  <InputField
                    label="Phone"
                    type="text"
                    name='content'
                    placeholder='phone'
                    value={phone.content}
                  />
                </div>

                <div className="connect-content_layout"
                  onChange={this.handleInfoChange.bind(this, dispatch)}>
                  <InputField
                    label="Email"
                    type="text"
                    name='content'
                    placeholder='email'
                    value={email.content}
                  />
                </div>
                <div className="introduce-content_section"
                  onClick={this.handeOpenModal.bind(this, dispatch)}
                  tag='on'>
                  {/* <img src={background} alt=""/> */}
                  <ChangeImage
                    tag='on'
                    label='Change Background'
                    background={background.url} />
                </div>

              </div>
              {/* select element koji ima option vlaue [sa elementima koje mozes da pokazes u sectionu ] > u menja value u state koja odredjuje u conditional component sta ce da se renderuje */}
              {/* 
              <div className="connect-finish">
                <div className="connect-finish_text">
                  <h3 className="title">Happy with what you see?</h3>
                  <p className="description">
                    Click Finish to save changes and complete editing your template.
                  </p>
                </div>
                <div className="connect-finish_cta">
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

export default SectionConnect
