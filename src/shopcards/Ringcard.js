import { Box, Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, Table, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material'
import proimg1 from '../assests/images/Home/productimg-1.jpg';
import ringimg from '../assests/images/Home/shopring2.jpg';
import proimg3 from '../assests/images/Home/productimg-3.jpg';
import React, { useState } from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import EventIcon from '@mui/icons-material/Event';
import HttpsIcon from '@mui/icons-material/Https';



    const [color, setColor] = useState('');
    const [size, setSize] = useState('');
   
    function Ringcard() {
      const ResultA = (props) => {
        return (
          <div>
        Hi, This is component A
      </div>
    );
  };
 
  const handleChange = (event) => {
    setColor(event.target.value);
};

const handleChangeSize = (event) => {
    setSize(event.target.value);
};
  
  


    

   
    return (
        <div>
            <Box>
                <Box sx={{ borderBottom: "1px solid #F2F2F2" }}>
                    <Container>
                        <Box display={"flex"} padding={"16px 0 "}>
                            <Typography sx={{
                                fontSize: "13px", "&:hover": {
                                    color: "#CA9D7A"
                                }
                            }}>Home /</Typography>
                            <Typography sx={{
                                fontSize: "13px", "&:hover": {
                                    color: "#CA9D7A"
                                }
                            }}>Earrings /</Typography>
                            <Typography sx={{
                                fontSize: "13px", "&:hover": {
                                    color: "#CA9D7A"
                                }
                            }}> All Stones /</Typography>
                            <Typography sx={{ fontSize: "13px" }}> Rhombus Diamond Ring 18k White Gold </Typography>
                        </Box>
                    </Container>
                </Box>
                <Container>
                    <Box>
                        <Grid container spacing={2} padding={"10px"}>
                            <Grid item xs={5}>
                                <Box>
                                    <img src={proimg1} alt="" style={{ borderRadius: "10px", width: "100%", height: "100%" }} />
                                </Box>
                                <Box sx={{ textAlign: "start" }}>
                                    <img src={proimg1} alt="" style={{ width: "28%", borderRadius: "10px", margin: "0 8px 0 0" }} />
                                    <img src={ringimg} alt="" style={{ width: "28%", borderRadius: "10px", margin: "0 8px 0 0" }} />
                                    <img src={proimg3} alt="" style={{ width: "28%", borderRadius: "10px" }} />
                                </Box>
                            </Grid>
                            <Grid item xs={5}>
                                <Box padding={"20px"} textAlign={"start"}>
                                    <Box sx={{ borderBottom: "1px solid #F2F2F2" }}>
                                        <Box sx={{ fontSize: "24px", marginBottom: "8px" }}>Rhombus Diamond Ring 18k White Gold</Box>
                                        <Typography sx={{ color: "gray", fontSize: "13px", paddingBottom: "20px" }}>SKU : HOODIE-PATIENT-NINJA</Typography>
                                    </Box>
                                    <Box sx={{ padding: "20px 0" }}>
                                        <Typography sx={{ fontWeight: "600", fontSize: "24px" }}>$999.00</Typography>
                                        <Typography sx={{ color: "gray", fontsize: "14px", marginTop: "30px" }}>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</Typography>
                                    </Box>
                                    <Box>
                                        <FormControl fullWidth sx={{ marginTop: "10px" }}>
                                            <InputLabel id="demo-simple-select-label" >color</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={color}
                                                label="color"
                                                onChange={handleChange}
                                            >
                                                <MenuItem value={"#000"}>Bronze</MenuItem>
                                                <MenuItem value={"gold"}>Gold</MenuItem>
                                            </Select>
                                        </FormControl>

                                        <FormControl fullWidth sx={{ marginTop: "20px" }}>
                                            <InputLabel id="demo-simple-select-label" >size</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={size}
                                                label="size"
                                                onChange={handleChangeSize}
                                            >
                                                <MenuItem value={"16"}>16</MenuItem>
                                                <MenuItem value={"17"}>17</MenuItem>
                                                <MenuItem value={"18"}>18</MenuItem>
                                                <MenuItem value={"19"}>19</MenuItem>
                                                <MenuItem value={"20"}>20</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                    <Box sx={{ margin: "10px 0" }}>
                                        <input type="number" style={{ width: "10%", height: "40px", border: "none", backgroundColor: "#F2F2F2", padding: "6px 4px", textAlign: "center" }} />
                                        <Button sx={{
                                            width: "50%", backgroundColor: "#E4CEBC", color: "#FFF", padding: "13px 0", marginLeft: "10px", "&:hover": {
                                                backgroundColor: "#7F7F7F",
                                                color: "#FFF"
                                            }
                                        }}>Add To Cart</Button>
                                    </Box>

                                    <Box sx={{ display: "flex", padding: "20px 0", borderBottom: "1px solid #F7F7F7" }}>
                                        <Typography sx={{
                                            height: "40px", width: "40px", backgroundColor: "#F7F7F7", borderRadius: "10px", display: "flex", justifyContent: "center", alignItems: "center", marginRight: "20px", "&:hover": {
                                                "& .icons": {
                                                    color: "#FFF",
                                                    transition: ".3s"
                                                }, backgroundColor: "#000",
                                                transition: ".3s"
                                            }
                                        }}><FacebookOutlinedIcon className="icons" sx={{ color: "#CA9D7A" }}></FacebookOutlinedIcon></Typography>
                                        <Typography sx={{
                                            height: "40px", width: "40px", backgroundColor: "#F7F7F7", borderRadius: "10px", display: "flex", justifyContent: "center", alignItems: "center", marginRight: "20px", "&:hover": {
                                                "& .icons": {
                                                    color: "#FFF",
                                                    transition: ".3s"
                                                }, backgroundColor: "#000",
                                                transition: ".3s"
                                            }
                                        }}><InstagramIcon className="icons" sx={{ color: "#CA9D7A" }}></InstagramIcon></Typography>
                                        <Typography sx={{
                                            height: "40px", width: "40px", backgroundColor: "#F7F7F7", borderRadius: "10px", display: "flex", justifyContent: "center", alignItems: "center", marginRight: "20px", "&:hover": {
                                                "& .icons": {
                                                    color: "#FFF",
                                                    transition: ".3s"
                                                }, backgroundColor: "#000",
                                                transition: ".3s"
                                            }
                                        }}><TwitterIcon className="icons" sx={{ color: "#CA9D7A" }}></TwitterIcon></Typography>
                                        <Typography sx={{
                                            height: "40px", width: "40px", backgroundColor: "#F7F7F7", borderRadius: "10px", display: "flex", justifyContent: "center", alignItems: "center", marginRight: "20px", "&:hover": {
                                                "& .icons": {
                                                    color: "#FFF",
                                                    transition: ".3s"
                                                }, backgroundColor: "#000",
                                                transition: ".3s"
                                            }
                                        }}><LinkedInIcon className="icons" sx={{ color: "#CA9D7A" }}></LinkedInIcon></Typography>
                                    </Box>
                                    <Box sx={{ display: "flex", marginTop: "10px" }}>
                                        <Box>
                                            <HomeOutlinedIcon sx={{ color: "#CA9D7A" }}></HomeOutlinedIcon>
                                        </Box>
                                        <Box>
                                            <Typography sx={{ fontSize: "13px", marginLeft: "10px", lineHeight: "25px", color: "gray" }}>Pickup: Available today at store
                                                <br />1 Year Local Official Distributor Warranty</Typography>
                                        </Box>

                                    </Box>
                                </Box>
                            </Grid>

                            <Grid item xs={2} sx={{  padding: "15px" }}>
                                <Box sx={{ borderRadius: "10px", padding: "8px" }}>
                                    <LocalShippingIcon sx={{ fontSize: "45px", color: "#CA9D7A" }} />
                                    <Typography sx={{ fontSize: "15px", fontWeight: "600", marginBottom: "6px" }}>International Shipment</Typography>
                                    <Typography sx={{ color: "gray", fontSize: "14px", marginBottom: "8px" }}>Your orders are shipped seamlessly between countries</Typography>

                                    <EventIcon sx={{ fontSize: "45px", color: "#CA9D7A" }} />
                                    <Typography sx={{ fontSize: "15px", fontWeight: "600", marginBottom: "6px" }}>30 Days Warranty</Typography>
                                    <Typography sx={{ color: "gray", fontSize: "14px", marginBottom: "8px" }}>You have the right to return your orders within 30 days.</Typography>

                                    <HttpsIcon sx={{ fontSize: "45px", color: "#CA9D7A" }} />
                                    <Typography sx={{ fontSize: "15px", fontWeight: "600", marginBottom: "6px" }}>Secure Payment</Typography>
                                    <Typography sx={{ color: "gray", fontSize: "14px", marginBottom: "8px" }}>You have the right to return your orders within 30 days.</Typography>


                                </Box>
                            </Grid>
                        </Grid>
                    </Box>

                    <Box>
            

                    </Box>
                </Container>

            </Box>
        </div>
    )
  
}
  
    

export default Ringcard




// <Table container>
// <Table sx={{border:"1px solid #BDBDBD"}}>
//   <TableHead>
//     <TableRow>
//       <TableCell sx={{fontWeight:"600", color:"gray", border:"1px solid #BDBDBD", width:"10%"}}>color</TableCell>
//       <TableCell sx={{color:"gray"}}><i>Bronz, Gold, White</i></TableCell>
//     </TableRow>
//     <TableRow>
//       <TableCell sx={{fontWeight:"600", color:"gray",border:"1px solid #BDBDBD"}}>size</TableCell>
//       <TableCell sx={{color:"gray"}}><i>16,17,18,19,20</i></TableCell>
//     </TableRow>
//   </TableHead>
// </Table>
// </Table>