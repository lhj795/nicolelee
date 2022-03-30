import React, { useState, useEffect, useRef, useCallback } from "react";
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import { Link } from "react-router-dom";
import { TypographyTheme } from './components/ui/Typography';
import Base from "./Base";
import TalentMindCover from './img/TALENTMIND/TalentMindCover.png';
import AMCCover from './img/AMC/AMCCover.jpg';
import CraigslistCover from './img/CRAIGSLIST/CraigslistCover.jpg';
import DriftCover from './img/DRIFT/DriftCover.jpg';
import InvolvCover from './img/INVOLV/InvolvCover.jpg';
import KoziCover from './img/KOZI/KoziCover.png';
import LocalyzeCover from './img/LOCALYZE/LocalyzeCover.jpg';
import Placeholder from './img/Placeholder.png';
import { DistortionText } from "react-text-fun";

const cardStyles = makeStyles(({
    textDecoration: {
        textDecoration: "none",
    },
    caption: {
        margin: "5px 0 0 0"
    },
    default: {
        opacity: "0",
        display: "block",
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
        display: "block",
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
        padding: "16px 16px",
    },
    about: {
        height: "60vh",
        alignItems: "center",
    },
    variableTitle: {
        fontFamily: "ABCArizonaPlusVariable",
        fontSize: "clamp(25px, 3.052rem, 48.83px)",
    },
    animatedItem: {
        animation: `$myEffect 10s`
    },
    "@keyframes myEffect": {
        "0%": {
            fontFamily: "ABCArizonaPlusVariable",
            fontVariationSettings: "'wght' 700, 'ital' 0, 'SRFF' 100",
            fontSize: "clamp(25px, 3.052rem, 48.83px)",
        },
        "25%": {
            fontFamily: "ABCArizonaPlusVariable",
            fontVariationSettings: "'wght' 400, 'ital' 0, 'SRFF' 100",
            fontSize: "clamp(25px, 3.052rem, 48.83px)",
        },
        "50%": {
            fontFamily: "ABCArizonaPlusVariable",
            fontVariationSettings: "'wght' 700, 'ital' 0, 'SRFF' 0",
            fontSize: "clamp(25px, 3.052rem, 48.83px)",
        },
        "75%": {
            fontFamily: "ABCArizonaPlusVariable",
            fontVariationSettings: "'wght' 100, 'ital' 0, 'SRFF' 0",
            fontSize: "clamp(25px, 3.052rem, 48.83px)",
        },
        "100%": {
            fontFamily: "ABCArizonaPlusVariable",
            fontVariationSettings: "'wght' 100, 'ital' 100, 'SRFF' 0",
            fontSize: "clamp(25px, 3.052rem, 48.83px)",
        },
    },
    interCV: {
        width: "100%",
        // backgroundColor: "#222222",
    },
    distortionText: {
        display: "flex",
        justifyContent: "center",
        padding: "40vh 0"
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

    const hoveredStyle = (hover) ? classes.hover : classes.default
    const zoomedStyle = (zoom) ? classes.cardImgZoomed : classes.cardImg;

    return (
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
                        <Typography style={{ textTransform: "uppercase" }} variant="h4">{props.title}</Typography>
                        <Typography variant="body1">{props.desc}</Typography>
                        <div className={classes.caption}><Typography variant="caption">{props.caption}</Typography></div>
                    </div>
                </div>
            </Link>
        </ThemeProvider>
    )
}


const title = ([" Designer", "n Engineer", " Web Developer", " Foodie", " Designer"]);

export default function Work(props) {
    const classes = homepageStyles(props);

    // This ref is connected to the list
    const listRef = useRef();

    // The size of the list
    // It will be updated later
    const [height, setHeight] = useState();

    // The data of the list at the beginning
    const workItems = useState();

    // This function calculates width and height of the list
    const getListSize = () => {
        const newHeight = listRef.current.clientHeight;
        setHeight(newHeight);
    };

    // Get 'width' and 'height' after the initial render and every time the list changes
    useEffect(() => {
        getListSize();
    }, [workItems]);

    // Update 'width' and 'height' when the window resizes
    useEffect(() => {
        window.addEventListener("resize", getListSize);
    }, []);

    const [index, setIndex] = useState(0);

    // const [scrollColor, setScrollColor] = useState("#222222");
    const scrollYPosition = window.pageYOffset
    const dynamicBgColor = (scrollYPosition >= height - 1000) ? "#222222" : "";

    const scrollColor = (scrollYPosition >= height - 1000) ? "white" : "#222222";


    useEffect(() => {
        const tick = () => setIndex(i => i + 1);
        const id = setInterval(tick, 2500);
        return () => clearInterval(id);
    }, []);

    var BgColors = {
        TenEx: "rgba(198, 215, 236, 0.5)",
        AMC: "rgba(136, 27, 48, 0.7)",
        Kozi: "rgba(223, 242, 248, 0.7)",
        Involv: "rgba(59, 66, 86, 0.7)",
        Drift: "rgba(153, 196, 202, 0.7)",
        Craigslist: "rgba(226, 213, 252, 0.7)",
        Localyze: "rgba(132, 215, 183, 0.7)",
        More: "#EDF1FA",
    }

    return (
        <div style={{ backgroundColor: dynamicBgColor, transition: "0.4s" }}>
            <div ref={listRef}>
                <div style={{ position: "fixed", zIndex: "100", width: "100%" }}>
                    <Base color={scrollColor} selected="work" />
                </div>
                <div className={classes.wrap} style={{ color: dynamicBgColor, transition: "0.4s" }}> 
                    <ThemeProvider theme={TypographyTheme}>
                        <Grid container className={classes.about}>
                            <Grid item xs={2} />
                            <Grid item xs={3}>
                                <div
                                    className={classes.animatedItem}
                                >
                                    <div className={classes.variableTitle}>
                                        Nicole Lee
                                    </div>
                                </div>
                                <Typography variant="body1">
                                    I am a
                                    <span>{title[index % title.length]}</span>
                                </Typography>
                                <Typography variant="body1">
                                    I reside in the intersection between design and engineering. <br />
                                    I collaborate to utilize the arts and technology to intervene in and thus create human-centered experiences.
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography variant="h1">
                                    WORK
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Card
                                    title={"TalentMind"}
                                    desc={"All Recruiting Workflow on One Platform"}
                                    caption={"UI/UX, Branding, Frontend Dev"}
                                    img={TalentMindCover}
                                    alt={"TalentMind"}
                                    bgColor={BgColors.TenEx}
                                    link={"/TalentMind"}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <Card
                                    title={"Able"}
                                    desc={"Inclusive Innovation in Retail for the Blind and Visually Impaired"}
                                    caption={"UX Strategy, Consumer Product, Experience Design"}
                                    img={Placeholder}
                                    alt={"Able"}
                                    bgColor={BgColors.More}
                                    link={"/Able"}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <Card
                                    title={"Lightly"}
                                    desc={"Bringing Back Casual Moments in Hybrid Workspace"}
                                    caption={"Product Design, UI/UX"}
                                    img={Placeholder}
                                    alt={"Lightly"}
                                    bgColor={BgColors.More}
                                    link={"/Lightly"}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <Card
                                    title={"AMC World"}
                                    desc={"A Reimagined Movie-Watching Experience"}
                                    caption={"Experience Design, Service Design"}
                                    img={AMCCover}
                                    alt={"AMC World"}
                                    bgColor={BgColors.AMC}
                                    link={"/AMC"}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <Card
                                    title={"Kozi"}
                                    desc={"New Way of Addressing Seasonal Affective Disorder"}
                                    caption={"Designing for Mental Health, Gaming UI/UX"}
                                    img={KoziCover}
                                    alt={"Kozi"}
                                    bgColor={BgColors.Kozi}
                                    link={"/Kozi"}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <Card
                                    title={"Involv"}
                                    desc={"Bringing Community Together to Support Each Other"}
                                    caption={"UI/UX "}
                                    img={InvolvCover}
                                    alt={"Drift"}
                                    bgColor={BgColors.Involv}
                                    link={"/Involv"}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <Card
                                    title={"Drift"}
                                    desc={"Safer and Affordable Scooter Sharing Experience"}
                                    caption={"UI/UX, Ride-Sharing Experience"}
                                    img={DriftCover}
                                    alt={"Drift"}
                                    bgColor={BgColors.Drift}
                                    link={"/Drift"}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <Card
                                    title={"CRAIGSLIST HOUSING"}
                                    desc={"Housing Browsing made Reliable"}
                                    caption={"UI/UX, Responsive Design"}
                                    img={CraigslistCover}
                                    alt={"Drift"}
                                    bgColor={BgColors.Craigslist}
                                    link={"/Craigslist"}
                                />
                            </Grid>
                            <Grid item xs={4}>
                                <Card
                                    title={"Localyze"}
                                    desc={"Streamlining International Relocation"}
                                    caption={"UI/UX"}
                                    img={LocalyzeCover}
                                    alt={"Localyze"}
                                    bgColor={BgColors.Localyze}
                                    link={"/TalentMind"}
                                />
                            </Grid>
                        </Grid>
                    </ThemeProvider>
                </div>
            </div>
            <div className={classes.interCV}>
                <div className={classes.distortionText}>
                    <DistortionText
                        text="nicole lee"
                        fill="white"
                        speed={0.5}
                        rotation={45.0}
                        distortX={1}
                        distortY={1}
                        noiseAmplitude={0.05}
                        fontSize={200}
                    />
                </div>
            </div>
        </div>
    )
}