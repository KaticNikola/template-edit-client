import React, { Component } from 'react'

import Brame from '../Template/Brame/Brame'

import './TemplateWrapper.scss'

export class TemplateWrapper extends Component {
  render() {
    return (
      <div className='templateWrapper'>

        <div className="templateWrapper-icon">
          <img src="./assets/BRAME logo.jpg" alt="logo"/>
        </div>
        <div className="templateWrapper-template">
          <Brame />
        </div>

      </div>
    )
  }
}

export default TemplateWrapper
