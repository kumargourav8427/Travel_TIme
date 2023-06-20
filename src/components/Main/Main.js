import React from 'react'

function Main() {
  return (
    <div>
      <div className='section'>
        <div className='top mb-3'>        
          <div>
            <input type='radio' className='m-2' name="select" />
            <label>One Way</label>
            <input type='radio' className='m-2' name="select" />
            <label>Round Trip</label>
            <input type='radio' className='m-2' name="select" />
            <label>Multi Way</label>
          </div>
          <div>
            <span>Book International and Domestic Flights</span>
          </div>
        </div>
        <div className='main-search'>
          <div className='searchbar'>
            <div> 
              <label>
              <span>From</span>
              <input className='p-3 m-2' />
              <p></p>
              </label>
            </div>
            <div> 
              <label>
              <span>To</span>
              <input className='p-3 m-2' />
              <p></p>
              </label>
            </div>
            <div> 
              <label>
              <span>Departure</span>
              <input className='p-3 m-2' />
              <p></p>
              </label>
            </div>
            <div> 
              <label>
              <span>Return</span>
              <input className='p-3 m-2' />
              <p></p>
              </label>
            </div>
          </div>
          <Button variant="primary" size="lg" type='submit' >SEARCH</Button>
        </div>
      </div>
    </div>
  )
}

export default Main
