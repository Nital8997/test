import { Container,Box,Typography ,Grid} from '@mui/material'
import React from 'react'
import b1 from '../assets/Blogimages/b1.jpg'
import b2 from '../assets/Blogimages/B2.jpg'
import b3 from '../assets/Blogimages/B3.jpg'
import b4 from '../assets/Blogimages/B4.jpg'
import b5 from '../assets/Blogimages/B5.jpg'
import b6 from '../assets/Blogimages/B6.jpg'
import { Navigate, useNavigate, } from 'react-router-dom'



function Category() {
  const navigate = useNavigate("")


  
  return (
    <div>
      <Box sx={{marginBottom:"50px",marginBottom:"100px"}}>
        <Box  sx={{backgroundColor:"#f7f7f7"}}>
        <Container>
          <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"63px 0px 63px 0px"}}>
            <Typography  variant='h4' sx={{fontWeight:"600",textAlign:"start",color:"#132a36"}}>Category: Latest</Typography>
            <Typography sx={{fontSize:"12px",color:"gray",
                ":&hover":{
                    color:"#ca9d7a"
                }
            }}>Home / Latest</Typography>
          </Box>
        </Container>
        </Box>
        <Container>
            <Box sx={{marginTop:"80px"}}>
            <Grid container spacing={2}>
           
  <Grid item lg={4} md={4} sm={6} xs={12}>
  <Box sx={{textAlign:"start",position:"relative",borderRadius:"10px",boxShadow:"0px 1px 2px gray"}}onClick={() => navigate("/shop-cart")}  >
        <img src={b1} alt=""  style={{height:"100%",width:"100%",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}/>
       <Box sx={{padding:"15px 15px 15px 15px"}}>
       <Box>
            <Typography sx={{color:"#818EA0",fontWeight:"500",paddingTop:"25px" ,"  &:hover"
              :{
                color:"#CA9D7A"
              }
            }}>
            Ruby on Rose Accessories and Blue Gemstones
            </Typography>
            <Typography sx={{color:"gray",paddingTop:"25px",marginBottom:"20px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra, mi id rhoncus ultricies, magna eros ultricies leo, dictum aliquam lorem nisl vel sapien. Pellentesque</Typography>
        </Box>
        <Box sx={{color:"gray",paddingTop:"25px",borderTop:"solid 1px #f7f7f7",display:"flex",gap:"20px"}}>
        <Typography sx={{borderRight:"solid 1px #f7f7f7",fontSize:"12px"}}>August 16, 2018</Typography>
        <Typography sx={{fontSize:"12px"}}> No Comments</Typography>
        </Box>
        <Box sx={{height:"25px",width:"70px",borderRadius:"50px",backgroundColor:"white",borderTop:"solid 1px ",position:"absolute",top:"4%",left:"75%"}}>
            <Typography sx={{fontSize:"12px",textAlign:"center",padding:"3px"}}>LATEST</Typography>
        </Box>
       </Box>
    </Box>
  </Grid>
  <Grid item lg={4} md={4} sm={6} xs={12}>
  <Box sx={{textAlign:"start",position:"relative",borderRadius:"10px",boxShadow:"0px 1px 2px gray"}}>
        <img src={b2} alt=""  style={{width:"100%",height:"250px",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}/>
       <Box sx={{padding:"15px 15px 15px 15px"}}>
       <Box>
            <Typography sx={{color:"#818EA0",fontWeight:"500",paddingTop:"25px",
              "  &:hover"
              :{
                color:"#CA9D7A"
              }
            }}>
            Ruby on Rose Accessories and Blue Gemstones
            </Typography>
            <Typography sx={{color:"gray",paddingTop:"25px",marginBottom:"20px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra, mi id rhoncus ultricies, magna eros ultricies leo, dictum aliquam lorem nisl vel sapien. Pellentesque</Typography>
        </Box>
        <Box sx={{color:"gray",paddingTop:"25px",borderTop:"solid 1px #f7f7f7",display:"flex",gap:"20px"}}>
        <Typography sx={{borderRight:"solid 1px #f7f7f7",fontSize:"12px"}}>August 16, 2018</Typography>
        <Typography sx={{fontSize:"12px"}}> No Comments</Typography>
        </Box>
        <Box sx={{height:"25px",width:"70px",borderRadius:"50px",backgroundColor:"white",borderTop:"solid 1px ",position:"absolute",top:"4%",left:"75%"}}>
            <Typography sx={{fontSize:"12px",textAlign:"center",padding:"3px"}}>LATEST</Typography>
        </Box>
       </Box>
    </Box>
  </Grid>
  <Grid item lg={4} md={4} sm={6} xs={12}>
  <Box sx={{textAlign:"start",position:"relative",borderRadius:"10px",boxShadow:"0px 1px 2px gray"}}>
        <img src={b3} alt=""  style={{height:"250px",width:"100%",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}/>
       <Box sx={{padding:"15px 15px 15px 15px"}}>
       <Box>
            <Typography sx={{color:"#818EA0",fontWeight:"500",paddingTop:"25px","  &:hover"
              :{
                color:"#CA9D7A"
              }}}>
            Ruby on Rose Accessories and Blue Gemstones
            </Typography>
            <Typography sx={{color:"#777777",paddingTop:"25px",marginBottom:"20px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra, mi id rhoncus ultricies, magna eros ultricies leo, dictum aliquam lorem nisl vel sapien. Pellentesque</Typography>
        </Box>
        <Box sx={{color:"gray",paddingTop:"25px",borderTop:"solid 1px #f7f7f7",display:"flex",gap:"20px"}}>
        <Typography sx={{borderRight:"solid 1px #f7f7f7",fontSize:"12px"}}>August 16, 2018</Typography>
        <Typography sx={{fontSize:"12px"}}> No Comments</Typography>
        </Box>
        <Box sx={{height:"25px",width:"70px",borderRadius:"50px",backgroundColor:"white",borderTop:"solid 1px ",position:"absolute",top:"4%",left:"75%"}}>
            <Typography sx={{fontSize:"12px",textAlign:"center",padding:"3px"}}>LATEST</Typography>
        </Box>
       </Box>
    </Box>
  </Grid>
  <Grid item lg={4} md={4} sm={6} xs={12}>
  <Box sx={{textAlign:"start",position:"relative",borderRadius:"10px",boxShadow:"0px 1px 2px gray"}}>
        <img src={b4} alt=""  style={{height:"250px",width:"100%",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}/>
       <Box sx={{padding:"15px 15px 15px 15px"}}>
       <Box>
            <Typography sx={{color:"#818EA0",fontWeight:"500",paddingTop:"25px","  &:hover"
              :{
                color:"#CA9D7A"
              }}}>
            Ruby on Rose Accessories and Blue Gemstones
            </Typography>
            <Typography sx={{color:"#777777",paddingTop:"25px",marginBottom:"20px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra, mi id rhoncus ultricies, magna eros ultricies leo, dictum aliquam lorem nisl vel sapien. Pellentesque</Typography>
        </Box>
        <Box sx={{color:"gray",paddingTop:"25px",borderTop:"solid 1px #f7f7f7",display:"flex",gap:"20px"}}>
        <Typography sx={{borderRight:"solid 1px #f7f7f7",fontSize:"12px"}}>August 16, 2018</Typography>
        <Typography sx={{fontSize:"12px"}}> No Comments</Typography>
        </Box>
        <Box sx={{height:"25px",width:"70px",borderRadius:"50px",backgroundColor:"white",borderTop:"solid 1px ",position:"absolute",top:"4%",left:"75%"}}>
            <Typography sx={{fontSize:"12px",textAlign:"center",padding:"3px"}}>LATEST</Typography>
        </Box>
       </Box>
    </Box>
  </Grid>
  <Grid item lg={4} md={4} sm={6} xs={12}>
  <Box sx={{textAlign:"start",position:"relative",borderRadius:"10px",boxShadow:"0px 1px 2px gray"}}>
        <img src={b5} alt=""  style={{height:"250px",width:"100%",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}/>
       <Box sx={{padding:"15px 15px 15px 15px"}}>
       <Box>
            <Typography sx={{color:"#818EA0",fontWeight:"500",paddingTop:"25px","  &:hover"
              :{
                color:"#CA9D7A"
              }}}>
            Ruby on Rose Accessories and Blue Gemstones
            </Typography>
            <Typography sx={{color:"#777777",paddingTop:"25px",marginBottom:"20px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra, mi id rhoncus ultricies, magna eros ultricies leo, dictum aliquam lorem nisl vel sapien. Pellentesque</Typography>
        </Box>
        <Box sx={{color:"gray",paddingTop:"25px",borderTop:"solid 1px #f7f7f7",display:"flex",gap:"20px"}}>
        <Typography sx={{borderRight:"solid 1px #f7f7f7",fontSize:"12px"}}>August 16, 2018</Typography>
        <Typography sx={{fontSize:"12px"}}> No Comments</Typography>
        </Box>
        <Box sx={{height:"25px",width:"70px",borderRadius:"50px",backgroundColor:"white",borderTop:"solid 1px ",position:"absolute",top:"4%",left:"75%"}}>
            <Typography sx={{fontSize:"12px",textAlign:"center",padding:"3px"}}>LATEST</Typography>
        </Box>
       </Box>
    </Box>
  </Grid>
  <Grid item lg={4} md={4} sm={6} xs={12}>
  <Box sx={{textAlign:"start",position:"relative",borderRadius:"10px",boxShadow:"0px 1px 2px gray"}}>
        <img src={b6} alt=""  style={{height:"250px",width:"100%",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}}/>
       <Box sx={{padding:"15px 15px 15px 15px"}}>
       <Box>
            <Typography sx={{color:"#818EA0",fontWeight:"500",paddingTop:"25px","  &:hover"
              :{
                color:"#CA9D7A"
              }}}>
            Ruby on Rose Accessories and Blue Gemstones
            </Typography>
            <Typography sx={{color:"#777777",paddingTop:"25px",marginBottom:"20px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra, mi id rhoncus ultricies, magna eros ultricies leo, dictum aliquam lorem nisl vel sapien. Pellentesque</Typography>
        </Box>
        <Box sx={{color:"gray",paddingTop:"25px",borderTop:"solid 1px #f7f7f7",display:"flex",gap:"20px"}}>
        <Typography sx={{borderRight:"solid 1px #f7f7f7",fontSize:"12px"}}>August 16, 2018</Typography>
        <Typography sx={{fontSize:"12px"}}> No Comments</Typography>
        </Box>
        <Box sx={{height:"25px",width:"70px",borderRadius:"50px",backgroundColor:"white",borderTop:"solid 1px ",position:"absolute",top:"4%",left:"75%"}}>
            <Typography sx={{fontSize:"12px",textAlign:"center",padding:"3px"}}>LATEST</Typography>
        </Box>
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

export default Category


