import { Button, Divider } from '@mui/material'
import React from 'react'

function Preview() {
  return (
    <div className='w-100'>
      <h2>Fullname</h2>
      <p className='fs-5 lh-1'>Phone:</p>
      <p className='fs-5 lh-1'>Email:</p>
      <p className='fs-5 lh-1'>Linkedin:</p>
      <p className='fs-5 lh-1'>Github:</p>
      <p className='fs-5 lh-1'>Location:</p>
      <Divider className='bg-dark mb-3'/>
      <h2>Professional Summary</h2>
      <p>Summary</p>
      <Divider className='bg-dark mb-3'/>
      <h2>Technical Skills</h2>
      <span><Button variant='text' className='bg-dark text-light rounded'>Skill</Button></span>
      <Divider className='bg-dark mt-3'/>
      <p>Bachelor's Degree in:</p>
      <p>University/College Name:</p>
      <p>Year of Graduation:</p>
    </div>
  )
}

export default Preview
Preview