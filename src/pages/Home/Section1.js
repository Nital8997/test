

import { Typography } from "@mui/material";
import { Grid } from "@mui/joy";
import {Box} from '@mui/material';
import{ Container } from '@mui/material';
import SpaIcon from '@mui/icons-material/Spa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slider1 from '../../assests/images/Home/model-11.png'
import slider2 from "../../assests/images/Home/slider-2.jpg";
import slider3 from "../../assests/images/Home/slider-3.jpg";
import { Button } from '@mui/material';
// import bgImg  from '../../assests/images/Home/background-image.jpg'




// #CA9D7A-orange
function Section1() {
    const OwlCarousel = () => {
        const Slider = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
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
    }
      
  
  return (
    <div>
     <Box className='slider' sx={{backgroundImage:'url("https://jewellerycityweb.thimaqua.info/wp-content/uploads/2022/07/bg_white.jpg")', backgroundSize:"cover",backgroundPosition:"center"}}>
     
      {/* <Box component="img" sx={{width:"100%", height:"70%"}} alt="" src="https://jewellerycityweb.thimaqua.info/wp-content/uploads/2022/07/bg_white.jpg"></Box> */}
        {/* <Container sx={{position:"absolute",top:"0",left:"110px"}}> */}
        <Container>
              <Typography className="elementor-Background" padding={"40px 0"}>
            <Grid container spacing={5}>
                <Grid item xs={12} lg={2.5} sx={{background:"#FFF", border:"solid 1px #f7f9fc", padding:"25px", borderRadius:"10px", height:"300%", marginTop:"20px", display:{lg:"block",md:"none", sm:"none",xs:"block"}}}>

                    <Box sx={{textAlign:"start", padding:"8px 0"}}>
                     <Typography sx={{ fontWeight:"700", fontSize:"16px"}}>All Department</Typography>   
                    </Box>  

                    <Box sx={{textAlign:"start"}}>

                        <Box display={"flex"} padding={"8px 0 5px 0"} borderBottom={"1px solid #ecf0f0"}>
                            <SpaIcon sx={{color:"#CA9D7A"}}></SpaIcon> 
                            <Typography sx={{fontSize:"14px", fontWeight:"500", padding:"4px 0", margin:"0 0 0 4px"}}>Bracelates</Typography>
                        </Box>
                        <Box display={"flex"} padding={"8px 0 5px 0"} borderBottom={"1px solid #ecf0f0"}>
                            <SpaIcon sx={{color:"#CA9D7A"}}></SpaIcon> 
                            <Typography sx={{fontSize:"14px", fontWeight:"500", padding:"4px 0", margin:"0 0 0 4px"}}>Earrings</Typography>
                        </Box>
                        <Box display={"flex"} padding={"8px 0 5px 0"} borderBottom={"1px solid #ecf0f0"}>
                            <SpaIcon sx={{color:"#CA9D7A"}}></SpaIcon> 
                            <Typography sx={{fontSize:"14px", fontWeight:"500", padding:"4px 0", margin:"0 0 0 4px"}}>Onyx</Typography>
                        </Box>
                        <Box display={"flex"} padding={"8px 0 5px 0"} borderBottom={"1px solid #ecf0f0"}>
                            <SpaIcon sx={{color:"#CA9D7A"}}></SpaIcon> 
                            <Typography sx={{fontSize:"14px", fontWeight:"500", padding:"4px 0", margin:"0 0 0 4px"}}>Pandants</Typography>
                            </Box>
                        <Box display={"flex"} padding={"8px 0 5px 0"} borderBottom={"1px solid #ecf0f0"}>
                            <SpaIcon sx={{color:"#CA9D7A"}}></SpaIcon> 
                            <Typography sx={{fontSize:"14px", fontWeight:"500", padding:"4px 0", margin:"0 0 0 4px"}}>Pandants</Typography>
                        </Box>
                        <Box display={"flex"} padding={"8px 0 5px 0"} borderBottom={"1px solid #ecf0f0"}>
                            <SpaIcon sx={{color:"#CA9D7A"}}></SpaIcon> 
                            <Typography sx={{fontSize:"14px", fontWeight:"500", padding:"4px 0", margin:"0 0 0 4px"}}>Tanzanites</Typography>
                            </Box>
                        <Box display={"flex"} padding={"8px 0 5px 0"} borderBottom={"1px solid #ecf0f0"}>
                            <SpaIcon sx={{color:"#CA9D7A"}}></SpaIcon> 
                            <Typography sx={{fontSize:"14px", fontWeight:"500", padding:"4px 0", margin:"0 0 0 4px"}}>Tanzanites</Typography>
                        </Box>
                            <Box display={"flex"} padding={"8px 0 5px 0"}>
                            <SpaIcon sx={{color:"#CA9D7A"}}></SpaIcon> 
                            <Typography sx={{fontSize:"14px", fontWeight:"500", padding:"4px 0", margin:"0 0 0 4px"}}>Bracelates</Typography>
                            </Box>
                    </Box>
                </Grid>

                <Grid item xs={12} lg={9.5} md={12} sm={12}>
                    <Box>
                    <Slider {...Slider}>
        <div>
       
            <Box  sx={{ height:"435px", position:"relative"}}>
                <img src={slider1} alt="" style={{width:"100%", borderRadius:"10px", height:"435px"}}/>
                <div style={{width:"450px", position:"absolute", top:"109px" , left:"54px", textAlign:"start"}}>
                  <Typography sx={{fontSize:"16px", color:"#CA9D7A", marginBottom:"16px", fontWeight:"600"}}>Up to 30% off</Typography>
                  <Typography variant="h3" sx={{fontWeight:"700", marginBottom:"25px"}}>Diamond Ankle Bracelet</Typography>
                  <Button sx={{background:"#CA9D7A", color:"#FFF", fontSize:"12px", padding:"14px", "&:hover" :{
                    background:"#000"
                  } }}>Shop Now!</Button>
                </div>
            </Box>
         
        </div>
        <div>
        
            <Box  sx={{ height:"435px", position:"relative"}}>
                <img src={slider2} alt="" style={{ borderRadius:"10px", width:"100%", height:"435px"}}/>
                <div style={{width:"450px", position:"absolute", top:"109px" , left:"54px", textAlign:"start"}}>
                  <Typography sx={{fontSize:"16px", color:"#CA9D7A", marginBottom:"16px", fontWeight:"600"}}>New Arrival</Typography>
                  <Typography variant="h3" sx={{fontWeight:"700", marginBottom:"25px"}}>Diamond Cut <br /> Ankle</Typography>
                  <Button sx={{background:"#CA9D7A", color:"#FFF", fontSize:"12px", padding:"14px", "&:hover" :{
                    background:"#000"
                  } }}>Shop Now!</Button>
                </div>
            </Box>
         
        </div>
        <div>
          <Box  sx={{ height:"435px", position:"relative"}}>
                <img src={slider3} alt="" style={{ borderRadius:"10px", width:"100%", height:"435px"}}/>
                <div style={{width:"450px", position:"absolute", top:"109px" , left:"54px", textAlign:"start"}}>
                  <Typography sx={{fontSize:"16px", color:"#CA9D7A", marginBottom:"16px", fontWeight:"600"}}>#WeekendDeals</Typography>
                  <Typography variant="h3" sx={{fontWeight:"700", marginBottom:"25px"}}>Discount up to 35% only this month.</Typography>
                  <Button sx={{background:"#CA9D7A", color:"#FFF", fontSize:"12px", padding:"14px", "&:hover" :{
                    background:"#000"
                  } }}>Shop Now!</Button>
                </div>
            </Box>
        </div>
        
      </Slider>
                    </Box>
                </Grid>
                </Grid>
            </Typography>
        </Container>
        </Box>
    </div>
  )
}

export default Section1;
