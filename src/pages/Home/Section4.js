import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import React from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import EventIcon from "@mui/icons-material/Event";
import HttpsIcon from "@mui/icons-material/Https";
import proimg1 from "../../assets/images/Home/productimg-1.jpg";
import proimg2 from "../../assets/images/Home/productimg-2.jpg";
import proimg3 from "../../assets/images/Home/productimg-3.jpg";
import proimg4 from "../../assets/images/Home/productimg-4.jpg";
import image from "../../assets/images/Home/earring-image1.jpg";
import earring from "../../assets/images/Home/earringgold-1.jpg";
import proimage3 from "../../assets/images/Home/productimg-5.jpg";
import { useNavigate } from "react-router-dom";

function Section4() {
  const navigate = useNavigate();
  const data = [
    {
      image: proimg1,
      proTitle: "Rhombus Diamond Ring 18k White Gold",
      price: "$999.00",
      button: "Select options",
    },
    {
      image: proimg2,
      proTitle: "Arced Custom Ring Design 20k Sterling Gold",
      price: "$599.00",
      button: "Select options ",
    },
    {
      image: proimg3,
      proTitle: "Stainless Steel Cutout Station Ankle Bracelet",
      price: "$999.00",
      delprice: "$128.00",
      button: "Select options",
    },
    {
      image: proimg4,
      proTitle: "Veronece 18K Clad 10″ Diamond Cut Anklet",
      price: "$12.00",
      delprice: "$15.00",
      button: "Add to Cart",
    },
  ];
  const data2 = [
    {
      image: earring,
      proTitle: "14K Gold 9″ Diamond Ankle Bracelet",
      price: "$15.00",
      button: "Add to cart",
    },
    {
      image: earring,
      proTitle: "Stainless Steel Cutout Station Ankle Bracelet",
      price: "$35.00",
      button: "Add to cart",
    },
    {
      image: proimage3,
      proTitle: "Arced Custom Ring Design 20k Sterling Gold",
      price: "$18.00",
      button: "Add to cart",
    },
    {
      image: proimage3,
      proTitle: "Veronece 18K Clad 10″ Diamond Cut Anklet",
      price: "$30.00",
      button: "Buy on Diamonds.com",
    },
  ];

  return (
    <div>
      <Box sx={{ padding: "50px 0" }}>
        <Container>
          <Box sx={{display:"flex"}}>
         
          <Box sx={{ borderRadius: "10px", padding: "8px", textAlign:"center", width:"20%"}}>
                                    <Box>
                                    <LocalShippingIcon sx={{ fontSize: "45px", color: "#CA9D7A" }} />
                                    <Typography sx={{ fontSize: "15px", fontWeight: "600", marginBottom: "6px" }}>International Shipment</Typography>
                                    <Typography sx={{ color: "gray", fontSize: "14px", marginBottom: "8px",fontSize:{md:"12px", sm:"12px"} }}>Your orders are shipped seamlessly between countries</Typography>
                                    </Box>

                                    <Box>
                                    <EventIcon sx={{ fontSize: "45px", color: "#CA9D7A" }} />
                                    <Typography sx={{ fontSize: "15px", fontWeight: "600", marginBottom: "6px" }}>30 Days Warranty</Typography>
                                    <Typography sx={{ color: "gray", fontSize: "14px", marginBottom: "8px",fontSize:{md:"12px", sm:"12px"} }}>You have the right to return your orders within 30 days.</Typography>
                                    </Box>

                                    <Box>
                                    <HttpsIcon sx={{ fontSize: "45px", color: "#CA9D7A" }} />
                                    <Typography sx={{ fontSize: "15px", fontWeight: "600", marginBottom: "6px" }}>Secure Payment</Typography>
                                    <Typography sx={{ color: "gray", fontSize: "14px", marginBottom: "8px",fontSize:{md:"12px", sm:"12px"} }}>You have the right to return your orders within 30 days.</Typography>
                                    </Box>


                        
          </Box>
              {/* =================================shop-product============================== */}
              
              <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
           
              <Grid
                item
                lg={12}
                md={6}
                sm={6}
                xs={12}
                sx={{ display: "flex", justifyContent: "space-between", marginTop:"25px" }}
              >
                <Box sx={{padding:"10px"}} >
                 <Box sx={{flexWrap:"wrap"}} >
                 <img src={proimg1} alt="" style={{ width: "100%" }} />
                 <Typography sx={{marginTop:"10px", fontWeight:"600"}}>
                 Rhombus Diamond Ring 18k White Gold
                 </Typography>
                 <Typography sx={{color:"#CA9D7A", fontSize:"14px", margin:"10px 0 20px 0"}}>
                  $999.00
                 </Typography>
                 <Button sx={{backgroundColor:"#CA9D7A", color:"#FFF", fontSize:"11px","&:hover":{
                  backgroundColor:"#000"
                 }, padding:"12px 12px"}}>
                  Select options
                 </Button>
                 </Box>
                </Box>

                <Box sx={{padding:"10px"}}>
                 <Box sx={{flexWrap:"wrap"}}  >
                 <img src={proimg1} alt="" style={{ width: "100%" }} />
                 <Typography sx={{marginTop:"10px", fontWeight:"600"}}>
                 Rhombus Diamond Ring 18k White Gold
                 </Typography>
                 <Typography sx={{color:"#CA9D7A", fontSize:"14px", margin:"10px 0 20px 0"}}>
                  $999.00
                 </Typography>
                 <Button sx={{backgroundColor:"#CA9D7A", color:"#FFF", fontSize:"11px","&:hover":{
                  backgroundColor:"#000"
                 }, padding:"12px 12px"}}>
                  Select options
                 </Button>
                 </Box>
                </Box>

               <Box sx={{padding:"10px"}}>
                 <Box sx={{flexWrap:"wrap"}} >
                 <img src={proimg1} alt="" style={{ width: "100%" }} />
                 <Typography sx={{marginTop:"10px", fontWeight:"600"}}>
                 Rhombus Diamond Ring 18k White Gold
                 </Typography>
                 <Typography sx={{color:"#CA9D7A", fontSize:"14px", margin:"10px 0 20px 0"}}>
                  $999.00
                 </Typography>
                 <Button sx={{backgroundColor:"#CA9D7A", color:"#FFF", fontSize:"11px","&:hover":{
                  backgroundColor:"#000"
                 }, padding:"12px 12px"}}>
                  Select options
                 </Button>
                 </Box>
                </Box>
                
                <Box sx={{padding:"10px"}}>
                 <Box sx={{flexWrap:"wrap"}} >
                 <img src={proimg1} alt="" style={{ width: "100%" }} />
                 <Typography sx={{marginTop:"10px", fontWeight:"600"}}>
                 Rhombus Diamond Ring 18k White Gold
                 </Typography>
                 <Typography sx={{color:"#CA9D7A", fontSize:"14px", margin:"10px 0 20px 0"}}>
                  $999.00
                 </Typography>
                 <Button sx={{backgroundColor:"#CA9D7A", color:"#FFF", fontSize:"11px","&:hover":{
                  backgroundColor:"#000"
                 }, padding:"12px 12px"}}>
                  Select options
                 </Button>
                 </Box>
                </Box>

              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </div>
  );
}

export default Section4;
