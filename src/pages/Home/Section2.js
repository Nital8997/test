import { Typography, Grid, Container, Box, Button } from '@mui/material'
import React from 'react'
import CloudCircleRoundedIcon from '@mui/icons-material/CloudCircleRounded';
import proimg1 from '../../assests/images/Home/productimg-1.jpg';
import proimg2 from '../../assests/images/Home/productimg-2.jpg';
import proimg3 from '../../assests/images/Home/productimg-3.jpg';
import proimg4 from '../../assests/images/Home/productimg-4.jpg';
import { useNavigate } from 'react-router-dom';


function Section2() {
  const data = [
    { image: proimg1, proTitle: "Rhombus Diamond Ring 18k White Gold", price: "$999.00", button: "select option" },
    { image: proimg2, proTitle: "Rhombus Diamond Ring 18k White Gold", price: "$999.00", button: "select option" },
    { image: proimg3, proTitle: "Rhombus Diamond Ring 18k White Gold", price: "$999.00", button: "select option" },
    { image: proimg4, proTitle: "Rhombus Diamond Ring 18k White Gold", price: "$999.00", button: "select option" },

  ];
  const navigate = useNavigate();
  return (

    <Box sx={{ backgroundColor: "#F5F5F5", height: "auto" }}>
      <Container sx={{ padding: "0 0 0 0 !important" }}>
        <Box padding={"50px 0"} height={"450px"} >

          <Grid container sx={{ justifyContent: "space-around", display: "flex", backgroundColor: "#FFF", padding: "30px 10px", borderRadius: "10px" }}>
            <Grid sx={{ backgroundColor: "#FFF" }}>
              <Box sx={{ width: "210px", padding: "15px", borderRadius: "10px" }}>
                <CloudCircleRoundedIcon sx={{ fontSize: "80px", color: "#CA9D7A" }} />
                <Typography fontWeight={"700"} marginBottom={"8px"}>
                  Flash sale
                </Typography>
                <Typography color={"gray"} fontSize={"14px"} marginBottom={"25px"}>
                  Consectetuer tempor commodo nascetur amet nisi turpis eros adipiscing molestie
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between", gap: "6px" }}>
                  <Box sx={{ backgroundColor: "#F7F7F7", borderRadius: "10px", padding: "8px", width: "73px" }}>
                    <Typography className='elementor-countdown-digits elementor-countdown-hours' color={"#CA9D7A"} fontWeight={"600"} fontSize={"24px"}>00</Typography>
                    <Typography className='elementor-countdown-lable' fontSize={"13px"} fontWeight={"500"}>Hours</Typography>
                  </Box>
                  <Box sx={{ backgroundColor: "#F7F7F7", borderRadius: "10px", padding: "8px", width: "73px" }}>
                    <Typography className='elementor-countdown-digits elementor-countdown-minutes' color={"#CA9D7A"} fontWeight={"600"} fontSize={"24px"}>00</Typography>
                    <Typography className='elementor-countdown-lable' fontSize={"13px"} fontWeight={"500"}>Minutes</Typography>
                  </Box>
                  <Box sx={{ backgroundColor: "#F7F7F7", borderRadius: "10px", padding: "8px", width: "73px" }}>
                    <Typography className='elementor-countdown-digits elementor-countdown-seconds' color={"#CA9D7A"} fontWeight={"600"} fontSize={"24px"}>00</Typography>
                    <Typography className='elementor-countdown-lable' fontSize={"13px"} fontWeight={"500"}>Seconds</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>


            {data.map(item => (
              <Grid xs={2} sx={{
                "&:hover": {
                  border: "1px solid #CA9D7A",
                  borderRadius: "10px",
                }, padding: "8px"
              }
              }>
                <Box textAlign={"start"} position={"relative"} >
                  <img src={item.image} alt="" style={{ height: "100%", width: "100%", borderRadius: "0" }} />
                  <Typography sx={{ fontWeight: '600', margin: "14px 0", fontSize: "15px" }}>{item.proTitle}</Typography>
                  <Typography sx={{ color: '#CA9D7A', fontSize: "14px", marginBottom: "13px" }}><del style={{ color: "gray" }}>{item.delprice}</del> {item.price}</Typography>
                  <Button onClick={() => navigate("/ring-card")} sx={{
                    backgroundColor: "#CA9D7A", color: "#FFF", fontSize: "12px", padding: "8px 12px", "&:hover": {
                      backgroundColor: "#000",
                      transition: ".3s"
                    }
                  }}  >{item.button}</Button>
                </Box>
              </Grid>
            ))}






          </Grid>


        </Box>
      </Container>
    </Box>
  )
}

export default Section2
