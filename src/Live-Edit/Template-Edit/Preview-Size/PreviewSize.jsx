import React, { Component } from 'react'

import { Consumer } from '../Template/Template-Context/TemplateContext'
import { PREVIEW_SIZE, EDITMODE_CONTROLER } from '../Template/Template-Context/TemplateTypes'


import './PreviewSize.scss'

export class PreviewSize extends Component {

  //chage template view
  handleViewChange = (dispatch, e) => {
    e.preventDefault();
    let previewSize = e.target.id;
    console.log(`change ${e.target.id}`)

    dispatch({
      type: PREVIEW_SIZE,
      payload: previewSize
    })
    dispatch({
      type: EDITMODE_CONTROLER,
      payload: 'off'
    })
  }

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className='previewSize'>
              <div className="previewSize-iconBox" id='PC'
                onClick={this.handleViewChange.bind(this, dispatch)}>
                <i className="fas fa-desktop" id='PC'></i>
              </div>
              <div className="previewSize-iconBox" id='Tablet'
                onClick={this.handleViewChange.bind(this, dispatch)}>
                <i className="fas fa-tablet-alt" id='Tablet'></i>
              </div>
              <div className="previewSize-iconBox" id='Phone'
                onClick={this.handleViewChange.bind(this, dispatch)} >
                <i className="fas fa-mobile-alt" id='Phone'></i>
              </div>

              {/* <img src={}
                alt="pc icon"
                id="pc"
                onClick={this.handleViewChange.bind(this, dispatch)}
                style={preview === 'on' ? { cursor: "pointer" } : null} /> */}
              {/* ovde ces pored cursora da doadas i graysclae */}

              {/* <img src={}
                alt="tablet icon"
                id="tablet"
                onClick={this.handleViewChange.bind(this, dispatch)}
                style={preview === 'on' ? { cursor: "pointer" } : null} />

              <img src={}
                alt="phone icon"
                id="phone"
                onClick={this.handleViewChange.bind(this, dispatch)}
                style={preview === 'on' ? { cursor: "pointer" } : null} /> */}

            </div>
          )
        }}
      </Consumer>

    )
  }
}

export default PreviewSize
