import React, { useState, useEffect } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Base from '../Base';
import clsx from 'clsx';
import { Typography, Grid } from '@mui/material';
import { TypographyTheme } from '../components/ui/Typography';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { GridFormat, Heading } from '../components/ui/UIComponents';
;

const useStyles = makeStyles(({
    wrap: {
        color: '#333333',
        minWidth: '320px',
        maxWidth: '100vw',
        overflowX: 'hidden',
    },
    margin: {
        margin: '30vh 0 10vh 0',
    },
    margin2: {
        margin: '20vh 0 10vh 0',
    },
    maxHeight: {
        height: '100vh',
        display: 'flex'
    },
    imgMixBlendMode: {
        mixBlendMode: 'hard-light',
    },
    imgFitContent: {
        width: '100%',
        maxHeight: '100vh',
        objectFit: 'cover',
    },
    positionAbsolute: {
        position: 'absolute',
    },
    cover: {
        width: (props) => {
            if (window.innerWidth < 1200) {
                return '90vw'
            } else {
                return '48vw';
            }
        },
        right: (props) => {
            if (window.innerWidth < 1200) {
                return '5vw'
            } else {
                return '9vw';
            }
        },
        position: 'absolute',
        top: '0',
    },
    coverContainer: {
        position: 'absolute',
        top: '0',
        height: '75vh',
        width: '100%',
        color: '#333333',
        background: '#FFAB40',
        zIndex: '-1',
    },
    boldText: {
        fontFamily: 'NeueHaasDisplayBold',
    },
    coverDetails: {
        position: 'absolute',
        bottom: '0',
    },
    abstractContainer: {
        marginTop: '75vh',
    },
    designProcessContainer: {
        marginTop: '10vh',
        color: '#FFAB40'
    },
    designProcessBg: {
        background: '#FFAB40',
        height: 'fit-content',
        color: '#333333',
        mixBlendMode: 'color',
        backdropFilter: 'invert(1)',
    },
    designProcesses: {
        border: '1px solid #333333',
        justifyContent: 'space-between',
        flexDirection: 'row',
        display: (props) => {
            if (window.innerWidth < 1200) {
                return 'none'
            } else {
                return 'flex';
            }
        },
    },
    designProcess: {
        border: '1px solid #333333',
        margin: '1vh !important',
        padding: '1vh !important',
        width: 'calc(50% - 2.75vh)',
        textAlign: 'center',
        display: (props) => {
            if (window.innerWidth < 1200) {
                return 'none'
            } else {
                return '';
            }
        },
    },
    designProcessLine: {
        width: 'calc(100% + 24px)',
        height: '1px',
        background: '#333333',
        display: (props) => {
            if (window.innerWidth < 1200) {
                return 'none'
            } else {
                return '';
            }
        },
    },
    persona: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-between',
    },
    personaDemo: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        height: '100%',
        width: '100%',
        justifyContent: 'space-between',
        marginTop: '2.5vh',
    },
    lightlyLogo: {
        fontFamily: 'DMSans-Bold',
        paddingTop: '28vh',
        fontSize: (props) => {
            if (window.innerWidth < 1200) {
                return '48.83px'
            } else {
                return 'clamp(61.04px, 3.815rem, 76.29px)';
            }
        },
    },
    lineContainer: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '0 !important',
    },
    pZ: {
        paddingLeft: '0 !important',
    },
    arrow: {
        height: '10px',
        width: '10px',
        borderBottom: '2px solid #333333',
        borderRight: '2px solid #333333',
        position: 'absolute',
        right: 'calc(8.33333% + 4px)',
        marginTop: 'calc(-1rem - 2px)',
        display: () => {
            if (window.innerWidth > 1200) {
                return 'none'
            } else {
                return '';
            }
        },
        transform: 'rotate(225deg)',
        transition: '.3s',
    },
    arrowHide: {
        height: '10px',
        width: '10px',
        borderBottom: '2px solid #333333',
        borderRight: '2px solid #333333',
        position: 'absolute',
        right: 'calc(8.33333% + 4px)',
        marginTop: 'calc(-1rem - 2px)',
        display: () => {
            if (window.innerWidth > 1200) {
                return 'none'
            } else {
                return '';
            }
        },
        transform: 'rotate(45deg)',
        transition: '.3s',
    },
    displayNone: {
        display: () => {
            if (window.innerWidth < 1200) {
                return 'none'
            } else {
                return '';
            }
        },
        padding: () => {
            if (window.innerWidth < 1200) {
                return '0 !important'
            } else {
                return '';
            }
        },
    },
}));

