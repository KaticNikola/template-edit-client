// renderuje 
//side meni | option | template wrapper
import React, { Component } from 'react'

import SideMenu from './Side-Menu/SideMenu'
import EditMenu from './Edit-Menu/EditMenu'
import TemplateWrapper from './TemplateWrapper/TemplateWrapper'
// import  


import { Consumer } from './Template/Template-Context/TemplateContext'
import './TemplateEdit.scss'

export class TemplateEdit extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { editMode } = value
          return (
            <div className='templateEdit'>
              <div className="templateEdit-sideMenu">
                {/* uvek je tu  */}
                <SideMenu />
              </div>
              <div className="templateEdit-editMenu"
              style={{display : editMode === "on" ? "block": "none" }}>
                <EditMenu />

              </div>

              <div className="templateEdit-editModeContoroler">
                {/* strelicu koja otvara i zatvara editMenu */}
              </div>
              <div className="templateEdit-templateWrapper">
                {/* renderuje componentu koja ima bg i > template */}
                <TemplateWrapper />
              </div>

            </div>

          )
        }}
      </Consumer>

    )
  }
}

export default TemplateEdit
