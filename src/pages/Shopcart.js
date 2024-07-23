import React from 'react'
import { Container, Box, Typography, Grid, Button } from '@mui/material'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import jweleerings from '../assets/cartimages/jewelry-ring-and-earrings.jpg'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import ringhand from '../assets/cartimages/handring.jpg'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import c1 from '../assets/cartimages/b1.jpg'
import c2 from '../assets/cartimages/b2.jpg'
import c3 from '../assets/cartimages/b3.jpg'
import c4 from '../assets/cartimages/b4.jpg'
import err from '../assets/cartimages/b2.jpg'

function Shopcart() {
  return (
    <div>
      <Box sx={{ backgroundColor: "#F7F7F7", padding: "30px 30px " }}>
        <Container>
          <Box sx={{ textAlign: "start" }}>
            <Box >
              <Typography sx={{ height: "10px", width: "50px", marginBottom: "20px", borderRadius: "20px", boxShadow: "0px 0px 1px black", fontSize: "13px", border: "none", textAlign: "center", padding: "10px", backgroundColor: "white" }}>Latest</Typography>
              <Typography variant='h3' sx={{ fontWeight: "500" }}>
                Ruby on Rose Accessories and Blue Gemstones
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "6px" }}>
              <Box sx={{ display: "flex", alignItems: "center", fontSize: "12px" }}>
                <Typography>< CalendarMonthIcon sx={{ color: "#CA9D7A", paddingTop: "5px" }} /></Typography>
                <Typography sx={{
                  color: "gray", borderRight: "solid 1px #CA9D7A", fontSize: "12px", "&:hover": {
                    color: "#CA9D7A"
                  }
                }}>August 16, 2018</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", fontSize: "12px" }}>
                <Typography>< ChatBubbleOutlineIcon sx={{ color: "#CA9D7A", paddingTop: "5px", fontSize: "17px" }} /></Typography>
                <Typography sx={{
                  color: "gray", fontSize: "12px", "&:hover": {
                    color: "#CA9D7A"
                  }
                }}>August 16, 2018</Typography>
              </Box>
            </Box>
            <Box>

            </Box>
          </Box>
        </Container>
      </Box>
      <Box>
        <Container>
          <Box sx={{marginTop:"55px"}}>
            <Grid container spacing={2}>
              <Grid item xs={8} md={8} lg={8} sm={12}>
                <img src={jweleerings} style={{ width: "100%", borderRadius: "10px" }} alt="" />
                <Box sx={{ display: "flex", gap: "50px" ,marginTop:"25px"}}>
                  <Box sx={{ textAlign: "start"}}>
                    <Typography sx={{ color: "#132a36", fontWeight: "600", fontSize: "14px" }}>
                      Share it
                    </Typography>
                    <Box >
                      <Box sx={{ paddingTop: "10px" }}>
                        <Typography sx={{
                          height: "28px", width: "34px", backgroundColor: " #3b5998", textAlign: "center", padding: "8px", color: "white", "&:hover": {
                            backgroundColor: "#007aff"
                          }
                        }}>
                          <FacebookOutlinedIcon />
                        </Typography>
                      </Box>
                      <Box sx={{ paddingTop: "8px" }}>
                        <Typography sx={{
                          height: "28px", width: "34px", backgroundColor: " #cf2e2e", textAlign: "center", padding: "8px", color: "white", "&:hover": {
                            backgroundColor: "#a00"
                          }
                        }}>
                          <InstagramIcon />
                        </Typography>
                      </Box>
                      <Box sx={{ paddingTop: "10px" }}>
                        <Typography sx={{
                          height: "28px", width: "34px", backgroundColor: "#1da1f2", textAlign: "center", padding: "8px", color: "white", "&:hover": {
                            backgroundColor: "#007aff"
                          }
                        }}>

                          <TwitterIcon/>
                        </Typography>
                      </Box>
                      <Box sx={{ paddingTop: "10px" }}>
                        <Typography sx={{
                          height: "28px", width: "34px", backgroundColor: " #0077b5", textAlign: "center", padding: "8px", color: "white", "&:hover": {
                            backgroundColor: "#007aff"
                          }
                        }}>
                          < LinkedInIcon  />
                        </Typography>
                      </Box>
                    </Box>


                  </Box>
                  <Box sx={{ textAlign: "start", gap: "10px", color: "gray",fontSize:"10px" }}>
                    <Typography >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra, mi id rhoncus ultricies, magna eros ultricies leo, dictum aliquam lorem nisl vel sapien. Pellentesque lobortis mi id pellentesque bibendum. Nam sed ipsum auctor, dignissim libero eget, ultricies neque. Maecenas a ligula nec lorem rutrum cursus.
                    </Typography>
                    <Typography sx={{ paddingTop: "20px" }}>
                      In massa ante, dapibus eget ex a, tempus dignissim nulla. Praesent congue tempus nisl eu feugiat.
                    </Typography>
                    <Typography sx={{paddingTop:"10px"}}>
                      All life is an experiment. The more experiments you make
                    </Typography>
                    <Typography>the better.</Typography>
                    <Typography>
                      - – Ralph Waldo Emerson
                    </Typography>
                    <Box sx={{ paddingTop: "15px", display: "flex", gap: "25px" }}>
                      <Box><img src={ringhand} alt="" />
                        <Typography sx={{color:"black"}}>Casual Ring</Typography></Box>
                      <Box>
                        <Typography>
                          Morbi finibus dui nec orci eleifend, at semper eros iaculis. Donec sem nulla, lobortis vitae justo ac, ornare consequat sem. Quisque varius vitae urna id volutpat. Etiam et erat eu mauris vestibulum laoreet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer est metus, vestibulum quis eros id, dapibus molestie turpis. Pellentesque lobortis mi id pellentesque bibendum. Nam sed ipsum auctor, dignissim libero eget, ultricies neque. Maecenas a ligula nec lorem rutrum cursus. In massa ante, dapibus eget ex a, tempus dignissim nulla. Praesent congue
                        </Typography>
                      </Box>
                    </Box>
                    <Box><Typography sx={{ paddingTop: "10px" }}>tempus nisl eu feugiat.</Typography>
                      <Typography>
                        In id nunc vitae magna tempor suscipit quis eu libero. Cras laoreet velit suscipit orci mattis consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin id nisl sodales, tincidunt purus sagittis, tempus magna. Donec fermentum elit in sapien porta, id interdum urna lacinia. Aenean maximus mauris diam, sit amet vulputate nisi bibendum sed. Sed a dolor turpis.
                      </Typography>
                    </Box>
                  </Box>

                </Box>
                <Box sx={{ textAlign: "start", paddingTop: "20px" }}>
                  <Typography variant='h3' sx={{ fontWeight: "500", color: "#132a36" }}>Leave a Reply</Typography>
                  <Typography sx={{ color: "gray", fontSize: "14px", paddingTop: "20px",paddingBottom:"25 px" }}>Your email address will not be published. Required fields are marked *</Typography>
                  <Typography sx={{ marginTop: "15px", color: "#132A36", fontWeight: "700" }} >Comment <sup>*</sup></Typography>
                  <textarea type="text" style={{ width: "100%", padding: "60px 10px", backgroundColor: "#F7F7F7", border: "none", borderRadius: "10px" }} />
                  <Typography sx={{ marginTop: "10px", color: "#132A36", fontWeight: "700" }}>Name <sup>*</sup></Typography>
                  <input type="text" style={{ width: "100%", padding: "16px 10px", backgroundColor: "#F7F7F7", border: "none", borderRadius: "10px" }} />
                  <Typography sx={{ marginTop: "10px", color: "#132A36", fontWeight: "700" }}>Email <sup>*</sup></Typography>
                  <input type="email" style={{ width: "100%", padding: "16px 10px", backgroundColor: "#F7F7F7", border: "none", borderRadius: "10px" }} />
                  <Typography sx={{ marginTop: "10px", color: "#132A36", fontWeight: "700" }}>Website <sup>*</sup></Typography>
                  <input type="email" style={{ width: "100%", padding: "16px 10px", backgroundColor: "#F7F7F7", border: "none", borderRadius: "10px" }} />
                  <Box sx={{ display: "flex", marginTop: "10px" }}>
                    <input type="checkBox" />
                    <Typography sx={{ color: "#132A36", fontWeight: "700", marginRight: "6px" }}>Save my name, email, and website in this browser for the next time I comment.</Typography>
                  </Box>
                  <Button sx={{
                    backgroundColor: "#ca9d7a", color: "white", fontWeight: "600", marginTop: "10px", "&:hover": {
                      backgroundColor
                        : "#000",
                    }
                  }}>Post comment</Button>
                </Box>

              </Grid>
              <Grid item xs={4} md={4} lg={4} sm={12}  sx={{marginTop:"15px"}}>
                <Box sx={{ textAlign: "start" }}>
                  <Typography variant='h4' sx={{ fontWeight: "600", color: "#132a36" }}>
                    Newsletter
                  </Typography>
                  <Typography >
                    Signup our newsletter to get updates.
                  </Typography>
                  <Typography> information, news, insight or</Typography>
                  <Typography> promotion</Typography>
                  <Typography sx={{ paddingTop: "10px" }}>
                    <input
                      type="text"
                      placeholder="name"
                      style={{ height: "40px", width: "95%", borderColor: "gray", borderRadius: "7px" }}
                      onFocus={(e) => (e.target.style.borderColor = "")}
                      onBlur={(e) => (e.target.style.borderColor = "#CA9D7A")}
                    />
                  </Typography>
                  <Typography sx={{ paddingTop: "10px" }}>
                    <input
                      type="email"
                      placeholder="Email"
                      style={{ height: "40px", width: "95%", borderColor: "gray", borderRadius: "7px" }}
                      onFocus={(e) => (e.target.style.borderColor = "")}
                      onBlur={(e) => (e.target.style.borderColor = "#CA9D7A")}
                    />
                  </Typography>
                  <Button sx={{
                    display: "flex", alignItems: "center", fontSize: "14px", color: "white", backgroundColor: "#CA9D7A", width: "98%", marginTop: "10px", textAlign: "center", height: "40px", orderRadius: "10px", "&:hover": {
                      backgroundColor: "black"
                    }
                  }}>
                    <Box sx={{ textAlign: "center" }}><MailOutlineIcon sx={{ paddingTop: "9px", fontSize: "14px", paddingRight: "5px", }} />
                    </Box>
                    <Typography sx={{ fontSize: "13px" }}> Signup</Typography>
                  </Button>
                </Box>
                <Box sx={{ paddingTop: "20px", backgroundColor: "#f7f7f7", borderRadius: "15px", padding: "30px 30px 30px 30px", marginTop: "20px" }}>
                  <Box sx={{ textAlign: "start", paddingBottom: "20px" }}>
                    <Typography variant='h4' sx={{ color: "#132a36", fontWeight: "600" }}>Latest article</Typography>
                    <Typography sx={{ fontSize: "12px" }}>Hello world!</Typography>
                    <Typography sx={{ color: "gray", fontSize: "12px" }}>April 28, 2023</Typography>
                  </Box>
                  <Box sx={{ display: "flex", gap: "10px" }}>
                    <Box><img src={c1} alt="" style={{ height: "90px", width: "90%", borderRadius: "10px" }} /></Box>
                    <Box sx={{ textAlign: "start" }}><Typography sx={{ fontSize: "13px" }} >Ruby on Rose Accessories and Blue Gemstones</Typography>
                      <Typography sx={{ fontSize: "12px", color: "gray" }}>August 16, 2018</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", gap: "10px" }}>
                    <Box><img src={c2} alt="" style={{width: "90px",height:"100px", borderRadius: "10px" }} /></Box>
                    <Box sx={{ textAlign: "start" }}><Typography sx={{ fontSize: "13px" }} >Ruby on Rose Accessories and Blue Gemstones</Typography>
                      <Typography sx={{ fontSize: "12px", color: "gray" }}>August 16, 2018</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", gap: "10px" }}>
                    <Box><img src={c3} alt="" style={{ height: "90px", width: "90%", borderRadius: "10px" }} /></Box>
                    <Box sx={{ textAlign: "start" }}><Typography sx={{ fontSize: "13px" }} >Ruby on Rose Accessories and Blue Gemstones</Typography>
                      <Typography sx={{ fontSize: "12px", color: "gray" }}>August 16, 2018</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", gap: "30px" }}>
                    <Box><img src={c4} alt="" style={{ height: "90px", width: "120%", borderRadius: "10px" }} /></Box>
                    <Box sx={{ textAlign: "start" }}><Typography sx={{ fontSize: "13px" }} >Ruby on Rose Accessories and Blue Gemstones</Typography>
                      <Typography sx={{ fontSize: "12px", color: "gray" }}>August 16, 2018</Typography>
                    </Box>
                  </Box>
                </Box>
                <Box >
                  
                   <Box sx={{ position: "relative", width: "100%",height:"100%",marginTop:"20px"}}>
      <img src={err} alt="" style={{ width: "90%" ,borderRadius:"15px"}} />
      <Box sx={{ 
        position: "absolute", 
        top: "50%", 
        left: "50%", 
        transform: "translate(-50%, -50%)", 
        textAlign: "center", 
        color: "white" 
      }}>
        <Typography>Promo</Typography>
        <Typography sx={{fontSize:"30px",fontWeight:"500"}} >Discount up to 50% for new member only this month</Typography>
        <Button sx={{
          display: "flex", 
          alignItems: "center", 
          fontSize: "14px", 
          color: "white", 
          backgroundColor: "#CA9D7A", 
          width: "150px", 
          marginTop: "10px", 
          textAlign: "center", 
          height: "40px", 
          borderRadius: "10px", 
          marginLeft:"20px",
          "&:hover": {
            backgroundColor: "black"
          }
        }}>
          <Typography sx={{ fontSize: "13px" }}>Learn more</Typography>
        </Button>
      </Box>
    </Box>
                </Box>

              </Grid>


            </Grid>
          </Box>
        </Container>
      </Box>
    </div>
  )
}

export default Shopcart
