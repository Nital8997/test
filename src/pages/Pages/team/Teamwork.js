import React from "react";
import { Container, Grid, Box, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import b1 from "../../../assets/images/pagesimg/businessman1.png";
import b2 from "../../../assets/images/pagesimg/businessman2.png";
import b3 from "../../../assets/images/pagesimg/businessman3.png";
import b4 from "../../../assets/images/pagesimg/business3.png";

function Teamwork() {
  return (
    <div>
      <Box sm={4}
        sx={{
          marginTop: "20px",
          marginBottom:"10px",
          backgroundColor: "#F7F7F7",
           
          textAlign: "center",
          paddingTop: "140px",
        
        }}
      >
        <Container>
          <Box sx={{ textAlign: "center" }}>
            <Typography sx={{ color: "#ca9d7a" }}>Meet our team</Typography>
            <Typography
              variant="h3"
              sx={{ fontWeight: "500", color: "#132a36" }}
            >
              Teamwork makes the dream work.
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "500",
                color: "#132a36",
                paddingBottom: "30px",
              }}
            >
              work
            </Typography>
          </Box>
          <Box
            sx={{ paddingTop: "20px", backgroundColor: "#FFFFFF", gap: "5px" }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} md={3} sm={6}  sx={{ display: "flex" }}>
                <Box sx={{ padding: "10px 10px 10px 10px",marginRight:"2px" }}>
                  <img src={b1} alt="" style={{ width: "50%" }} />

                  <Typography
                    sx={{
                      color: "#132a36",
                      fontWeight: "700",
                      paddingTop: "10px",
                    }}
                  >
                    Samuha Tifany
                  </Typography>
                  <Typography
                    sx={{ color: "gray", paddingTop: "7px", fontSize: "14px" }}
                  >
                    Graphic Designer
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      paddingTop: "20px",
                    }}
                  >
                    <Typography>
                      <FacebookIcon
                        sx={{
                          height: "30px",
                          width: "30px",
                          color: "white",
                          backgroundColor: "white",
                          color: "#CA9D7A",
                          textAlign: "center",
                        }}
                      />
                    </Typography>
                    <Typography>
                      <LinkedInIcon
                        sx={{
                          height: "30px",
                          width: "30px",
                          backgroundColor: "white",
                          color: "#CA9D7A",
                          textAlign: "center",
                        }}
                      />
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={3} sm={6}  sx={{ display: "flex" }}>
                <Box sx={{ padding: "10px 10px 10px 10px" }}>
                  <img src={b2} alt="" style={{ width: "50%" }} />

                  <Typography
                    sx={{
                      color: "#132a36",
                      fontWeight: "700",
                      paddingTop: "10px",
                    }}
                  >
                    Samuha Tifany
                  </Typography>
                  <Typography
                    sx={{ color: "gray", paddingTop: "7px", fontSize: "14px" }}
                  >
                    Graphic Designer
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      paddingTop: "20px",
                    }}
                  >
                    <Typography>
                      <FacebookIcon
                        sx={{
                          height: "30px",
                          width: "30px",
                          color: "white",
                          backgroundColor: "white",
                          color: "#CA9D7A",
                          textAlign: "center",
                        }}
                      />
                    </Typography>
                    <Typography>
                      <LinkedInIcon
                        sx={{
                          height: "30px",
                          width: "30px",
                          backgroundColor: "white",
                          color: "#CA9D7A",
                          textAlign: "center",
                        }}
                      />
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={3} sm={6}  sx={{ display: "flex" }}>
                <Box sx={{ padding: "10px 10px 10px 10px" }}>
                  <img src={b3} alt="" style={{ width: "50%" }} />

                  <Typography
                    sx={{
                      color: "#132a36",
                      fontWeight: "700",
                      paddingTop: "10px",
                    }}
                  >
                    Samuha Tifany
                  </Typography>
                  <Typography
                    sx={{ color: "gray", paddingTop: "7px", fontSize: "14px" }}
                  >
                    Graphic Designer
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      paddingTop: "20px",
                    }}
                  >
                    <Typography>
                      <FacebookIcon
                        sx={{
                          height: "30px",
                          width: "30px",
                          color: "white",
                          backgroundColor: "white",
                          color: "#CA9D7A",
                          textAlign: "center",
                        }}
                      />
                    </Typography>
                    <Typography>
                      <LinkedInIcon
                        sx={{
                          height: "30px",
                          width: "30px",
                          backgroundColor: "white",
                          color: "#CA9D7A",
                          textAlign: "center",
                        }}
                      />
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={3} sm={6}  sx={{ display: "flex" }}>
                <Box sx={{ padding: "10px 10px 10px 10px" }}>
                  <img src={b4} alt="" style={{ width: "50%" }} />

                  <Typography
                    sx={{
                      color: "#132a36",
                      fontWeight: "700",
                      paddingTop: "10px",
                    }}
                  >
                    Samuha Tifany
                  </Typography>
                  <Typography
                    sx={{ color: "gray", paddingTop: "7px", fontSize: "14px" }}
                  >
                    Graphic Designer
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      paddingTop: "20px",
                    }}
                  >
                    <Typography>
                      <FacebookIcon
                        sx={{
                          height: "30px",
                          width: "30px",
                          color: "white",
                          backgroundColor: "white",
                          color: "#CA9D7A",
                          textAlign: "center",
                        }}
                      />
                    </Typography>
                    <Typography>
                      <LinkedInIcon
                        sx={{
                          height: "30px",
                          width: "30px",
                          backgroundColor: "white",
                          color: "#CA9D7A",
                          textAlign: "center",
                        }}
                      />
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
    <Grid sx={{width:{sm:"100%"}}}>
    <Box
          sx={{
    
            textAlign: "center",
            backgroundImage: `url("https://jewellerycityweb.thimaqua.info/wp-content/uploads/2022/08/jewelry-ring-and-earrings.jpg")`,
            height:"700px",
            backgroundRepeat: "no-repeat",
            backgroundPosition:"center center",
            backgroundSize: "cover",
            zIndex: "1",
            marginTop:"130px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
          }}
        >
          <Box sx={{ boxShadow: "0px 30px 60px 60px rgba(0, 0, 0, 0.47)",borderRadius:"10px",
          backgroundColor:"#132a364f",
          height:"300px",width:"40%",marginTop:"10px",
            padding: "24px 77px 30px 79px"}}>
         <Box> <Typography variant="h3" sx={{ color: "white", fontWeight: "700" ,paddingTop:"30px"}}>
            Interested in join our team?
          </Typography></Box>
         <Box> <Typography sx={{ color: "white",paddingTop:"20px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </Typography>
          </Box>
          <Box><Typography
          sx={{
            width: "120px",
            backgroundColor: "#ca9d7a",
            color: "white",
            borderRadius: "5px",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px",
            margin: "0 auto",
            marginTop: "25px",
            marginBottom: "20px",
            "&:hover": {
              backgroundColor: "black",
            },
          }}
        >
          Contact us
        </Typography></Box>
          </Box>
        </Box>
       
    </Grid>
      </Box>
    </div>
  );
}

export default Teamwork;
