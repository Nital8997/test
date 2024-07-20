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
              md={6}
              lg={5.5}
              sx={{
                backgroundImage: `url(${img1})`,
                // width: "100%",
                height: "250px",
                borderRadius: "10px",
              }}
            >
              <Box sx={{ textAlign: "start" }}>
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
                    // fontSize: { xs: "12px", md: "14px" },
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
              md={6}
              lg={5.5}
              sx={{
                backgroundImage: `url(${img2})`,
                width: "100%",
                height: "250px",
                borderRadius: "10px",
                marginLeft:"20px"
              }}
            >
              <Box sx={{ textAlign: "start" }}>
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

export default Section3;
