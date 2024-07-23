import { Box, Container, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function Section7() {
    const [expandedIndex, setExpandedIndex] = useState(-1); 
    const [expandedIndex1, setExpandedIndex1] = useState(-1); 

    
    const faqs = [
        {
            question: "Proin congue viverra imperdiet nam laoreet blandit fermentum?",
            answer: "Egestas maximus ullamcorper quis vestibulum nibh aptent dignissim donec imperdiet. Dui ridiculus dictumst auctor proin vivamus efficitur aptent tempus. Curae tincidunt libero vulputate montes odio non maecenas justo ullamcorper enim.",
        },
        {
            question: "Ultrices mauris morbi congue viverra netus litora consectetuer?",
            answer: "Egestas maximus ullamcorper quis vestibulum nibh aptent dignissim donec imperdiet. Dui ridiculus dictumst auctor proin vivamus efficitur aptent tempus. Curae tincidunt libero vulputate montes odio non maecenas justo ullamcorper enim.",
        },
        {
            question: "Ut phasellus litora in metus molestie?",
            answer: "Egestas maximus ullamcorper quis vestibulum nibh aptent dignissim donec imperdiet. Dui ridiculus dictumst auctor proin vivamus efficitur aptent tempus. Curae tincidunt libero vulputate montes odio non maecenas justo ullamcorper enim.",
        },
        {
            question: "Ad quisque eleifend mauris himenaeos mattis amet fermentum ac vel?",
            answer: "Egestas maximus ullamcorper quis vestibulum nibh aptent dignissim donec imperdiet. Dui ridiculus dictumst auctor proin vivamus efficitur aptent tempus. Curae tincidunt libero vulputate montes odio non maecenas justo ullamcorper enim.",
        },
        {
            question: "Cras non felis tristique nostra si ipsum sodales accumsan ex?",
            answer: "Egestas maximus ullamcorper quis vestibulum nibh aptent dignissim donec imperdiet. Dui ridiculus dictumst auctor proin vivamus efficitur aptent tempus. Curae tincidunt libero vulputate montes odio non maecenas justo ullamcorper enim.",
        },
    ];

    const frequently = [
        {
            question: "Proin congue viverra imperdiet nam laoreet blandit fermentum?",
            answer: "Egestas maximus ullamcorper quis vestibulum nibh aptent dignissim donec imperdiet. Dui ridiculus dictumst auctor proin vivamus efficitur aptent tempus. Curae tincidunt libero vulputate montes odio non maecenas justo ullamcorper enim.",
        },
        {
            question: "Ultrices mauris morbi congue viverra netus litora consectetuer?",
            answer: "Egestas maximus ullamcorper quis vestibulum nibh aptent dignissim donec imperdiet. Dui ridiculus dictumst auctor proin vivamus efficitur aptent tempus. Curae tincidunt libero vulputate montes odio non maecenas justo ullamcorper enim.",
        },
        {
            question: "Ut phasellus litora in metus molestie?",
            answer: "Egestas maximus ullamcorper quis vestibulum nibh aptent dignissim donec imperdiet. Dui ridiculus dictumst auctor proin vivamus efficitur aptent tempus. Curae tincidunt libero vulputate montes odio non maecenas justo ullamcorper enim.",
        },
        {
            question: "Ad quisque eleifend mauris himenaeos mattis amet fermentum ac vel?",
            answer: "Egestas maximus ullamcorper quis vestibulum nibh aptent dignissim donec imperdiet. Dui ridiculus dictumst auctor proin vivamus efficitur aptent tempus. Curae tincidunt libero vulputate montes odio non maecenas justo ullamcorper enim.",
        },
        {
            question: "Cras non felis tristique nostra si ipsum sodales accumsan ex?",
            answer: "Egestas maximus ullamcorper quis vestibulum nibh aptent dignissim donec imperdiet. Dui ridiculus dictumst auctor proin vivamus efficitur aptent tempus. Curae tincidunt libero vulputate montes odio non maecenas justo ullamcorper enim.",
        },
    ];

    

    const handleAccordionChange = (index) => {
        if (expandedIndex === index) {
            setExpandedIndex(-1); // Collapse the current accordion if it's already expanded
        } else {
            setExpandedIndex(index); // Expand the clicked accordion
        }
    };
    const handleAccordionChange2 = (index) => {
        if (expandedIndex1 === index) {
            setExpandedIndex1(-1); // Collapse the current accordion if it's already expanded
        } else {
            setExpandedIndex1(index); // Expand the clicked accordion
        }
    };
    return (
        <div>
            <Box sx={{ padding: "100px 0 50px 0 " }}>
                <Container>
                    <Box>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Box sx={{ width: "65%", margin: "0 auto" }}>
                                    <Typography sx={{ color: "#CA9D7A", fontWeight: "600" }}>FAQ</Typography>
                                    <Box sx={{ fontWeight: "600", marginBottom: "10px", fontSize:{xs:"28px",lg:"46px",md:"46px"}}}>Frequently Ask Questions</Box>
                                    <Box sx={{ color: "gray", marginBottom:"40px" , fontSize:{xs:"14px",lg:"15px"} }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</Box>
                                </Box>
                            </Grid>
                            
                            <Grid item md={6} lg={6} sm={12} xs={12} sx={{ justifyContent: "center", alignItems: "center", display: "flex" }}>
                                <Box>
                                    <Typography sx={{ marginTop: "30px",border:"1px solid #E0E0E0"}}>
                                        {faqs.map((faq, index) => (
                                            <Accordion key={index} sx={{ margin: "10px 0 0 0", padding: "7px", boxShadow: "none", width: "97%" , textAlign:'start'}} expanded={expandedIndex === index} onChange={() => handleAccordionChange(index)}>
                                                <AccordionSummary expandIcon={<KeyboardArrowDownIcon sx={{ fontSize: "24px", "&:hover": {
                                                            color: "#CA9D7A",
                                                            transition: ".3s"
                                                        } }}/>}>
                                                    <Typography className='quetion'sx={{
                                                        fontSize: "13px",fontWeight:"800","&:hover": {
                                                            color: "#CA9D7A",
                                                            transition: ".3s"
                                                        }
                                                    }}>{faq.question}</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails expandIcon={<KeyboardArrowUpIcon />}>
                                                    <Typography sx={{fontSize:"13px", color:"gray"}}>{faq.answer}</Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                        ))}
                                    </Typography>
                                </Box>
                            </Grid>

                            <Grid item md={6} lg={6} sm={12} xs={12} sx={{ justifyContent: "center", alignItems: "center", display: "flex" }}>
                                <Box>
                                    <Typography sx={{ marginTop: "30px",border:"1px solid #E0E0E0"}}>
                                        {frequently.map((frequently, index) => (
                                            <Accordion key={index} sx={{ margin: "10px 0 0 0", padding: "7px", boxShadow: "none", width: "97%" , textAlign:'start'}} expanded={expandedIndex1 === index} onChange={() => handleAccordionChange2(index)}>
                                                <AccordionSummary expandIcon={<KeyboardArrowDownIcon sx={{ fontSize: "24px", "&:hover": {
                                                            color: "#CA9D7A",
                                                            transition: ".3s"
                                                        } }}/>}>
                                                    <Typography className='quetion'sx={{
                                                        fontSize: "13px",fontWeight:"800","&:hover": {
                                                            color: "#CA9D7A",
                                                            transition: ".3s"
                                                        }
                                                    }}>{frequently.question}</Typography>
                                                </AccordionSummary>
                                                <AccordionDetails expandIcon={<KeyboardArrowUpIcon />}>
                                                    <Typography sx={{fontSize:"13px", color:"gray"}}>{frequently.answer}</Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                        ))}
                                    </Typography>
                                </Box>
                            </Grid>

                           
                        </Grid>
                    </Box>
                </Container>
            </Box>

        </div>
    )
}

export default Section7