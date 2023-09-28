import React from 'react'
import './footer.css'
import { BsFacebook, BsTwitter } from 'react-icons/bs'
import { FaRegCopyright } from 'react-icons/fa'

function Fotter() {
  return (
    <>

        <section className='footer'>
          <div className=''>
            <BsFacebook style={{ marginRight: "20px" }}></BsFacebook>
            <BsTwitter></BsTwitter>
          </div>
          <div className=''>
            <h5><span><FaRegCopyright /></span><span className='content'>2023 MAKEMYTRIP PVT. LTD.</span>
              <br></br><span className='content'>Country India USA UAE</span></h5>
          </div>
        </section>
    </>
  )
}

export default Fotter
