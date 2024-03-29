// renderuje 
//side meni | option | template wrapper
import React, { Component } from 'react'

import SideMenu from './Side-Menu/SideMenu'
import EditMenu from './Edit-Menu/EditMenu'
import TemplateWrapper from './TemplateWrapper/TemplateWrapper'
import EditModeControler from './EditModeControler/EditModeControler';
import PreviewSize from './Preview-Size/PreviewSize';

import Modals from './Modals/Modals'
import ImageUploader from './Edit-Menu/Image-Uploader/ImageUploader'


import { Consumer } from './Template/Template-Context/TemplateContext'
import './TemplateEdit.scss'

export class TemplateEdit extends Component {
  state = {
    screenWidth: 1920,
    editMeniWidth: null,
    sideMenuWidth: 85,
  }

  componentWillMount() {

    if (window.innerWidth > 1860) {
      this.setState({
        screenWidth: "1920",
        editMeniWidth: 300
      })
    } else if (window.innerWidth === 1860) {
      this.setState({
        screenWidth: "1600",
        editMeniWidth: 300
      })
    }
    else if (window.innerWidth === 1536) {
      this.setState({
        screenWidth: "1536",
        editMeniWidth: 300
      })
    }
    else if (window.innerWidth === 1440) {
      this.setState({
        screenWidth: 1440,
        editMeniWidth: 300
      })
    }
    else if (window.innerWidth === 1366) {
      this.setState({
        screenWidth: 1366,
        editMeniWidth: 300
      })
    }
    else if (window.innerWidth === 1280) {
      this.setState({
        screenWidth: 1280,
        editMeniWidth: 300
      })
    }

  }

  render() {
    const { screenWidth, editMeniWidth, sideMenuWidth } = this.state;

    let TemplateWidthOn = window.innerWidth - editMeniWidth - sideMenuWidth;
    let TemplateWidthOff = window.innerWidth - sideMenuWidth;
    let editModeControlerPositionOn = sideMenuWidth + editMeniWidth - 30;
    let editModeControlerPositionOff = sideMenuWidth - 30;
    return (
      <Consumer>
        {value => {
          const { editMode, modalStatus } = value;
          return (
            <div className='templateEdit'>
              <div className="templateEdit-sideMenu">
                {/* uvek je tu  */}
                <SideMenu editModeContoroler={editMode} />
              </div>

              {/* <div className={`templateEdit-editMenu templateEdit-editMenu_${editMode}`}>
                <EditMenu editMode={editMode} />
              </div> */}

              {/* test */}
              <div className={`templateEdit-editMenu templateEdit-editMenu_${editMode}`}>
                <EditMenu editMode={editMode} />
              </div>




              <div className="templateEdit-editModeControler" style={{ left: editMode === 'on' ? `${editModeControlerPositionOn}px` : `${editModeControlerPositionOff}px` }}>
                <EditModeControler />
              </div>

              {/* sirinu za razlicite screen size ces da resis krzo fn inline style > if screensize = 1920 size = screensize - sidemeniwidth - editmenuwidth */}
              <div
                className={`templateEdit-templateWrapper_${screenWidth} templateEdit-templateWrapper_${editMode}`}
                style={{ width: editMode === 'on' ? TemplateWidthOn : TemplateWidthOff }}>
                {/* renderuje componentu koja ima bg i > template */}
                <TemplateWrapper />
                <PreviewSize />
              </div>
              <div className="templateEdit-modal" style={{ display: modalStatus === 'on' ? 'block' : 'none' }} >
                <Modals />
              </div>


            </div>

          )
        }}
      </Consumer>

    )
  }
}

export default TemplateEdit
