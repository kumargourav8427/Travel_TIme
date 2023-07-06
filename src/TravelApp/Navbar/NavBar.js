import React from 'react'
import './navbar.css'
import logo from './logo.jpg'
import { MdFlight } from 'react-icons/md'
import { FaHotel, FaTrain, FaBus } from 'react-icons/fa'
import { LuBus } from 'react-icons/lu'
import { ImHome } from 'react-icons/im'
import { RiArrowDownSLine } from 'react-icons/ri'

import myicon from './myicon.PNG'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="/"><img src={logo} alt='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 px-5"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink to="/" class="nav-link active">
              <span className='nav-icons'><MdFlight /></span>Flight</NavLink>
            <NavLink to="/hotels" class="nav-link active">
              <span className='nav-icons'><FaHotel /></span>Hotels</NavLink>
            <NavLink to="/trains" class="nav-link active">
              <span className='nav-icons'><FaTrain /></span>Trains</NavLink>
            <NavLink to="/buses" class="nav-link active">
              <span className='nav-icons'><FaBus /></span>Buses</NavLink>
            <NavLink to="/cabs" class="nav-link active">
              <span className='nav-icons'><LuBus /></span>Cabs</NavLink>
            <NavLink to="/homestays" class="nav-link active">
              <span className='nav-icons'><ImHome /></span>HomeStays</NavLink>
          </Nav>
          <Form className="d-flex login-and-create">
            <div className='mx-2'>
              <span>Country</span><br />
              <select className=''>
                <option>Select<RiArrowDownSLine /></option>
                <option>IND</option>
                <option>ASE</option>
                <option>UAE</option>
              </select>
            </div>

            <div className='mx-2'>
              <span>Language</span><br />
              <select className='select'>
                <option>Select<RiArrowDownSLine /></option>
                <option>English</option>
                <option>Hindi</option>
                <option>Punjabi</option>
              </select>
            </div>
            
            <div>
              <Button variant="outline-success">
                <img src={myicon} alt='' />
                <span>Login and <br />Create Account</span>
              </Button>
            </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar >
  );
}

export default NavBar;