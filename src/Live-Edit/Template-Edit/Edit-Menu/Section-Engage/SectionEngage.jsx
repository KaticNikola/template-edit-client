import React, { Component } from 'react'

import SelectField from '../../Components/InputField-Components/SelectField'

import './SectionEngage.scss'
export class SectionEngage extends Component {
  render() {
    return (
      <div className='engage'>

        <div className="engage-content">
          <h3 className="engage-content_title">
         Engage
          </h3>
          <div className="engage-content_section">
            <div className="wrapper">
              {/* <h3 className="engage-content_section_title">
                Enable this section
                </h3> */}
              <p className="engage-content_section_description">
              Use this section to present the audience with the game you have created. 
              </p>
            </div>
            {/* <div className="engage-content_section_checkbox">
              <input type="checkbox" name="engage" value="Bike" />
            </div> */}
          </div>

          {/* <div className="engage-content_layout">
            <SelectField
              label='Content layout'
              options={[
                { value: "text&Slideshow", label: `Text & Slideshow` },
                { value: "SingleImage", label: 'Single Image' },
              ]} />
          </div>

          <div className="engage-content_layout">
            <SelectField
              label='Slide count'
              options={[
                { value: "text&Slideshow", label: `Text & Slideshow` },
                { value: "SingleImage", label: 'Single Image' },
              ]} />
          </div>

          <p className="engage-content_layout">
          Click on the layout elements to edit their content. We’ll save your changes as soon as you make them.
          </p> */}

        </div>
        
        {/* select element koji ima option vlaue [sa elementima koje mozes da pokazes u sectionu ] > u menja value u state koja odredjuje u conditional component sta ce da se renderuje */}

        {/* <div className="engage-finish">
          <div className="engage-finish_text">
            <h3 className="title">Happy with what you see?</h3>
            <p className="description">
              Click Finish to save changes and complete editing your template.
                  </p>
          </div>
          <div className="engage-finish_cta">
            <a href="#">Finish</a>
          </div>
        </div>
         */}
      </div>


    
    )
  }
}

export default SectionEngage
