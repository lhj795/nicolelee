import React, { useState } from "react";
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import { Typography, Grid } from '@mui/material';
import { Link } from "react-router-dom";
import { TypographyTheme } from './components/ui/Typography';
import Base from "./Base";
import TalentMindCover from './10xFinders/img/TalentMindCover.png';
import AMCCover from './AMC/img/AMCCover.jpg';
import AbleCover from './Able/img/AssistiveHanger01.png';
import ConstructionImg from './img/Construction.svg';


const cardStyles = makeStyles(({
    textDecoration: {
        textDecoration: "none",
    },
    caption: {
        margin: "5px 0 0 0"
    },
    default: {
        opacity: "0",
        display: "flex",
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
        transition: "0.6s",
        paddingTop: "22vh",
        position: "relative",
        color: "#222222",
    },
    hover: {
        opacity: "1",
        display: "flex",
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
        transition: "0.6s",
        paddingTop: "22vh",
        position: "relative",
        color: "#222222",
    },
    overlay: {
        height: "38vh",
        transition: "0.8s",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
    },
    cardImg: {
        width: "100%",
        position: "absolute",
        transition: "0.6s",
    },
    cardImgZoomed: {
        width: "110%",
        position: "absolute",
        transition: "0.6s",
    },
}));

const homepageStyles = makeStyles(({
    wrap: {
        padding: '16px',
    },
    imgFitContent: {
        width: '100%',
        maxHeight: '100vh',
        objectFit: 'cover',
    },
    justifyCenter: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    margin: {
        margin: '10vh 0',
    },
}));

function Card(props) {
    const classes = cardStyles(props);

    const [hover, setHovered] = useState(false);
    const [zoom, setZoomed] = useState(false);

    const onHover = (event) => {
        setHovered(true);
        setZoomed(true);
    };
    const onLeave = (event) => {
        setHovered(false);
        setZoomed(false);
    };

    const hoveredStyle = (hover) ? classes.default : classes.hover
    const zoomedStyle = (zoom) ? classes.cardImgZoomed : classes.cardImg;

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={TypographyTheme}>
                <Link className={classes.textDecoration} to={props.link}>
                    <div
                        className={classes.overlay}
                        onMouseEnter={onHover}
                        onMouseLeave={onLeave}
                    >
                        <img
                            className={zoomedStyle}
                            src={props.img}
                            alt={props.alt}
                        />
                        <div
                            className={hoveredStyle}
                            style={{
                                backgroundColor: props.bgColor,
                            }}
                        >
                            <Typography style={{ textTransform: "uppercase", color: props.color }} variant="h4">{props.title}</Typography>
                            <Typography style={{ color: props.color }} variant="body1">{props.desc}</Typography>
                            <div className={classes.caption}><Typography style={{ color: props.color }} variant="caption">{props.caption}</Typography></div>
                        </div>
                    </div>
                </Link>
            </ThemeProvider>
        </StyledEngineProvider>
    );
}

export default function Construction(props) {
    const classes = homepageStyles(props);

    var BgColors = {
        TenEx: "rgba(198, 215, 236, 0.5)",
        Able: "rgba(255, 255, 255, 0.5)",
        AMC: "rgba(136, 27, 48, 0.7)",
    }

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={TypographyTheme}>
                <Base color='black' />
                <div className={classes.wrap}>
                    <Grid className={classes.margin} container spacing={2}>
                        <Grid item xs={2} />
                        <Grid className={classes.justifyCenter} item xs={4}>
                            <Typography variant='h2'>
                                Page under construction
                            </Typography>
                            <Typography variant='body1'>
                                <br/>
                                I'm sorry for the inconvenience. This project is still being updated for documentation. In the meantime, check out my most 
                                recent projects:
                            </Typography>
                        </Grid>
                        <Grid item xs={1} />
                        <Grid item xs={2}>
                            <img className={classes.imgFitContent} src={ConstructionImg} alt='construction'/>
                        </Grid>
                        <Grid item xs={3} />
                        </Grid>
                        <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Card
                                title={"10xFinders"}
                                desc={"All Recruiting Workflow on One Platform"}
                                caption={"UI/UX, Branding, Frontend Dev"}
                                img={TalentMindCover}
                                alt={"10xfinders"}
                                bgColor={BgColors.TenEx}
                                link={"/10xfinders"}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <Card
                                title={"Able"}
                                desc={"Inclusive Innovation in Retail for the Blind and Visually Impaired"}
                                caption={"UX Strategy, Consumer Product, Experience Design"}
                                img={AbleCover}
                                alt={"Able"}
                                bgColor={BgColors.Able}
                                link={"/Able"}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <Card
                                title={"AMC"}
                                desc={"A Reimagined Movie-Watching Experience"}
                                caption={"Experience Design, Service Design"}
                                img={AMCCover}
                                alt={"AMCs"}
                                bgColor={BgColors.AMC}
                                color="white"
                                link={"/AMC"}
                            />
                        </Grid>
                    </Grid>
                </div>
            </ThemeProvider>
        </StyledEngineProvider >
    );
}