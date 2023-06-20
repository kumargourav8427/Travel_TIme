import React from 'react'
import city from './city.jpg'
import './navbar.css'
import { Button } from 'react-bootstrap'
import {MdFlight} from 'react-icons/md'
import {RiHotelFill} from 'react-icons/ri'


function Navbar() {
  return (
    <div>
      <img src={city} alt='cityimage' className='backimg' />
      <div className='display-middle'>
        <nav>
          <ul className='nav nav-bar'>
            <li><div className='nav'><a href='#'><span><MdFlight/></span>
            <span>Flight</span></a></div></li>
            <li><div className='nav'><a href='#'><span><RiHotelFill/></span>
            <span>Hotels</span></a></div></li>
            <li><div className='nav'><a href='#'><span><MdFlight/></span>
            <span>HomeStay</span></a></div></li>
            <li><div className='nav'><a href='#'><span><MdFlight/></span>
            <span>Holday Packages</span></a></div></li>
            <li><div className='nav'><a href='#'><span>Trains </span></a></div></li>
            <li><div className='nav'><a href='#'><span>Buses </span></a></div></li>
            <li><div className='nav'><a href='#'><span>Cabs </span></a></div></li>
            <li><div className='nav'><a href='#'><span>Forex</span></a></div></li>
            <li><div className='nav'><a href='#'><span>Charter Flight</span></a></div></li>
          </ul>
        </nav>
        <div>
          <h3>Travel the world with us</h3>
          <div className='inputfield'>
            <div >
              <label>From</label><br />
              <input type='text' />
            </div>
            <div>
              <label>To</label><br/>
              <input type='text' />
            </div>
          </div>
          <div>
            <p>
              <Button type='button' className='btn1'>Search and Find Date</Button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
