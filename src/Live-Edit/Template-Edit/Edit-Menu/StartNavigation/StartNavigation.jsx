import React, { Component } from 'react'

import { Consumer } from '../../Template/Template-Context/TemplateContext'

import './StartNavigation.scss'
export class StartNavigation extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { campaingName } = value;
          return (
            <div className="navigation">
              <div className="navigation-title">
                {campaingName}
              </div>
                <div className="navigation-item">
                  <div className="wrapper">
                    <h3 className="navigation-item_title">Inital set-up</h3>
                    <p className="navigation-item_description">
                      Return to the initial set-up and change the campaign basics, such as the brand details, template or game.
                </p>
                  </div>
                  <div className="navigation-item_arrow">
                    <i className="fas fa-chevron-right"></i>
                  </div>
                </div>

                <div className="navigation-item">
                  <div className="wrapper">
                    <h3 className="navigation-item_title">My templates</h3>
                    <p className="navigation-item_description">
                      Choose from the selection of your templates and apply it to this campaign.
                </p>
                  </div>
                  <div className="navigation-item_arrow">
                    <i className="fas fa-chevron-right"></i>
                  </div>
                </div>

                <div className="navigation-item">
                  <div className="wrapper">
                    <h3 className="navigation-item_title">Additional pages</h3>
                    <p className="navigation-item_description">
                      Set up the way supporting content (such as the privacy policy, terms of service, etc.) is shown
                </p>
                  </div>
                  <div className="navigation-item_arrow">
                    <i className="fas fa-chevron-right"></i>
                  </div>
                </div>

                <div className="navigation-item">
                  <div className="wrapper">
                    <h3 className="navigation-item_title">Advanced edit mode</h3>
                    <p className="navigation-item_description">
                      Switch to the editor that allows you a greater degree of freedom to change the elements around.
                </p>
                  </div>
                  <div className="navigation-item_arrow">
                    <i className="fas fa-chevron-right"></i>
                  </div>
                </div>
{/* 
                <div className="navigation-finish">
                  <div className="navigation-finish_text">
                    <h3 className="title">Happy with what you see?</h3>
                    <p className="description">
                      Click Finish to save changes and complete editing your template.
                  </p>
                  </div>
                  <div className="navigation-finish_cta">
                    <a href="#">Finish</a>
                  </div>
                </div> */}

              </div>
          )
        }}
      </Consumer >

    )
  }
}

export default StartNavigation
