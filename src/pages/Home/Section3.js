
import React from 'react'
import { Typography, Grid, Container, Box, Button } from '@mui/material';
import img1 from "../../assests/images/Home/ring.jpeg";
import img2 from '../../assests/images/Home/ring2.jpeg';

function Section3() {
  return (
    <div>
      <Box>
        <Container >
        <Grid container spacing={10} sx={{padding:"40px 0"}}>
            <Grid item xs={6}>
                <Box sx={{position:"relative"}}>
                    <img src={img1} alt="" style={{width:"580px", height:"250px",}}/>
                    <Box sx={{position:"absolute" , top:"62px", left:"34px", color:"#FFF", textAlign:"start"}}>
                        <Typography sx={{fontSize:"24px", marginBottom:"10px"}}>Diamond Ring</Typography>
                        <Typography sx={{marginBottom:"24px" , fontSize:"14px"}}>Don't miss the last opportunity</Typography>
                        <Button sx={{backgroundColor:"#CA9D7A", color:"#FFF", fontSize:"12px", padding:"10px 8px","&:hover" :{
                            color:"#CA9D7A"
                        }}}>Learn More</Button>
                    </Box>
                </Box>
            </Grid>

            <Grid item xs={6}>
                <Box sx={{position:"relative"}}>
                    <img src={img2} alt="" style={{width:"580px", height:"250px"}}/>
                    <Box sx={{position:"absolute" , top:"62px", left:"34px", color:"#FFF", textAlign:"start"}}>
                        <Typography sx={{fontSize:"24px", marginBottom:"10px"}}>Diamond Ring</Typography>
                        <Typography sx={{marginBottom:"24px" , fontSize:"14px"}}>Don't miss the last opportunity</Typography>
                        <Button sx={{backgroundColor:"#CA9D7A", color:"#FFF", fontSize:"12px", padding:"10px 8px","&:hover" :{
                            color:"#CA9D7A"
                        }}}>Learn More</Button>
                    </Box>
                </Box>
            </Grid>
           
        </Grid>
        </Container>

      </Box>
    </div>
  )
}

export default Section3
