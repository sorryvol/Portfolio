import React from 'react';
import styled from 'styled-components';

import '../CSS/SideNav.css';

function scrollToDiv(ref: any){

}

function moveDot(amount: number){
  const dot = document.getElementById("current-section-dot");
  if (dot){
    amount = 51*amount;
    dot.style.transform = "translate(0px, "+amount+"px)";
    //dot.style.animation = "movedot 0.3s 1";
  }
}

function checkSection(scrollSection: number, setScrollSection: Function){
  const scrollY = window.scrollY;
  console.log("Scroll Y: "+scrollY);
  console.log("Scroll Section: "+scrollSection);
  if (scrollY > 0 && scrollY <= 655 && scrollSection !== 0){
    setScrollSection(0);
  }
  if (scrollY > 655 && scrollY <= 1892 && scrollSection !== 1){
    setScrollSection(1);
  }
  if (scrollY > 1892 && scrollY <= 2885 && scrollSection !== 2){
    setScrollSection(2);
  }
  if (scrollY > 2885 && scrollY <= 3900 && scrollSection !== 3){
    setScrollSection(3);
  }
  if (scrollY > 3900 && scrollY <= 4000 && scrollSection !== 4){
    setScrollSection(4);
  }
}

function SideNav(props: any) {
  const [scrollSection, setScrollSection] = React.useState(0);
  const refs = [React.useRef(), React.useRef(), React.useRef(), React.useRef(), React.useRef()];
  React.useEffect(() => {
    moveDot(scrollSection);
    const eventFunction = () => checkSection(scrollSection, setScrollSection);
    window.addEventListener('scroll', eventFunction);
    return () => {
      window.removeEventListener('scroll', eventFunction);
    };
  }, [scrollSection]);

  return (
    <div className="nav">
      <div className="border-line">
        <div className="nav-items">
          <a onClick={() => scrollToDiv(refs[0])}>Intro</a>
          <a onClick={() => scrollToDiv(refs[1])}>About Me</a>
          <a onClick={() => scrollToDiv(refs[2])}>Projects</a>
          <a onClick={() => scrollToDiv(refs[3])}>Tech Stack</a>
          <a onClick={() => scrollToDiv(refs[4])}>Contacts</a>
          <img id="current-section-dot" className="current-section-dot noselect" src="./Logos/dot.svg" alt="" draggable="false"></img>
        </div>
      </div>
    </div>
  ) 
}

export default SideNav;
