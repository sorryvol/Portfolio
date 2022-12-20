import React from 'react';
import Anime from "react-anime";

import './CSS/App.css';

import SideNav from './Components/SideNav';
import Carousel from './Components/Carousel';
import CarouselItem from './Components/CarouselItem';

function App() {
  return (
    <div className="nav-splitter app">
      <SideNav collapsed={false}></SideNav>
      <div className="main-content">
        {/* Name Page Section */}
        <div className="name-page" id="intro">
          <div className="title-area-container">
            <div className="title-area">
              <h3 className="title">Hi, my name is</h3>
              <h1 className="title">Darcy Power</h1>
              <h2 className="title">I like to program.</h2>
            </div>
          </div>
          <div className="circle-spinner">
            <Anime autoplay={true} loop={true} easing={'linear'} duration={7500} rotate={'1turn'}>
              <img draggable="false" className="circle" src="Logos/ring.svg" alt=""></img>
            </Anime>
          </div>
        </div>
        {/* Introduction Section */}
        <div className="introduction-page" id="about-me">
          <h2>About Me</h2>
          <div className="middle-splitter">
            <p className="left">
              Hi, my name is Darcy Power, I'm an 19<br/>
              year old software engineer and full-stack<br/>
              developer from NSW, Australia.<br/><br/>

              I've been interested in programming ever<br/>
              since I played my first video game, and<br/>
              was instantly captivated with how<br/>
              computers work.<br/><br/>
              
              I decided to learn everything there was<br/>
              to know about full-stack development which<br/>
              leads me to where I am today.<br/>
            </p>
            <img draggable="false" className="portrait-picture"src="./Images/portrait.png" alt="Picture of Darcy Power"></img>
          </div>
        </div>
        {/* Projects Section */}
        <div>
          <svg viewBox="0 0 1440 320" width="100vw" className="wave-top"> {/*wave effect at begining of page*/}
            <path fill="#60e280" fill-opacity="1" d="M0,160L80,144C160,128,320,96,480,106.7C640,117,800,171,960,192C1120,213,1280,203,1360,197.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
          <div className="green-background-top">
            <div className="projects-page">
              <h2 className="dark-text">Projects</h2>
              <div className="display-area">
                <Carousel>
                  <CarouselItem name="Project 5" src="./Images/Portrait.png" href="https://www.youtube.com"></CarouselItem>
                  <CarouselItem name="Project 1" src="./Images/Portrait.png" href="https://www.youtube.com"></CarouselItem>
                  <CarouselItem name="Project 2" src="./Images/Portrait.png" href="https://www.youtube.com"></CarouselItem>
                  <CarouselItem name="Project 3" src="./Images/Portrait.png" href="https://www.youtube.com"></CarouselItem>
                  <CarouselItem name="Project 4" src="./Images/Portrait.png" href="https://www.youtube.com"></CarouselItem>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
        {/* Tech Stack Section */}
        <div className="green-background-bottom">
          <div className="tech-stack-page">
            <h2 className="dark-text">Tech Stack</h2>
            <img className="tech-icon-area" src="./Images/TechStack.png" alt="" draggable="false"></img>
            <svg className="wave-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#60E280" fill-opacity="1" d="M0,96L80,117.3C160,139,320,181,480,176C640,171,800,117,960,101.3C1120,85,1280,107,1360,117.3L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
            </svg>
          </div>
        </div>
        {/* Contacts Section */}
        <div className="contacts-page">
          <h2>Contacts</h2>
          <div className="content">
            <h3 className="contacts-header">Feel free to send me any inquiries or offers</h3>
            <p className="contacts-text">
              I am currently looking for employment as<br/>
              an intern or junior software engineer,<br/>
              although I am open to all offers.
            </p>
            <div className="buttons">
              <a href="https://github.com/sorryvol" className="button">Github</a>
              <a className="button">Resume</a>
              <a href="mailto: darcypower9@gmail.com" className="button">Email</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
