import React, { Component } from 'react'

import RenderImage from './renderImages/RenderImages'
import InputField from '../../../Components/InputField-Components/InputField'
import { Consumer } from '../../../Template/Template-Context/TemplateContext'

import './UserAlbum.scss'
export class UserAlbum extends Component {


  handeUploadimg = (e, dispatch) => {





  }



  render() {
    return (
      <Consumer>
        {value => {
          const { album, dispatch } = value
          return (
            <div className="album">
              <div className="album-upload">
                <h4>Click to upload an image</h4>
                <input type="file" id="file" onChange={this.handeUploadimg.bind
                  (this, dispatch)} />
                  <label for="file" class="btn-1">upload file</label>
                <p>Choose a .JPG or .PNG file that is not larger than 5 MB in size,</p>
              </div>
              <>
                <RenderImage album={album} />
              </>

            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default UserAlbum
