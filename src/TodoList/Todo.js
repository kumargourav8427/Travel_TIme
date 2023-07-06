import React from 'react'
import './Todo.css'
import { useState } from 'react'
import { Button } from 'react-bootstrap';

function Todo() {
  const [name, setname] = useState("");
  const [preview, setpreview] = useState([]);

  function handleonChange(event) {
    setname(event.target.value)

  }

  function handler() {
    setpreview([...preview,name]);
    // console.log(preview);
  }

  function cancel(text) {
    const can = preview.filter((name) => { return name !== text })
    setpreview(can);
  }

  function cancelAll() {
    setpreview([])
  }
  return (
    <div className='container-md mt-5 main-todo'>
      <h1 style={{backgroundColor:'black',color:'white'}}>TODO LIST</h1>
      <input type='text' value={name} placeholder='Add List'
        onChange={handleonChange} className='form-control mt-4'/>
        <br></br>
      <Button type="button" onClick={handler} className='m-3' >Add</Button>
      <Button type="button" variant="danger" onClick={cancelAll} className='canallbtn m-2'>Cancel All</Button>

      <h2 style={{backgroundColor:'black',color:'white'}}>Added List is Below :-</h2>
        {
          preview.map((name, index) =>
            <div className='list'>
              <li key={index}>
                <div className='listdata'>{name}</div>
              </li>
              <button type="button" id='' className='m-2' onClick={() =>{cancel(name)}}>Cancel</button>
            </div>
      )}

  
    </div>
  );
}

export default Todo