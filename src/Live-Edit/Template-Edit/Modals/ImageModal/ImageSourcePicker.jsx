import React, { Component } from 'react'

import { Consumer } from '../../Template/Template-Context/TemplateContext'
export class ImageSourcePicker extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { imageModalSource } = value;
          return(
            <div className="test">
              {imageModalSource}
            </div>
          )
          // if (imageModalSource === 'album') {
          //   return (
          //     <>
          //       {imageModalSource}
          //     </>
          //   )
          // } else if (imageModalSource === 'shutterstock') {
          //   return (
          //     <>
          //       {imageModalSource}
          //     </>
          //   )
          // }

        }}
      </Consumer>
    )
  }
}

export default ImageSourcePicker
// bira izmedju albuma i shutterstocka