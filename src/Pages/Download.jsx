import React, { useEffect, useState } from 'react'
import { data, Link } from 'react-router-dom'
import { FaArrowLeft } from "react-icons/fa6";
import { getAllDownloadResumeApi } from '../service/apiService';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend)


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  maxHeight: '80vh',
  overflowY: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Download() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [downloadList, setDownloadList] = useState([])
  const [label,setLabel] = useState([])
  const [value,setValue] = useState([])
  const colorPallete = ['#f7d897','#a8e3e8','#032c60','#8c5747','#1e81b0','#963017']
  const backgroundColor = label.map((value,index)=>colorPallete[index%colorPallete.length])
  
  // console.log(downloadList);


  const data = {
    labels:label,
    datasets:[
      {
        label : 'Download Count',
        data : value,
        backgroundColor
      }
    ]
  }


  useEffect(() => {
    getAllDownloads()
  }, [])

  const getAllDownloads = async () => {
    const result = await getAllDownloadResumeApi()
    setDownloadList(result.data)
    console.log(result.data);
    
    const output = {}
    result.data.forEach(item=>{
      const currentJob = item.jobrole
      if(currentJob in output){
        output[currentJob] += 1
      }else{
        output[currentJob] = 1
      }
    })
    setLabel(Object.keys(output))
    setValue(Object.values(output))
  }

  return (
    <div className='container my-5'>
      <div className='d-flex justify-content-between align-items-center'>
        <h3>Downloaded Resume History</h3>
        <Button className='btn text-light' style={{ backgroundColor: "#171412" }} onClick={handleOpen}>View in chart</Button>
      </div>
      <p className='mt-3 fs-3 fw-semibold text-primary'>Total downloaded resumes from oue site is <span className='fw-bolder text-danger'>{downloadList.length}</span></p>
      <div className='row my-5'>
        {/* Duplicate the row according to the resume count */}
        {
          downloadList?.length > 0 ?
            downloadList?.map(resume => (
              <div className='col-lg-4'>
                <div style={{ height: '300px' }} className='rounded shadow p-3'>
                  <h6>Review at : {resume?.timeStamp} </h6>
                  <div className='mt-3 text-center'>
                    <Link to={`/resume/${resume?.resumeId}`}><img className='w-50' style={{ height: "300px" }} src={resume?.resumeImg} alt="resume image" /></Link>
                  </div>
                </div>
              </div>
            ))
            :
            <div>No resumes downloaded yet</div>
        }

      </div>
      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ backgroundColor: "#171412", width: "100%", height: "50px", color: "white" }}>
            CV Count by Job role
          </Typography>
          <div className='text-center'>
            <Pie data={data}/>
          </div>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            This chart provides an overview of the number of cv downloads associated with different jobs on the website. it heilps visualize the demand and engagement for CV's across various career categories
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default Download
