import React from 'react'
import { IoDocumentText } from "react-icons/io5";
import { FaFileDownload } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Resume() {
  return (
    <div>
      <div style={{height:"100vh"}}>
      <h1 className='text-center mt-5 mb-5'>Create an ATS friendly Resume in Minutes with AI </h1>
      <div className='container'>
        <div className='row'>
        <div className="col-lg-1"></div>
        <div className="col-lg-4 rounded shadow text-center p-5">
          <IoDocumentText className='text-primary fs-1 mb-3'/>
          <h4>Add Your Details</h4>
          <p>Our AI will generate Skills & Summary</p>
          <h5>Step 1</h5>
        </div>
        <div className="col-lg-2"></div>
        <div className="col-lg-4 rounded shadow text-center p-5">
          <FaFileDownload className='text-danger fs-1 mb-3'/>
          <h4>Download Your Resume</h4>
          <p>Download PDF and Start applying</p>
          <h5>Step 2</h5>
        </div>
        <div className="col-lg-1"></div>
      </div>
      </div>
      <div className='text-center mt-5'>
      <Link to={'/resume-details'} style={{backgroundColor:'#171412'}} className='btn text-light mt-5 rounded'>Let's Start</Link>
      </div>
    </div>
    </div>
  )
}

export default Resume
