
import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import ringimage from "../../assests/images/Home/ring.jpeg";
import stonimg from "../../assests/images/Home/stoneimage1.jpg";
import image from "../../assests/images/Home/earring-image1.jpg"

function Section8() {
  return (
    <div>
      <Box sx={{backgroundColor:"#F7F7F7", padding:"30px"}}>
        <Container>
            <Box>
                <Box sx={{fontSize:"36px",fontWeight:"600",textAlign:"start", position:"relative" ,'&::after':{
                    content:'""',
                    position:"absolute",
                    top:"52%",
                    left:"21%",
                    width:"84%",
                    border:"1px solid #818EA0", }}}>Latest Article</Box>

                    <Box>
                    <Grid container padding={"20px"} rowSpacing={2} columnSpacing={{ xs: 3, sm: 3, md: 3 }}>
                            <Grid item xs={3}>
                                <Box sx={{width:"93%",height:"106%", backgroundColor:"#fff",  borderRadius:"10px", padding:"10px", textAlign:"start", "&:hover" :{
                                boxShadow:"1px 10px 10px #000"
                            }}}>
                                    <Typography>Hello world!</Typography>
                                    <Typography sx={{color:"gray", fontSize:"14px", margin:"4px 0"}}>April 28, 2023  1 Comment</Typography>

                                </Box>
                            </Grid>

                            <Grid item xs={3}>
                                <Box sx={{borderRadius:"10px",textAlign:"start",height:"110%", backgroundColor:"#FFF", "&:hover" :{
                                boxShadow:"1px 10px 10px #000"
                            }}}>
                                    <img src={ringimage} alt="" style={{width:"100%", borderRadius:"10px 10px 0 0"}}/>
                                    <Box sx={{padding:"10px"}}>
                                        <Typography sx={{fontSize:"15px", fontWeight:"600"}}>Matching Jewellery Sets with your Outwear</Typography>
                                        <Typography sx={{color:"gray", fontSize:"13px", margin:"4px 0"}}>August 16, 2018  No Comments</Typography>
                                    </Box>
                                </Box>
                            </Grid>

                            <Grid item xs={3}>
                            <Box sx={{borderRadius:"10px",textAlign:"start",height:"110%", backgroundColor:"#FFF", "&:hover" :{
                                boxShadow:"1px 10px 10px #000"
                            }}}>
                                    <img src={stonimg} alt="" style={{width:"100%", borderRadius:"10px 10px 0 0"}}/>
                                    <Box sx={{padding:"10px"}}>
                                        <Typography sx={{fontSize:"15px", fontWeight:"600"}}>New Retro Collection of Pendants and Ring sets</Typography>
                                        <Typography sx={{color:"gray", fontSize:"13px", margin:"4px 0"}}>August 16, 2018  No Comments</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={3}>
                            <Box sx={{borderRadius:"10px",textAlign:"start",height:"110%", backgroundColor:"#FFF", "&:hover" :{
                                boxShadow:"1px 10px 10px #000"
                            }}}>
                                    <img src={image} alt="" style={{width:"100%", borderRadius:"10px 10px 0 0"}}/>
                                    <Box sx={{padding:"10px"}}>
                                        <Typography sx={{fontSize:"15px", fontWeight:"600"}}>Ruby on Rose Accessories and Blue Gemstones</Typography>
                                        <Typography sx={{color:"gray", fontSize:"13px", margin:"4px 0"}}>August 16, 2018  No Comments</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                    </Grid>
                    </Box>
            </Box>
        </Container>
      </Box>
    </div>
  )
}

export default Section8
