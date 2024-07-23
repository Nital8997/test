import React from 'react'
import { Container, Box, Typography, Grid, Button } from '@mui/material'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

function Carts() {
    return (
        <div>
            <Box>
                <Container>

                    <Box sx={{marginTop:"25px"}}>
                        <Box display="flex" alignItems="center" sx={{ padding: "8px" }}>
                            <Typography sx={{ fontSize: "23px", color: "#818ea0" }}>Your cart</Typography>
                            <Box flexGrow={1} borderBottom="1px solid #ecf0f0" marginLeft={2} />

                        </Box>
                        <Box sx={{display:"flex",backgroundColor:"#F6F5F8",padding:"15px 15px",borderTop:"solid 3px #1E85BE",marginTop:"16px"}}>
                            <Typography sx={{display:"flex",gap:"15px"}}>< CalendarTodayIcon  sx={{color:"#1E85BE"}}/>
                            <Typography sx={{fontSize:"16px"}}>Your cart is currently empty.</Typography> 
                            </Typography>
                            
                        </Box>
                        <Box sx={{display:"flex",alignItems:"start",marginTop:"27px"}}>
                 <Button sx={{fontWeight:"700",color:"#555C64",backgroundColor:"#DCD7E3","&:hover":{
                    backgroundColor:"#DCD7E3"
                 }}}>Return to shop</Button>
                        </Box>
                    </Box>
                    <Box>
                    <Box display="flex" alignItems="center" sx={{ padding: "8px" ,marginTop:"140px"}}>
                            <Typography sx={{ fontSize: "23px", color: "#818ea0" }}>You may be interested in</Typography>
                            <Box flexGrow={1} borderBottom="1px solid #ecf0f0" marginLeft={2} />

                        </Box>

                    </Box>
                </Container>
            </Box>
        </div>
    )
}

export default Carts
