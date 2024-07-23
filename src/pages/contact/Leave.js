import React from 'react'
import { Box, Grid, Container, Typography, Label, TextField, styled,Button } from '@mui/material'
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { Height, Padding } from '@mui/icons-material';

function Leave() {
    const CustomTextArea = styled('textarea')({
       
    });

    return (
        <div>
            <Box sx={{marginTop:"90px"}}>
                <Container maxWidth={"lg"} sx={{overflow:"hidden"}}>
                    <Grid container spacing={3}>
                        <Grid item xl={6} md={6} lg={6} sm={12}>
                            <Box sx={{ textAlign: "start" }}>
                                <Typography variant='h3' sx={{ fontWeight: "600", color: "#132a36", marginBottom: "20px" }}>
                                    Get in touch
                                </Typography>
                                <Typography sx={{ color: "gray", borderBottom: "solid 1px #ECF0F0", paddingBottom: "35px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</Typography>
                            </Box>
                            <Box sx={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "20px" }}>
                                <Box>
                                    <Typography><RoomOutlinedIcon sx={{ color: "#CA9D7A", fontSize: "50px", paddingBottom: "20px" }} /></Typography>
                                </Box>
                                <Box sx={{ textAlign: "start" }}>
                                    <Typography sx={{ color: "#132a36", fontWeight: "600", }}>
                                        Head office</Typography>
                                    <Typography sx={{ color: "gray", fontSize: "15px", paddingTop: "10px" }}>Jln Cempaka Wangi No 22</Typography>
                                    <Typography sx={{ color: "gray", fontSize: "15px" }}>  Jakarta - Indonesia</Typography>
                                </Box>
                            </Box>

                            <Box sx={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "20px" }}>
                                <Box>
                                    <Typography><EmailOutlinedIcon sx={{ color: "#CA9D7A", fontSize: "50px", paddingBottom: "20px" }} /></Typography>
                                </Box>
                                <Box sx={{ textAlign: "start" }}>
                                    <Typography sx={{ color: "#132a36", fontWeight: "600", }}>
                                        Email us</Typography>
                                    <Typography sx={{ color: "gray", fontSize: "15px", paddingTop: "10px" }}>support@yourdomain.tld</Typography>
                                    <Typography sx={{ color: "gray", fontSize: "15px" }}>  hello@yourdomain.tld</Typography>
                                </Box>
                            </Box>

                            <Box sx={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "20px" }}>
                                <Box>
                                    <Typography><RoomOutlinedIcon sx={{ color: "#CA9D7A", fontSize: "50px", paddingBottom: "20px" }} /></Typography>
                                </Box>
                                <Box sx={{ textAlign: "start" }}>
                                    <Typography sx={{ color: "#132a36", fontWeight: "600", }}>
                                        Head office</Typography>
                                    <Typography sx={{ color: "gray", fontSize: "15px", paddingTop: "10px" }}>+6221.2002.2012
                                    </Typography>
                                    <Typography sx={{ color: "gray", fontSize: "15px" }}>  +6221.2002.2013</Typography>
                                </Box>
                            </Box>
                        </Grid>
           


<Grid item xl={6} md={6} lg={6} sm={12}>
    <Box sx={{ textAlign: "start" }}>
        <Typography variant='h3' sx={{ fontWeight: "600", color: "#132a36", marginBottom: "20px" }}>
            Leave us a message
        </Typography>
        <Typography sx={{ color: "gray", paddingBottom: "35px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </Typography>
    </Box>
    <Box>
        <Box sx={{ textAlign: "start" }}>
            <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: "15px" }}>
                <Box sx={{ width: "100%" }}>
                    <Typography sx={{ color: "#132a36", fontWeight: "500" }}>Name</Typography>
                    <TextField
                        id="outlined-basic"
                        placeholder='Name'
                        fullWidth
                        sx={{
                            borderRadius: "9px",    
                            border: "solid 1px #ECF0F0",
                            '& .MuiOutlinedInput-root': {
                                '&:hover fieldset': {
                                    borderColor: '#ca9d7a',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#ca9d7a',
                                },
                            },
                        }}
                    />
                </Box>
                <Box sx={{ width: "100%" }}>
                    <Typography sx={{ color: "#132a36", fontWeight: "500" }}>Company</Typography>
                    <TextField
                        id="outlined-basic"
                        placeholder='Company'
                        fullWidth
                        required
                        sx={{
                            borderRadius: "9px",
                            border: "solid 1px #ECF0F0",
                            '& .MuiOutlinedInput-root': {
                                '&:hover fieldset': {
                                    borderColor: '#ca9d7a',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#ca9d7a',
                                },
                            },
                        }}
                    />
                </Box>
            </Box>

            <Box     sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: "15px", paddingBottom: "15px" }}>
                <Box sx={{ width: "100%" }}>
                    <Typography sx={{ color: "#132a36", fontWeight: "500" }}>Email</Typography>
                    <TextField
                        id="outlined-basic"
                        placeholder='Email'
                        fullWidth
                        sx={{
                            borderRadius: "9px",
                            border: "solid 1px #ECF0F0",
                            '& .MuiOutlinedInput-root': {
                                '&:hover fieldset': {
                                    borderColor: '#ca9d7a',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#ca9d7a',
                                },
                            },
                        }}
                    />
                </Box>
                <Box sx={{ width: "100%" }}>
                    <Typography sx={{ color: "#132a36", fontWeight: "500" }}>Phone</Typography>
                    <TextField
                        id="outlined-basic"
                        placeholder='Phone'
                        fullWidth
                        sx={{
                            borderRadius: "9px",
                            border: "solid 1px #ECF0F0",
                            '& .MuiOutlinedInput-root': {
                                '&:hover fieldset': {
                                    borderColor: '#ca9d7a',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#ca9d7a',
                                },
                            },
                        }}
                    />
                </Box>
            </Box>

            <Box sx={{ paddingBottom: "15px" }}>
                <Box sx={{ width: "100%" }}>
                    <Typography sx={{ color: "#132a36", fontWeight: "500" }}>Subject</Typography>
                    <TextField
                        id="outlined-basic"
                        placeholder='Subject'
                        fullWidth
                        sx={{
                            borderRadius: "9px",
                            border: "solid 1px #ECF0F0",
                            '& .MuiOutlinedInput-root': {
                                '&:hover fieldset': {
                                    borderColor: '#ca9d7a',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#ca9d7a',
                                },
                            },
                        }}
                    />
                </Box>
            </Box>

            <Box sx={{ paddingBottom: "10px" }}>
                <Typography sx={{ color: "#132a36", fontWeight: "500" }}>Message</Typography>
                <CustomTextArea id="outlined-basic" placeholder='Message' sx={{
                    width: "100%",
                    height: "150px",
                    padding: "20px",
                    borderRadius: "9px",
                    color: "gray",
                    border: "solid 1px #ECF0F0",
                    '&:hover': {
                        borderColor: '#ca9d7a',
                    },
                    '&:focus': {
                        borderColor: '#ca9d7a',
                        outline: 'none',
                    },
                }} />
            </Box>

            <Box>
                <Button
                    sx={{
                        height: "50px",
                        width: "100%",
                        backgroundColor: "#CA9D7A",
                        color: "white",
                        '&:hover': {
                            backgroundColor: "black"
                        }
                    }}
                >
                    Send Message
                </Button>
            </Box>
        </Box>
    </Box>
</Grid>


                    </Grid>
                </Container>
            </Box>
        </div>
    )
}

export default Leave
