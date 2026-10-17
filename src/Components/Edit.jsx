import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FaUserEdit } from "react-icons/fa";
import { TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FaXmark } from "react-icons/fa6";

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

function Edit() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button style={{ color: '#171412' }} className='btn' onClick={handleOpen}><FaUserEdit />  Edit CV</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Resume Details
          </Typography>
          <Box id="modal-modal-description" sx={{ mt: 2 }}>
            {/* personal details */}
            <div>
              <h3>Personal Details</h3>
              <div className='row p-3'>
                <TextField id="standard-basic-fullname" label="Full name" variant="standard" />
                <TextField id="standard-basic-loc" label="Location" variant="standard" />
                <FormControl variant='standard'>
                  <InputLabel id="demo-simple-select-label">Choose Job Titile</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Job"
                  >
                    <MenuItem value={"Job"}>Job</MenuItem>
                  </Select>
                </FormControl>
              </div>
              </div>
              {/* contact details */}
              <div className='mt-3'>
                <h3>Contact Details</h3>
                <div className='row p-3'>
                  <TextField id="standard-basic-email" label="Email" variant="standard" />
                  <TextField id="standard-basic-contact" label="Contact" variant="standard" />
                  <TextField id="standard-basic-linkedin" label="Linkedin Link" variant="standard" />
                  <TextField id="standard-basic-github" label="Github Link" variant="standard" />
                </div>
              </div>
              {/* Educational details */}
              <div className='mt-3'>
                <h3>Educational Details</h3>
                <div className='row p-3'>
                  <TextField id="standard-basic-degree" label="Bachelor's Degree" variant="standard" />
                  <TextField id="standard-basic-college" label="University/College Name" variant="standard" />
                  <TextField id="standard-basic-year" label="Year of Graduation" variant="standard" />
                </div>
              </div>
              {/* Skills */}
              <div className='mt-3'>
                <h3>Skills</h3>
                <div className='d-flex p-3'>
                  <input type="text" placeholder='Add Skill' className='form-control' />
                  <button className='btn'>Add</button>
                </div>
                <h5>Added Skills : </h5>
                <div className='d-flex justify-content-between flex-wrap'>
                  <Button variant='contained'>Skill <FaXmark className='ms-3' /></Button>
              </div>
              </div>
              {/* summary */}
              <div className='mt-3'>
                <h3>Summary</h3>
                <div className='row p-3'>
                  <TextField id='summary' label='Summary' variant='standard'></TextField>
                </div>
              </div>
              {/* update button */}
              <button className='btn btn-primary mt-3'>Update CV</button>            
          </Box>
        </Box>
      </Modal>
    </div>
  )
}

export default Edit
