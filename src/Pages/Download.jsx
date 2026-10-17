import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa6";


function Download() {
  return (
    <div className='container my-5'>
      <div className='d-flex justify-content-between align-items-center'>
        <h3>Downloaded Resume History</h3>
        <Link to={'/resume-details'}><FaArrowLeft /> Back</Link>
      </div>
      <div className='row my-5'>
      {/* Duplicate the row according to the resume count */}
        <div className='col-lg-4'>
          <div style={{height:'300px'}} className='rounded shadow p-3'>
            <h6>Review at : Time stamp</h6>
            <div className='mt-3 text-center'>
              <Link><img className='w-50' src="https://template.canva.com/EAGIzZzlHCg/3/0/1131w-krkiJPv9338.jpg" alt="resume image" /></Link> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Download
