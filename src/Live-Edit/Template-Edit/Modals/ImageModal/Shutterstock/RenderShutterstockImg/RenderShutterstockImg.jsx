import React, { Component } from 'react'

import SingleImage from '../SingleImage/SingleImage'

import { Consumer } from '../../../../Template/Template-Context/TemplateContext'

export class RenderShutterstockImg extends Component {
  render() {
const {album} = this.props
    return (
      <Consumer>
        {value =>{

          return(
            <div className="wrapper">
              {
                album.map( image =>{
                  return(
                    <SingleImage image={image}/>
                  )
                })
              }
            </div>
          )
        }}
      </Consumer>
    
    )
  }
}

export default RenderShutterstockImg
