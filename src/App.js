import React from 'react';
import { HashRouter, Route, BrowserRouter as Router } from "react-router-dom";
import Wen from "./components/Wen";
import Ti from "./components/Ti";
import Wenti from './components/Wenti';
import About from "./components/About";
import Education from "./components/Education";
import Skill from "./components/Skill";

import Header from "./components/Header";

import './components/main.css';
import styled from 'styled-components';


// import './App.css';

function App() {
  return (
    <HashRouter>
    {/* <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/wen">⽂</Link>
      </li>
      <li>
      <Link to="/ti">体</Link>
      </li>
      <li>
      <Link to="/about">About</Link>
      </li>
      <li>
      <Link to="/education">Education</Link>
      </li>
      <li>
      <Link to="/skill">Skill</Link>
      </li>
    </ul> */}

     <Header>

    </Header>
 
    <div>
      {/* <Route exact={true} path="/maxresume" component={Home} />
      <Route  path="/maxresume/about" component={About} />
      <Route path="/maxresume/education" component={Education} />
      <Route path="/maxresume/skill" component={Skill} /> */}

      <Route exact={true} path="/" component={Home} />
      <Route  path="/about" component={About} />
      <Route path="/education" component={Education} />
      <Route path="/skill" component={Skill} />


      <Route path="/wen" component={Wen} />
      <Route path="/ti" component={Ti} />
      <Route path="/wenti" component={Wenti} />
    </div>
   

  </HashRouter>
  );
}


function Home() {
  return (
  
    <div id="about">

    <div class="pt-page">
      <Containerfluid>
        <Lefttop>
          <Photo>
          <LocImg src={'./img/photo.jpg'}/>
          </Photo>
        </Lefttop>
        <Righttop>
        <h1 class="text-center">
          Max Zhang
        </h1> 
        </Righttop>
      </Containerfluid> 

      <Containerfluidbtm>
        <Leftbtm>
        <div class="about-me">
          <div class="block-title">
            <h3>About <span>Me</span></h3>
          </div>
            <p>
            I graduated in 2016 from University of Canberra. I am equipped with essential professional skills to commence my career.
            </p>
            <p>
            I am currently looking for graduate program, junior developer opportunity or a parttime where I can strengthen my skills and begin my career. 
            During the university study and work, I am proficient using <strong>HTML, CSS, React.jS, GIT</strong> and I am learning <strong>Node.js, Docker, MongoDB</strong>  by myself recently.
            </p>  
            <p>
            I want to emerge as a successful, true professional through my 'Can Do’ attitude, hard work, confidence personality, high motivation & always willing to work.
            </p>
        </div>
        </Leftbtm>
        <Rightbtm>
          <div class="info"> 
            <ul class="info-list">
                  {/* <!-- <li><span class="title">Age</span><span class="value">27</span></li> --> */}
                  <li><span class="title">Residence</span><span class="value">Australia Permanent Resident</span></li>
                  <li><span class="title">Address</span><span class="value">10/1 Anthony Rolfe ave, Canberra</span></li>
                  <li><span class="title">e-mail</span><span class="value"><a href="hulu0324@outlook.com">hulu0324@outlook.com</a></span></li>
                  <li><span class="title">Phone</span><span class="value">0404 500 260</span></li>
            </ul>
          </div>

        </Rightbtm>

      </Containerfluidbtm>

    </div>
        
  </div>

  );
}

export default App;



const Containerfluid = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    display:flex;
    flex-direction:row ;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    /* background-color:#ffffff3d; */
`;
const Lefttop = styled.div`
    flex:1;
    margin-right: 15px;
    margin-left: 15px;
    padding-right: 15px;
    padding-left: 15px;
    min-width:200px;
`;

const Righttop = styled.div`
    flex:2;
    margin-right: 15px;
    margin-left: 15px;
    padding-right: 15px;
    padding-left: 15px;
    
`;

const Photo = styled.div`
    max-width: 180px;
    margin: 0 auto;
`;

const LocImg = styled.img`
    max-width: 100%;
    height: auto;
    border: 0;
    margin: 0 auto;
`;

const Leftbtm = styled.div`
    margin-right: 15px;
    margin-left: 15px;
    padding-right: 15px;
    padding-left: 15px;
    flex:1;
`;

const Rightbtm = styled.div`
    margin-right: 15px;
    margin-left: 15px;
    padding-right: 15px;
    padding-left: 15px;
    height:100%;
    flex:1;
`;

const Containerfluidbtm = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    display:flex;
    flex-direction: row ;
    justify-content:center;
    align-items:flex-start;
    flex-wrap:wrap;
    padding-top:50px;
    /* background-color:#ffffff3d; */
`;