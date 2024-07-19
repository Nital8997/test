import { Box, Button, Container, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import React, { useState } from 'react'
import SpaIcon from '@mui/icons-material/Spa';
import imgring from "../../assests/images/Home/zoomring-img.png";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
// import OwlCarousel from 'react-owl-carousel';
import EventIcon from '@mui/icons-material/Event';
import HttpsIcon from '@mui/icons-material/Https';
// import proimg1 from '../../assests/images/Home/productimg-1.jpg';
import proimg2 from '../../assests/images/Home/productimg-2.jpg';
import proimg3 from '../../assests/images/Home/productimg-3.jpg';
import proimg4 from '../../assests/images/Home/productimg-4.jpg';
import image from "../../assests/images/Home/earring-image1.jpg";
import earring from "../../assests/images/Home/earringgold-1.jpg";
import proimage3 from '../../assests/images/Home/productimg-5.jpg';
import { useNavigate } from 'react-router-dom';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';




function Shop_product() {
    const productData = [
        { image: image, proTitle: "Rhombus Diamond Ring 18k White Gold", price: "$999.00", button: "Select options" },
        { image: proimg2, proTitle: "Arced Custom Ring Design 20k Sterling Gold", price: "$599.00", button: "Select options " },
        { image: proimg3, proTitle: "Stainless Steel Cutout Station Ankle Bracelet", price: "$999.00", delprice: "$128.00", button: "Select options" },
        { image: proimg4, proTitle: "Veronece 18K Clad 10″ Diamond Cut Anklet", price: "$`12.00", delprice: "$15.00", button: "Add to Cart" },
    ];


    const navigate = useNavigate();

    const [data, setData] = useState("");
    const handleChange = (event) => {
        setData(event.target.value);
    };
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };




    return (
        <div>
            <Box>
                <Container>
                    <Box sx={{ padding: "50px 0" }}>
                        <Grid container spacing={2}>
                            <Grid item xs={2.5} sx={{ background: "#FFF", border: "solid 3px #f7f7f7", padding: "25px", borderRadius: "10px" }}>

                                <Box sx={{ textAlign: "start", padding: "10px 0" }}>
                                    <Typography sx={{ fontWeight: "700", fontSize: "16px" }}>All Department</Typography>
                                </Box>

                                <Box sx={{ textAlign: "start" }}>

                                    <Box display={"flex"} padding={"8px 0 5px 0"} borderBottom={"1px solid #818EA0"}>
                                        <SpaIcon sx={{ color: "#CA9D7A" }}></SpaIcon>
                                        <Typography sx={{ fontSize: "14px", fontWeight: "500", padding: "4px 0", margin: "0 0 0 4px" }}>Bracelates</Typography>
                                    </Box>
                                    <Box display={"flex"} padding={"8px 0 5px 0"} borderBottom={"1px solid #818EA0"}>
                                        <SpaIcon sx={{ color: "#CA9D7A" }}></SpaIcon>
                                        <Typography sx={{ fontSize: "14px", fontWeight: "500", padding: "4px 0", margin: "0 0 0 4px" }}>Earrings</Typography>
                                    </Box>
                                    <Box display={"flex"} padding={"8px 0 5px 0"} borderBottom={"1px solid #818EA0"}>
                                        <SpaIcon sx={{ color: "#CA9D7A" }}></SpaIcon>
                                        <Typography sx={{ fontSize: "14px", fontWeight: "500", padding: "4px 0", margin: "0 0 0 4px" }}>Onyx</Typography>
                                    </Box>
                                    <Box display={"flex"} padding={"8px 0 5px 0"} borderBottom={"1px solid #818EA0"}>
                                        <SpaIcon sx={{ color: "#CA9D7A" }}></SpaIcon>
                                        <Typography sx={{ fontSize: "14px", fontWeight: "500", padding: "4px 0", margin: "0 0 0 4px" }}>Pandants</Typography>
                                    </Box>
                                    <Box display={"flex"} padding={"8px 0 5px 0"} borderBottom={"1px solid #818EA0"}>
                                        <SpaIcon sx={{ color: "#CA9D7A" }}></SpaIcon>
                                        <Typography sx={{ fontSize: "14px", fontWeight: "500", padding: "4px 0", margin: "0 0 0 4px" }}>Pandants</Typography>
                                    </Box>
                                    <Box display={"flex"} padding={"8px 0 5px 0"} borderBottom={"1px solid #818EA0"}>
                                        <SpaIcon sx={{ color: "#CA9D7A" }}></SpaIcon>
                                        <Typography sx={{ fontSize: "14px", fontWeight: "500", padding: "4px 0", margin: "0 0 0 4px" }}>Tanzanites</Typography>
                                    </Box>
                                    <Box display={"flex"} padding={"8px 0 5px 0"} borderBottom={"1px solid #818EA0"}>
                                        <SpaIcon sx={{ color: "#CA9D7A" }}></SpaIcon>
                                        <Typography sx={{ fontSize: "14px", fontWeight: "500", padding: "4px 0", margin: "0 0 0 4px" }}>Tanzanites</Typography>
                                    </Box>
                                    <Box display={"flex"} padding={"8px 0 5px 0"}>
                                        <SpaIcon sx={{ color: "#CA9D7A" }}></SpaIcon>
                                        <Typography sx={{ fontSize: "14px", fontWeight: "500", padding: "4px 0", margin: "0 0 0 4px" }}>Bracelates</Typography>
                                    </Box>
                                </Box>
                            </Grid>


                            <Grid item xs={9}>
                                <Box sx={{ position: "relative" }}>
                                    <img src={imgring} alt="" style={{ width: "100%", borderRadius: "10px" }} />
                                    <Box sx={{ position: "absolute", top: "37%", left: "4%", textAlign: "start" }}>
                                        <Typography sx={{ color: "#FFF", fontSize: "24px" }}>Get Best Jewelry</Typography>
                                        <Typography sx={{ color: "#FFF", fontSize: "14px", marginBottom: "20px" }}>Don't miss the last opportunity</Typography>
                                        <Button sx={{ color: "#FFF", fontSize: "12px", borderRadius: "10px", border: "1px solid #FFF", padding: "8px 10px" }}>Learn More</Button>
                                    </Box>
                                </Box>
                                <Box sx={{ textAlign: "end" }}>
                                    <FormControl variant="standard" sx={{ m: 1, width: "30%", padding: "10px 10px" }}>
                                        <Select sx={{ padding: "8px 10px", border: "1px solid #000" }}
                                            labelId="demo-simple-select-standard-label"
                                            id="demo-simple-select-standard"
                                            value={data}
                                            onChange={handleChange}
                                            label="data"
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={"Default sorting"} >Default sorting</MenuItem>
                                            <MenuItem value={"Sort by popularity"}>Sort by popularity</MenuItem>
                                            <MenuItem value={"Sort by average rating"}>Sort by average rating</MenuItem>
                                            <MenuItem value={"Sort by latest"}>Sort by latest</MenuItem>
                                            <MenuItem value={"Sort by price:low to high"}>Sort by price:low to high</MenuItem>
                                            <MenuItem value={"Sort by price:high to low"}>Sort by price:high to low</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </Grid>



                            <Grid item xs={2.5} sx={{ border: "3px solid #f7f7f7", padding: "15px", marginTop: "30px" }}>
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



                            <Grid item xs={9} sx={{ width: "100%", height: "700px"}}>
                                <Box>
                                    <Box sx={{ paddingBottom: "100px"}}>

                                        <Slider {...settings}>
                                            <Box>
                                                {productData.map(item => (
                                                   <Box sx={{display:"flex"}}>
                                                     <Grid xs={3} sx={{
                                                        "&:hover": {
                                                            border: "1px solid #CA9D7A",
                                                            borderRadius: "10px",
                                                        }, padding: "8px"
                                                    }
                                                    }>
                                                       <Box textAlign={"start"} position={"relative"} padding={"0 0 0 12px"}>
                                                            <Typography><img src={item.image} alt="" style={{ height: "100%", width: "90%", borderRadius: "0" }} /></Typography>
                                                            <Typography sx={{ fontWeight: '600', margin: "14px 0", fontSize: "15px" }}>{item.proTitle}</Typography>
                                                            <Typography sx={{ color: '#CA9D7A', fontSize: "14px", marginBottom: "13px" }}><del style={{ color: "gray" }}>{item.delprice}</del> {item.price}</Typography>
                                                            <Button onClick={() => navigate("/ring-card")} sx={{
                                                                backgroundColor: "#CA9D7A", color: "#FFF", fontSize: "12px", padding: "8px 12px", "&:hover": {
                                                                    backgroundColor: "#000",
                                                                    transition: ".3s"
                                                                }
                                                            }}>{item.button}</Button>
                                                        </Box>
                                                       
                                                    </Grid>
                                                   </Box>
                                                ))}
                                            </Box>
                                            <Box>
                                                <img src={proimg3} alt="logo2" style={{ width: "230px", height: "100px" }} />
                                            </Box>

                                        </Slider>

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

export default Shop_product
