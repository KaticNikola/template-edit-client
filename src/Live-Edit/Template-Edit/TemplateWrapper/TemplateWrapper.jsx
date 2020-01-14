import React, { Component } from 'react'

import Brame from '../Template/Brame/Brame'

import './TemplateWrapper.scss'

export class TemplateWrapper extends Component {
  render() {
    return (
      <div className='templateWrapper'>

        <div className="templateWrapper-icon">
          <span><img src="../Side-Menu/assets/BRAME-logo.png" height='35px' width='35px' alt=""/></span>RAME
        </div>
        <div className="templateWrapper-template">
          <Brame />
        </div>

      </div>
    )
  }
}

export default TemplateWrapper
