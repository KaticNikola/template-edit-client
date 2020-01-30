import React, { Component } from 'react'

import { SELECTED_ELEMENT, EDITMODE_CONTROLER } from "../Template/Template-Context/TemplateTypes";
import { Consumer } from '../Template/Template-Context/TemplateContext'
import './SideMenu.scss';

export class SideMenu extends Component {

  handleSelectElement = (dispatch, e) => {
    let id = e.target.id
    let actionType = e.target.name
    //
    console.log(`id${id}`)
    console.log(actionType);

    dispatch({
      type: SELECTED_ELEMENT,
      payload: {
        id
      }
    })
  }
  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch, selectedElement } = value;
          return (
            <div className='sideMenu'>
              <div className="sideMenu-logo">
                <img src="./assets/BRAME-logo-small.jpg" alt="" />
              </div>
              <div 
                className="sideMenu-tabs" 
                onClick={this.handleSelectElement.bind(this, dispatch)}>
                <div id='start'
                    className="sideMenu-tabs_tab"  
                    style={{ backgroundColor: selectedElement === 'start' ? "#F5F5F5" : " #EBEBEB" }} >
                <i className="fas fa-flag-checkered" id='start'></i>
                  <p id='start'>Start</p>
                </div>
                <div id='introduce'
                    className="sideMenu-tabs_tab"  
                    style={{ backgroundColor: selectedElement === 'introduce' ? "#F5F5F5" : " #EBEBEB" }}>
                  <i class="fas fa-star" id='introduce' ></i>
                  <p id='introduce'>Introduce</p>
                </div>
                <div id='entice'
                  className="sideMenu-tabs_tab" 
                  style={{ backgroundColor: selectedElement === 'entice' ? "#F5F5F5" : " #EBEBEB" }}>
                <i class="fas fa-magnet" id='entice'></i>
                  <p id='entice'>Entice</p>
                </div>
                <div id='engage'
                    className="sideMenu-tabs_tab"  
                    style={{ backgroundColor: selectedElement === 'engage' ? "#F5F5F5" : " #EBEBEB" }}>
                <i class="fas fa-gamepad"  id='engage'></i>
                  <p id='engage'>Engage</p>
                </div>
                <div  id='inform'
                    className="sideMenu-tabs_tab" 
                    style={{ backgroundColor: selectedElement === 'inform' ? "#F5F5F5" : " #EBEBEB" }}>
                <i class="fas fa-bullhorn" id='inform'></i>
                  <p id='inform'>Inform</p>
                </div>
                <div id='contact'
                    className="sideMenu-tabs_tab" 
                    style={{ backgroundColor: selectedElement === 'contact' ? "#F5F5F5" : " #EBEBEB" }}>
                <i class="fas fa-link" id='contact'></i>
                  <p id='contact'>Connect</p>
                </div>
                <div id='end'
                    className="sideMenu-tabs_tab"  
                    style={{ backgroundColor: selectedElement === 'end' ? "#F5F5F5" : " #EBEBEB" }}>
                  <img src="./assets/end.png" alt="" />
                  <p id='end'>End</p>
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
