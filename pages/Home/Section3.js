import React from "react";
import { Typography, Grid, Container, Box, Button } from "@mui/material";
import img1 from "../../assests/images/Home/ringearring.png";
import img2 from "../../assests/images/Home/pearl-earring.png";

function Section3() {
  return (
    <div>
      <Grid>
        <Container>
          <Grid
            container
            maxWidth={"lg"}
            sx={{ padding: "40px 0", alignItems: "center", display:"flex", justifyContent:"center" }}
            
            
          >
            <Grid
              item
              xs={12}
              sm={5.5}
              md={5.5}
              lg={5.5}
              sx={{
                backgroundImage: `url(${img1})`,
                borderRadius: "10px",
                marginTop:{xs:"10px"},
                height:{lg:"250px", md:"250px", sm:"200px", xs:"250px"}
              }}
            >
              <Box sx={{ textAlign: "start", padding:"30px"}}>
                <Typography
                  sx={{
                    fontSize: { xs: "20px", md: "24px" },
                    marginBottom: "10px",
                    color: "#FFF",
                  }}
                >
                  Diamond Ring
                </Typography>
                <Typography
                  sx={{
                    marginBottom: "24px",
                    color: "#FFF",
                  }}
                >
                  Don't miss the last opportunity
                </Typography>
                <Button
                  sx={{
                    backgroundColor: "#CA9D7A",
                    color: "#FFF",
                    fontSize: { xs: "10px", md: "12px" },
                    padding: "10px 8px",
                    "&:hover": { color: "#CA9D7A" },
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </Grid>



            <Grid
              item
              xs={12}
              sm={5.5}
              md={5.5}
              lg={5.5}
              sx={{
                backgroundImage: `url(${img2})`,
                backgroundPosition: "center",
                backgroundSize:"cover",
                width: "100%",
                borderRadius: "10px",
                marginLeft:"20px",
                marginTop:{xs:"10px"  },
                marginLeft:{lg:"10px", md:"10px", sm:"10px"},
                height:{lg:"250px", md:"250px", sm:"200px", xs:"250px"}
              }}
            >
              <Box sx={{ textAlign: "start", padding:"30px" }}>
                <Typography
                  sx={{
                    fontSize: { xs: "20px", md: "24px" },
                    marginBottom: "10px",
                    color: "#FFF",
                  }}
                >
                  Diamond Ring
                </Typography>
                <Typography
                  sx={{
                    marginBottom: "24px",
                    color: "#FFF",
                    fontSize: { xs: "12px", md: "14px" },
                  }}
                >
                  Don't miss the last opportunity
                </Typography>
                <Button
                  sx={{
                    backgroundColor: "#CA9D7A",
                    color: "#FFF",
                    fontSize: { xs: "10px", md: "12px" },
                    padding: "10px 8px",
                    "&:hover": { color: "#CA9D7A" },
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </div>
  );
}

export default Section3;