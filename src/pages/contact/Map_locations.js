

import { Padding } from '@mui/icons-material'
import { Box } from '@mui/material'
import React from 'react'

function Map_locations() {
  return (
    <Box sx={{marginTop:"80px"}}>
   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.58518529957!2d-0.2664028309972179!3d51.52852620421266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sin!4v1721285114858!5m2!1sen!2sin" width="99.5%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </Box>
  )
}

export default Map_locations
