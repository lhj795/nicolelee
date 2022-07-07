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
    italicBold: {
        fontWeight: '900',
    },
    coverDetails: {
        position: 'absolute',
        bottom: '0',
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
    pZ2: {
        padding: '0 !important',
        margin: '-2px 0',
    },
    arrow: {
        height: '10px',
        width: '10px',
        borderBottom: '2px solid #333333',
        borderRight: '2px solid #333333',
        marginLeft: 'calc(100% - 14.14px)',
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
        marginLeft: 'calc(100% - 14.14px)',
        marginTop: 'calc(-1rem - 2px)',
        display: () => {
            if (window.innerWidth > 1200) {
                return 'none'
            } else {
                return 'flex';
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
                return 'flex';
            }
        },
        padding: () => {
            if (window.innerWidth < 1200) {
                return '0 !important'
            } else {
                return '';
            }
        },
        transition: '0.3s'
    },
    displayNone2: {
        display: 'none',
    },
    tools: {
        height: '4vh',
        margin: '2vh 0 4vh 0'
    },
    paulEmma: {
        minHeight: '40px',
        height: '10vh',
        marginTop: '2vh',
        alignSelf: () => {
            if (window.innerWidth < 1200) {
                return 'center'
            } else {
                return '';
            }
        },
    },
    alignLeft: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    italic: {
        fontFamily: 'NeueHaasDisplayLightItalic',
        fontSize: 'clamp(20px, 1.563rem, 25px)',
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
                                <Typography sx={{zIndex: '1', position: 'relative'}} variant='h4'>
                                    Bringing back casual moments {(mobile) ? [] : <br />}
                                    by planning better meetings
                                </Typography>
                            </Grid>
                            <Grid item lg={6} xs={1} />
                            <Grid item lg={2} xs={1} />
                            <Grid item xs={10} lg={4}>
                                <Typography sx={{ marginTop: { xs: '0', lg: '20vh' }, zIndex: '1', position: 'relative' }} variant='body1'>
                                    <span className={classes.boldText}>Project</span>: Brown Risd Master of Arts in Design Engineering (MADE) Module
                                </Typography>
                            </Grid>
                            <Grid item xs={1} sx={{ display: { xs: '', lg: 'none' } }} />
                            <Grid item xs={1} sx={{ display: { xs: '', lg: 'none' } }} />
                            <Grid item lg={2} xs={10}>
                                <Typography sx={{ marginTop: { xs: '0', lg: '20vh' }, zIndex: '1', position: 'relative' }} variant='body1'>
                                    <span className={classes.boldText}>Role</span>: UX Design
                                </Typography>
                            </Grid>
                            <Grid item xs={1} sx={{ display: { xs: '', lg: 'none' } }} />
                            <Grid item xs={1} sx={{ display: { xs: '', lg: 'none' } }} />
                            <Grid item lg={2} xs={10}>
                                <Typography sx={{ marginTop: { xs: '0', lg: '20vh' }, zIndex: '1', position: 'relative' }} variant='body1'>
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
                                        <span>I was a part of a team with a </span>
                                        <a rel="noreferrer" target='_blank' href='https://robstereli.github.io/'>UX Researcher</a>, a 
                                        <a rel="noreferrer" target='_blank' href='https://danrapoport.net/portfolio/lightly/'>Product Technologist</a>, and me as the UX Designer. I was responsible for
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
                        <GridFormat>
                            <Grid item lg={4} xs={12}>
                                <img src={img['TheProblem01.svg']} className={classes.imgFitContent} alt='water cooler talks' />
                            </Grid>
                            <Grid item lg={4} xs={12}>
                                <img src={img['TheProblem02.svg']} className={classes.imgFitContent} alt='zoom fatigue' />
                            </Grid>
                            <Grid sx={{ display: { xs: 'none', lg: 'block' } }} item lg={2} />
                            <Grid item xs={1} lg={2} />
                            <Grid item xs={10} lg={4}>
                                <Typography variant='h3'>Lost collegial moments</Typography>
                            </Grid>
                            <Grid item xs={1} sx={{ display: { xs: 'block', lg: 'none' } }} />
                            <Grid item xs={1} sx={{ display: { xs: 'block', lg: 'none' } }} />
                            <Grid item xs={10} lg={4}>
                                <Typography variant='body1'>
                                    The transition to hybrid working compensated many crucial factors of effective teaming including motivation, efficiency, and
                                    collegial moments among co-workers. With workers in different locations and/or time-zones, there are no longer water-cooler
                                    talks or greetings when you walk past each other’s desks. To make matters worse, Zoom fatigue is becoming a common phenomenon
                                    for those who work from home.
                                </Typography>
                            </Grid>
                        </GridFormat>
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
                        <GridFormat alignItems='flex-end'>
                            <Grid item lg={4} xs={10}>
                                <Grid alignItems='flex-end' container spacing={3}>
                                    <Grid item xs={3} md={2}>
                                        <img src={img['Persona01.svg']} className={classes.imgFitContent} alt='Paul ' />
                                    </Grid>
                                    <Grid item xs={9} md={4} lg={6}>
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
                            <Grid item xs={12} />
                            <Grid item xs={12} />
                            <Grid item lg={2} xs={1} />
                            <Grid item lg={4} xs={10}>
                                <Grid alignItems='flex-end' container spacing={3}>
                                    <Grid item xs={3} md={2}>
                                        <img src={img['Persona02.svg']} className={classes.imgFitContent} alt='Emma' />
                                    </Grid>
                                    <Grid item xs={9} md={4} lg={6}>
                                        <Typography variant='h3'>Emma Marshall</Typography>
                                        <div className={classes.personaDemo}>
                                            <div>
                                                <Typography variant='body1'>Age</Typography>
                                                <Typography variant='body1'>Seniority</Typography>
                                                <Typography variant='body1'>Archetype</Typography>
                                            </div>
                                            <div>
                                                <Typography variant='body1'>41</Typography>
                                                <Typography variant='body1'>Team Lead</Typography>
                                                <Typography variant='body1'>Leading team at HQ</Typography>
                                            </div>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={1} sx={{ display: { xs: 'block', lg: 'none' } }} />
                            <Grid item xs={1} sx={{ display: { xs: 'block', lg: 'none' } }} />
                            <Grid item lg={4} xs={10}>
                                <Typography variant='body1'>
                                    Emma remained in office where she does her work with teams across the company. She leads in-person and hybrid meetings with
                                    employees on a regular basis. She manages team members around the world who are in different areas and time zones.
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
                            <Grid item xs={1} sx={{ display: { xs: 'block', lg: 'none' } }} />
                            <Grid item xs={1} sx={{ display: { xs: 'block', lg: 'none' } }} />
                            <Grid item lg={4} xs={10}>
                                <Typography variant='body2'>{(mobile) ? [] : <br />}Frustrations</Typography>
                                <Typography variant='body1'>
                                    {(mobile) ? [] : <br />}
                                    • Feeling fatigue from video conferencing. <br />
                                    • Challenging to distinguish work-life balance.
                                </Typography>
                            </Grid>
                        </GridFormat>
                        <GridFormat>
                            <Grid item lg={4} sx={{ display: { xs: 'none', lg: 'block' } }}>
                                <Typography variant='body2'>Video Conferencing</Typography>
                                <img src={img['Tools01.svg']} className={classes.tools} alt='Tools' />
                                <Typography variant='body2'>Scheduling and Project Management</Typography>
                                <img src={img['Tools02.svg']} className={classes.tools} alt='Tools' />
                                <Typography variant='body2'>Communication</Typography>
                                <img src={img['Tools03.svg']} className={classes.tools} alt='Tools' />
                                <Typography variant='body2'>Cloud Storage and File-Sharing Services</Typography>
                                <img src={img['Tools04.svg']} className={classes.tools} alt='Tools' />
                                <Typography variant='body2'>Online Whiteboarding</Typography>
                                <img src={img['Tools05.svg']} className={classes.tools} alt='Tools' />
                            </Grid>
                            <Grid className={classes.alignLeft} item lg={4} xs={10}>
                                <Box sx={{ display: { xs: 'block', lg: 'none' }, alignSelf: 'center', width: {xs: '100%', md: '50%'} }}>
                                    <img src={img['ToolsMobile.svg']} className={classes.imgFitContent} alt='Tools' />
                                </Box>
                                <img src={img['Persona03.svg']} className={classes.paulEmma} alt='Tools' />
                                <Typography variant='h3'><br />What Tools to Use?<br /><br /></Typography>
                                <Typography variant='body1'>
                                    For a transparent and effective teaming, Paul and Emma's team decided to use Zoom for video conferencing, Google Suite for
                                    scheduling and file-sharing, Slack for communication, and FigJam for brainstorming.
                                    <br /><br />
                                    While all these tools are <span className={classes.boldText}> excellent in efficienct teaming, they're still missing to
                                        reignite the cheerful team dynamics</span> they once had. They tried creating a #random channel on
                                    Slack to chat aboout everyday topics, but it lost traction sooner than expected.
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
                        <Grid container spacing={3}>
                            <Grid item sx={{ display: { xs: 'none', lg: 'flex' } }} lg={2} />
                            <Grid item xs={12} lg={8}>
                                <video className={classes.imgFitContent} src={img['Solution01.mp4']} webkit-playsinline="true" playsInline autoPlay muted loop controls id="video" />
                            </Grid>
                            <Grid item sx={{ display: { xs: 'none', lg: 'flex' } }} lg={2} />
                        </Grid>
                        <GridFormat>
                            <Grid item xs={10} lg={4}>
                                <Typography variant='h3'>Overview</Typography>
                            </Grid>
                            <Grid item xs={1} sx={{ display: { xs: '', lg: 'none' } }} />
                            <Grid item xs={1} sx={{ display: { xs: '', lg: 'none' } }} />
                            <Grid item xs={10} lg={4}>
                                <Typography variant='body1'>
                                    The main additions to the UI are the background color and progress bar which indicates the stage of the meeting.
                                    In this demo, the meeting starts with a short warm up stage, which allows members to start the meeting by exchanging small talks.
                                    Then, the lights turn to a bright cool temperature to cue work time. Throughout the meeting, there are
                                    additional planned casual moments, to encourage connection and help participants from becoming overwhelmed.
                                </Typography>
                            </Grid>
                        </GridFormat>
                        <Box sx={{ margin: '10vh 0 15vh' }} >
                            <Grid container alignItems='center' spacing={3}>
                                <Grid item lg={3} xs={12}>
                                    <img src={img['Solution02.svg']} className={classes.imgFitContent} alt='lighting affecting environment' />
                                </Grid>
                                <Grid item xs={1} />
                                <Grid item xs={10} lg={4}>
                                    <Typography variant='h3'>Wait, but why Ligting? <br /></Typography>
                                    <Typography variant='body1'>
                                        <br />
                                        Studies have shown that the depending on the exposure amount, light has the power to shift mood, energy levels, appetite,
                                        and many other aspects of daily life. Bright blue light can increase efficiency in one’s performance, as well as boost the
                                        ability to focus. On the other hand, a dim, saturated, warm light can alleviate stress and amplify the sense of calm and
                                        relaxation.
                                    </Typography>
                                    <Typography variant='h3'><br />And why during meetings? <br /></Typography>
                                    <Typography variant='body1'>
                                        <br />
                                        In earlier stages of the project, we also considered a walkie-talkie, or a workplace metaverse as potential concepts, but
                                        decided not to move forward with them. Research and interviews indicate a <span className={classes.boldText}> key workplace
                                            value is autonomy</span>. Digital tools that enable unexpected contact from co-workers - especially one’s home - may
                                        potentially be invasive and cause anxiety. That’s why meeting is a wonderful touch point. It’s the one time when all workers
                                        get together. When everyone’s already present, interventions are less intrusive. In addition, a well designed lamp can
                                        seamlessly live inside both offices and homes (without making the home remind you of work 😜).
                                    </Typography>
                                </Grid>
                                <Grid item xs={1} />
                                <Grid item lg={3} xs={12}>
                                    <img src={img['Solution03.png']} className={classes.imgFitContent} alt='brainstorming' />
                                </Grid>
                            </Grid>
                        </Box>
                    </div>

                    {/* lamp */}
                    <Box sx={{ margin: '10vh 0' }}>
                        <Grid alignItems='center' container spacing={3}>
                            <Grid item xs={12} lg={5}>
                                <img src={img['Lamp01.png']} className={classes.imgFitContent} alt='lightly' />
                            </Grid>
                            <Grid item xs={1} />
                            <Grid item xs={10} lg={4}>
                                <Typography variant='body1'>
                                    The Lamp comes in two forms: as a hanging light fixture, and as a desk lamp. Depending on the meeting space, users can
                                    choose from the two to install in their space(s). The panels are designed to open and close in a subtle manner to gently cue
                                    the switching work modes. By default setting, a dimmed warm light cues casual time, typically at the beginning, end, and/or
                                    break times during a meeting. A bright blue light is focus time, where members concentrate on the main agenda of the meeting.
                                </Typography>
                            </Grid>
                            <Grid item xs={1} lg={2} />
                            <Grid item xs={1} lg={2} />
                            <Grid item sx={{ display: { xs: 'none', lg: 'block' } }} lg={4}>
                                <Typography variant='body1'>
                                    The initial prototype was purely mechanical, made of laser cut plywood parts that had a three level opening and closing
                                    mechanism with paper panels. After succeeding with the open/close mechanism, we decided to move forward by reiterating a
                                    prototype that does the opening and closing on its own, and using lightweight and heat-safe material. We also noticed the
                                    color of the paper panels were affecting the light colors, so then decided to use white panels for the next iteration.
                                </Typography>
                                <Typography variant='caption'>
                                    <br />
                                    image 1: initial prototype<br />
                                    image 2, 3: mechanism test<br />
                                </Typography>
                            </Grid>
                            <Grid item lg={2} xs={12} />
                            <Grid className={classes.pZ2} item xs={12} lg={4}>
                                <img src={img['Lamp02.gif']} className={classes.imgFitContent} alt='lightly' />
                            </Grid>
                            <Grid item lg={4} sx={{ display: { xs: 'none', lg: 'block' } }} ></Grid>
                            <Grid className={classes.pZ2} item xs={12} lg={4}>
                                <img src={img['Lamp04.svg']} className={classes.imgFitContent} alt='lightly' />
                            </Grid>
                            <Grid className={classes.pZ2} item xs={12} lg={4}>
                                <img src={img['Lamp03.svg']} className={classes.imgFitContent} alt='lightly' />
                            </Grid>
                            <Grid item sx={{ display: { xs: 'block', lg: 'none' } }} xs={1} />
                            <Grid item sx={{ display: { xs: 'block', lg: 'none' } }} xs={10}>
                                <Typography variant='body1'>
                                    The initial prototype was purely mechanical, made of laser cut plywood parts that had a three level opening and closing
                                    mechanism with paper panels. After succeeding with the open/close mechanism, we decided to move forward by reiterating a
                                    prototype that does the opening and closing on its own, and using lightweight and heat-safe material. We also noticed the
                                    color of the paper panels were affecting the light colors, so then decided to use white panels for the next iteration.
                                </Typography>
                                <Typography variant='caption'>
                                    <br />
                                    image 1: initial prototype<br />
                                    image 2, 3: mechanism test<br />
                                </Typography>
                            </Grid>
                            <Grid item xs={12} />
                            <Grid item xs={12} />
                            <Grid item lg={12} xs={1} />
                            <Grid item xs={12} lg={5}>
                                <img src={img['Lamp05.gif']} className={classes.imgFitContent} alt='lightly' />
                                <img src={img['Lamp08.svg']} className={classes.imgFitContent} alt='lightly' />
                            </Grid>
                            <Grid item xs={1} />
                            <Grid item xs={10} lg={4}>
                                <Typography variant='body1'>
                                    The final prototype is composed of laser cut lamp panels, 3D printed housing for electronics and connection to power
                                    supplies, a Wi-Fi microchip that communicates with Lightly app or integrated application, a stepper-motor that
                                    actuates a series of strings that tension in sequence to create the opening and closing of the lamp, and a color
                                    changing light bulb.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>

                    {/* UI */}
                    <div>
                        <Box sx={{ margin: '10vh 0' }}>
                            <Grid alignItems='center' container spacing={3}>
                                <Grid item lg={2} sx={{ display: { xs: 'none', lg: 'block' } }} />
                                <Grid item lg={4} sx={{ display: { xs: 'none', lg: 'block' } }}>
                                    <Typography variant='h3'>Video Conferencing Integration<br /></Typography>
                                    <Typography variant='body1'>
                                        <br />As the meeting progresses through different meeting modes by shifting light brightness and color, the lighting changes
                                        are reflected in the video conferencing UI. The main additions to the UI are the background color, and the progress bar
                                        which the stages of the meeting. At any point of the meeting, the host is able to add an additional stage such as break
                                        times, as well as adjust it, such as by snoozing, changing duration, or skipping.
                                    </Typography>
                                </Grid>
                                <Grid item lg={1} sx={{ display: { xs: 'none', lg: 'block' } }} />
                                <Grid item lg={5} xs={12}>
                                    <video className={classes.imgFitContent} src={img['App01.mp4']} webkit-playsinline="true" playsInline autoPlay muted loop controls id="video" />
                                </Grid>
                                <Grid item xs={1} sx={{ display: { xs: 'block', lg: 'none' } }} />
                                <Grid item xs={10} sx={{ display: { xs: 'block', lg: 'none' } }}>
                                    <Typography variant='h3'>Video Conferencing Integration<br /></Typography>
                                    <Typography variant='body1'>
                                        <br />As the meeting progresses through different meeting modes by shifting light brightness and color, the lighting changes
                                        are reflected in the video conferencing UI. The main additions to the UI are the background color, and the progress bar
                                        which the stages of the meeting. At any point of the meeting, the host is able to add an additional stage such as break
                                        times, as well as adjust it, such as by snoozing, changing duration, or skipping.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box sx={{ margin: '10vh 0' }}>
                            <Grid container spacing={3}>
                                <Grid item lg={2} sx={{ display: { xs: 'none', lg: 'block' } }} />
                                <Grid item xs={12} lg={8}>
                                    <video className={classes.imgFitContent} src={img['App02.mp4']} webkit-playsinline="true" playsInline autoPlay muted loop controls id="video" />
                                </Grid>
                                <Grid item lg={2} sx={{ display: { xs: 'none', lg: 'block' } }} />
                                <Grid item lg={2} xs={1} />
                                <Grid item lg={4} xs={10}>
                                    <Typography variant='h3'>Internap App<br /></Typography>
                                </Grid>
                                <Grid item xs={1} sx={{ display: { xs: 'block', lg: 'none' } }} />
                                <Grid item xs={1} sx={{ display: { xs: 'block', lg: 'none' } }} />
                                <Grid item lg={4} xs={10}>
                                    <Typography variant='body1'>
                                        But it’s not just during meeting that the user can adjust the meeting flow. In fact, for some users, it may make more
                                        sense to structure a meeting in advance. When initially onboarding on Lightly, the user will be given default meeting
                                        templates which consist of focused and casual times, each with a corresponding default light setting. Users may choose
                                        from one of the default templates to schedule meetings, or customize their own.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box sx={{ margin: '10vh 0' }}>
                            <Grid alignItems='center' container spacing={3}>
                                <Grid item lg={1} sx={{ display: { lg: 'block', xs: 'none' } }} />
                                <Grid item lg={5} xs={12}>
                                    <video className={classes.imgFitContent} src={img['App04.mp4']} webkit-playsinline="true" playsInline autoPlay muted loop controls id="video" />
                                </Grid>
                                <Grid item xs={1} sx={{ display: { lg: 'none', xs: 'block' } }} />
                                <Grid item xs={10} lg={4}>
                                    <Typography variant='h3'>Online Calendar Integration<br /></Typography>
                                    <Typography variant='body1'>
                                        <br />Lightly is envisioned to seamlessly integrate into users’ preferred remote collaboration tools such as Google suite and
                                        Zoom. When scheduling a Lightly meeting, users may create or edit a meeting the way they normally would, then choose the
                                        desired meeting mode. It’s that easy!
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </div>

                    {/* user testing */}
                    <div>
                        <Box sx={{ margin: '10vh 0' }}>
                            <Grid container spacing={3}>
                                <Grid item lg={2} sx={{ display: { xs: 'none', lg: 'block' } }} />
                                <Grid item lg={4} sx={{ display: { xs: 'none', lg: 'block' } }}>
                                    <Typography variant='body1'>
                                        And people agree. Testing participants appreciated Lightly for it fosters a sense of connection through lighting
                                        synchronization. They also pointed out that establishing a common vibe is not only helpful for connection but also
                                        conducive to collaboration.
                                    </Typography>
                                    <div className={classes.italic}>
                                        <br />
                                        “I endorse! I think it helps <span className={classes.italicBold}> establish a mood and tone </span>
                                        over something like a zoom call which is hard to do!”
                                        <br />
                                    </div>
                                    <Box sx={{ textAlign: 'right' }}>
                                        <Typography variant='caption'>
                                            <br />
                                            Program Associate at a National Nonprofit
                                            <br />
                                        </Typography>
                                    </Box>
                                    <div className={classes.italic}>
                                        <br />
                                        “In global teams where there’s already little common ground, creating a common vibe in real life would
                                        <span className={classes.italicBold}> help further align teams</span>.
                                        <br />
                                    </div>
                                    <Box sx={{ textAlign: 'right' }}>
                                        <Typography variant='caption'>
                                            <br />
                                            Senior Manager
                                            <br />
                                        </Typography>
                                    </Box>
                                    <div className={classes.italic}>
                                        <br />
                                        “When I first joined the company, I didn’t have the confidence to speak up during meetings. Having lighting prompts would have
                                        <span className={classes.italicBold}> helped me engage, especially during the breaks</span>.”
                                        <br />
                                    </div>
                                    <Box sx={{ textAlign: 'right' }}>
                                        <Typography variant='caption'>
                                            <br />
                                            Recruiter at Global Consultancy
                                            <br />
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item lg={1} sx={{ display: { lg: 'block', xs: 'none' } }} />
                                <Grid item lg={5} xs={12}>
                                    <img src={img['Testing01.svg']} className={classes.imgFitContent} alt='user testing' />
                                </Grid>
                                <Grid item xs={1} sx={{ display: { xs: 'block', lg: 'none' } }} />
                                <Grid item xs={10} sx={{ display: { xs: 'block', lg: 'none' } }}>
                                    <Typography variant='body1'>
                                        And people agree. Testing participants appreciated Lightly for it fosters a sense of connection through lighting
                                        synchronization. They also pointed out that establishing a common vibe is not only helpful for connection but also
                                        conducive to collaboration.
                                    </Typography>
                                    <div className={classes.italic}>
                                        <br />
                                        “I endorse! I think it helps <span className={classes.italicBold}> establish a mood and tone </span>
                                        over something like a zoom call which is hard to do!”
                                        <br />
                                    </div>
                                    <Box sx={{ textAlign: 'right' }}>
                                        <Typography variant='caption'>
                                            <br />
                                            Program Associate at a National Nonprofit
                                            <br />
                                        </Typography>
                                    </Box>
                                    <div className={classes.italic}>
                                        <br />
                                        “In global teams where there’s already little common ground, creating a common vibe in real life would
                                        <span className={classes.italicBold}> help further align teams</span>.
                                        <br />
                                    </div>
                                    <Box sx={{ textAlign: 'right' }}>
                                        <Typography variant='caption'>
                                            <br />
                                            Senior Manager
                                            <br />
                                        </Typography>
                                    </Box>
                                    <div className={classes.italic}>
                                        <br />
                                        “When I first joined the company, I didn’t have the confidence to speak up during meetings. Having lighting prompts would have
                                        <span className={classes.italicBold}> helped me engage, especially during the breaks</span>.”
                                        <br />
                                    </div>
                                    <Box sx={{ textAlign: 'right' }}>
                                        <Typography variant='caption'>
                                            <br />
                                            Recruiter at Global Consultancy
                                            <br />
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={1} sx={{ display: { xs: 'block', lg: 'none' } }} />
                            </Grid>
                        </Box>
                        <Box sx={{ margin: '10vh 0' }}>
                            <Grid container spacing={3}>
                                <Grid item lg={5} xs={12}>
                                    <video className={classes.imgFitContent} src={img['Testing01.mp4']} webkit-playsinline="true" playsInline autoPlay muted loop controls id="video" />
                                </Grid>
                                <Grid item xs={1}/>
                                <Grid item xs={10} lg={4}>
                                    <Typography variant='body1'>
                                        Others have mentioned meeting structuring with gentle visual cue. Rather than someone having to speak up “TAKE A BREAK” 
                                        or “LET’S MOVE ON,” the system changes behave as a gentler nudge to shift gears.
                                    </Typography>
                                    <div className={classes.italic}>
                                        <br />
                                        “…sometimes people stop <span className={classes.italicBold}> respecting the break</span>, 
                                        but a visual cue can cut through that.”
                                        <br />
                                    </div>
                                    <Box sx={{ textAlign: 'right' }}>
                                        <Typography variant='caption'>
                                            <br />
                                            Product Manager at Global Tech Company
                                            <br />
                                        </Typography>
                                    </Box>
                                    <div className={classes.italic}>
                                        <br />
                                        “I like the change in the lamp shape/configuration to 
                                        <span className={classes.italicBold}> signal different phases of the meeting</span>.”
                                        <br />
                                    </div>
                                    <Box sx={{ textAlign: 'right' }}>
                                        <Typography variant='caption'>
                                            <br />
                                            Resident Dermatologist at University Hospital
                                            <br />
                                        </Typography>
                                    </Box>
                                    <div className={classes.italic}>
                                        <br />
                                        “<span className={classes.italicBold}>Light has the power to connect people and diffuse tensions</span>. 
                                        My therapist uses a light to denote that session is almost over. It’s 
                                        <span className={classes.italicBold}> much gentler </span> than being told to leave”
                                        <br />
                                    </div>
                                    <Box sx={{ textAlign: 'right' }}>
                                        <Typography variant='caption'>
                                            <br />
                                            VP at Major Media Company
                                            <br />
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={1} sx={{ display: { xs: 'block', lg: 'none' } }} />
                            </Grid>
                                <Grid item xs={1}/>
                        </Box>
                    </div>

                </div>
            </ThemeProvider>
        </StyledEngineProvider >
    );
}