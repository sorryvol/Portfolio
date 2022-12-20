import React from 'react';
import styled from 'styled-components';

import '../CSS/Carousel.css';

function rotateCarousel(items: any, setItems: Function, rotateForward: boolean){
  if (items.length <= 1){
    return
  }
  let tempItems: any[] = [];
  if (!rotateForward){
    for (let i = 1; i < items.length; i++){
      tempItems[i-1] = items[i]
    }
    tempItems.push(items[0]);
  }
  else{
    for (let i = 0; i < items.length-1; i++){
      tempItems[i] = items[i]
    }
    tempItems.unshift(items[items.length-1]);
  }
  setItems(tempItems);
}

function getFirstItems(items: any){ //apply styled component here
  let firstItems: any = [];
  for (let i = 0; i < 3; i++){
    if (items[i]){ 
      firstItems.push(items[i]);
    }
  }
  return firstItems;
}

function applyCarouselItemStyles(items: any[]){
  const SideItem = styled.div`
    position: relative;
    opacity: 0.8;
  `;
  let finalItems: any[] = [];
  for (let i = 0; i < items.length; i++){
    if (i === 1){
      finalItems.push(items[i])
    }
    else {
      finalItems.push(<SideItem>{items[i]}</SideItem>)
    }
  }
  return finalItems;
}

function renderFrontCarousel(items: any, setItems: Function){
  return(
    <div>
      <div className="carousel-flex">
        <img className="left arrow" onClick={() => rotateCarousel(items, setItems, true)} src="./Logos/leftArrow.svg" alt="" draggable="false"></img>
        {applyCarouselItemStyles(getFirstItems(items))}
        <img className="right arrow" onClick={() => rotateCarousel(items, setItems, false)} src="./Logos/rightArrow.svg" alt="" draggable="false"></img>
      </div>
    </div>
  )
}

function Carousel(props: any){
  const [items, setItems] = React.useState(props.children)
  return(
    <div>
      {renderFrontCarousel(items, setItems)}
    </div>
  )
}

export default Carousel;