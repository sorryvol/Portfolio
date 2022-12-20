import React from 'react';
import Anime from 'react-anime';

import '../CSS/Carousel.css';

{/* 
  props:
    sizeScale
    opactiyScale
*/}

function CarouselItem(props: any) {
  return(
    <div>
      <h3 className="project-name">{props.name}</h3>
      <a href={props.href}>
        <img draggable="false" className="project-image" src={props.src} alt=""></img>
      </a>
    </div>
  )
}

export default CarouselItem;