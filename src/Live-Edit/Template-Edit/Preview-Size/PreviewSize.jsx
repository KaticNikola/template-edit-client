import React, { Component } from 'react'

import { Consumer } from '../Template/Template-Context/TemplateContext'
import { PREVIEW_SIZE } from '../Template/Template-Context/TemplateTypes'


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
  }

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch, preview } = value;
          return (
            <div className='previewSize'>

              <img src={PC}
                alt="pc icon"
                id="pc"
                onClick={this.handleViewChange.bind(this, dispatch)}
                style={preview === 'on' ? { cursor: "pointer" } : null} />
                {/* ovde ces pored cursora da doadas i graysclae */}

              <img src={Tablet}
                alt="tablet icon"
                id="tablet"
                onClick={this.handleViewChange.bind(this, dispatch)}
                style={preview === 'on' ? { cursor: "pointer" } : null} />

              <img src={Phone}
                alt="phone icon"
                id="phone"
                onClick={this.handleViewChange.bind(this, dispatch)}
                style={preview === 'on' ? { cursor: "pointer" } : null} />

            </div>
          )
        }}
      </Consumer>

    )
  }
}

export default PreviewSize
