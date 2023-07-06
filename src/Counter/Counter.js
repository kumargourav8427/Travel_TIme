//State in Functional Component
import './Counter.css'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

function Counter() {
    const [data,setdata] = useState(0);
    function Updatedata (){
        setdata(data+1);

    }

    function decrese(){
        setdata(data-1);
        
    }

    function reset(){
        setdata(0);
    }

  return (
    <div className='m-5 counter'>
        <h1>COUNTER APP</h1>
      <h1 className='mt-4'>{data}</h1><br/>
      <Button onClick={Updatedata} className='m-3'
      >Increment </Button>
      <Button onClick={decrese} className='m-3'
      variant="danger">Decrement </Button>
      <Button onClick={reset} className='m-3'
      variant="secondary">Reset</Button>
    </div>
  )
}

export default Counter
