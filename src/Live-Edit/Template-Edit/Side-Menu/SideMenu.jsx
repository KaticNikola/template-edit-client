import React, { Component } from 'react'


import './SideMenu.scss';

export class SideMenu extends Component {
  render() {
    return (
      <div className='sideMenu'>
        <div className="sideMenu-logo">
          <img src="./assets/bremeLogo.png" alt=""/>
        </div>
        <div className="sideMenu-tabs">
          <div className="sideMenu-tabs_tab">
            <img src="./assets/start.png" alt="" />
            <p>Start</p>
          </div>
          <div className="sideMenu-tabs_tab">
            <img src="./assets/introduce.png" alt="" />
            <p>Introduce</p>
          </div>
          <div className="sideMenu-tabs_tab">
            <img src="./assets/entice.png" alt="" />
            <p>Entice</p>
          </div>
          <div className="sideMenu-tabs_tab">
            <img src="./assets/inform.png" alt="" />
            <p>Inform</p>
          </div>
          <div className="sideMenu-tabs_tab">
            <img src="./assets/connect.png" alt="" />
            <p>Connect</p>
          </div>
          <div className="sideMenu-tabs_tab">
            <img src="./assets/end.png" alt="" />
            <p>End</p>
          </div>
        </div>

      </div>
    )
  }
}

export default SideMenu;
