import React, { Component } from 'react'

import { Consumer } from '../Template/Template-Context/TemplateContext';

// IMPORTUJ FORME ZA EDIT ELEMENTATAN I NAPRAVI KOJE NEMAS

import EditFormText from './Edit-Forms/EditFormText'
import EditFormButton from './Edit-Forms/EditFormButton';
import StartNavigation from './StartNavigation/StartNavigation'
import SectionEntice from './Section-Entice/SectionEntice'


import './EditMenu.scss'
export class EditMenu extends Component {
  render() {
    let elementToEdit = null;
    //let formTypeControler = null;
    let formTypeControler = "";//testiras txt formu
    return (
      <Consumer>
      {value => {
        const { selectedElement, editMode } = value;
        // //logo nepostoji za sad
        if (selectedElement === 'headerLogo') {
          elementToEdit = value.header.logo;
          formTypeControler = 'icon'
        }
        else if (selectedElement === 'headerNavigationHome') {
          elementToEdit = value.header.navigationHome;
          formTypeControler = 'button'
        }
        else if (selectedElement === 'headerNavigationEntice') {
          elementToEdit = value.header.navigationEntice;
          formTypeControler = 'button'
        }
        else if (selectedElement === 'headerNavigationEngage') {
          elementToEdit = value.header.navigationEngage;
          formTypeControler = 'button'
        }
        if (selectedElement === 'headerTitle') {
          elementToEdit = value.header.title;
          formTypeControler = 'text'
        }
        else if (selectedElement === 'headerDescription') {
          elementToEdit = value.header.description;
          formTypeControler = 'text'
        }
        else if (selectedElement === 'headerButton') {
          elementToEdit = value.header.button;
          formTypeControler = 'button'
        }
        // //bg
        // else if (selectedElement === 'headerBackground') {
        // 	elementToEdit = value.header.navigationHome;
        // 	formTypeControler = 'button'
        // }


        //ENTICE
        else if (selectedElement === 'enticeTitleIcon') {
          elementToEdit = value.entice.icon;
          formTypeControler = 'icon'
        }
        else if (selectedElement === 'enticeTitle') {
          elementToEdit = value.entice.title;
          formTypeControler = 'text'
        }
        else if (selectedElement === 'enticeDescription1') {
          elementToEdit = value.entice.description1;
          formTypeControler = 'text'
        }
        else if (selectedElement === 'enticeDescription2') {
          elementToEdit = value.entice.description2;
          formTypeControler = 'text'
        }

        //PRIZE 1
        else if (selectedElement === 'enticeOptionPrize0Title') {
          elementToEdit = value.entice.options.cardList[0].title;
          formTypeControler = 'text'
        }

        // else if (selectedElement === 'enticePrice1Image') {
        // 	elementToEdit = value.entice.price1Image;
        // 	formTypeControler = 'image'//mozda i section
        // }
        //PRIZE 2
        else if (selectedElement === 'enticeOptionPrize1Title') {
          elementToEdit = value.entice.options.cardList[1].title;
          formTypeControler = 'text'
        }

        // else if (selectedElement === 'enticePrice2Image') {
        // 	elementToEdit = value.entice.price2Image;
        // 	formTypeControler = 'image'//mozda i section
        // }
        //PRIZE 3
        else if (selectedElement === 'enticeOptionPrize2Title') {
          elementToEdit = value.entice.options.cardList[2].title;
          formTypeControler = 'text'
        }

        // else if (selectedElement === 'enticePrice3Image') {
        // 	elementToEdit = value.entice.price2Image;
        // 	formTypeControler = 'image'//mozda i section
        // }

        // //bg
        // else if (selectedElement === 'enticeBackground') {
        // 	elementToEdit = value.entice.background;
        // 	formTypeControler = 'bg'
        // }


        //GAME
        else if (selectedElement === 'engageTitleIcon') {
          elementToEdit = value.engage.icon;
          formTypeControler = 'icon'
        }
        else if (selectedElement === 'engageTitle') {
          elementToEdit = value.engage.title;
          formTypeControler = 'text'
        }
        else if (selectedElement === 'engageDescription1') {
          elementToEdit = value.engage.description1;
          formTypeControler = 'text'
        }
        else if (selectedElement === 'engageDescription2') {
          elementToEdit = value.engage.description2;
          formTypeControler = 'text'
        }
        // //bg
        // else if (selectedElement === 'engageBackground') {
        // 	elementToEdit = value.engage.background;
        // 	formTypeControler = 'bg'
        // }


        //INFORMATION
        else if (selectedElement === 'informationTitleIcon') {
          elementToEdit = value.information.icon;
          formTypeControler = 'icon'
        }
        else if (selectedElement === 'informationTitle') {
          elementToEdit = value.information.title;
          formTypeControler = 'text'
        }
        else if (selectedElement === 'informationDescription') {
          elementToEdit = value.information.description;
          formTypeControler = 'text'
        }
        //info card1
        else if (selectedElement === 'informationCard1Title') {
          elementToEdit = value.information.card1Title;
          formTypeControler = 'text'
        }
        else if (selectedElement === 'informationCard1Subtitle') {
          elementToEdit = value.information.card1Subtitle;
          formTypeControler = 'text'
        }
        else if (selectedElement === 'informationCard1Icon') {
          elementToEdit = value.information.card1icon;
          formTypeControler = 'icon'
        }
        else if (selectedElement === 'informationCard1Description') {
          elementToEdit = value.information.card1Descritpion;
          formTypeControler = 'text'
        }
        // else if (selectedElement === 'informationCard1Image') {
        // 	elementToEdit = value.information.card1Image;
        // 	formTypeControler = 'img'
        // }

        //info card2
        else if (selectedElement === 'informationCard2Title') {
          elementToEdit = value.information.card2Title;
          formTypeControler = 'text'
        }
        else if (selectedElement === 'informationCard2Subtitle') {
          elementToEdit = value.information.card2Subtitle;
          formTypeControler = 'text'
        }
        else if (selectedElement === 'informationCard2Icon') {
          elementToEdit = value.information.card2icon;
          formTypeControler = 'icon'
        }
        else if (selectedElement === 'informationCard2Description') {
          elementToEdit = value.information.card2Descritpion;
          formTypeControler = 'text'
        }
        // else if (selectedElement === 'informationCard2Image') {
        // 	elementToEdit = value.information.card2Image;
        // 	formTypeControler = 'img'
        // }

        //info card3
        else if (selectedElement === 'informationCard3Title') {
          elementToEdit = value.information.card3Title;
          formTypeControler = 'text'
        }
        else if (selectedElement === 'informationCard3Subtitle') {
          elementToEdit = value.information.card3Subtitle;
          formTypeControler = 'text'
        }
        else if (selectedElement === 'informationCard3Icon') {
          elementToEdit = value.information.card3icon;
          formTypeControler = 'icon'
        }
        else if (selectedElement === 'informationCard3Description') {
          elementToEdit = value.information.card3Descritpion;
          formTypeControler = 'text'
        }
        // else if (selectedElement === 'informationCard3Image') {
        // 	elementToEdit = value.information.card3Image;
        // 	formTypeControler = 'img'
        // }

        // //bg
        // else if (selectedElement === 'gameBackground') {
        // 	elementToEdit = value.game.background;
        // 	formTypeControler = 'bg'
        // }



        //COTACT
        else if (selectedElement === 'contactTitleIcon') {
          elementToEdit = value.contact.icon;
          formTypeControler = 'icon'
        }
        else if (selectedElement === 'contactTitle') {
          elementToEdit = value.contact.title;
          formTypeControler = 'text'
        }
        else if (selectedElement === 'contactDescription') {
          elementToEdit = value.contact.description;
          formTypeControler = 'text'
        }

        //CONTACT INFO
        else if (selectedElement === 'contactLocation') {
          elementToEdit = value.contact.location;
          formTypeControler = 'text'
        }
        else if (selectedElement === 'contactPhone') {
          elementToEdit = value.contact.phone;
          formTypeControler = 'text'
        }
        else if (selectedElement === 'contactEmail') {
          elementToEdit = value.contact.email;
          formTypeControler = 'text'
        }
      

      // za start cim loaduje TEM
      else if (selectedElement === 'start') {
        formTypeControler = 'StartNavigation'
      }
      else if (selectedElement === 'entice') {
        formTypeControler = 'entice'
      }

        //render froms
        if (editMode === 'on' && selectedElement === '') {
          return (
            <div className="emptyForm">
              <h3>please select element you want to edit</h3>
            </div>

          )
        } else if (editMode === 'on' && formTypeControler === 'text') {
          return (
            <div className="editMode">
              <EditFormText
                selectedElement={selectedElement}
                elementToEdit={elementToEdit} />
            </div>
          )
        } else if (editMode === 'on' && formTypeControler === 'button') {
          return (
            <div className="editMode">
              <EditFormButton
                selectedElement={selectedElement}
                elementToEdit={elementToEdit} />
            </div>
          )
        }
        else if (editMode === 'on' && formTypeControler === 'StartNavigation') {
          return (
            <div className="editMode">
              <StartNavigation />
            </div>
          )
        }
        else if (editMode === 'on' && formTypeControler === 'entice') {
          return (
            <div className="editMode">
              <SectionEntice />
            </div>
          )
        }
 // edit forme za svaki section 
            //introduce
            //engage
            //info
            //connect > da mozes da uneses info za lokaciju tel. email SM
            //footer
      }}
    </Consumer>
    )
  }
}

export default EditMenu
