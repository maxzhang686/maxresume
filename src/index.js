// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';


// ReactDOM.render(<App />, document.getElementById('root'));

import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Wen from "./components/Wen";
import Ti from "./components/Ti";
import Wenti from './components/Wenti';
import About from "./components/About";
import Education from "./components/Education";
import Skill from "./components/Skill";
import App from "./App";
import Header from "./components/Header";




const routing = (
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
      {/* <Route path="/" component={App} /> */}
      <Route exact path="/wen" component={Wen} />

      <Route exact path="/about" component={About} />
      <Route exact path="/education" component={Education} />
      <Route exact path="/skill" component={Skill} />

      <Route path="/ti" component={Ti} />
      <Route path="/wenti" component={Wenti} />
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));