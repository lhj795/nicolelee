import React, { useState, useEffect } from 'react';
import { Grid, StyledEngineProvider, ThemeProvider, Box, Collapse, Typography } from '@mui/material';
import Base from '../Base';
import makeStyles from '@mui/styles/makeStyles';
import { TypographyTheme } from '../components/ui/Typography';
import data from "./Data";
import "./styles.css";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const useStyles = makeStyles(({
    imgFitContent: {
        width: '100%',
        maxHeight: '100vh',
        objectFit: 'cover',
        zIndex: '0',
        mixBlendMode: {
            mixBlendMode: () => {
                if (window.innerWidth > 1200) {
                    return 'color'
                } else {
                    return '';
                }
            },
        },
    },
    wrap: {
        color: '#333333',
        maxWidth: '100vw',
        overflowX: 'hidden',
    },
}));

export default function LovePop(props) {
    const classes = useStyles(props);

    const mobileTrueFalse = (window.innerWidth < 1200) ? false : true;
    const [showDesc, setShowDesc] = useState(mobileTrueFalse);
    const [showDesc2, setShowDesc2] = useState(mobileTrueFalse);

    const [cards] = useState(data);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = cards.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, cards]);

    useEffect(() => {
        const slider = setInterval(() => {
            setIndex(index + 1);
        }, 3000);
        return () => {
            clearInterval(slider);
        };
    }, [index]);

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={TypographyTheme}>
                <div className={classes.wrap}>
                    <Base color='black' />
                    <Grid container spacing={3}>
                        <Grid item xs={1} />
                        <Grid item xs={10}>
                            <section className="section-center">
                                {cards.map((card, cardIndex) => {
                                    const { id, image } = card;

                                    let position = "nextSlide";
                                    if (cardIndex === index) {
                                        position = "activeSlide";
                                    }
                                    if (
                                        cardIndex === index - 1 ||
                                        (index === 0 && cardIndex === cards.length - 1)
                                    ) {
                                        position = "lastSlide";
                                    }

                                    return (
                                        <article className={position} key={id}>
                                            <img src={image} className="card-img" alt='LovePop Card Rendering' />
                                        </article>
                                    );
                                })}
                                <button className="prevL" onClick={() => setIndex(index - 1)}>
                                    <FiChevronLeft />
                                </button>
                                <button className="nextL" onClick={() => setIndex(index + 1)}>
                                    <FiChevronRight />
                                </button>
                            </section>
                        </Grid>
                    </Grid>

                    <div>
                        <Grid container spacing={3} direction="row">
                            <Grid item xs={12} />
                            <Grid item lg={2} xs={1} />
                            <Grid onClick={() => setShowDesc(!showDesc)} item xs={10} lg={4}>
                                <Box
                                    sx={{ display: "flex" }}
                                    alignItems="center"
                                    flexDirection="row"
                                    justifyContent="space-between"
                                >
                                    <Typography variant='body2'>
                                        Overview
                                    </Typography>
                                    {showDesc ? <ExpandLess /> : <ExpandMore />}
                                </Box>
                                <Collapse in={showDesc} timeout="auto" unmountOnExit>
                                    <Typography className={(showDesc) ? '' : classes.displayNone} variant='body1'>
                                        <br />
                                        LovePop is a retail brand that primarily sells pop-up greeting cards. 
                                        Their mission is to create one billion magical moments. 
                                        In the summer of 2019, I was a part of delivering those magical moments to LovePop's customers 
                                        by participating as an intern in the Prouct team.
                                    </Typography>
                                </Collapse>
                            </Grid>
                            <Grid item zeroMinWidth className={classes.pZ} sx={{ display: { xs: 'flex', lg: 'none' } }} xs={1} />
                            <Grid item zeroMinWidth className={classes.pZ} sx={{ display: { xs: 'flex', lg: 'none' } }} xs={1} />
                            <Grid onClick={() => setShowDesc2(!showDesc2)} item xs={10} lg={4}>
                                <Box
                                    sx={{ display: "flex" }}
                                    alignItems="center"
                                    flexDirection="row"
                                    justifyContent="space-between"
                                >
                                    <Typography variant='body2'>
                                        Involvement
                                    </Typography>
                                    {showDesc2 ? <ExpandLess /> : <ExpandMore />}
                                </Box>
                                <Collapse in={showDesc2} timeout="auto" unmountOnExit>
                                    <Typography variant='body1'>
                                        <br />
                                        I assisted with design, development, and launch of brand line and B2B products.
                                        I used Rhino and V-Ray to 3D model and render 62 products, which were used for e-commerce and product packaging.
                                        I also documented a step by step modeling and rendering instructions to onboard future rendering positions.
                                    </Typography>
                                </Collapse>
                            </Grid>
                            <Grid item xs={1} lg={2} />
                            <Grid item xs={12} />
                        </Grid>
                    </div>
                </div>
            </ThemeProvider>
        </StyledEngineProvider >
    );
}