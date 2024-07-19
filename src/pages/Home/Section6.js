import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react';
import proimage from '../../assests/images/Home/productimg-3.jpg';
import proimage2 from '../../assests/images/Home/productimg-4.jpg';
import proimage3 from '../../assests/images/Home/productimg-5.jpg';
import proimag4 from '../../assests/images/Home/productimg-2.jpg';
import { useNavigate } from 'react-router-dom';





function Section6() {
    const navigate = useNavigate();
    const productDetails = [
        { image:proimage, proTitle:"Stainless Steel Cutout Station Ankle Bracele", price:" $99.00", button:"Select options", delPrice:"$128.00" },
        { image:proimage2, proTitle:"Veronece 18K Clad 10″ Diamond Cut Anklet", price:"$12.00", button:"Select options",delPrice:"$15.00"},
        { image:proimage3, proTitle:"14K Gold 9″ Diamond Ankle Bracelet", price:"$30.00", button:"Select options", delPrice:"$35.00"},
        { image:proimag4, proTitle:"Stainless Steel Cutout Station Ankle Bracelet", price:"$12.00", button:"Select options", delPrice:"$15.00" },
    ];
  return (
    <div>
      <Box sx={{marginTop:"-190px"}}>
        <Container>
            <Box>
                <Typography sx={{textAlign:"start", fontSize:"30px", fontWeight:"700", position:"relative",
                '&::after':{
                    content:'""',
                    position:"absolute",
                    top:"43%",
                    left:"22%",
                    width:"84%",
                    border:"1px solid #ecf0f0",
                
                }}}>Product On Sale!</Typography>

            <Grid container spacing={1} sx={{margin:"10px"}}>
                {productDetails.map(item => (
                    <Grid item xs={3} key={item.id} sx={{"&:hover":{
                        border:"1px solid #CA9D7A",
                        borderRadius:"10px",
                    }}}>
                        <Box sx={{textAlign:"start", padding:"10px", position:"relative"}}>
                            <Box>
                                <img src={item.image} alt={item.proTitle} style={{height:"100%", width:"100%", borderRadius:"10px", marginBottom:"10px"}} />
                            </Box>
                            <Typography sx={{fontWeight:"600", marginBottom:"10px"}}>{item.proTitle}</Typography>
                            <Typography sx={{fontSize:"15px", color:"#CA9D7A", fontWeight:"500",marginBottom:"10px",}}>
                                <del style={{color:"gray"}}>{item.delPrice}</del>
                               <u> {item.price}</u>
                            </Typography>
                            <Button onClick={()=> navigate("/ring-card")} sx={{backgroundColor:"#CA9D7A", color:"#FFF", fontSize:"12px", padding:"10px 20px", fontWeight:"600" , "&:hover" :{
                                background:"#000",
                                transition:".3s"
                            }}}>{item.button}</Button>
                             <Box sx={{height:"10%", width:"16%", backgroundColor:"#FFF",fontSize:"13px", fontWeight:"600", position:"absolute", top:"0", right:"0", borderRadius:"50%",display:"flex", justifyContent:"center",alignItems:"center" }}>Sale!</Box>
                        </Box>
                    </Grid>
                ))}

            </Grid>
            </Box>
        </Container>
      </Box>
    </div>
  )
}

export default Section6
