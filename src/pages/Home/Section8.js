import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import ringimage from "../../assets/images/Home/diamondring.png";
import stonimg from "../../assets/images/Home/stone2.png";
import image from "../../assets/images/Home/silverearring.png"
import { Image } from '@mui/icons-material';

function Section8() {
  return (
    <div>
      <Box sx={{backgroundColor:"#F7F7F7", padding:"30px"}}>
        <Container>
            <Box>
                <Box sx={{fontSize:"36px",fontWeight:"600",textAlign:"start", }}>
                <Divider sx={{ borderColor: "grey.500" }}>
                    <Typography
                      variant="h4"
                      component="span"
                      sx={{ color: "#000", px: 2, fontWeight: "600" }}
                    >
                       Latest Article
                    </Typography>
                  </Divider>
               </Box>

                    <Box>
                    <Grid container padding={"20px"} rowSpacing={2} columnSpacing={{ xs: 3, sm: 3, md: 3, lg: 3 }}>
                            <Grid item xs={12} sm={12} lg={3} md={6}>
                                <Box sx={{width:"92%", backgroundColor:"#fff",  borderRadius:"10px", padding:"10px", textAlign:"start", "&:hover" :{
                                boxShadow:"1px 1px 5px gray"
                            }, height:{lg:"316px", md:"320px",sm:"auto",xs:"auto"},width:{lg:"92%", md:"91%"}}}>
                                    <Typography>Hello world!</Typography>
                                    <Typography sx={{color:"gray", fontSize:"14px", margin:"4px 0"}}>April 28, 2023  1 Comment</Typography>

                                </Box>
                            </Grid>
                            {/* ==========================1st==================== */}
                            <Grid item xs={12} sm={12} lg={3} md={6} >
                                <Box sx={{borderRadius:"10px",textAlign:"start",height:"336px", backgroundColor:"#FFF", "&:hover" :{
                                boxShadow:"1px 1px 5px gray"
                            }, height:{md:"340px", sm:"450px", xs:"360px"}}}>
                                    <img src={ringimage} alt="" style={{width:"99%",borderRadius:"10px 10px 0 0"}}/>
                                    <Box sx={{padding:"10px"}}>
                                        <Typography sx={{fontSize:"15px", fontWeight:"600"}}>Matching Jewellery Sets with your Outwear</Typography>
                                        <Typography sx={{color:"gray", fontSize:"13px", margin:"4px 0", paddingBottom:"10px"}}>August 16, 2018  No Comments</Typography>
                                    </Box>
                                </Box>
                            </Grid>
{/* ============================================2nd=================== */}
                            <Grid item xs={12} sm={12} lg={3} md={6} >
                            <Box sx={{borderRadius:"10px",textAlign:"start",height:"336px", backgroundColor:"#FFF", "&:hover" :{
                                boxShadow:"1px 1px 5px gray"
                            }, height:{md:"340px", sm:"500px", xs:"360px"}}}>
                                    <img src={stonimg} alt="" style={{width:"99%",borderRadius:"10px 10px 0 0"}}/>
                                    <Box sx={{padding:"10px"}}>
                                        <Typography sx={{fontSize:"15px", fontWeight:"600"}}>New Retro Collection of Pendants and Ring sets</Typography>
                                        <Typography sx={{color:"gray", fontSize:"13px", margin:"4px 0"}}>August 16, 2018  No Comments</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            {/* ========================3rd===================== */}
                            <Grid item xs={12} sm={12} lg={3} md={6}>
                            <Box sx={{borderRadius:"10px",textAlign:"start",height:"336px", backgroundColor:"#FFF", "&:hover" :{
                                boxShadow:"1px 1px 5px gray"
                            }, height:{md:"340px", sm:"490px", xs:"360px"}}}>
                                    <img src={image} alt="" style={{width:"99%", borderRadius:"10px 10px 0 0"}}/>
                                    <Box sx={{padding:"10px"}}>
                                        <Typography sx={{fontSize:"15px", fontWeight:"600"}}>Ruby on Rose Accessories and Blue Gemstones</Typography>
                                        <Typography sx={{color:"gray", fontSize:"13px", margin:"4px 0" , paddingBottom:"20px"}}>August 16, 2018  No Comments</Typography>
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

export default Section8