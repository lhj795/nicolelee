import React, { useState, useEffect, useRef } from "react";
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import makeStyles from '@mui/styles/makeStyles';
import { Typography, Grid } from '@mui/material';
import { Link } from "react-router-dom";
import { TypographyTheme } from './components/ui/Typography';
import Base from "./Base";
import TalentMindCover from './10xFinders/img/TalentMindCover.png';
import AMCCover from './AMC/img/AMCCover.jpg';
import CraigslistCover from './img/CRAIGSLIST/CraigslistCover.jpg';
import DriftCover from './img/DRIFT/DriftCover.jpg';
import InvolvCover from './img/INVOLV/InvolvCover.jpg';
import KoziCover from './img/KOZI/KoziCover.png';
import LocalyzeCover from './img/LOCALYZE/LocalyzeCover.jpg';
import AbleCover from './Able/img/AssistiveHanger01.png';
import LightlyCover from './Lightly/img/LightlyCover.png';
import { DistortionText } from "react-text-fun";
import Cursor from './img/cursor.svg';
import Typewriter from 'typewriter-effect';
import Engineer from './img/Engineer.mp4';
import LovePop from './img/LovePop.jpg'

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
        minWidth: "100%",
        minHeight: "100%",
        objectFit: 'contain',
        position: "absolute",
        transition: "0.6s",
    },
    cardImgZoomed: {
        width: '110%',
        minHeight: "100%",
        objectFit: 'contain',
        position: "absolute",
        transition: "0.6s",
    },
}));

