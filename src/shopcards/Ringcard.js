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
import StarBorderIcon from '@mui/icons-material/StarBorder';
import goldring from "../assests/images/Home/goldenRing-1.jpg";
import silverRing from "../assests/images/Home/productimg-2.jpg";




function Ringcard() {
    const productDetails = [
        { image: silverRing, proTitle: "Stainless Steel Cutout Station Ankle Bracele", price: " $99.00", button: "Select options", delPrice: "$128.00" },
        { image: goldring, proTitle: "Veronece 18K Clad 10″ Diamond Cut Anklet", price: "$12.00", button: "Select options", delPrice: "$15.00" },
        { image: silverRing, proTitle: "14K Gold 9″ Diamond Ankle Bracelet", price: "$30.00", button: "Select options", delPrice: "$35.00" },
        { image: silverRing, proTitle: "Stainless Steel Cutout Station Ankle Bracelet", price: "$12.00", button: "Select options", delPrice: "$15.00" },
    ];

    const [color, setColor] = useState('');
    const [size, setSize] = useState('');
    const [activeButton, setActiveButton] = useState(null);

    const toggleVisibility = (button) => {
        setActiveButton(activeButton === button ? null : button);
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

                            <Grid item xs={2} sx={{ padding: "15px" }}>
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
                </Container>



                <Box>
                    <Box borderBottom={"1px solid #ECF0F0"}>
                        <Box sx={{ textAlign: "start", display: "flex", width: "25%", transform: "translateX(60%)", border: "solid 1px #ECF0F0", borderRadius: "10px 10px 0 0" }}>
                            <button style={{ border: "1px solid #ECF0F0", backgroundColor: "#F7F7F7", padding: "14px" }} onClick={() => toggleVisibility('button1')}>
                                {activeButton === 'button1'} Description
                            </button>
                            <button style={{ border: "1px solid #ECF0F0", backgroundColor: "#F7F7F7", padding: "14px 16px" }} onClick={() => toggleVisibility('button2')}>
                                {activeButton === 'button2'} Additional information
                            </button>
                            <button style={{ border: "1px solid #ECF0F0", backgroundColor: "#F7F7F7", padding: "14px" }} onClick={() => toggleVisibility('button3')}>
                                {activeButton === 'button3'} Reviews(0)
                            </button>
                        </Box>
                    </Box>
                    <Box sx={{ textAlign: "start", margin: "30px 60px" }}>
                        {activeButton === 'button1' && <div>
                            <Typography sx={{ fontSize: "24px", marginBottom: "10px" }}>Description</Typography>
                            <Typography sx={{ color: "gray", fontSize: "15px" }}>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</Typography>
                        </div>}
                        {activeButton === 'button2' && <div>
                            <Typography sx={{ fontSize: "24px", marginBottom: "10px" }}>Additional information</Typography>
                            <Table container>
                                <Table sx={{ border: "1px solid #BDBDBD" }}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell sx={{ fontWeight: "600", color: "gray", border: "1px solid #BDBDBD", width: "10%" }}>color</TableCell>
                                            <TableCell sx={{ color: "gray" }}><i>Bronz, Gold, White</i></TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell sx={{ fontWeight: "600", color: "gray", border: "1px solid #BDBDBD" }}>size</TableCell>
                                            <TableCell sx={{ color: "gray" }}><i>16,17,18,19,20</i></TableCell>
                                        </TableRow>
                                    </TableHead>
                                </Table>
                            </Table>
                        </div>}
                        {activeButton === 'button3' && <div>

                           <Typography sx={{ fontSize: "24px", marginBottom: "10px" }}>Reviews</Typography>
                            <Typography sx={{ color: "gray", marginBottom: "18px" }}>There are no reviews yet.
                                <br /> Be the first to review “Rhombus Diamond Ring 18k White Gold”
                                <br />
                                <br />Your email address will not be published. Required fields are marked *
                            </Typography>
                            <Typography sx={{ color: "#132A36", fontWeight: "700" }}>Your rating <sup>*</sup></Typography>
                            <Box> 
                                <StarBorderIcon sx={{
                                    color: "gray", "&:hover": {
                                        color: "#ffba00"
                                    }
                                }}></StarBorderIcon>
                                <StarBorderIcon sx={{
                                    color: "gray", "&:hover": {
                                        color: "#ffba00"
                                    }
                                }}></StarBorderIcon>
                                <StarBorderIcon sx={{
                                    color: "gray", "&:hover": {
                                        color: "#ffba00"
                                    }
                                }}></StarBorderIcon>
                                <StarBorderIcon sx={{
                                    color: "gray", "&:hover": {
                                        color: "#ffba00"
                                    }
                                }}></StarBorderIcon>
                                <StarBorderIcon sx={{
                                    color: "gray", "&:hover": {
                                        color: "#ffba00"
                                    }
                                }}></StarBorderIcon>
                            </Box>

                            <Typography sx={{ marginTop: "10px", color: "#132A36", fontWeight: "700" }}>Your review <sup>*</sup></Typography>
                            <textarea type="text" style={{ width: "100%", padding: "10px 10px", backgroundColor: "#F7F7F7", border: "none", borderRadius: "10px" }} />
                            <Typography sx={{ marginTop: "10px", color: "#132A36", fontWeight: "700" }}>Name <sup>*</sup></Typography>
                            <input type="text" style={{ width: "100%", padding: "16px 10px", backgroundColor: "#F7F7F7", border: "none", borderRadius: "10px" }} />
                            <Typography sx={{ marginTop: "10px", color: "#132A36", fontWeight: "700" }}>Email <sup>*</sup></Typography>
                            <input type="email" style={{ width: "100%", padding: "16px 10px", backgroundColor: "#F7F7F7", border: "none", borderRadius: "10px" }} />
                            <Box sx={{ display: "flex", marginTop: "10px" }}>
                                <input type="checkBox" />
                                <Typography sx={{ color: "#132A36", fontWeight: "700", marginRight: "6px" }}>Save my name, email, and website in this browser for the next time I comment.</Typography>
                            </Box>
                            <Button sx={{ backgroundColor: "#E9E6ED", color: "#515151", fontWeight: "600", marginTop: "10px" }}>Submit</Button>
                        </div>}
                    </Box>
                </Box>




                <Box>
                    <Container>
                        <Box sx={{ padding: "90px 20px" }}>
                            <Grid container spacing={1} sx={{ margin: "10px" }}>
                                {productDetails.map(item => (
                                    <Grid item xs={3} key={item.id} sx={{
                                        "&:hover": {
                                            border: "1px solid #CA9D7A",
                                            borderRadius: "10px",
                                        }
                                    }}>
                                        <Box sx={{ textAlign: "start", padding: "10px", position: "relative" }}>
                                            <Box>
                                                <img src={item.image} alt={item.proTitle} style={{ height: "100%", width: "100%", borderRadius: "10px", marginBottom: "10px" }} />
                                            </Box>
                                            <Typography sx={{ fontWeight: "600", marginBottom: "10px" }}>{item.proTitle}</Typography>
                                            <Typography sx={{ fontSize: "15px", color: "#CA9D7A", fontWeight: "500", marginBottom: "10px", }}>
                                                <del style={{ color: "gray" }}>{item.delPrice}</del>
                                                <u> {item.price}</u>
                                            </Typography>
                                            <Button sx={{
                                                backgroundColor: "#CA9D7A", color: "#FFF", fontSize: "12px", padding: "10px 20px", fontWeight: "600", "&:hover": {
                                                    background: "#000",
                                                    transition: ".3s"
                                                }
                                            }}>{item.button}</Button>
                                            <Box sx={{ height: "10%", width: "16%", backgroundColor: "#FFF", fontSize: "13px", fontWeight: "600", position: "absolute", top: "0", right: "0", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>Sale!</Box>
                                        </Box>
                                    </Grid>
                                ))}

                            </Grid>
                        </Box>
                    </Container>
                </Box>

            </Box>
        </div>
    )

}



export default Ringcard




