import React from "react";
import { NavLink} from "react-router-dom";
import styled from 'styled-components';
import { Navbar,Nav } from 'react-bootstrap';

export default function Header() {
    
  // <li>
  //             <Link className="navlink" to="/about">About</Link>
  //             </li>
  //             <li>
  //             <Link className="navlink" to="/education">Education</Link>
  //             </li>
  //             <li>
  //             <Link className="navlink"  to="/skill">Skill</Link>
  //             </li>
    return (
        <Row> 
      <Navbar bg="light" variant="light">

      
      <Navbar.Brand href="/maxresume">Max</Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
      <Nav className="">
      <NavLink className="navlink" to="/maxresume/about">AboutMe</NavLink>
      <NavLink className="navlink" to="/maxresume/education">Education</NavLink>
      <NavLink className="navlink"  to="/maxresume/skill">Skill</NavLink>
      <NavLink className="navlink"  to="/maxresume/skill">Weather</NavLink>
      
        {/* <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link> */}
      </Nav>
      </Navbar.Collapse>
      
    </Navbar></Row>
    );
  }
  

  const Row = styled.div`
  margin:0 auto;
    justify-content: center ;
    max-width: 1032px;
;
`;

// const Row = styled.div`
//  color: rgba(0,0,0,.5); 
//     text-decoration: none;
//     padding-right: .5rem;
//     padding-left: .5rem;
// ;
// `;


  