import React from 'react';
import { Route, BrowserRouter as Router } from "react-router-dom";
import Wen from "./components/Wen";
import Ti from "./components/Ti";
import Wenti from './components/Wenti';
import About from "./components/About";
import Education from "./components/Education";
import Skill from "./components/Skill";

import Header from "./components/Header";
// import './App.css';

function App() {
  return (
    <Router>
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
      <Route exact={true} path="/" component={About} />
      <Route  path="/about" component={About} />
      <Route path="/education" component={Education} />
      <Route path="/skill" component={Skill} />
      
      <Route path="/wen" component={Wen} />
      <Route path="/ti" component={Ti} />
      <Route path="/wenti" component={Wenti} />
    </div>
  </Router>
  );
}

export default App;
