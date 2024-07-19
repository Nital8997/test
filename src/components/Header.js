import React from 'react';
import { ListItem, MenuItem, Typography } from '@mui/material';
import { Container } from '@mui/material';
import { Box } from '@mui/material';
import img1 from '../assests/images/Home/logo-1.png';
import { Input } from '@mui/joy';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { List } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CallIcon from '@mui/icons-material/Call';



function Header() {
    return (
        <div>
            <Box >
                <Box sx={{ borderBottom: "1px solid #818EA0" }}>
                    <Container maxWidth={'lg'}>
                        <Box display={'flex'} justifyContent={"space-between"} padding={"10px"} color={"gray"}>
                            <Box>
                                <Typography variant='body2'>
                                    Discount up to 35% for first purchase only this month.
                                </Typography>
                            </Box>
                            <Box sx={{ display: "flex" }}>

                                <Typography variant='body2'>
                                    Find our branch
                                </Typography>
                                <Typography variant='body2' marginLeft={"20px"}>
                                    Download our app
                                </Typography>
                            </Box>
                        </Box>
                    </Container>
                </Box>

                <Container maxWidth={"lg"}>
                    <Box display={'flex'} padding={'10px'}>
                        <Box>
                            <img src={img1} alt="" />
                        </Box>
                        <Box marginLeft={'20px'} display={'flex'}>
                            <Input placeholder="Search.…" variant='outlined' size='lg' sx={{ padding: "0 350px 0 20px" }} />
                            <Box sx={{ background: "#CA9D7A", padding: "14px 18px", borderRadius: "0 5px 5px 0" }}><SearchIcon sx={{color:"#FFF"}}></SearchIcon> </Box>
                        </Box>

                        <Box marginLeft={"60px"} display={"flex"} alignItems={"center"} >
                            <AccountCircleOutlinedIcon sx={{ fontSize: "34px", color: "#CA9D7A" }}></AccountCircleOutlinedIcon>
                            <Box textAlign={"start"} paddingLeft={"10px"}>
                                <Box color={"gray"} fontSize={"15px"}>Sign in</Box>
                                <Box fontWeight={"600"}>Account</Box>
                            </Box>
                            <Box position={"relative"} paddingLeft={"20px"}>
                                <ShoppingCartIcon sx={{ color: "#CA9D7A", fontSize: "34px" }} />
                                <Box position={"absolute"} top={"-9px"} left={"41px"} fontSize={"13px"} sx={{ color: "#CA9D7A", height: "20px", width: "20px" }}>
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
                                <Box display={"flex"} justifyContent={"space-between"} fontWeight={"700"}>
                                    <List sx={{ display: "flex", whiteSpace: "nowrap" }}>
                                        <ListItem>
                                            <Typography>Home</Typography>
                                        </ListItem>
                                        <ListItem>
                                        <Typography>About Us</Typography>
                                        </ListItem>
                                        <ListItem>
                                        <Typography>Shop</Typography>
                                        </ListItem>
                                        <ListItem className='menu' position={"relative"}>
                                           
                                            Pages <KeyboardArrowDownIcon sx={{ fontSize: "20px" }}></KeyboardArrowDownIcon>
                                            <Typography background={"#FFF"} color={"gray"} borderRadius={"10px"} padding={"10px 8px"}
                                                sx={{
                                                    borderRadius: "10px", position: "absolute", top: "90%", left: "0", padding: "0px 0px", "&:hover": {
                                                        "& .subMenu": {
                                                            opacity: "1",
                                                            visibility: "visible"
                                                        }
                                                    }
                                                }}
                                            >
                                                
                                                <Typography className='subMenu' sx={{ opacity: "0", visibility: "hidden", background: "#FFF", color: "gray" }}>
                                                    <MenuItem sx={{ fontSize: "15px" }}>Team</MenuItem>
                                                    <MenuItem sx={{ fontSize: "15px" }}>404</MenuItem>
                                                    <MenuItem sx={{ fontSize: "15px" }}>My Account</MenuItem>
                                                    <MenuItem sx={{ fontSize: "15px" }}>Cart</MenuItem>
                                                    <MenuItem sx={{ fontSize: "15px" }}>Checkout</MenuItem>
                                                </Typography>
                                            </Typography>
                                        </ListItem>
                                        <ListItem className='Menu' sx={{
                                            position: "relative", "&:hover": {
                                                "& .subMenu1": {
                                                    opacity: "1",
                                                    visibility: "visible"
                                                }
                                            }
                                        }}>
                                            <ListItem >Blog <KeyboardArrowDownIcon sx={{ fontSize: "20px" }} /></ListItem>
                                            <Typography className='subMenu1' sx={{ position: "absolute", top: "100%", left: "0", opacity: "0", visibility: "hidden", background:"#FFF", color:"gray" , padding:"8px 10px", fontSize:"14px", borderRadius:"5px" }}>
                                                Single Blog
                                            </Typography>
                                        </ListItem>
                                        <ListItem>
                                            Contact
                                        </ListItem>
                                    </List>
                                    <List sx={{ display: "flex", textAlign: "center" }}>
                                        <ListItem>
                                            <CallIcon sx={{ paddingRight: "10px" }} />
                                            +1 (123) 456 78 90
                                        </ListItem>
                                    </List>
                                </Box>
                            </nav>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </div>
    )
}

export default Header
