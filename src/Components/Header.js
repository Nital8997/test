import React from "react";
import { Box , Container ,Typography } from "@mui/material";
import img1 from "../assets/images/Home/logo-1.png";
import { Input } from "@mui/joy";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CallIcon from "@mui/icons-material/Call";
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  return (
    <div>
      <Box>
        <Box
          sx={{
            borderBottom: "1px solid #CDD7E1",
            display: { xs: "none", sm: "none", md: "block", lg: "block" },
          }}
        >
          <Container>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              padding={"18px 0"}
              color={"#95999D"}
            >
              <Box>
                <Typography variant="body2">
                  Discount up to 35% for first purchase only this month.
                </Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography variant="body2">Find our branch</Typography>
                <Typography variant="body2" marginLeft={"20px"}>
                  Download our app
                </Typography>
              </Box>
            </Box>
          </Container>
        </Box>

        <Container>
          <Box
            display={"flex"}
            padding={"20px 0 "}
            justifyContent={"space-between"}
          >
            <Box>
              <img src={img1} alt="" />
            </Box>
            <Box
              marginLeft={"20px"}
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "block",
                  lg: "block",
                  lg: "flex",
                  md: "flex",
                },
              }}
            >
              <Input
                placeholder="Search.…"
                variant="outlined"
                size="lg"
                sx={{
                  padding: "0 390px 0 20px",
                  backgroundColor: "#F7F7F7",
                  height: "35px",
                  borderRadius: "10px 0 0 10px",
                  fontSize: "14px",
                }}
              />
              <Box
                sx={{
                  background: "#CA9D7A",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "0 5px 5px 0",
                  padding: "7px 20px",
                  height: "30px",
                }}
              >
                <SearchIcon sx={{ color: "#FFF" }}></SearchIcon>
              </Box>
            </Box>

            <Box marginLeft={"60px"} display={"flex"} alignItems={"center"}>
              <AccountCircleOutlinedIcon
                sx={{
                  fontSize: "34px",
                  color: "#CA9D7A",
                  display: { lg: "block", md: "none", sm: "none", xs: "none" },
                }}
              ></AccountCircleOutlinedIcon>
              <Box
                textAlign={"start"}
                paddingLeft={"10px"}
                sx={{
                  display: { lg: "block", md: "none", sm: "none", xs: "none" },
                }}
              >
                <Box color={"gray"} fontSize={"15px"}>
                  Sign in
                </Box>
                <Box fontWeight={"600"}>Account</Box>
              </Box>
              <Box position={"relative"} paddingLeft={"20px"}>
                <ShoppingCartIcon sx={{ color: "#CA9D7A", fontSize: "34px" }} />
                <Box
                  position={"absolute"}
                  top={"-9px"}
                  left={"41px"}
                  fontSize={"13px"}
                  sx={{ color: "#CA9D7A", height: "20px", width: "20px" }}
                >
                  0
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>

        {/* ==============================================navbar================================ */}

        <Box sx={{ background: "#CA9D7A", padding: "6px 0", color: "#FFF" }}>
          <Container>
            <Box>
              <nav>
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  fontWeight={"700"}
                  padding={"14px 0"}

                  >
                    <Box sx={{display:"flex", alignItems:"center", display:{md:"none",lg:"none",sm:"block", xs:"block"}}}><MenuIcon/></Box>
                    
                  <Box sx={{display:"flex", padding:"10px 8px", textAlign:"center",alignItems:"center", display:{lg:"flex", md:"flex",sm:"none",xs:"none"}}}>
                    <Typography sx={{paddingRight:"22px",fontWeight:"600",fontSize:"15px"}}>Home</Typography>
                    <Typography sx={{paddingRight:"22px",fontWeight:"600",fontSize:"15px"}}>About Us</Typography>
                    <Typography sx={{paddingRight:"22px",fontWeight:"600",fontSize:"15px"}}>Shop</Typography>

                    <Typography sx={{paddingRight:"22px",fontWeight:"600",fontSize:"15px",alignItems:"center",display:"flex", position:"relative","&:hover":{
                        "& .subMenu":{
                            opacity:"1",
                            visibility:"visible"
                        }
                    }}}>
                      Pages
                      <KeyboardArrowDownIcon
                        sx={{ fontSize: "20px"}}/>
                       <Box className='subMenu' sx={{position:"absolute", top:"100%", left:"0", color:"#95999D", zIndex:"1",backgroundColor:"#FFF", padding:"10px 48px 10px 18px", borderRadius:"10px", textAlign:"start",whiteSpace:"nowrap",visibility:"hidden",opacity:"0", marginTop:"6px" }}>
                        <Typography sx={{fontSize:"15px", paddingBottom:"20px"}}>Team</Typography>
                        <Typography sx={{fontSize:"15px", paddingBottom:"20px"}}>404</Typography>
                        <Typography sx={{fontSize:"15px", paddingBottom:"20px"}}>My Account</Typography>
                        <Typography sx={{fontSize:"15px", paddingBottom:"20px"}}>Cart</Typography>
                        <Typography sx={{fontSize:"15px", paddingBottom:"20px"}}>Checkout</Typography>
                        </Box>
                    </Typography >

                    <Typography sx={{paddingRight:"22px",fontWeight:"600",fontSize:"15px",alignItems:"center",display:"flex",position:"relative","&:hover":{
                        "& .subMenu":{
                            opacity:"1",
                            visibility:"visible"
                        }
                    }}}>
                      Blog <KeyboardArrowDownIcon sx={{ fontSize: "20px" }} />
                      <Box className='subMenu' sx={{position:"absolute", top:"100%", left:"0", color:"#95999D", zIndex:"1",backgroundColor:"#FFF", padding:"10px 48px 10px 18px", borderRadius:"10px", textAlign:"start",whiteSpace:"nowrap",visibility:"hidden",opacity:"0", marginTop:"6px"}}>
                        <Typography sx={{fontSize:"15px"}}>Single Blog</Typography>
                      </Box>
                    </Typography>

                    <Typography sx={{paddingRight:"22px",fontWeight:"600",fontSize:"15px"}}>Contact</Typography>
                  </Box>

                  <Box sx={{textAlign:"center", alignItems:"center", display:"flex", fontSize:"15px"}}><Typography sx={{display:"flex", alignItems:"center" , fontWeight:"600"}}>
                    <CallIcon sx={{ paddingRight: "10px"}} />
                    +1 (123) 456 78 90
                  </Typography></Box>
                </Box>
              </nav>

            </Box>
          </Container>
        </Box>
      </Box>
    </div>
  );
}

export default Header;

