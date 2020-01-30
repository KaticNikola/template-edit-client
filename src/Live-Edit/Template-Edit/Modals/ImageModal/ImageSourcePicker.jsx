import React, { Component } from 'react'


import UserAlbum from './UserAlbum/UserAlbum';
import Shutterstock from './Shutterstock/Shutterstock'
import { Consumer } from '../../Template/Template-Context/TemplateContext'
export class ImageSourcePicker extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { imageModalSource } = value;
          
          if (imageModalSource === 'album') {
            return (
              <>
                <UserAlbum/>
              </>
            )
          } else if (imageModalSource === 'shutterstock') {
            return (
              <>
                <Shutterstock/>
              </>
            )
          }

        }}
      </Consumer>
    )
  }
}

export default ImageSourcePicker
// bira izmedju albuma i shutterstocka