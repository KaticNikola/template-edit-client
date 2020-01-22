import React, { Component } from 'react'

import { SELECTED_ELEMENT } from "../Template/Template-Context/TemplateTypes";
import { Consumer } from '../Template/Template-Context/TemplateContext'
import './SideMenu.scss';

export class SideMenu extends Component {

  handleSelectElement = (dispatch, e) => {
    let id = e.target.id
    let actionType = e.target.name
    //
    console.log(`id${id}`)
    console.log(actionType)
    dispatch({
      type: SELECTED_ELEMENT,
      payload: {
        id
        // selectionKey
      }
    })
  }
  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className='sideMenu' onClick={this.handleSelectElement.bind(this, dispatch)}>
              <div className="sideMenu-logo">
                <img src="./assets/bremeLogo.png" alt="" />
              </div>
              <div className="sideMenu-tabs" >
                <div className="sideMenu-tabs_tab" id='start'>
                  <img src="./assets/start.png" alt="" />
                  <p id='start'>Start</p>
                </div>
                <div className="sideMenu-tabs_tab" id='sectionIntroduce'>
                  <img src="./assets/introduce.png" alt="" id='sectionIntroduce' />
                  <p id='sectionIntroduce'>Introduce</p>
                </div>
                <div className="sideMenu-tabs_tab" id='sectionEntice'>
                  <img src="./assets/entice.png" alt="" />
                  <p id='sectionEntice'>Entice</p>
                </div>
                <div className="sideMenu-tabs_tab" id='sectionEngage'>
                  <img src="./assets/engage.png" alt="" />
                  <p id='sectionEngage'>Engage</p>
                </div>
                <div className="sideMenu-tabs_tab" id='sectionInform'>
                  <img src="./assets/inform.png" alt="" />
                  <p id='sectionInform'>Inform</p>
                </div>
                <div className="sideMenu-tabs_tab" id='sectionConnect'>
                  <img src="./assets/connect.png" alt="" />
                  <p id='sectionConnect'>Connect</p>
                </div>
                <div className="sideMenu-tabs_tab" id='sectionEnd'>
                  <img src="./assets/end.png" alt="" />
                  <p id='sectionEnd'>End</p>
                </div>
              </div>

            </div>

          )
        }}
      </Consumer>

    )
  }
}

export default SideMenu;
