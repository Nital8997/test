
import { Box, Container, Grid, Typography, Button } from '@mui/material'
import React from 'react';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import EventIcon from '@mui/icons-material/Event';
import HttpsIcon from '@mui/icons-material/Https';
import proimg1 from '../../assests/images/Home/productimg-1.jpg';
import proimg2 from '../../assests/images/Home/productimg-2.jpg';
import proimg3 from '../../assests/images/Home/productimg-3.jpg';
import proimg4 from '../../assests/images/Home/productimg-4.jpg';
import image from "../../assests/images/Home/earring-image1.jpg";
import earring from "../../assests/images/Home/earringgold-1.jpg";
import proimage3 from '../../assests/images/Home/productimg-5.jpg';
import { Navigate, useNavigate } from 'react-router-dom';



function Section4() {
  const navigate = useNavigate();
     const data = [
        { image:proimg1, proTitle:"Rhombus Diamond Ring 18k White Gold", price:"$999.00", button:"Select options" },
        { image:proimg2, proTitle:"Arced Custom Ring Design 20k Sterling Gold", price:"$599.00", button:"Select options "},
        { image:proimg3, proTitle:"Stainless Steel Cutout Station Ankle Bracelet", price:"$999.00",delprice:"$128.00", button:"Select options" },
        { image:proimg4, proTitle:"Veronece 18K Clad 10″ Diamond Cut Anklet", price:"$`12.00",delprice:"$15.00", button:"Add to Cart" },
      ];
      const data2 = [
        { image:earring, proTitle:"14K Gold 9″ Diamond Ankle Bracelet", price:"$15.00", button:"Add to cart" },
        { image:earring, proTitle:"Stainless Steel Cutout Station Ankle Bracelet", price:"$35.00", button:"Add to cart"},
        { image:proimage3, proTitle:"Arced Custom Ring Design 20k Sterling Gold", price:"$18.00", button:"Add to cart" },
        { image:proimage3, proTitle:"Veronece 18K Clad 10″ Diamond Cut Anklet", price:"$30.00", button:"Buy on Diamonds.com" },
      ];

  return (
    <div>
     <Box sx={{padding:"50px 0"}}>
        <Container>
            <Box>
            
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} display={"flex"}>
                  <Grid item xs={2} sx={{border:"2px solid #f7f7f7", padding:"15px" }}>
                    <Box sx={{borderRadius:"10px", padding:"8px"}}>
                      <LocalShippingIcon sx={{fontSize:"45px", color:"#CA9D7A"}}/>
                      <Typography sx={{fontSize:"15px", fontWeight:"600", marginBottom:"6px"}}>International Shipment</Typography>
                      <Typography sx={{color:"gray", fontSize:"14px", marginBottom:"8px"}}>Your orders are shipped seamlessly between countries</Typography>

                      <EventIcon sx={{fontSize:"45px", color:"#CA9D7A"}}/>
                      <Typography sx={{fontSize:"15px", fontWeight:"600", marginBottom:"6px"}}>30 Days Warranty</Typography>
                      <Typography sx={{color:"gray", fontSize:"14px", marginBottom:"8px"}}>You have the right to return your orders within 30 days.</Typography>

                      <HttpsIcon sx={{fontSize:"45px", color:"#CA9D7A"}}/>
                      <Typography sx={{fontSize:"15px", fontWeight:"600", marginBottom:"6px"}}>Secure Payment</Typography>
                      <Typography sx={{color:"gray", fontSize:"14px", marginBottom:"8px"}}>You have the right to return your orders within 30 days.</Typography>


                    </Box>
                  </Grid>

                  <Grid item xs={10}>
                  <Grid position={"relative"} sx={{ width:"80%", height:"60px", textAlign:"start",
                     '&::after':{
                      content:'""',
                      position:"absolute",
                      top:"45%",
                      left:"28%",
                      width:"100%",
                      border:"1px solid #ecf0f0",
                  
                  }, fontSize:"36px",
                  fontWeight:"600"
                  }}>New Arrival</Grid>

                   <Grid item xs={12} display={"flex"} justifyContent={"space-between"}  margin={"30px 0"}>

                   {data.map(item => (
                                       <Grid xs={3} sx={{"&:hover":{
                        border:"1px solid #CA9D7A",
                        borderRadius:"10px",
                    }, padding:"12px 0px 10px 8px"}
                                       }>
                                       <Box textAlign={"start"} position={"relative"} padding={"0 0 0 12px"}>
                                         <img src={item.image} alt="" style={{height:"100%", width:"90%", borderRadius:"0" }} />
                                         <Typography sx={{fontWeight:'600', margin:"14px 0",fontSize:"15px"}}>{item.proTitle}</Typography>
                                         <Typography sx={{color:'#CA9D7A', fontSize:"14px", marginBottom:"13px"}}><del style={{color:"gray"}}>{item.delprice}</del> {item.price}</Typography>
                                         <Button onClick={()=> navigate("/ring-card")} sx={{backgroundColor:"#CA9D7A", color:"#FFF", fontSize:"12px", padding:"8px 12px","&:hover":{
                                          backgroundColor:"#000",
                                          transition:".3s"
                                         }}}>{item.button}</Button>
                                       </Box>
                                      </Grid>
                  ))}
                   



                 
                   </Grid>
                  </Grid>

                <Box display={"flex"}>
                <Grid item xs={2.5} padding={"10px 0 0 0 !important"} >
                    <Box position={"relative"}>
                      <Box textAlign={"start"} >
                      <img src={image} alt="" style={{ height:"384px",width:"98%", borderRadius:"10px"}}/>
                      </Box>
                      <Box position={"absolute"} top={"5%"} left={"0"} color={"#FFF"} padding={"20px"}>
                         <Typography paddingBottom={"6px"}>Promo</Typography>
                         <Typography sx={{fontSize:"18px", fontWeight:"600", paddingBottom:"8px"}}>Discount up to 30% for first purchase!</Typography>
                         <Button sx={{backgroundColor:"#CA9D7A", color:"#FFF",fontSize:"12px", "&:hover":{
                          backgroundColor:"#000"
                         }}}>Learn More</Button>

                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} display={"flex"} justifyContent={"space-between"} margin={"9px 0px"}  padding={"0 0 0 24px"}>
                    
                  {data2.map(item => (
                                       <Grid xs={3} sx={{"&:hover":{
                        border:"1px solid #CA9D7A",
                        borderRadius:"10px",
                    }, padding:"12px 0px 10px 8px"}
                                       }>
                                       <Box textAlign={"start"} position={"relative"} padding={"0 0 0 12px"}>
                                         <img src={item.image} alt="" style={{height:"100%", width:"90%", borderRadius:"0" }} />
                                         <Typography sx={{fontWeight:'600', margin:"14px 0",fontSize:"15px"}}>{item.proTitle}</Typography>
                                         <Typography sx={{color:'#CA9D7A', fontSize:"14px", marginBottom:"13px"}}><del style={{color:"gray"}}>{item.delprice}</del> {item.price}</Typography>
                                         <Button onClick={()=> navigate("/ring-card")} sx={{backgroundColor:"#CA9D7A", color:"#FFF", fontSize:"12px", padding:"8px 12px","&:hover":{
                                          backgroundColor:"#000",
                                          transition:".3s"
                                         }}}>{item.button}</Button>
                                       </Box>
                                      </Grid>
                  ))}
                   

                  
                  </Grid>
                </Box>
            </Grid>
            </Box>
        </Container>
     </Box>
    </div>
  )
}

export default Section4
