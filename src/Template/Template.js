import React, { useState, useEffect } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Base from '../Base';
// import clsx from 'clsx';
import { Typography, Grid, Collapse } from '@mui/material';
import { TypographyTheme } from '../components/ui/Typography';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { GridFormat, Heading } from '../components/ui/UIComponents';
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Box } from '@mui/system';

const useStyles = makeStyles(({
    wrap: {
        color: '#333333',
        maxWidth: '100vw',
        overflowX: 'hidden',
        height: 'fit-content',
    },
    imgMixBlendMode: {
        mixBlendMode: 'hard-light',
    },
    imgFitContent: {
        width: '100%',
        maxHeight: '100vh',
        objectFit: 'cover',
    },
    coverContainer: {
        top: '0',
        height: 'fit-content',
        width: '100%',
        color: '#333333',
        background: '#FFAB40',
        zIndex: '-1',
    },
    boldText: {
        fontFamily: 'NeueHaasDisplayBold',
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
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    designProcess: {
        border: '1px solid #333333',
        margin: '1vh !important',
        padding: '1vh !important',
        width: 'calc(50% - 2.75vh)',
        textAlign: 'center',
    },
    designProcessLine: {
        width: 'calc(100% + 24px)',
        height: '1px',
        background: '#333333',
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
        marginTop: (props) => {
            if (window.innerWidth < 1200) {
                return ''
            } else {
                return '2.5vh';
            }
        },
    },
    displayNone: {
        display: () => {
            if (window.innerWidth < 1200) {
                return 'none'
            } else {
                return 'block';
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

export default function Template(props) {
    const classes = useStyles(props);

    const [mobile, setMobile] = useState(false);
    useEffect(() => {
        if (window.innerWidth < 1200) {
            setMobile(true);
        } else {
            setMobile(false);
        }
    }, []);

    const mobileTrueFalse = (window.innerWidth < 1200) ? false : true;

    const [showDesc, setShowDesc] = useState(mobileTrueFalse);
    const [showDesc2, setShowDesc2] = useState(mobileTrueFalse);

    const pZElem = (mobile) ? '' : classes.pZ;

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={TypographyTheme}>
                <div className={classes.wrap}>

                    <Base color='black' />

                    {/* cover */}
                    <div className={classes.coverContainer}>
                        <Box
                            sx={{
                                width: { xs: '90vw', lg: '48vw' },
                                right: { xs: '5vw', lg: '9vw' },
                                // height: '100vh',
                                position: 'absolute',
                                transition: '0.3s'
                            }}
                        >
                            <img src={img['Cover.svg']} className={classes.imgFitContent} alt='Lightly' />
                        </Box>
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
                            <Grid item lg={6} xs={1} />
                            <Grid item lg={2} xs={1} />
                            <Grid item xs={10} lg={4}>
                                <Typography sx={{ marginTop: { xs: '0', lg: '20vh' } }} variant='body1'>
                                    <span className={classes.boldText}>Project</span>: Brown Risd Master of Arts in Design Engineering (MADE) Module
                                </Typography>
                            </Grid>
                            <Grid item xs={1} sx={{ display: { xs: '', lg: 'none' } }} />
                            <Grid item xs={1} sx={{ display: { xs: '', lg: 'none' } }} />
                            <Grid item lg={2} xs={10}>
                                <Typography sx={{ marginTop: { xs: '0', lg: '20vh' } }} variant='body1'>
                                    <span className={classes.boldText}>Role</span>: UX Design
                                </Typography>
                            </Grid>
                            <Grid item xs={1} sx={{ display: { xs: '', lg: 'none' } }} />
                            <Grid item xs={1} sx={{ display: { xs: '', lg: 'none' } }} />
                            <Grid item lg={2} xs={10}>
                                <Typography sx={{ marginTop: { xs: '0', lg: '20vh' } }} variant='body1'>
                                    <span className={classes.boldText}>Tools</span>: Figma, Illustrator, After Effects
                                </Typography>
                            </Grid>
                            <Grid item xs={1} lg={2} />
                            <Grid item xs={12} />
                        </Grid>
                    </div>

                    {/* abstract */}
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
                                        Abstract
                                    </Typography>
                                    {showDesc ? <ExpandLess /> : <ExpandMore />}
                                </Box>
                                <Collapse in={showDesc} timeout="auto" unmountOnExit>
                                    <Typography className={(showDesc) ? '' : classes.displayNone} variant='body1'>
                                        <br />
                                        With offices going hybrid, many of us lost interpersonal connections with our colleagues. While there's no way to fully
                                        reproduce the real life dynamics that happen in the office, Lightly seeks to compensate for those lost connections.
                                        Lightly is a lighting system that creates similar atmosphere for co-workers in different areas and time-zones. Through
                                        lighting changes that are in sync, co-workers move through different meeting modes including moments to have small talks
                                        and take a break together.
                                    </Typography>
                                </Collapse>
                            </Grid>
                            <Grid item zeroMinWidth className={classes.pZ} sx={{ display: { xs: 'block', lg: 'none' } }} xs={1} />
                            <Grid item zeroMinWidth className={classes.pZ} sx={{ display: { xs: 'block', lg: 'none' } }} xs={1} />
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
                                        I was a part of a team with a UX Researcher, a Product Technologist, and me as the UX Designer. I was responsible for
                                        concept generation and interaction design. I used Figma and Adobe CC softwares primarily to generate UI assets, mockups,
                                        and demons. I worked closely with the researcher to generate concepts from data-driven insights, then translate those
                                        into a user-centered interface. I then collaborated with the technologist to brainstorm the form factor of the lamp that
                                        worked in sync with the interface.
                                    </Typography>
                                </Collapse>
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
                            <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
                                <Grid container spacing={2}>
                                    <Grid item lg={12} />
                                    <Grid item lg={12} />
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
                                </Grid>
                            </Box>
                            <Grid container spacing={2}>
                                <Grid item sx={{ display: { xs: 'none', lg: 'flex' } }} lg={12} />
                                <Grid item xs={12} lg={12} />
                                <Grid item xs={1} lg={2} />
                                <Grid item lg={2} xs={10}>
                                    <Typography variant='body2'>Learning</Typography>
                                    <Typography variant='body1'>
                                        {(mobile) ? [] : <br />}
                                        Qualitative interviews with employees from diverse work environments, market research of existing products and tech.
                                        <br />{(mobile) ? [] : <br />}
                                    </Typography>
                                </Grid>
                                <Grid item zeroMinWidth className={classes.pZ} sx={{ display: { xs: 'block', lg: 'none' } }} xs={1} />
                                <Grid item xs={1} />
                                <Grid className={pZElem} item lg={2} xs={10}>
                                    <Typography variant='body2'>Concept</Typography>
                                    <Typography variant='body1'>
                                        {(mobile) ? [] : <br />}
                                        Using data-driven insights to formulate potential directions, co-creation and concept testing with users
                                        <br />{(mobile) ? [] : <br />}
                                    </Typography>
                                </Grid>
                                <Grid item zeroMinWidth className={classes.pZ} sx={{ display: { xs: 'block', lg: 'none' } }} xs={1} />
                                <Grid item xs={1} />
                                <Grid className={pZElem} item lg={2} xs={10}>
                                    <Typography variant='body2'>Prototype</Typography>
                                    <Typography variant='body1'>
                                        {(mobile) ? [] : <br />}
                                        Prototyping MVP based on research, testing for usability and effectiveness, then reiteration until final prototype
                                        <br /><br />
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
                            headerLg={4}
                            caption='Many workers and offices around the world have experienced an impact from the pandemic. Teams adapted to hybrid and remote 
                            working, onboarding remote collaboration tools such as Slack, Miro, or Zoom to make up for their workflow. What couldn’t be made up 
                            for are those interpersonal connection one shared with a co-worker. '
                            captionLg={4}
                        />
                    </div>

                    {/* user persona */}
                    <div>
                        <Heading
                            header='USER PERSONA'
                            headerLg={4}
                            caption='After defining our problem statement - hybrid work takes away collegial moments and interpersonal connections among 
                            coworkers - we interviewed 9 workers around the world in remote, hybrid, and/or on-site work environments to dig deeper into the 
                            problem. All participants regularly met with team members in which they participated or led the meetings. Based on the most trending 
                            insights, I created the following persona.'
                            captionLg={4}
                        />
                        <GridFormat>
                            <Grid item lg={4} xs={10}>
                                <Grid alignItems='flex-end' container spacing={3}>
                                    <Grid item xs={3}>
                                        <img src={img['Persona01.svg']} className={classes.imgFitContent} alt='Paul ' />
                                    </Grid>
                                    <Grid item lg={6} xs={9}>
                                        <Typography variant='h3'>Paul Emerson</Typography>
                                        <div className={classes.personaDemo}>
                                            <div>
                                                <Typography variant='body1'>Age</Typography>
                                                <Typography variant='body1'>Seniority</Typography>
                                                <Typography variant='body1'>Archetype</Typography>
                                            </div>
                                            <div>
                                                <Typography variant='body1'>29</Typography>
                                                <Typography variant='body1'>Senior Level</Typography>
                                                <Typography variant='body1'>WFH in Cambria, CA</Typography>
                                            </div>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={1} sx={{ display: { xs: 'box', lg: 'none' } }} />
                            <Grid item xs={1} sx={{ display: { xs: 'box', lg: 'none' } }} />
                            <Grid item lg={4} xs={10}>
                                <Typography variant='body1'>
                                    Paul moved back home once the office went hybrid. Ever since, he attended meetings via video conferencing.
                                    He participates in internal meetings where he collaborates with teammates around the world in North America, Europe, and
                                    Asia. He occasionally leads meetings with clients.
                                </Typography>
                            </Grid>
                            <Grid item lg={2} xs={1} />
                            <Grid item lg={2} xs={1} />
                            <Grid item lg={4} xs={10}>
                                <Typography variant='body2'>{(mobile) ? [] : <br />}Wants</Typography>
                                <Typography variant='body1'>
                                    {(mobile) ? [] : <br />}
                                    • Be professional with clients, more casual with teammates. <br />
                                    • Elevate motivation and focus during WFH.
                                </Typography>
                            </Grid>
                            <Grid item xs={1} sx={{ display: { xs: 'box', lg: 'none' } }} />
                            <Grid item xs={1} sx={{ display: { xs: 'box', lg: 'none' } }} />
                            <Grid item lg={4} xs={10}>
                                <Typography variant='body2'>{(mobile) ? [] : <br />}Frustrations</Typography>
                                <Typography variant='body1'>
                                    {(mobile) ? [] : <br />}
                                    • Feeling fatigue from video conferencing. <br />
                                    • Difficult to work within East Coast time.
                                </Typography>
                            </Grid>
                        </GridFormat>
                    </div>

                    {/* solution */}
                    <div>
                        <Heading
                            header='SOLUTION'
                            headerLg={4}
                            caption='Lightly is a remote collaboration tool that curates a similar atmosphere for co-workers in remote areas. Lightly 
                            comes with two essential parts: the Lightly Lamp, and Lightly web platforms. The lamp and interface 
                            cues different lights by user settings on the color, duration, and work modes. With Lightly, co-workers in different locations and 
                            time zones can more efficiently and enthusiastically engage in meetings.'
                            captionLg={4}
                        />
                    </div>

                </div>
            </ThemeProvider>
        </StyledEngineProvider >
    );
}