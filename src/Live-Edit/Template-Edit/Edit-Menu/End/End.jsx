import React, { Component } from 'react'

import { Consumer } from '../../Template/Template-Context/TemplateContext';

import './End.scss'

export class End extends Component {
  render() {

    return (
      <Consumer>
        {value => {
          return (
            <div className="end">

                <h3 className="end-title">
                  Finish Editing
               </h3>
               
                <div className="end-finish">
                  <div className="end-finish_text">
                    <h3 className="title">Happy with what you see?</h3>
                    <p className="description">
                      Click Finish to save changes and complete editing your template.
                  </p>
                  </div>
                  <div className="end-finish_cta">
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

export default End
