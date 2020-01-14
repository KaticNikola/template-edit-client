import React, { Component } from 'react'

import SelectField from '../../Components/InputField-Components/SelectField'

import './SectionEntice.scss'
export class SectionEntice extends Component {
  render() {
    return (
      <div className='entice'>
        <div className="entice-content">
          <div className="entice-content_title">
            <h3>Entice</h3>
          </div>
          <div className="entice-content_section">
            <div className="wrapper">
              <h3 className="entice-content_section_title">
                Enable this section
                </h3>
              <p className="entice-content_section_description">
                This section is used to push the visitors who have still not started the game
              </p>
            </div>
            <div className="entice-content_section_checkbox">
              <input type="checkbox" name="entice" value="Bike" />
            </div>
          </div>

          <div className="entice-content_layout">
            <SelectField
              label='Content layout'
              options={[
                { value: "text&Slideshow", label: `Text & Slideshow` },
                { value: "SingleImage", label: 'Single Image' },
                { value: "400", label: 400 },
                { value: "500", label: 500 },
                { value: "600", label: 600 },
                { value: "700", label: 700 },
                { value: "800", label: 800 },
                { value: "900", label: 900 },
              ]} />
          </div>



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
  }
}

export default SectionEntice
