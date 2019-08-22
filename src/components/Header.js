import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Navbar, Nav } from "react-bootstrap";

export default function Header() {
  return (
    <Row>
      <NewNavbar fixed="top" bg="light" variant="light" expand="lg">
        <Navbar.Brand href="/maxresume">
          <strong>Max</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="">
            <NavLink className="navlink" to="/about">
              AboutMe
            </NavLink>
            <NavLink className="navlink" to="/education">
              Education
            </NavLink>
            <NavLink className="navlink" to="/skill">
              Skill
            </NavLink>
            <NavLink className="navlink" to="/weather">
              WeatherApp
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </NewNavbar>
    </Row>
  );
}

const NewNavbar = styled(Navbar)`
  margin: 0 auto;

  max-width: 1032px;
  background-color: #ffffff !important;
`;
const Row = styled.div`
  background-color: #ffffff !important;
  width: 100%;
  position: fixed;
  z-index: 1030;
  height: 56px;
`;
