import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SpaIcon from "@mui/icons-material/Spa";
import imgring from "../../assets/images/Home/zoomring-img.png";
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
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

function Shop_product() {
  const productCard = [
    {
      image: proimg1,
      proTitle: "Rhombus Diamond Ring 18k White Gold",
      price: "$999.00",
      button: "Select options",
    },
    {
      image: proimg2,
      proTitle: "Arced Custom Ring 20k Sterling Gold",
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
      price: "$`12.00",
      delprice: "$15.00",
      button: "Add to Cart",
    },
    {
        image: proimg1,
        proTitle: "Rhombus Diamond Ring 18k White Gold",
        price: "$999.00",
        button: "Select options",
      },
      {
        image: proimg2,
        proTitle: "Arced Custom Ring 20k Sterling Gold",
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
        price: "$`12.00",
        delprice: "$15.00",
        button: "Add to Cart",
      },
      {
        image: proimg1,
        proTitle: "Rhombus Diamond Ring 18k White Gold",
        price: "$999.00",
        button: "Select options",
      },
      {
        image: proimg2,
        proTitle: "Arced Custom Ring 20k Sterling Gold",
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
        price: "$`12.00",
        delprice: "$15.00",
        button: "Add to Cart",
      },
      {
        image: proimg1,
        proTitle: "Rhombus Diamond Ring 18k White Gold",
        price: "$999.00",
        button: "Select options",
      },
      {
        image: proimg2,
        proTitle: "Arced Custom Ring 20k Sterling Gold",
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
        price: "$`12.00",
        delprice: "$15.00",
        button: "Add to Cart",
      },
  ];

  const navigate = useNavigate();

  const [data, setData] = useState("");
  const handleChange = (event) => {
    setData(event.target.value);
  };

  return (
    <div>
      <Header/>
      <Box>
        <Container>
          <Box sx={{ padding: "50px 0" }}>
            {/* ===================================section-1================================ */}
            <Grid container spacing={3}>
              <Grid
                item
                lg={2.5}
                md={3}
                sm={3}
                xs={12}
                sx={{
                  background: "#FFF",
                  border: "solid 3px #f7f7f7",
                  padding: "25px",
                  borderRadius: "10px",
                }}
              >
                <Box sx={{ textAlign: "start", padding: "10px 0" }}>
                  <Typography sx={{ fontWeight: "700", fontSize: "16px" }}>
                    All Department
                  </Typography>
                </Box>

                <Box sx={{ textAlign: "start" }}>
                  <Box
                    display={"flex"}
                    padding={"8px 0 5px 0"}
                    borderBottom={"1px solid #ecf0f0"}
                  >
                    <SpaIcon sx={{ color: "#CA9D7A" }}></SpaIcon>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "500",
                        padding: "4px 0",
                        margin: "0 0 0 4px",
                      }}
                    >
                      Bracelates
                    </Typography>
                  </Box>
                  <Box
                    display={"flex"}
                    padding={"8px 0 5px 0"}
                    borderBottom={"1px solid #ecf0f0"}
                  >
                    <SpaIcon sx={{ color: "#CA9D7A" }}></SpaIcon>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "500",
                        padding: "4px 0",
                        margin: "0 0 0 4px",
                      }}
                    >
                      Earrings
                    </Typography>
                  </Box>
                  <Box
                    display={"flex"}
                    padding={"8px 0 5px 0"}
                    borderBottom={"1px solid #ecf0f0"}
                  >
                    <SpaIcon sx={{ color: "#CA9D7A" }}></SpaIcon>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "500",
                        padding: "4px 0",
                        margin: "0 0 0 4px",
                      }}
                    >
                      Onyx
                    </Typography>
                  </Box>
                  <Box
                    display={"flex"}
                    padding={"8px 0 5px 0"}
                    borderBottom={"1px solid #ecf0f0"}
                  >
                    <SpaIcon sx={{ color: "#CA9D7A" }}></SpaIcon>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "500",
                        padding: "4px 0",
                        margin: "0 0 0 4px",
                      }}
                    >
                      Pandants
                    </Typography>
                  </Box>
                  <Box
                    display={"flex"}
                    padding={"8px 0 5px 0"}
                    borderBottom={"1px solid #ecf0f0"}
                  >
                    <SpaIcon sx={{ color: "#CA9D7A" }}></SpaIcon>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "500",
                        padding: "4px 0",
                        margin: "0 0 0 4px",
                      }}
                    >
                      Pandants
                    </Typography>
                  </Box>
                  <Box
                    display={"flex"}
                    padding={"8px 0 5px 0"}
                    borderBottom={"1px solid #ecf0f0"}
                  >
                    <SpaIcon sx={{ color: "#CA9D7A" }}></SpaIcon>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "500",
                        padding: "4px 0",
                        margin: "0 0 0 4px",
                      }}
                    >
                      Tanzanites
                    </Typography>
                  </Box>
                  <Box
                    display={"flex"}
                    padding={"8px 0 5px 0"}
                    borderBottom={"1px solid #ecf0f0"}
                  >
                    <SpaIcon sx={{ color: "#CA9D7A" }}></SpaIcon>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "500",
                        padding: "4px 0",
                        margin: "0 0 0 4px",
                      }}
                    >
                      Tanzanites
                    </Typography>
                  </Box>
                  <Box display={"flex"} padding={"8px 0 5px 0"}>
                    <SpaIcon sx={{ color: "#CA9D7A" }}></SpaIcon>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: "500",
                        padding: "4px 0",
                        margin: "0 0 0 4px",
                      }}
                    >
                      Bracelates
                    </Typography>
                  </Box>
                </Box>
              </Grid>

