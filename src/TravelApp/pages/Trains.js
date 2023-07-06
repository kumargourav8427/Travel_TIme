import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Trains() {
  return (
    <div>
              <section className='section section-1'>
                <div id='banner' className='py-5'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6 mx-auto py-5'>
                                <div className='banner-title bg-light p-2 text-center rounded '>
                                    <div className='text-bold'>
                                    <input type='radio' name="options"></input>
                                    <label className='p-1'>BOOK TRAIN TICKETS</label>
                                    <input type='radio' name="options"></input>
                                    <label className='p-1'>CHECK PNR STATUS</label>
                                    <input type='radio' name="options"></input>
                                    <label className='p-1'>LIVE TRAIN STATUS</label>
                                    </div>
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

export default Trains