const homepageStyles = makeStyles(({
    wrap: {
        padding: "16px 16px",
    },
    
    //about
    about: {
        height: "60vh",
        alignItems: "center",
    },
    variableTitle: {
        // fontFamily: "ABCArizonaPlusVariable",
        fontSize: "clamp(25px, 3.052rem, 48.83px)",
    },
    animatedItem: {
        animation: `$myEffect 12s infinite`
    },
    "@keyframes myEffect": {
        "0%": {
            fontFamily: "ABCArizonaPlusVariable",
            fontVariationSettings: "'wght' 700, 'ital' 0, 'SRFF' 100",
            fontSize: "clamp(25px, 3.052rem, 48.83px)",
        },
        "20%": {
            fontFamily: "ABCArizonaPlusVariable",
            fontVariationSettings: "'wght' 400, 'ital' 0, 'SRFF' 100",
            fontSize: "clamp(25px, 3.052rem, 48.83px)",
        },
        "40%": {
            fontFamily: "ABCArizonaPlusVariable",
            fontVariationSettings: "'wght' 700, 'ital' 0, 'SRFF' 0",
            fontSize: "clamp(25px, 3.052rem, 48.83px)",
        },
        "60%": {
            fontFamily: "ABCArizonaPlusVariable",
            fontVariationSettings: "'wght' 100, 'ital' 0, 'SRFF' 0",
            fontSize: "clamp(25px, 3.052rem, 48.83px)",
        },
        "80%": {
            fontFamily: "ABCArizonaPlusVariable",
            fontVariationSettings: "'wght' 100, 'ital' 100, 'SRFF' 0",
            fontSize: "clamp(25px, 3.052rem, 48.83px)",
        },
        "100%": {
            fontFamily: "ABCArizonaPlusVariable",
            fontVariationSettings: "'wght' 700, 'ital' 0, 'SRFF' 100",
            fontSize: "clamp(25px, 3.052rem, 48.83px)",
        },
    },
    distortionText: {
        display: "flex",
        justifyContent: "center",
        padding: "30vh 0 20vh"
    },

    //product designer
    productDesignerContainer: {
        height: "25vh",
        color: "#222222",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonAnim: {
        height: "5vh",
        display: "flex",
        maxWidth: "16.6666666%",
        flexBasis: "16.6666666%",
    },
    text: {
        alignSelf: "center",
        textAlign: "center",
        width: "100%",
        zIndex: "4"
    },
    borderPreAnim: {
        position: "absolute",
        border: '1px solid white',
        width: "0",
        height: "0",
        display: "flex",
        overflow: "hidden",
        backgroundColor: "#555555",
    },
    border: {
        position: "absolute",
        border: '1px solid white',
        animation: `$buttonEffect 2s`,
        width: "16.666666%",
        height: "5vh",
        display: "flex",
        overflow: "hidden",
    },
    fillPreAnim: {
        position: "absolute",
        width: "0",
        height: "0",
        display: "flex",
        overflow: "hidden",
        backgroundColor: "white",
        borderRadius: "2.5vh",
    },
    fill: {
        position: "absolute",
        animation: `$fillEffect 2s`,
        width: "100%",
        height: "100%",
        display: "flex",
        overflow: "hidden",
        backgroundColor: "white",
        borderRadius: "2.5vh",
    },
    "@keyframes fillEffect": {
        "0%": {
            width: "0",
            height: "0",
        },
        "25%": {
            width: "0",
            height: "0",
        },
        "100%": {
            width: "100%",
            height: "100%",
        },
    },
    "@keyframes buttonEffect": {
        "0%": {
            width: "0",
            height: "0",
        },
        "25%": {
            width: "0",
            height: "0",
        },
        "100%": {
            width: "16.666666%",
            height: "5vh",
        },
    },
    dotPreAnim: {
        width: "6px",
        height: "6px",
        borderRadius: "50%",
        border: "1px solid white",
        backgroundColor: "#222222",
        zIndex: "1",
        position: "absolute",
        marginLeft: "-3px",
        marginTop: "-3px",
    },
    dot2: {
        width: "6px",
        height: "6px",
        borderRadius: "50%",
        border: "1px solid white",
        backgroundColor: "#222222",
        marginLeft: "calc(16.66666% - 3px)",
        marginTop: "-3px",
        zIndex: "1",
        position: "absolute",
        animation: `$dot2Effect 2s`,
    },
    "@keyframes dot2Effect": {
        "0%": {
            marginLeft: "-3px",
            marginTop: "-3px",
        },
        "25%": {
            marginLeft: "-3px",
            marginTop: "-3px",
        },
        "100%": {
            marginLeft: "calc(16.66666% - 3px)",
            marginTop: "-3px",
        },
    },
    dot3: {
        width: "6px",
        height: "6px",
        borderRadius: "50%",
        border: "1px solid white",
        backgroundColor: "#222222",
        marginLeft: "-3px",
        marginTop: "calc(5vh - 3px)",
        zIndex: "1",
        position: "absolute",
        animation: `$dot3Effect 2s`,
    },
    "@keyframes dot3Effect": {
        "0%": {
            marginLeft: "-3px",
            marginTop: "-3px",
        },
        "25%": {
            marginLeft: "-3px",
            marginTop: "-3px",
        },
        "100%": {
            marginLeft: "-3px",
            marginTop: "calc(5vh - 3px)",
        },
    },
    dot4: {
        width: "6px",
        height: "6px",
        borderRadius: "50%",
        border: "1px solid white",
        backgroundColor: "#222222",
        zIndex: "1",
        position: "absolute",
        animation: `$dot4Effect 2s`,
        marginLeft: "calc(16.66666% - 3px)",
        marginTop: "calc(5vh - 3px)",
    },
    "@keyframes dot4Effect": {
        "0%": {
            marginLeft: "-3px",
            marginTop: "-3px",
        },
        "25%": {
            marginLeft: "-3px",
            marginTop: "-3px",
        },
        "100%": {
            marginLeft: "calc(16.66666% - 3px)",
            marginTop: "calc(5vh - 3px)",
        },
    },
    cursorPreAnim: {
        height: "43px",
        width: "27px",
        position: "absolute",
        zIndex: "2",
        marginLeft: "calc(-8.333333% + 13.5px)",
        marginTop: "calc(-5vh + 43px)",
    },
    cursor: {
        height: "43px",
        width: "27px",
        position: "absolute",
        zIndex: "2",
        animation: `$cursorEffect 2s`,
        marginLeft: "calc(8.333333% + 13.5px)",
        marginTop: "5vh",
    },
    "@keyframes cursorEffect": {
        "0%": {
            marginLeft: "calc(-8.333333% + 13.5px)",
            marginTop: "calc(-5vh + 43px)",
        },
        "25%": {
            marginLeft: "calc(-8.333333% + 13.5px)",
            marginTop: "calc(-5vh + 43px)",
        },
        "100%": {
            marginLeft: "calc(8.333333% + 13.5px)",
            marginTop: "5vh",
        },
    },

    //web developer
    webDevContainer: {
        height: "25vh",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "monospace",
        fontSize: "clamp(16px, 1.25rem, 20px)",
    },
    keyboardContainer: {
        minWidth: "33.33333%",
        flexBasis: "33.33333%",
    },
    keyboardRow: {
        minWidth: "100%",
        width: "100%",
        flexBasis: "100%",
        display: "flex",
        backgroundColor: "navy",
        justifyContent: "space-between",
    },
    sKeyboard: {
        width: "1.770833333vw",
        height: "1.770833333vw",
        backgroundColor: "white",
        margin: ".2083333333vw 0"
    },
    mKeyboard: {
        width: "3.4375vw",
        height: "1.770833333vw",
        backgroundColor: "white",
        margin: ".2083333333vw 0"
    },
    tKeyboard: {
        width: "2.604166667vw",
        height: "1.770833333vw",
        backgroundColor: "white",
        margin: ".2083333333vw 0"
    },
    rKeyboard: {
        width: "3.958333333vw",
        height: "1.770833333vw",
        backgroundColor: "white",
        margin: ".2083333333vw 0"
    },
    fKeyboard: {
        width: "5.572916667vw",
        height: "1.770833333vw",
        backgroundColor: "white",
        margin: ".2083333333vw 0"
    },
    cKeyboard: {
        width: "2.447916667vw",
        height: "1.770833333vw",
        backgroundColor: "white",
        margin: ".2083333333vw 0"
    },
    lKeyboard: {
        width: "15.1vw",
        height: "1.770833333vw",
        backgroundColor: "white",
        margin: ".2083333333vw 0"
    },
    engineerAnimContainer: {
        width: "30%",
        display: "flex",
        alignItems: "flex-start",
        color: "white",
        paddingBottom: "10vh",
    },
    engineerText: {
        width: "100%",
        alignSelf: "center",
        textAlign: "center",
        position: "absolute",
        fontFamily: 'NeueHaasDisplayMedium',
        fontSize: "clamp(16px, 1.25rem, 20px)",
        lineHeight: "1.125",
    }
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

const title = ([" Designer", "n Engineer", " Web Developer", " Foodie", " Designer"]);

export default function Work(props) {
    const classes = homepageStyles(props);

    const workRef = useRef();
    const [workHeight, setWorkHeight] = useState(0);
    useEffect(() => {
        setWorkHeight(workRef.current.clientHeight);
    },[]);

    const workNameRef = useRef();
    const [wNHeight, setWNHeight] = useState(0);
    useEffect(() => {
        setWNHeight(workNameRef.current.clientHeight);
    },[]);

    const workNameDesignRef = useRef();
    // const [wNDHeight, setWNDHeight] = useState(0);
    useEffect(() => {
        setWNHeight(workNameDesignRef.current.clientHeight);
    },[]);

    const scrollYPosition = window.pageYOffset
    const windowHeight = window.innerHeight*0.8
    const dynamicBgColor = (scrollYPosition >= workHeight - windowHeight) ? "#252525" : "";
    const vidOpacity = (scrollYPosition >= workHeight - windowHeight) ? "1" : "0";
    const scrollColor = (scrollYPosition >= workHeight - windowHeight) ? "white" : "#222222";
    const borderAnimClass = (scrollYPosition >= wNHeight - windowHeight) ? classes.border : classes.borderPreAnim;
    const fillAnimClass = (scrollYPosition >= wNHeight - windowHeight) ? classes.fill : classes.fillPreAnim;
    const dot4AnimClass = (scrollYPosition >= wNHeight - windowHeight) ? classes.dot4 : classes.dotPreAnim;
    const dot3AnimClass = (scrollYPosition >= wNHeight - windowHeight) ? classes.dot3 : classes.dotPreAnim;
    const dot2AnimClass = (scrollYPosition >= wNHeight - windowHeight) ? classes.dot2 : classes.dotPreAnim;
    const cursorAnimClass = (scrollYPosition >= wNHeight - windowHeight) ? classes.cursor : classes.cursorPreAnim;

    const typingString = "< Web Developer />"

    const [index, setIndex] = useState(0);
    useEffect(() => {
        const tick = () => setIndex(i => i + 1);
        const id = setInterval(tick, 2500);
        return () => clearInterval(id);
    }, []);

    var BgColors = {
        TenEx: "rgba(198, 215, 236, 0.5)",
        Able: "rgba(255, 255, 255, 0.5)",
        AMC: "rgba(136, 27, 48, 0.7)",
        Lightly: "rgba(255, 255, 255, 0.5)",
        Kozi: "rgba(223, 242, 248, 0.7)",
        Involv: "rgba(59, 66, 86, 0.7)",
        Drift: "rgba(153, 196, 202, 0.7)",
        Craigslist: "rgba(226, 213, 252, 0.7)",
        Localyze: "rgba(132, 215, 183, 0.7)",
        More: "#EDF1FA",
    }

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={TypographyTheme}>
            <div style={{ backgroundColor: dynamicBgColor, transition: "0.4s" }}>
                <div ref={workNameDesignRef}>
                    <div ref={workNameRef}>
                        <div ref={workRef}>
                            <div style={{ position: "fixed", zIndex: "100", width: "100%" }}>
                                <Base color={scrollColor} selected="work" />
                            </div>
                            <div className={classes.wrap} style={{ color: dynamicBgColor, transition: "0.4s" }}> 
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
                                                I reside in the intersection between design and engineering.
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
                                        <Grid item xs={4}>
                                            <Card
                                                title={"Lightly"}
                                                desc={"Bringing Back Casual Moments in Hybrid Workspace"}
                                                caption={"Product Design, UI/UX"}
                                                img={LightlyCover}
                                                alt={"Lightly"}
                                                bgColor={BgColors.Lightly}
                                                link={"/Project"}
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
                                                link={"/project"}
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
                                                color="white"
                                                link={"/project"}
                                            />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Card
                                                title={"LovePop"}
                                                desc={"Work from Summer Internship 2019"}
                                                caption={"Consumer Product, CAD Design"}
                                                img={LovePop}
                                                alt={"LovePop"}
                                                bgColor={BgColors.Able}
                                                color="black"
                                                link={"/project"}
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
                                                link={"/project"}
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
                                                link={"/project"}
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
                                                link={"/project"}
                                            />
                                        </Grid>
                                    </Grid>
                            </div>
                        </div>
                        <div className={classes.distortionText}> 
                        {/* intersectionobserver */}
                            <DistortionText
                                text="nicole is a..."
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
                    <div className={classes.productDesignerContainer}>
                        <img className={cursorAnimClass} alt="Cursor" src={Cursor}/>
                        <div className={classes.buttonAnim}>
                            <div className={classes.dotPreAnim}/>
                            <div className={dot2AnimClass}/>
                            <div className={dot3AnimClass}/>
                            <div className={dot4AnimClass}/>
                            <div className={borderAnimClass}>
                            <div className={fillAnimClass}/>
                                <Typography variant="button" className={classes.text}>Product Designer</Typography>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes.webDevContainer}>
                    <Typewriter
                        options={{
                            strings: [typingString],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
                <div className={classes.engineerAnimContainer}>
                    <video style={{opacity: vidOpacity, transition: "1s",}} src={Engineer} autoPlay muted loop id="video" />
                    <div variant="h4" className={classes.engineerText}>ENGINEER</div>
                </div>
            </div>
            </ThemeProvider>
        </StyledEngineProvider>
    );
}