import React from 'react'
import { Box, Grid, Container, Typography } from '@mui/material'
import woman from '../assets/images/aboutpage/woman-in-black.jpg'
import signature from '../assets/images/aboutpage/sign.png'
import { Height } from '@mui/icons-material'

function Works() {
  return (
    <Box  sx={{marginTop:"40px"}}>
    <Container>
    <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
    <Grid item xs={12} lg={5.8} md={5.8} sm={12} >
      <Box>
        <img src={woman} alt="" />
      </Box>
    </Grid>
    <Grid item xs={12} lg ={5.8} md={5.8} sx={{ marginLeft:{md:"10px"}}} sm={12}>
      <Box sx={{textAlign:"start"}}>
        <Typography sx={{color:"#ca9d7a"}}>Message from founder</Typography>
        <Typography variant='h3'fontWeight={600} color={"#132a36"}>If you can laugh together, you can work together.</Typography>
        <Typography sx={{padding:"10px",color:"gray"}}>Morbi fames lacus platea aptent ipsum at vulputate eros cubilia facilisi. Maecenas nullam fames cursus quis quam. Quis tempus arcu dignissim sagittis lobortis dapibus cursus. Eu gravida tortor mi platea accumsan curae rutrum pede.</Typography>
    
    <Box >
    <img src={signature} alt="" style={{Height:"300px",width:"300px"}} />
    <Typography paddingTop={"10px"} fontWeight={"600"}>
    Joseph Armstrong
    </Typography>
    <Typography color={"gray"}>Founder</Typography>
    </Box>
     
      </Box>
    </Grid>
    
  </Grid>
    </Container>
  </Box>
  )
}

export default Works