function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const img = importAll(require.context('./img', false, /\.(png|gif|svg|mp4)$/));

export default function Lightly(props) {
    const classes = useStyles(props);

    const [mobile, setMobile] = useState(false);
    useEffect(() => {
        if (window.innerWidth < 1200) {
            setMobile(true);
        } else {
            setMobile(false);
        }
    }, []);

    const [showDesc, setShowDesc] = useState(false);
    const [showDesc2, setShowDesc2] = useState(false);

    const pZElem = (mobile) ? '' : classes.pZ;

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={TypographyTheme}>
                <div className={classes.wrap}>

                    <Base color='black' />

                    {/* cover */}
                    <div className={classes.coverContainer}>
                        <img src={img['Cover.svg']} className={classes.cover} alt='10xFinders' />
                        <Grid container spacing={3}>
                            <Grid item lg={2} xs={1} />
                            <Grid item lg={3} xs={10}>
                                <div className={classes.lightlyLogo}>Lightly</div>
                            </Grid>
                            <Grid item lg={7} xs={1} />
                            <Grid item xs={1} lg={2} />
                            <Grid item xs={10} lg={4}>
                                <Typography variant='h4'>
                                    Bringing back casual moments {(mobile) ? [] : <br />}
                                    by planning better meetings
                                </Typography>
                            </Grid>
                            <Grid item lg={4} xs={1} />
                        </Grid>
                        <Grid container spacing={3} className={classes.coverDetails}>
                            <Grid item xs={1} lg={2} />
                            <Grid item lg={4} xs={10}>
                                <Typography variant='body1'>
                                    <span className={classes.boldText}>Project</span>: Brown Risd Master of Arts in Design Engineering (MADE) Module
                                </Typography>
                            </Grid>
                            <Grid item zeroMinWidth className={classes.pZ} xs={1} lg='auto' />
                            <Grid item zeroMinWidth className={classes.pZ} xs={1} lg='auto' />
                            <Grid item lg={2} xs={10}>
                                <Typography variant='body1'>
                                    <span className={classes.boldText}>Role</span>: UX Design
                                </Typography>
                            </Grid>
                            <Grid item zeroMinWidth className={classes.pZ} xs={1} lg='auto' />
                            <Grid item zeroMinWidth className={classes.pZ} xs={1} lg='auto' />
                            <Grid item lg={2} xs={10}>
                                <Typography variant='body1'>
                                    <span className={classes.boldText}>Tools</span>: Figma, Illustrator, After Effects
                                </Typography>
                            </Grid>
                            <Grid item xs={1} lg={2} />
                            <Grid item xs={12} />
                        </Grid>
                    </div>

                    {/* abstract */}
                    <div className={classes.abstractContainer}>
                        <Grid container spacing={3} direction="row">
                            <Grid item xs={12} />
                            <Grid item lg={2} xs={1} />
                            <Grid item xs={10} lg={4}>
                                <Typography variant='body2'>
                                    Abstract
                                    <div onClick={() => setShowDesc(!showDesc)} className={(showDesc) ? classes.arrow : classes.arrowHide} />
                                </Typography>
                                <Typography className={(showDesc) ? '' : classes.displayNone} variant='body1'>
                                    <br />
                                    With offices going hybrid, many of us lost interpersonal connections with our colleagues. While there's no way to fully
                                    reproduce the real life dynamics that happen in the office, Lightly seeks to compensate for those lost connections. Lightly
                                    is a lighting system that creates similar atmosphere for co-workers in different areas and time-zones. Through lighting
                                    changes that are in sync, co-workers move through different meeting modes including moments to have small talks and take a
                                    break together.
                                </Typography>
                            </Grid>
                            <Grid item zeroMinWidth className={classes.pZ} xs={1} lg='auto' />
                            <Grid item zeroMinWidth className={classes.pZ} xs={1} lg='auto' />
                            <Grid item xs={10} lg={4}>
                                <Typography variant='body2'>
                                    Involvement
                                    <div onClick={() => setShowDesc2(!showDesc2)} className={(showDesc2) ? classes.arrow : classes.arrowHide} />
                                </Typography>
                                <Typography className={(showDesc2) ? '' : classes.displayNone} variant='body1'>
                                    <br />
                                    I was a part of a team with a UX Researcher, a Product Technologist, and me as the UX Designer. I was responsible for
                                    concept generation and interaction design. I used Figma and Adobe CC softwares primarily to generate UI assets, mockups,
                                    and demons. I worked closely with the researcher to generate concepts from data-driven insights, then translate those into
                                    a user-centered interface. I then collaborated with the technologist to brainstorm the form factor of the lamp that worked
                                    in sync with the interface.
                                </Typography>
                            </Grid>
                            <Grid item xs={1} lg={2} />
                            <Grid item xs={12} />
                        </Grid>
                    </div>

                    {/* design process */}
                    <div className={classes.designProcessContainer}>
                        <Grid container>
                            <Grid item xs={1} lg={2} />
                            <Grid item xs={8}>
                                <Typography variant='h5'>DESIGN PROCESS</Typography>
                            </Grid>
                            <Grid item xs={1} lg={2} />
                        </Grid>
                        <div className={classes.designProcessBg}>
                            <Grid container spacing={2}>
                                <Grid item className={(mobile) ? classes.displayNone : ''} xs={12} />
                                <Grid item className={(mobile) ? classes.displayNone : ''} xs={12} />
                                <Grid item xs={1} lg={2} />
                                <Grid item xs={2}>
                                    <div className={classes.designProcesses}>
                                        <div className={classes.designProcess}>
                                            <Typography variant='body1'>UX Research</Typography>
                                        </div>
                                        <div className={classes.designProcess}>
                                            <Typography variant='body1'>Market Study</Typography>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid className={classes.lineContainer} item xs={1}>
                                    <div className={classes.designProcessLine} />
                                </Grid>
                                <Grid className={classes.pZ} item xs={2}>
                                    <div className={classes.designProcesses}>
                                        <div className={classes.designProcess}>
                                            <Typography variant='body1'>Ideation</Typography>
                                        </div>
                                        <div className={classes.designProcess}>
                                            <Typography variant='body1'>Validation</Typography>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid className={classes.lineContainer} item xs={1}>
                                    <div className={classes.designProcessLine} />
                                </Grid>
                                <Grid className={classes.pZ} item xs={2}>
                                    <div className={classes.designProcesses}>
                                        <div className={classes.designProcess}>
                                            <Typography variant='body1'>Iteration</Typography>
                                        </div>
                                        <div className={classes.designProcess}>
                                            <Typography variant='body1'>Testing</Typography>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={3} lg={2} />
                                <Grid item className={(mobile) ? classes.displayNone : ''} lg={12} />
                                <Grid item xs={1} lg={2} />
                                <Grid item lg={2} xs={10}>
                                    <Typography variant='body2'>Learning</Typography>
                                    <Typography variant='body1'>
                                        {(mobile) ? [] : <br />}
                                        Qualitative interviews with employees from diverse work environments, market research of existing products and tech.
                                        <br />{(mobile) ? [] : <br />}
                                    </Typography>
                                </Grid>
                                <Grid item zeroMinWidth className={classes.pZ} xs={1} lg='auto' />
                                <Grid item xs={1} />
                                <Grid className={pZElem} item lg={2} xs={10}>
                                    <Typography variant='body2'>Concept</Typography>
                                    <Typography variant='body1'>
                                        {(mobile) ? [] : <br />}
                                        Using data-driven insights to formulate potential directions, co-creation and concept testing with users
                                        <br />{(mobile) ? [] : <br />}
                                    </Typography>
                                </Grid>
                                <Grid item zeroMinWidth className={classes.pZ} xs={1} lg='auto' />
                                <Grid item xs={1} />
                                <Grid className={pZElem} item lg={2} xs={10}>
                                    <Typography variant='body2'>Prototype</Typography>
                                    <Typography variant='body1'>
                                        {(mobile) ? [] : <br />}
                                        Prototyping MVP based on research, testing for usability and effectiveness, then reiteration until final prototype
                                        <br />{(mobile) ? [] : <br />}
                                    </Typography>
                                </Grid>
                                <Grid item xs={1} lg={2} />
                                <Grid item xs={12} />
                            </Grid>
                        </div>
                    </div>

                    {/* the problem */}
                    <div>
                        <Heading
                            header='THE PROBLEM'
                            headerXs='4'
                            caption='Many workers and offices around the world have experienced an impact from the pandemic. Teams adapted to hybrid and remote 
                            working, onboarding remote collaboration tools such as Slack, Miro, or Zoom to make up for their workflow. What couldn’t be made up 
                            for are those interpersonal connection one shared with a co-worker. '
                            captionXs='4'
                        />
                    </div>

                </div>
            </ThemeProvider>
        </StyledEngineProvider >
    );
}