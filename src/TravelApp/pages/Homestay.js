import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
var city = require('../city.json')


function Homestay() {
  const [value,setValue]=useState('')
  const From = (e) => {
    setValue(e.target.value)
  }
  const onSearch = (serachTerm) => {
    setValue(serachTerm)
    console.log('search', serachTerm);
  }

  return (
    <div>
      <section className='section section-1'>
                <div id='banner' className='py-5'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6 mx-auto py-5'>
                                <div className='banner-title bg-light p-3 text-center rounded '>
                                  <p className='text-bold'>Book your ideal Homestay - Villas, Apartments & more.</p>
                                    <div>
                                        <label className='p-2'>CITY, PROPERTY NAME OR LOCATION</label>
                                        <input type='text' placeholder='Search Cities' className='form-control' value={value} onChange={From}/>
                                    </div>
                                    <Button className='btn-primary my-3' onClick={onSearch}>Search</Button>
                                    {
                    city.filter(item => {
                      const serachTerm = value.toLowerCase();
                      const Name = item.firstName.toLowerCase();
                      return serachTerm && Name.startsWith(serachTerm) && Name !== serachTerm
                    }).slice(0,10)
                      .map((item, id) => (
                        <li className='dropdown-row' onClick={() => onSearch(item.firstName)} key={id} >
                          {item.firstName}
                        </li>
                      ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


    </div>
  )
}

export default Homestay
