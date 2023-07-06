import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Buses() {
  return (
    <div>
      <section className='section section-1'>
                <div id='banner' className='py-5'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6 mx-auto py-5'>
                                <div className='banner-title bg-light p-3 text-center rounded '>
                                    <p className='py-1'>Bus Ticket Booking.
                                    <span><Link to='#'> Travelling with a group? Hire a bus.</Link></span></p>
                                    <div>
                                        <label>From</label>
                                        <input type='text' placeholder='From' className='form-control' />
                                        <label>To</label>
                                        <input type='text' placeholder='To' className='form-control' />
                                    </div>
                                    <Button className='btn-primary my-3'>Search</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Buses
