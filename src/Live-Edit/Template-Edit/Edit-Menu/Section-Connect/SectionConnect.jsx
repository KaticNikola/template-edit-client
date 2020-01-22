import React, { Component } from 'react'

import SelectField from '../../Components/InputField-Components/SelectField'

import './SectionConnect.scss'
export class SectionConnect extends Component {
  render() {
    return (
      <div className='connect'>
        <div className="connect-content">
          <div className="connect-content_title">
            <h3>Connect</h3>
          </div>
          <div className="connect-content_section">
            <div className="wrapper">
              <h3 className="connect-content_section_title">
                Enable this section
                </h3>
              <p className="connect-content_section_description">
                This section is used to push the visitors who have still not started the game
              </p>
            </div>
            <div className="connect-content_section_checkbox">
              <input type="checkbox" name="connect" value="Bike" />
            </div>
          </div>

          <div className="connect-content_layout">
            <SelectField
              label='Content layout'
              options={[
                { value: "text&Slideshow", label: `Text & Slideshow` },
                { value: "SingleImage", label: 'Single Image' },
              ]} />
          </div>

          <div className="connect-content_layout">
            <SelectField
              label='Slide count'
              options={[
                { value: "text&Slideshow", label: `Text & Slideshow` },
                { value: "SingleImage", label: 'Single Image' },
              ]} />
          </div>

          <p className="connect-content_layout">
          Click on the layout elements to edit their content. We’ll save your changes as soon as you make them.
          </p>

        </div>
        {/* select element koji ima option vlaue [sa elementima koje mozes da pokazes u sectionu ] > u menja value u state koja odredjuje u conditional component sta ce da se renderuje */}

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
        </div>
      </div>
    )
  }
}

export default SectionConnect
