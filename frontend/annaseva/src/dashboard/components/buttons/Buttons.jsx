import React from 'react'
import './Buttons.css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Buttons = () => {
  return (
    <Stack spacing={2} direction="row" className='btn-button'>
      
      <Button variant="contained">Want to donate?</Button>
      <Button variant="contained">Get Food</Button>
      
    </Stack>
  )
}

export default Buttons
