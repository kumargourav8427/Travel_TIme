import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import './pages.css'
function Flight() {
  var city = require('../city.json')
  const [value, setValue] = useState('');
  const [value1, setValue1] = useState('');

  const From = (e) => {
    setValue(e.target.value)
  }
  const To = (e) => {
    setValue1(e.target.value)
  }

  const onSearch = (serachTerm) => {
    setValue(serachTerm)
    console.log('search', serachTerm);
  }
  const onSearch1 = (serachTerm) => {
    setValue1(serachTerm)
    console.log('search', serachTerm);
  }

  return (
    <div>
      <section className='section section-1'>
        <div id='banner' className='py-5 '>
          <div className='container '>
            <div className='row '>
              <div className='col-md-6 mx-auto flight-container'>
                <div className='banner-title bg-primary p-3 text-center rounded '>
                  <input type='radio' name="options" ></input>
                  <label className='p-2'>One Way</label>
                  <input type='radio' name="options"></input>
                  <label className='p-2'>Round Trip</label>
                  <input type='radio' name="options"></input>
                  <label className='p-2'>Multi Way</label>
                  <h2 className='title '> Travel the world with us</h2>
                  <div>
                    <label>From</label>
                    <input type='text' placeholder='From' className='form-control' value={value} onChange={From} />
                    <label>To</label>
                    <input type='text' placeholder='To' className='form-control' value={value1} onChange={To} />
                  </div>
                  <Button className='btn-primary btn-lg my-3' onClick={() => onSearch(value)}>SEARCH</Button>
                  {
                    city.filter(item => {
                      const serachTerm = value.toLowerCase();
                      const Name = item.firstName.toLowerCase();
                      return serachTerm && Name.startsWith(serachTerm) && Name !== serachTerm
                    })
                      .map((item, id) => (
                        <li onClick={() => onSearch(item.firstName)} key={id} className='dropdown-row'>
                          {item.firstName}
                        </li>
                      ))}
                  {
                    city.filter(item1 => {
                      const serachTerm = value1.toLowerCase();
                      const Name = item1.firstName.toLowerCase();
                      return serachTerm && Name.startsWith(serachTerm) && Name !== serachTerm
                    })
                      .map((item1, id1) => (
                        <li onClick={() => onSearch1(item1.firstName)} key={id1} className='dropdown-row'>
                          {item1.firstName}
                        </li>
                      ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='section py-3'>
        <div className='container section-2'>
          <div className='row  py-3'>
            <div className='col-md'>Where2Go</div>
            <div className='col-md'>Trip Money</div>
            <div className='col-md'>Explore International Flights</div>
            <div className='col-md'>Mice</div>
            <div className='col-md'>Gift Cards</div>
          </div>
        </div>
      </section>


    </div>
  )
}

export default Flight
