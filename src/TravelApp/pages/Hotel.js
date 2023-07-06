import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Hotel() {
  return (
    <div>
      <section className='section section-1'>
                <div id='banner' className='py-5'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6 mx-auto py-5'>
                                <div className='banner-title bg-light p-3 text-center rounded '>
                                    <p className='py-1'>Book Domestic and International Property Online. To list your property 
                                    <span><Link to='#'> click here</Link></span></p>
                                    <div className='text-bold'>
                                    <input type='radio' name="options"></input>
                                    <label className='px-2'>Upto 4 Rooms </label>
                                    <input type='radio' name="options"></input>
                                    <label className='px-2'>Group Deals</label>
                                    </div>
                                    <div>
                                        <label>From</label>
                                        <input type='text' placeholder='From' className='form-control' />
                                        <label>To</label>
                                        <input type='text' placeholder='To' className='form-control' />
                                    </div>
                                    <Button className='btn-primary my-3 btn-lg'>SEARCH</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

    </div>
  )
}

export default Hotel
