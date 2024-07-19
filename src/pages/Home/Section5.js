import { Box, Container, Typography } from '@mui/material'
import React from 'react';
import image from '../../assests/images/Home/s4.png'
import { Translate } from '@mui/icons-material';

function Section5() {
  return (
    <div>
      <Box>
            <Box>
                <img src={image} alt="" style={{width:"100%"}}/>
              <Container>
              <Box sx={{width:"50%", textAlign:"start", padding:"10px",transform:"translateY(-165%)"}}>
                    <Typography sx={{fontSize:"45px", fontWeight:"700", lineHeight:"60px", marginBottom:"10px", letterSpacing:"0 !important"}}>
                    For the best experience shopping on your mobile phone.
                    </Typography>
                    <Typography sx={{color:"gray"}}>
                    Imperdiet cursus a eu in euismod conubia nibh. Odio eu massa neque elit commodo arcu. Mi consequat ante posuere aenean curabitur.
                    </Typography>
                </Box>
              </Container>
            </Box>

      </Box>
    </div>
  )
}

export default Section5
