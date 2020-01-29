import React, { Component } from 'react'

import InputField from '../../Components/InputField-Components/InputField'
import SelectField from '../../Components/InputField-Components/SelectField'
import TextAreaField from '../../Components/InputField-Components/TextAreaField'

import { Consumer } from '../../Template/Template-Context/TemplateContext';

export class TextAndSlideshow extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const {dispatch} = value;
          const { textSlideshow } = this.props.elementToEdit; 
          return (
            <div className='slideshow'>
              <div className="slideshow-content">
                <div className="slideshow-content_title">
                  <h3>Slideshow</h3>
                </div>
                <div className="slideshow-content_inputs">
                  {textSlideshow.forEach(card => {
                    return(
                      <div className="input">
                        <div className="input-caption">
                          <InputField 
                            label='Caption 1 '
                          />
                        </div>
                        <div className="input-image">
                          
                        </div>
                      </div>
                    )
                  })
                  }
                </div>
                
              </div>
              {/* select element koji ima option vlaue [sa elementima koje mozes da pokazes u sectionu ] > u menja value u state koja odredjuje u conditional component sta ce da se renderuje */}

              <div className="slideshow-finish">
                <div className="slideshow-finish_text">
                  <h3 className="title">Happy with what you see?</h3>
                  <p className="description">
                    Click Finish to save changes and complete editing your template.
                  </p>
                </div>
                <div className="slideshow-finish_cta">
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

export default TextAndSlideshow