{/* ==========================================section2================== */}
              <Grid lg={9} md={9} sm={9} >
                <Box sx={{ position: "relative"}}>
               
                 <img
                    src={imgring}
                    style={{ borderRadius: "10px", marginLeft:"20px" }}
                  />

                
                  <Box
                    sx={{
                      position: "absolute",
                      top: "37%",
                      left: "4%",
                      textAlign: "start",
                    }}
                  >
                    <Typography sx={{ color: "#FFF", fontSize: "24px" }}>
                      Get Best Jewelry
                    </Typography>
                    <Typography
                      sx={{
                        color: "#FFF",
                        fontSize: "14px",
                        marginBottom: "20px",
                      }}
                    >
                      Don't miss the last opportunity
                    </Typography>
                    <Button
                      sx={{
                        color: "#FFF",
                        fontSize: "12px",
                        borderRadius: "10px",
                        border: "1px solid #FFF",
                        padding: "8px 10px",
                      }}
                    >
                      Learn More
                    </Button>
                  </Box>
                </Box>

{/* =======================formcontrol======================= */}

                <Box sx={{ textAlign: "end" }}>
                  <FormControl
                    variant="standard"
                    sx={{ m: 1, width: "30%", padding: "10px 10px" }}
                  >
                    <Select
                      sx={{ padding: "8px 10px", border: "1px solid #000" }}
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      value={data}
                      onChange={handleChange}
                      label="data"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={"Default sorting"}>
                        Default sorting
                      </MenuItem>
                      <MenuItem value={"Sort by popularity"}>
                        Sort by popularity
                      </MenuItem>
                      <MenuItem value={"Sort by average rating"}>
                        Sort by average rating
                      </MenuItem>
                      <MenuItem value={"Sort by latest"}>
                        Sort by latest
                      </MenuItem>
                      <MenuItem value={"Sort by price:low to high"}>
                        Sort by price:low to high
                      </MenuItem>
                      <MenuItem value={"Sort by price:high to low"}>
                        Sort by price:high to low
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </Grid>


{/* =================================shippingdetails====================== */}
              <Grid
                item
                lg={2.5}
                sm={12}
                md={3}
                sx={{
                  border: "3px solid #f7f7f7",
                  padding: "15px",
                  marginTop: "30px",
                  height:"50%",
                  textAlign:"center",
                  display:{md:"flex"}
                }}
              >
                <Box sx={{ borderRadius: "10px", padding: "8px" }}>
                  <LocalShippingIcon
                    sx={{ fontSize: "45px", color: "#CA9D7A" }}
                  />
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "600",
                      marginBottom: "6px",
                    }}
                  >
                    International Shipment
                  </Typography>
                  <Typography
                    sx={{
                      color: "gray",
                      fontSize: "14px",
                      marginBottom: "8px",
                    }}
                  >
                    Your orders are shipped seamlessly between countries
                  </Typography>

                  <EventIcon sx={{ fontSize: "45px", color: "#CA9D7A" }} />
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "600",
                      marginBottom: "6px",
                    }}
                  >
                    30 Days Warranty
                  </Typography>
                  <Typography
                    sx={{
                      color: "gray",
                      fontSize: "14px",
                      marginBottom: "8px",
                    }}
                  >
                    You have the right to return your orders within 30 days.
                  </Typography>

                  <HttpsIcon sx={{ fontSize: "45px", color: "#CA9D7A" }} />
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "600",
                      marginBottom: "6px",
                    }}
                  >
                    Secure Payment
                  </Typography>
                  <Typography
                    sx={{
                      color: "gray",
                      fontSize: "14px",
                      marginBottom: "8px",
                    }}
                  >
                    You have the right to return your orders within 30 days.
                  </Typography>
                </Box>
              </Grid>
              {/* ===========================shop========================== */}

              <Grid item lg={9}  sx={{ width: "100%" }}>
                <Box sx={{display:"flex",flexWrap:"wrap"}}>
                  {productCard.map((item) => (
                    <Grid
                      xs={12} sm={8} md={3} lg={3}
                      sx={{
                        "&:hover": {
                          border: "1px solid #CA9D7A",
                          borderRadius: "10px",
                        },
                        padding: "0px 8px 28px 12px",
                      }}
                    >
                      <Box
                        textAlign={"start"}
                        position={"relative"}
                        padding={"0 0 0 12px"}
                        marginTop={"30px"}
                      >
                        <img
                          src={item.image}
                          alt=""
                          style={{
                            height: "100%",
                            width: "90%",
                            borderRadius: "0",
                          }}
                        />
                        <Typography
                          sx={{
                            fontWeight: "600",
                            margin: "14px 0",
                            fontSize: "15px",
                          }}
                        >
                          {item.proTitle}
                        </Typography>
                        <Typography
                          sx={{
                            color: "#CA9D7A",
                            fontSize: "14px",
                            marginBottom: "13px",
                          }}
                        >
                          <del style={{ color: "gray" }}>{item.delprice}</del>{" "}
                          {item.price}
                        </Typography>
                        <Button
                          onClick={() => navigate("/ring-card")}
                          sx={{
                            backgroundColor: "#CA9D7A",
                            color: "#FFF",
                            fontSize: "12px",
                            padding: "8px 12px",
                            "&:hover": {
                              backgroundColor: "#000",
                              transition: ".3s",
                            },
                          }}
                        >
                          {item.button}
                        </Button>
                      </Box>
                    </Grid>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <Footer/>
    </div>
  );
}

export default Shop_product;

