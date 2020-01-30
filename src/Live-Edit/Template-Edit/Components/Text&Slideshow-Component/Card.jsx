import React, { Component } from 'react'
import CardTitle from './CardTitle.jsx';
import prize1 from '../../Template/Brame/Components/brame-entice/assets/prize1.svg'
import prize2 from '../../Template/Brame/Components/brame-entice/assets/prize2.svg'
import prize3 from '../../Template/Brame/Components/brame-entice/assets/prize3.svg'

export class Card extends Component {
  render() {
    const { card, idIndex } = this.props;
    return (
        <div className={`textSlideshow-card textSlideshow-card${idIndex}`}>
        {/* <div className="1">
          {card.title.id}
        </div> */}
          <div className={`textSlideshow-card_img textSlideshow-card${idIndex}_img`}>
            {/* <Image {...card.image}/> */}
            <img src={card.image.url} id={card.image.id} alt=""/>
            {/* <img src={} alt=""/> */}
          </div>
          <div className={`textSlideshow-card_title textSlideshow-card${idIndex}_title`}>
            <CardTitle idIndex={`${idIndex}`} {...card.title} />
          </div>
          {/* <div className="card-description">
            <CardTDescription {...card.description} idIndex={idIndex} />
          </div> */}
        </div>
    )
  }
}

export default Card
