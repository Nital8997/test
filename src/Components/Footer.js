import React from "react";
import { Box, Grid, Container, Typography } from "@mui/material";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import AirIcon from "@mui/icons-material/Air";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import logo from "../assets/images/aboutpage/logo.png";
import footerlogo from "../assets/images/aboutpage/xpayment.png.pagespeed.ic.9TPpdoDiur.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <div>
      <Box sx={{ backgroundColor: "#CA9D7A", marginTop: "10px" }}>
        <Container>
          <Box
            sx={{
              backgroundColor: "#CA9D7A",
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Grid container spacing={0} sx={{ padding: "25px 25px 25px 25px" }}>
              <Grid
                item
                xl={3}
                md={3}
                lg={3}
                sm={12}
                sx={{ textAlign: "start" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    borderRight: "solid 1px #ffffff2b",
                    gap: "10px",
                    padding: "10px",
                  }}
                >
                  <Box>
                    <Typography sx={{ color: "#FFF" }}>
                      <DiamondOutlinedIcon sx={{ fontSize: "50px" }} />
                    </Typography>
                  </Box>
                  <Box>
                    {" "}
                    <Typography
                      sx={{
                        color: "#FFF",
                        fontSize: "15px",
                        fontWeight: "500",
                      }}
                    >
                      Original Product
                    </Typography>
                    <Typography sx={{ color: "#FFF", fontSize: "13px" }}>
                      100% Original product that covered warranty by the vendor.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                xl={3}
                md={3}
                lg={3}
                sm={12}
                sx={{ textAlign: "start", alignItems: "center" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    borderRight: "solid 1px #ffffff2b",
                    gap: "10px",
                    padding: "10px",
                  }}
                >
                  <Box>
                    <Typography sx={{ color: "#FFF" }}>
                      <AirIcon sx={{ fontSize: "50px" }} />
                    </Typography>
                  </Box>
                  <Box>
                    {" "}
                    <Typography
                      sx={{
                        color: "#FFF",
                        fontSize: "15px",
                        fontWeight: "500",
                      }}
                    >
                      30 Days Warranty
                    </Typography>
                    <Typography sx={{ color: "#FFF", fontSize: "13px" }}>
                      You have the right to return your orders within 30 days.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                xl={3}
                md={3}
                lg={3}
                sm={12}
                sx={{ textAlign: "start" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    borderRight: "solid 1px #ffffff2b",
                    gap: "10px",
                    padding: "10px",
                  }}
                >
                  <Box>
                    <Typography sx={{ color: "#FFF" }}>
                      <LocalShippingIcon sx={{ fontSize: "50px" }} />
                    </Typography>
                  </Box>
                  <Box>
                    {" "}
                    <Typography
                      sx={{
                        color: "#FFF",
                        fontSize: "15px",
                        fontWeight: "500",
                      }}
                    >
                      Global Shipping
                    </Typography>
                    <Typography sx={{ color: "#FFF", fontSize: "13px" }}>
                      Your orders are shipped seamlessly between countries
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid
                item
                xl={3}
                md={3}
                lg={3}
                sm={12}
                sx={{ textAlign: "start" }}
              >
                <Box sx={{ display: "flex", gap: "10px", padding: "10px" }}>
                  <Box>
                    <Typography sx={{ color: "#FFF" }}>
                      <LockPersonIcon sx={{ fontSize: "50px" }} />
                    </Typography>
                  </Box>
                  <Box>
                    {" "}
                    <Typography
                      sx={{
                        color: "#FFF",
                        fontSize: "15px",
                        fontWeight: "500",
                      }}
                    >
                      100% Secure
                    </Typography>
                    <Typography sx={{ color: "#FFF", fontSize: "13px" }}>
                      Your payments are secure with our private security
                      network.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      {/* =============================================================================== */}

      <Box sx={{ paddingTop: "70px" }}>
        <Container>
          <Grid container spacing={3}>
            <Grid item xl={12} sm={6} md={4} lg={3} xs={12}>
              <Box textAlign={"start"}>
                <img src={logo} alt="" s />
                <Typography
                  sx={{ fontSize: "15px", color: "gray", paddingTop: "10px" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </Typography>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "15px" }}
                >
                  <Box>
                    <Typography>
                      <HeadsetMicIcon
                        style={{
                          fontSize: "45px",
                          color: "#ca9d7a",
                          paddingTop: "35px",
                        }}
                      />
                    </Typography>
                  </Box>
                  <Box sx={{ paddingTop: "40px" }}>
                    <Typography sx={{ fontSize: "15px", color: "gray" }}>
                      Need help? Call us!
                    </Typography>
                    <Typography variant="h5">800-7000-234</Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", gap: "15px", paddingTop: "20px" }}>
                  <FacebookIcon
                    sx={{
                      color: "#ca9d7a",
                      Height: "20px",
                      Width: "20px",
                      backgroundColor: "f7f7f7",

                      "&:hover": {
                        color: "#ca9d7a",
                        backgroundColor: "#ca9d7a",
                        Height: "25px",
                        Width: "25px",
                        color: "white",
                        transition: "s1.5",
                      },
                    }}
                  />
                  <InstagramIcon
                    sx={{
                      color: "#ca9d7a",
                      height: "20px",
                      width: "20px",
                      backgroundColor: "f7f7f7",
                      borderRadius: "5px",
                      border: "solid 1px lightgray",
                      fontSize: "20px",

                      "&:hover": {
                        color: "#ca9d7a",
                        backgroundColor: "#ca9d7a",
                        Height: "30px",
                        Width: "30px",
                        borderRadius: "5px",
                        color: "white",
                        transition: "s1.5",
                      },
                    }}
                  />
                  <TwitterIcon
                    sx={{
                      color: "#ca9d7a",
                      height: "20px",
                      width: "20px",
                      backgroundColor: "f7f7f7",
                      borderRadius: "5px",
                      border: "solid 1px lightgray",
                      fontSize: "20px",

                      "&:hover": {
                        color: "#ca9d7a",
                        backgroundColor: "#ca9d7a",
                        Height: "30px",
                        Width: "30px",
                        borderRadius: "5px",
                        color: "white",
                        transition: "s1.5",
                      },
                    }}
                  />

                  <YouTubeIcon
                    sx={{
                      color: "#cald727",
                      height: "20px",
                      width: "20px",
                      backgroundColor: "f7f7f7",
                      borderRadius: "5px",
                      border: "solid 1px lightgray",
                      fontSize: "20px",

                      "&:hover": {
                        color: "#ca9d7a",
                        backgroundColor: "#ca9d7a",
                        Height: "30px",
                        Width: "30px",
                        borderRadius: "5px",
                        color: "white",
                        transition: "s1.5",
                      },
                    }}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xl={12} sm={6} md={4} lg={3} xs={12}>
              <Box sx={{ textAlign: "start" }}>
                <Typography sx={{ color: "#132a36", fontWeight: "600" }}>
                  Customer Service
                </Typography>
                <Typography
                  sx={{ color: "gray", fontSize: "14px", paddingTop: "15px" }}
                >
                  Help Center
                </Typography>
                <Typography
                  sx={{ color: "gray", fontSize: "14px", paddingTop: "15px" }}
                >
                  Track your order
                </Typography>
                <Typography
                  sx={{ color: "gray", fontSize: "14px", paddingTop: "15px" }}
                >
                  My Account
                </Typography>
                <Typography
                  sx={{ color: "gray", fontSize: "14px", paddingTop: "15px" }}
                >
                  Returns & Replacements
                </Typography>
                <Typography
                  sx={{ color: "gray", fontSize: "14px", paddingTop: "15px" }}
                >
                  Help Center
                </Typography>
              </Box>
            </Grid>
            <Grid item xl={12} sm={6} md={4} lg={3} xs={12}>
              <Box sx={{ textAlign: "start" }}>
                <Typography sx={{ color: "#132a36", fontWeight: "600" }}>
                  Get to Know Us
                </Typography>
                <Typography
                  sx={{ color: "gray", fontSize: "14px", paddingTop: "15px" }}
                >
                  About us
                </Typography>
                <Typography
                  sx={{ color: "gray", fontSize: "14px", paddingTop: "15px" }}
                >
                  Careers
                </Typography>
                <Typography
                  sx={{ color: "gray", fontSize: "14px", paddingTop: "15px" }}
                >
                  Leadership
                </Typography>
                <Typography
                  sx={{ color: "gray", fontSize: "14px", paddingTop: "15px" }}
                >
                  News & Article
                </Typography>
                <Typography
                  sx={{ color: "gray", fontSize: "14px", paddingTop: "15px" }}
                >
                  Legal Notice
                </Typography>
              </Box>
            </Grid>
            <Grid item xl={12} sm={6} md={4} lg={3} xs={12}>
              <Box sx={{ textAlign: "start", whiteSpace: "nowrap" }}>
                <Typography sx={{ color: "#132a36", fontWeight: "600" }}>
                  Partnerships
                </Typography>
                <Typography
                  sx={{ color: "gray", fontSize: "14px", paddingTop: "15px" }}
                >
                  Affiliate Program
                </Typography>
                <Typography
                  sx={{ color: "gray", fontSize: "14px", paddingTop: "15px" }}
                >
                  Advertise with Us
                </Typography>
                <Typography
                  sx={{ color: "gray", fontSize: "14px", paddingTop: "15px" }}
                >
                  Self-Publish with Us
                </Typography>
              </Box>
            </Grid>
          </Grid>
         {/* <Grid>
         <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: "20px",
            }}
          >
            <Grid item sm={12} md={6} lg={6} xl={12}>
           
    
                <Typography style={{ color: "gray", fontSize: "14px" }}>
                  Copyright © 2022 JC, All rights reserved. Powered by
                  Flexitheme.
                </Typography>
              </Grid>
          
            <Grid item  sm={12} md={6} lg={6} xl={12}>
           
                <Typography>
                  <img src={footerlogo} alt="" style={{ height: "25px" }} />
                </Typography>
             
            </Grid>
          </Box>
         </Grid> */}

{/* <Grid container>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '20px',
          width: '100%',
        }}
      >
        <Grid item xs={12} md={6} lg={6} sm={12}>
          <Box>
          <Typography sx={{ color: 'gray', fontSize: '14px' }}>
            Copyright © 2022 JC, All rights reserved. Powered by Flexitheme.
          </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={6} sm={6} sx={{ textAlign: { xs: 'center' } }}>
          <img src={footerlogo} alt="Footer Logo" style={{ height: '25px' }} />
        </Grid>
      </Box>
    </Grid> */}

    <Grid container rowSpacing={6}  sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'end',
          paddingTop: '20px',
          width: '100%',
        }}>
  <Grid item xl={6} md={6} lg={6} sm={12} xs={12} >
  <Box>
          <Typography sx={{ color: 'gray', fontSize: '14px' }}>
            Copyright © 2022 JC, All rights reserved. Powered by Flexitheme.
          </Typography>
          </Box>
  </Grid>
  <Grid item xl={6} md={6} lg={6} sm={12} xs={12} >
 <Box>
 <img src={footerlogo} alt="Footer Logo" style={{ height: '25px' ,display:"flex"}} />  
 </Box>
  </Grid>
  
</Grid>
        </Container>
      </Box>
    </div>
  );
}

export default Footer;
