import { React, useState } from 'react'
import { Link } from 'react-router-dom'

import Login from '../Authentication/Login'

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

import { UiRadiosGrid } from 'react-bootstrap-icons'
import { PersonCircle } from 'react-bootstrap-icons'
import { PersonPlusFill } from 'react-bootstrap-icons'

export default function Header() {
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Calendar</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <NavDropdown title={ <UiRadiosGrid color="#f2f2f2" /> } id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Link to="/"><PersonPlusFill color="#f2f2f2" /></Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-center" id="basic-navbar-nav2">
            <Nav>
              <Nav.Link as={Link} to="/" >Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav2">
            <Nav>
              <Nav.Link as={Link} to="/" >Home</Nav.Link>
              <Login />
              <Nav.Link as={Link} to="/Users" >Users</Nav.Link>
              <NavDropdown title={ <PersonCircle color="#f2f2f2" /> } id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}