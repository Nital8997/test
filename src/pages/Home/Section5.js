import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react';
import image from '../../assests/images/Home/model-1.png'


function Section5() {
  return (
    <div>
      <Box>
            <Box>
                {/* <img src={image} alt="" style={{width:"100%"}}/> */}
              
              <Grid sx={{width:"50%", textAlign:"start", padding:"10px", backgroundImage:`url(${image})`, backgroundSize:"cover",backgroundPosition:"center", width:"100%", height:"500px", display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <Container>
                      <Box sx={{width:"50%",width:{sm:"100%" , lg:"50%", md:"50%"}}}>
                      <Typography sx={{fontSize:"45px", fontWeight:"700", lineHeight:"60px", marginBottom:"10px", letterSpacing:"0 !important"}}>
                    For the best experience shopping on your mobile phone.
                    </Typography>
                    <Typography sx={{color:"gray"}}>
                    Imperdiet cursus a eu in euismod conubia nibh. Odio eu massa neque elit commodo arcu. Mi consequat ante posuere aenean curabitur.
                    </Typography>
                      </Box>
                    </Container>
                </Grid>
            
            </Box>

      </Box>
    </div>
  )
}

export default Section5
